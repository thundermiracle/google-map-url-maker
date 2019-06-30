import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Divider } from '@material-ui/core';

import SimpleStepper from 'components/SimpleStepper';

import {
  AddressAfter,
  AddressBefore,
  BaseSelect,
  GoogleMapUrl,
} from 'views/Steps';
import SimpleCard from 'client/views/components/SimpleCard';
import injectOperations from 'client/views/hoc/injectOperations';

function RootIndex({ handleChange, handleReset, values }) {
  const steps = [
    '都道府県、市区町村選択',
    '変換前アドレスを入力',
    'GoogleMap URL自動生成',
    'アドレス自動フォーマット',
  ];

  const step1 = (
    <SimpleCard style={{ height: 364 }}>
      <Typography variant="h5">
        市区町村が間違わないようにご確認ください。
      </Typography>
      <Divider style={{ marginBottom: 20 }} />
      <BaseSelect
        prefecture={values.prefecture}
        city={values.city}
        handleChangePrefecture={handleChange('prefecture')}
        handleChangeCity={handleChange('city')}
      />
    </SimpleCard>
  );
  const step2 = (
    <SimpleCard>
      <Typography variant="h4">
        {values.prefecture}
        {values.city}
      </Typography>
      <AddressBefore
        addressBef={values.addressBef}
        handleChangeAddressBef={handleChange('addressBef')}
        rows={12}
        style={{ marginTop: 20 }}
      />
    </SimpleCard>
  );
  const step3 = (
    <GoogleMapUrl
      addressForMap={values.addressForMap}
      mapUrl={values.mapUrl}
      addressForMapProps={{ rows: 2 }}
      mapUrlProps={{ rows: 9 }}
    />
  );
  const step4 = <AddressAfter addressAft={values.addressAft} rows={14} />;

  const stepsContent = [step1, step2, step3, step4];

  return (
    <Grid container style={{ marginBottom: 40 }}>
      <SimpleStepper
        steps={steps}
        stepsContent={stepsContent}
        handleReset={handleReset}
      />
    </Grid>
  );
}

RootIndex.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func,
};

RootIndex.defaultProps = {
  handleReset: null,
};

export default injectOperations(RootIndex);
