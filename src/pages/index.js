import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onTransform = () => {
    const addressBefore = values.addressBef;
    const addressList = addressBefore
      .replace(/\r\n|\r/g, '\n')
      .split('\n')
      .map(purgeAddress);

    const mapUrlList = addressList.map(ad =>
      makeGoogleMapUrl(values.prefecture, values.city, ad),
    );

    setValues({
      ...values,
      addressAft: addressList.join('\r\n'),
      mapUrl: mapUrlList.join('\r\n'),
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  label="Prefecture"
                  variant="outlined"
                  disabled
                  value={values.prefecture}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-native-simple">
                    City
                  </InputLabel>
                  <Select
                    autoWidth
                    native
                    value={values.city}
                    onChange={handleChange('city')}
                    input={
                      <OutlinedInput
                        name="city"
                        id="outlined-age-native-simple"
                      />
                    }
                  >
                    <option value="三郷市">三郷市</option>
                    <option value="八潮市">八潮市</option>
                    <option value="吉川市">吉川市</option>
                    <option value="草加市">草加市</option>
                    <option value="越谷市">越谷市</option>
                    <option value="川口市">川口市</option>
                    <option value="春日部市">春日部市</option>
                    <option value="越谷市">越谷市</option>
                    <option value="さいたま市">さいたま市</option>
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
          <CardActions>
            <Button onClick={onTransform} color="primary">
              Transform
            </Button>
          </CardActions>
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
