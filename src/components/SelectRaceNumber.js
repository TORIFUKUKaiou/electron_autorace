import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectPlace extends Component {
  render() {
    return (
      <SelectField
        floatingLabelText="レース"
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <MenuItem value={1} primaryText="1R" />
        <MenuItem value={2} primaryText="2R" />
        <MenuItem value={3} primaryText="3R" />
        <MenuItem value={4} primaryText="4R" />
        <MenuItem value={5} primaryText="5R" />
        <MenuItem value={6} primaryText="6R" />
        <MenuItem value={7} primaryText="7R" />
        <MenuItem value={8} primaryText="8R" />
        <MenuItem value={9} primaryText="9R" />
        <MenuItem value={10} primaryText="10R" />
        <MenuItem value={11} primaryText="11R" />
        <MenuItem value={12} primaryText="12R" />
      </SelectField>
    )
  }
}