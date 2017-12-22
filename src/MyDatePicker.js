import DatePicker from 'material-ui/DatePicker'
import React, { Componet } from 'react'

export default class MyDatePicker extends React.Component {
  render () {
    return (
      <div>
        <DatePicker
          floatingLabelText="日付"
          autoOk={true}
          onChange={this.props.onChange}
          value={this.props.value} />
      </div>
    )
  }
}