import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropdown';
import Switch from './switch';
import PlacesAutocomplete from './autcomplete';
import { DatePicker } from 'react-md-ember';

class Test extends Component {
  constructor() {
    super();

    this.state = {
      scriptLoaded: false,
      value: '',
    };


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    //this.loadGooglePlacesScript()
  }

  handleFormSubmit = event => {

  };

  render() {

    const disabledDates = ['2018-01-01', '2018-01-05', '2018-01-10', '2018-01-15', '2018-01-20'];

    return (
      <div>
          <DatePicker
            id="testing custom date picker"
            disabledDates={disabledDates}
            firstDayOfWeek={1}
          />
      </div>
    );
  }
}

export default Test;
