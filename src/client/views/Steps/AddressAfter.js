import React from 'react';
import PropTypes from 'prop-types';

import CardTextArea from 'components/CardTextArea';

function AddressAfter({ addressAft, ...restProps }) {
  return (
    <CardTextArea
      placeholder="変換前アドレスを入力してください"
      label="変換後アドレス"
      rows={13}
      value={addressAft}
      {...restProps}
    />
  );
}

AddressAfter.propTypes = {
  addressAft: PropTypes.string.isRequired,
};

export default AddressAfter;
