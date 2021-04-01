import React, { Component } from 'react';
import { DatePicker } from 'react-md-ember';
import PropTypes from 'prop-types';

class Date extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id ? this.props.id : (Math.random() * 10000).toString();
    this.name = this.props.name
      ? this.props.name
      : `random-name-${(Math.random() * 10000).toString()}`;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (dateString, dateObject, event) => {
    const { modValue, onChange, onDayClick, reportValue } = this.props;
    const currentValue = modValue ? modValue(dateString, dateObject, event) : dateString;
    if (reportValue) {
      reportValue(currentValue, dateObject, event);
    }
    if (onChange) {
      onChange(currentValue, dateObject, event);
    }
    if (onDayClick) {
      onDayClick(currentValue, dateObject, event);
    }
  };

  render() {
    const { id, errorMessage, label, name, reportValue, onChange, onDayClick, modValue, ...rest } = this.props;

    let mdErrorMessage = {};
    if (errorMessage) {
      mdErrorMessage = {
        error: true,
        errorText: errorMessage,
      };
    }

    return (
      <DatePicker
        autoOk
        visible={true}
        closeOnEsc={false}
        {...mdErrorMessage}
        displayMode="portrait"
        fullWidth
        id={this.id}
        name={this.name}
        inline
        onVisibilityChange = {(...ars) => {}}
        label={label || 'Select a date'}
        onChange={this.handleChange}
        defaultVisible
        inputStyle={{display: 'none'}}
        textFieldStyle={{display: 'none'}}
      />
    );
  }
}

Date.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  modValue: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onDayClick: PropTypes.func,
  reportValue: PropTypes.func,
  value: PropTypes.bool,
};

export default Date;
