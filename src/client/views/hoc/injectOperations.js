import React, { useEffect, useState } from 'react';

import { pickAll, pickBy } from 'ramda';

import makeGoogleMapUrl from 'core/makeGoogleMapUrl';
import cutToBlockNumber from 'core/cutToBlockNumber';
import purgeAddress from 'core/purgeAddress';
import { save, load } from 'lib/persisit';

const changeableFields = ['prefecture', 'city', 'addressBef'];

function injectOperations(BaseComponent) {
  function withOperations(props) {
    const [values, setValues] = useState({
      prefecture: '埼玉県',
      city: '草加市',
      addressBef: '',
      addressAft: '',
      addressForMap: '',
      mapUrl: '',
    });

    // side effect
    const persistData = newValues => {
      save(pickAll(changeableFields, newValues));
    };

    // side effect
    const loadData = () => {
      const isNotNull = (val, key) =>
        changeableFields.includes(key) && val != null;
      const savedData = pickBy(isNotNull, load());

      setValues({
        ...values,
        ...savedData,
      });
    };

    useEffect(() => {
      console.log('loadData');
      loadData();
    }, []);

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
        persistData(newValues);
      } else {
        setValues({ ...newValues });
      }
    };

    const handleReset = () => {
      const newValues = {
        ...values,
        addressBef: '',
        addressAft: '',
        addressForMap: '',
        mapUrl: '',
      };

      setValues(newValues);
      persistData(newValues);
    };

    return (
      <BaseComponent
        {...props}
        handleChange={handleChange}
        handleReset={handleReset}
        values={values}
      />
    );
  }

  return withOperations;
}

export default injectOperations;
