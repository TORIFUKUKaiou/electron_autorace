import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectPlace extends Component {
  render() {
    return (
      <SelectField
        floatingLabelText="レース場"
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <MenuItem value={'kawaguchi'} primaryText="川口" />
        <MenuItem value={'isezaki'} primaryText="伊勢崎" />
        <MenuItem value={'hama'} primaryText="浜松" />
        <MenuItem value={'iizuka'} primaryText="飯塚" />
        <MenuItem value={'sanyou'} primaryText="鉄壁山陽" />
      </SelectField>
    )
  }
}