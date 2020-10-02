import _ from 'lodash'

/**
 * Transform raw array of objects by filtering, grouping and summing
 * @param rawData: array of objects
 * @param dataSources
 * @param campaigns
 * @returns {Array}
 */
export const formatChartData = (rawData, dataSources = [], campaigns = []) => {

  // Filter by Datasources, Campaigns and not valid Date value
  let filteredData = _.filter(rawData, (item) =>
    item.Date
    && (dataSources.length ? _.includes(dataSources, item.Datasource) : true)
    && (campaigns.length ? _.includes(campaigns, item.Campaign) : true)
  )

  let groupedData = _.groupBy(filteredData, (item) => item.Date)

  let result = _.mapValues(groupedData, (items) =>
    _.reduce(items, (acc, current) =>
        ({
          Date: current.Date,
          Clicks: acc.Clicks + Number(current.Clicks),
          Impressions: acc.Impressions + Number(current.Impressions),
        })
      , {Clicks: 0, Impressions: 0}),
  )

  return _.values(result)
}

/**
 * Extract array of unique values by given field name
 * @param rawData: array of objects
 * @param fieldName
 */
export const getUniqueValuesFromObjectsArray = (rawData, fieldName) =>
  _.sortBy(
    _.values(
      _.mapValues(
        _.uniqBy(
          _.filter(
            rawData,
            item => item.Date),
          item => item[fieldName]),
        item => item[fieldName]),
    ));
