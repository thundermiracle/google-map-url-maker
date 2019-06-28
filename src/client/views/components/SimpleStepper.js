import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleCard from './SimpleCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 'auto',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function SimpleStepper({ steps, stepsContent, handleReset }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  function innerHandleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function innerHandleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function innerHandleReset() {
    if (handleReset) handleReset();
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.instructions}>
            <SimpleCard>
              <Typography variant="h5">All steps completed</Typography>
            </SimpleCard>
            <Button onClick={innerHandleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div className={classes.instructions}>
              {stepsContent[activeStep]}
            </div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={innerHandleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={innerHandleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SimpleStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  stepsContent: PropTypes.array.isRequired,
  handleReset: PropTypes.func,
};

SimpleStepper.defaultProps = {
  handleReset: null,
};
