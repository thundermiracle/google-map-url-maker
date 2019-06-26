import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export default function SimpleSelect({
  handleChange,
  valueList,
  label,
  ...restProps
}) {
  return (
    <FormControl>
      <InputLabel htmlFor="my-select">{label}</InputLabel>
      <Select
        autoWidth
        onChange={handleChange}
        inputProps={{
          name: 'my',
          id: 'my-select',
        }}
        {...restProps}
      >
        {valueList.map(val => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

SimpleSelect.propTypes = {
  handleChange: PropTypes.func,
  valueList: PropTypes.array,
  label: PropTypes.string,
};

SimpleSelect.defaultProps = {
  handleChange: null,
  valueList: [],
  label: '',
};
