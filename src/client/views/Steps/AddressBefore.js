import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

function AddressBefore({ addressBef, handleChangeAddressBef, ...restProps }) {
  return (
    <TextField
      label="変換前アドレス"
      variant="outlined"
      multiline
      fullWidth
      rows={13}
      value={addressBef}
      onChange={handleChangeAddressBef}
      {...restProps}
    />
  );
}

AddressBefore.propTypes = {
  handleChangeAddressBef: PropTypes.func.isRequired,
  addressBef: PropTypes.string.isRequired,
};

export default AddressBefore;
