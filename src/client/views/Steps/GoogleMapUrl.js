import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import CardTextArea from 'components/CardTextArea';

function GoogleMapUrl({
  addressForMap,
  mapUrl,
  addressForMapProps,
  mapUrlProps,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CardTextArea
          placeholder="変換前アドレスを入力してください"
          label="地図用アドレス"
          rows={3}
          autoCopy={false}
          value={addressForMap}
          {...addressForMapProps}
        />
      </Grid>

      <Grid item xs={12}>
        <CardTextArea
          placeholder="変換前アドレスを入力してください"
          label="地図リンク"
          rows={16}
          value={mapUrl}
          {...mapUrlProps}
        />
      </Grid>
    </Grid>
  );
}

GoogleMapUrl.propTypes = {
  addressForMap: PropTypes.string.isRequired,
  mapUrl: PropTypes.string.isRequired,
  addressForMapProps: PropTypes.object,
  mapUrlProps: PropTypes.object,
};

GoogleMapUrl.defaultProps = {
  addressForMapProps: null,
  mapUrlProps: null,
};

export default GoogleMapUrl;
