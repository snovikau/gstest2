import React, { useCallback } from 'react'
import { Form, Button, Select } from 'antd/lib/index'
import Header from '../../../../components/header'

const selectProps = {
  mode: 'multiple',
  style: {width: '100%'},
  defaultValue: [],
  optionLabelProp: 'label'
};

/**
 * Filter Form for to control Chart visualization
 * @param onSubmit
 * @param dataSources
 * @param campaigns
 * @returns {*}
 * @constructor
 */
const Filter = ({onSubmit, dataSources = [], campaigns = []}) => {

  const generateOptions = useCallback((values) => values && values.map(
    (optionValue) => <Select.Option value={optionValue} label={optionValue} key={optionValue}/>), []);

  return (
    <>
      <Header title="Filter dimension values"/>
      <Form
        name="basic"
        onFinish={onSubmit}
        initialValues={{dataSources: [], campaigns: []}}
      >
        <Form.Item
          label="DataSource"
          name="dataSources"
        >
          <Select {...selectProps} >
            {generateOptions(dataSources)}
          </Select>
        </Form.Item>

        <Form.Item
          label="Campaigns"
          name="campaigns"
        >
          <Select {...selectProps} >
            {generateOptions(campaigns)}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Apply
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Filter