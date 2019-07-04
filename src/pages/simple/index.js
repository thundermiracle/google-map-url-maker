import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Divider } from '@material-ui/core';

import SimpleCard from 'components/SimpleCard';

import {
  AddressAfter,
  AddressBefore,
  BaseSelect,
  GoogleMapUrl,
} from 'views/Steps';

import injectOperations from 'views/hoc/injectOperations';

function Simple({ handleChange, values }) {
  return (
    <Grid container spacing={3} style={{ marginBottom: 40 }}>
      <Grid item md={6} xs={12}>
        <SimpleCard>
          <Grid container spacing={2}>
            <BaseSelect
              prefecture={values.prefecture}
              city={values.city}
              mapBaseUrl={values.mapBaseUrl}
              handleChangePrefecture={handleChange('prefecture')}
              handleChangeCity={handleChange('city')}
              handleChangeMapBaseUrl={handleChange('mapBaseUrl')}
            />

            <Grid item xs={12}>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <AddressBefore
                addressBef={values.addressBef}
                handleChangeAddressBef={handleChange('addressBef')}
                rows={12}
              />
            </Grid>
          </Grid>
        </SimpleCard>
      </Grid>

      <Grid item md={6} xs={12}>
        <GoogleMapUrl
          addressForMap={values.addressForMap}
          mapUrl={values.mapUrl}
          addressForMapProps={{ rows: 2 }}
          mapUrlProps={{ rows: 9 }}
        />
      </Grid>

      <Grid item xs={12}>
        <AddressAfter addressAft={values.addressAft} rows={14} />
      </Grid>
    </Grid>
  );
}

Simple.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default injectOperations(Simple);
