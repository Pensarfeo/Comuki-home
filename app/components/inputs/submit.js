import React from 'react';
import propTypes from 'prop-types';
// import { Button } from 'react-bootstrap';
// import Loading from 'react-loading-spinner';

const fullWidth = { width: '100%' };

// const spinner = () => <div />;
const SubmitButton = ({ loading, children, onClick }) => (
  <Button
    style={fullWidth}
    type="submit"
    disabled={loading}
    onClick={onClick}
  >
    {/* <Loading isLoading={loading} spinner={spinner} loadingClassName="loader" /> */}
    {children}
  </Button>
);

SubmitButton.propTypes = {
  loading: propTypes.bool,
  children: propTypes.any,
  onClick: propTypes.func,
};

export default SubmitButton;
