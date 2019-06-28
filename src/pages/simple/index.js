import React from 'react';

import { Grid, Divider } from '@material-ui/core';

import SimpleCard from 'components/SimpleCard';
import makeGoogleMapUrl from 'core/makeGoogleMapUrl';
import cutToBlockNumber from 'core/cutToBlockNumber';
import purgeAddress from 'core/purgeAddress';

import {
  AddressAfter,
  AddressBefore,
  BaseSelect,
  GoogleMapUrl,
} from 'views/Steps';

const changeableFields = ['prefecture', 'city', 'addressBef'];

function RootIndex() {
  const [values, setValues] = React.useState({
    prefecture: '埼玉県',
    city: '草加市',
    addressBef: '',
    addressAft: '',
    addressForMap: '',
    mapUrl: '',
  });

  const getTransformed = ({ addressBef, prefecture, city }) => {
    const addressList = addressBef
      .replace(/\r\n|\r/g, '\n')
      .split('\n')
      .map(purgeAddress)
      .filter(x => x);

    const addressForMapList = addressList
      .map(cutToBlockNumber)
      .map(ad => `${prefecture}${city}${ad}`);

    const mapUrlList = addressForMapList.map(ad => makeGoogleMapUrl(ad));

    return {
      addressAft: addressList.join('\r\n'),
      addressForMap: addressForMapList.join('\r\n'),
      mapUrl: mapUrlList.join('\r\n'),
    };
  };

  const handleChange = name => event => {
    const newValues = {
      ...values,
      [name]: event.target.value,
    };

    if (changeableFields.includes(name)) {
      setValues({
        ...newValues,
        ...getTransformed(newValues),
      });
    } else {
      setValues({ ...newValues });
    }
  };

  return (
    <Grid container spacing={3} style={{ marginBottom: 40 }}>
      <Grid item md={6} xs={12}>
        <SimpleCard>
          <Grid container spacing={2}>
            <BaseSelect
              prefecture={values.prefecture}
              city={values.city}
              handleChangePrefecture={handleChange('prefecture')}
              handleChangeCity={handleChange('city')}
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

export default RootIndex;
