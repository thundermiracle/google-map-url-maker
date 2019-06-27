import React from 'react';

import { TextField, Grid, Card, CardContent } from '@material-ui/core';

import CardTextArea from 'components/CardTextArea';
import SimpleSelect from 'components/SimpleSelect';
import makeGoogleMapUrl from 'core/makeGoogleMapUrl';
import cutToBlockNumber from 'core/cutToBlockNumber';
import purgeAddress from 'core/purgeAddress';

const PrefectureList = ['埼玉県'];
const CityList = [
  '三郷市',
  '八潮市',
  '吉川市',
  '草加市',
  '越谷市',
  '川口市',
  '春日部市',
  '北葛飾郡松伏町',
  'さいたま市',
];
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
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={3} xs={6}>
                <SimpleSelect
                  label="都道府県"
                  handleChange={handleChange('prefecture')}
                  valueList={PrefectureList}
                  value={values.prefecture}
                />
              </Grid>

              <Grid item md={3} xs={6}>
                <SimpleSelect
                  label="市区町村"
                  handleChange={handleChange('city')}
                  valueList={CityList}
                  value={values.city}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="変換前アドレス"
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={10}
                  value={values.addressBef}
                  onChange={handleChange('addressBef')}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={6} xs={12}>
        <CardTextArea
          placeholder="変換前アドレスを入力してください"
          label="変換後アドレス"
          rows={13}
          value={values.addressAft}
        />
      </Grid>

      <Grid item xs={12}>
        <CardTextArea
          placeholder="変換前アドレスを入力してください"
          label="地図用アドレス"
          rows={3}
          autoCopy={false}
          value={values.addressForMap}
        />
      </Grid>

      <Grid item xs={12}>
        <CardTextArea
          placeholder="変換前アドレスを入力してください"
          label="地図リンク"
          rows={18}
          value={values.mapUrl}
        />
      </Grid>
    </Grid>
  );
}

export default RootIndex;
