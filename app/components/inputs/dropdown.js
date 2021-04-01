import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SVGIcon, SelectField } from 'react-md-ember';
import { FontIcon } from 'react-md-ember';

const iconStyle = {
  'fontSize': '12px'
}
const Icon = <FontIcon iconClassName="fa fa-caret-down" style={iconStyle} />;

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue ? this.props.defaultValue : ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value, index, event, details) => {
    const { modValue, onChange, reportValue } = this.props;

    const newValue = modValue ? modValue(value, index, event, details) : value;

    if (reportValue) {
      reportValue([newValue, index], details, event);
    }
    if (onChange) {
      onChange([newValue, index], event, details);
    }
    this.setState({value: newValue})
  };

  render() {
    const {
      defaultValue,
      errorMessage,
      id,
      label,
      options,
      placeholder,
      value,
      reportValue,
      onChange,
      modValue,
      ...rest
    } = this.props;

    let mdErrorMessage = {};
    if (errorMessage) {
      mdErrorMessage = {
        error: true,
        errorText: errorMessage,
      };
    }

    return (
      <SelectField
        dropdownIcon={Icon}
        fullWidth={true}
        id={id}
        label={label}
        {...mdErrorMessage}
        menuItems={options}
        onChange={this.handleChange}
        placeholder={placeholder}
        simplifiedMenu={false}
        value={this.state.value}
        {...rest}
      />
    );
  }
}

DropDown.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  modValue: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string,
  reportValue: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DropDown;
