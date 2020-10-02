import React, { useEffect, useState, useMemo } from 'react'
import { fetchAdvertisingData } from '../../api'
import Chart from '../../components/chart'
import Header from '../../components/header'
import Card from '../../components/card'
import Text from '../../components/text'
import Row from '../../components/row'
import Filter from './components/filter'
import { StyledList } from './styles';
import { formatChartData, getUniqueValuesFromObjectsArray as getUniqueValues } from './utils'

/**
 * Dashboard module. Implements main business logic
 * @returns {*}
 * @constructor
 */
const Dashboard = () => {
  const [rawData, setRawData] = useState({data: [], uniqDatasources: [], uniqCampaigns: []})
  const [chartData, setChartData] = useState([])
  const [dataSources, setDataSources] = useState([])
  const [campaigns, setCampaigns] = useState([])

  // Fetch and parse data from server
  useEffect(() => {
    fetchAdvertisingData((data) => setRawData({
      data,
      uniqDatasources: getUniqueValues(data, 'Datasource'),
      uniqCampaigns: getUniqueValues(data, 'Campaign'),
    }))
  }, [])

  // Update Chart depending on filter values
  useEffect(() => {
    setChartData(formatChartData(rawData.data, dataSources, campaigns))
  }, [rawData.data, campaigns, dataSources])

  // Dynamic Chart-header
  const chartTitle = useMemo(() => {
    const dataSourceText = dataSources?.length
      ? `Datasource "${dataSources.join('" and "')}"`
      : 'All Datasources'

    const campaignsText = campaigns?.length
      ? `Campaigns "${campaigns.join('" and "')}"`
      : 'All Campaigns'

    return <Header title={`${dataSourceText}; ${campaignsText}`}/>
  }, [dataSources, campaigns])

  return (
    <>
      <Header title="Adverity Advertising Data ETL-V Challenge"/>

      <Card>
        <StyledList>
          <li>Select zero to N Datasources</li>
          <li>Select zero to N Campaignes</li>
        </StyledList>
        <Text contents="(where zero means 'All')" size="small"/>
        <p>{' '}</p>
        <p>
          Hitting 'Apply', filters the chart to show a timeseries for both
          <em>Clicks</em> and <em>Impressions</em> for given <em>Datasources</em> and <em>Campaigns</em> - logical AND
        </p>
      </Card>
      <Row>
        <Card flex="1">
          <Filter
            onSubmit={({dataSources, campaigns}) => {
              setDataSources(dataSources)
              setCampaigns(campaigns)
            }}
            dataSources={rawData.uniqDatasources}
            campaigns={rawData.uniqCampaigns}
          />
        </Card>

        <Card flex="3">
          <Chart
            config={{xAxisField: "Date", leftYAxisField: "Clicks", rightYAxisField: "Impressions"}}
            header={chartTitle}
            data={chartData}
          />
        </Card>
      </Row>
    </>
  )
}

export default Dashboard
