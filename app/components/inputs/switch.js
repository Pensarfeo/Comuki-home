import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-md-ember';

class SelectSwitch extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id ? this.props.id : (Math.random() * 10000).toString();
    this.name = this.props.name ? this.props.name : `random-name-${(Math.random() * 10000).toString()}`;
    this.label = this.props.label ? this.props.label : '';

    this.state = {
      checked: this.props.value || false,
    };
  }

  handleChange = (checked, event) => {
    const { modValue, reportValue } = this.props;
    let currentValue = checked;
    if (modValue) currentValue = modValue(currentValue);
    if (reportValue) reportValue(currentValue, this.id);

    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    return (
      <Switch
        checked={this.state.checked}
        id={this.id}
        label={this.label}
        name={this.name}
        onChange={this.handleChange}
        type="switch"
      />
    );
  }
}

SelectSwitch.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  modValue: PropTypes.func,
  name: PropTypes.string,
  onChange: PropTypes.func,
  reportValue: PropTypes.func,
  value: PropTypes.bool,
};

export default SelectSwitch;
