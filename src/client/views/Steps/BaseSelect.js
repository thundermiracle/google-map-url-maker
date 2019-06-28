import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import SimpleSelect from 'components/SimpleSelect';

import { PrefectureList, CityList } from 'config/selectdata';

function BaseSelect({
  handleChangePrefecture,
  prefecture,
  handleChangeCity,
  city,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <SimpleSelect
          label="都道府県"
          handleChange={handleChangePrefecture}
          valueList={PrefectureList}
          value={prefecture}
        />
      </Grid>

      <Grid item xs={6}>
        <SimpleSelect
          label="市区町村"
          handleChange={handleChangeCity}
          valueList={CityList}
          value={city}
        />
      </Grid>
    </Grid>
  );
}

BaseSelect.propTypes = {
  handleChangePrefecture: PropTypes.func.isRequired,
  prefecture: PropTypes.string.isRequired,
  handleChangeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

export default BaseSelect;
