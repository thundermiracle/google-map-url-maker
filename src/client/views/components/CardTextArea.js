import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import grey from '@material-ui/core/colors/grey';

import SnackMessager from './SnackMessager';

const useStyles = makeStyles({
  readOnly: {
    backgroundColor: grey['300'],
  },
});

export default function CardTextArea({ autoCopy, ...restProps }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleAutoCopy = e => {
    if (autoCopy) {
      e.target.select();
      document.execCommand('copy');
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <CardContent>
          <TextField
            className={classes.readOnly}
            variant="outlined"
            // onFocus={handleAutoCopy}
            onClick={handleAutoCopy}
            multiline
            fullWidth
            rows={16}
            {...restProps}
          />
        </CardContent>
      </Card>
      <SnackMessager
        open={open}
        handleClose={handleClose}
        variant="success"
        message="Copied!"
      />
    </>
  );
}

CardTextArea.propTypes = {
  autoCopy: PropTypes.bool,
};

CardTextArea.defaultProps = {
  autoCopy: true,
};
