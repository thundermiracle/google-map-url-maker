import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import purgeAddress from '../core/purgeAddress';
import makeGoogleMapUrl from '../core/makeGoogleMapUrl';

function RootIndex() {
  const [values, setValues] = React.useState({
    prefecture: '埼玉県',
    city: '草加市',
    addressBef: '',
    addressAft: '',
    mapUrl: '',
  });

  const getTransformed = () => {
    const addressBefore = values.addressBef;
    const addressList = addressBefore
      .replace(/\r\n|\r/g, '\n')
      .split('\n')
      .map(purgeAddress);

    const mapUrlList = addressList.map(ad =>
      makeGoogleMapUrl(values.prefecture, values.city, ad),
    );

    return {
      addressAft: addressList.join('\r\n'),
      mapUrl: mapUrlList.join('\r\n'),
    };
  };

  const handleChange = name => event => {
    if (name === 'addressBef') {
      setValues({ ...values, [name]: event.target.value, ...getTransformed() });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  // const onTransform = () => {
  //   setValues({
  //     ...values,
  //     ...getTransformed(),
  //   });
  // };

  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <FormControl>
                  <InputLabel htmlFor="prefecture-select">
                    Prefecture
                  </InputLabel>
                  <Select
                    autoWidth
                    value={values.prefecture}
                    onChange={handleChange('prefecture')}
                    inputProps={{
                      name: 'prefecture',
                      id: 'prefecture-select',
                    }}
                  >
                    <MenuItem value="埼玉県">埼玉県</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl>
                  <InputLabel htmlFor="city-select">City</InputLabel>
                  <Select
                    autoWidth
                    value={values.city}
                    onChange={handleChange('city')}
                    inputProps={{
                      name: 'city',
                      id: 'city-select',
                    }}
                  >
                    <MenuItem value="三郷市">三郷市</MenuItem>
                    <MenuItem value="八潮市">八潮市</MenuItem>
                    <MenuItem value="吉川市">吉川市</MenuItem>
                    <MenuItem value="草加市">草加市</MenuItem>
                    <MenuItem value="越谷市">越谷市</MenuItem>
                    <MenuItem value="川口市">川口市</MenuItem>
                    <MenuItem value="春日部市">春日部市</MenuItem>
                    <MenuItem value="越谷市">越谷市</MenuItem>
                    <MenuItem value="さいたま市">さいたま市</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Address Before"
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
          {/* <CardActions>
            <Button onClick={onTransform} color="primary">
              Transform
            </Button>
          </CardActions> */}
        </Card>
      </Grid>

      <Grid item md={6} xs={12}>
        <Card>
          <CardContent>
            <TextField
              label="Address After"
              variant="outlined"
              multiline
              fullWidth
              rows={16}
              value={values.addressAft}
              onChange={handleChange('addressAft')}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <TextField
              label="Map Url"
              variant="outlined"
              multiline
              fullWidth
              rows={18}
              value={values.mapUrl}
              onChange={handleChange('mapUrl')}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default RootIndex;
