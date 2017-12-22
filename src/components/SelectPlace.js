import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SelectPlace = ({value, onChange}) => (
  <SelectField
    floatingLabelText="レース場"
    value={value}
    onChange={onChange}
    >
    <MenuItem value={'kawaguchi'} primaryText="川口" />
    <MenuItem value={'isezaki'} primaryText="伊勢崎" />
    <MenuItem value={'hama'} primaryText="浜松" />
    <MenuItem value={'iizuka'} primaryText="飯塚" />
    <MenuItem value={'sanyou'} primaryText="鉄壁山陽" />
  </SelectField>
)

export default SelectPlace