import React from 'react';

import makeGoogleMapUrl from 'core/makeGoogleMapUrl';
import cutToBlockNumber from 'core/cutToBlockNumber';
import purgeAddress from 'core/purgeAddress';

const changeableFields = ['prefecture', 'city', 'addressBef'];

function injectOperations(BaseComponent) {
  function withOperations(props) {
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
      <BaseComponent {...props} handleChange={handleChange} values={values} />
    );
  }

  return withOperations;
}

export default injectOperations;
