import DatePicker from 'material-ui/DatePicker'
import React from 'react'

const MyDatePicker = ({onChange, value}) => (
  <div>
    <DatePicker
      floatingLabelText="日付"
      autoOk={true}
      onChange={onChange}
      value={value} />
  </div>
)

export default MyDatePicker