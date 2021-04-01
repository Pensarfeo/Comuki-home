/*
* Copyright (c) 2017 Ken Hibino.
* Licensed under the MIT License (MIT).
* See https://kenny-hibino.github.io/react-places-autocomplete
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Autocomplete } from 'react-md-ember';

class PlacesAutocomplete extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id ? this.props.id : (Math.random() * 10000).toString();
    this.state = {
      autocompleteItems: [],
      predictions: [],
      value: props.defaultValue ? props.defaultValue : '',
      scriptLoaded: false,
    };

    this.autocompleteCallback = this.autocompleteCallback.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.debouncedFetchPredictions = debounce(this.fetchPredictions, this.props.debounce);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearAutocomplete = this.clearAutocomplete.bind(this);
  }

  componentWillMount() {
    this.loadGooglePlacesScript();
  }

  loadGooglePlacesScript() {
    const googlePlacesAutocompleteScript = document.createElement('script');
    const src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCurgAwUE2ZkAgMZzkpUrkLrCSYttNOHH8&libraries=places';
    googlePlacesAutocompleteScript.setAttribute('src', src);
    document.body.appendChild(googlePlacesAutocompleteScript);

    const scriptLoad = new Promise((resolve, reject) => {
      const scriptLoaded = () => {
        resolve('script has been loaded');
      };

      googlePlacesAutocompleteScript.addEventListener('load', scriptLoaded);
    });

    scriptLoad
      .then(() => {
        this.autocompleteService = new google.maps.places.AutocompleteService();
        this.setState({ scriptLoaded: true });
      })
      .catch(error => console.log(error));
  }

  autocompleteCallback(predictions) {
    const uniquePredictions = _.uniqBy(predictions, prediction => prediction.description);
    const formattedPredictions = uniquePredictions.map(p => {
      return p.description;
    });

    this.setState({
      autocompleteItems: predictions.map((p, index) => {
        p.index = index;
        return p;
      }),
      predictions: formattedPredictions,
    });
  }

  fetchPredictions() {
    const { value } = this.state;
    if (value.length) {
      this.autocompleteService.getPlacePredictions(
        { input: value },
        this.autocompleteCallback,
      );
    }
  }

  clearAutocomplete() {
    this.setState(() => ({ autocompleteItems: [], predictions: [] }));
  }

  handleInputKeyDown(event) {
    if (event.key === 'Escape') this.clearAutocomplete();
  }

  handleInputChange(value) {
    this.setState({ value });
    this.debouncedFetchPredictions();
  }

  handleInputOnBlur() { this.clearAutocomplete() }

  transformAddress(results) {
    const map = {
      street_number: 'number',
      route: 'street',
      locality: 'municipality',
      administrative_area_level_2: 'province',
      country: 'country',
      postal_code: 'postcode',
    };

    const address = {};

    results[0]['address_components'].forEach(component => {
      const type = component.types[0];

      if (map[type]) {
        address[map[type]] = component['long_name'];
      }
    });

    return address;
  }

  geocodeByPlaceId(placeId) {
    const geocoder = new google.maps.Geocoder();
    const OK = google.maps.GeocoderStatus.OK;

    return new Promise((resolve, reject) => {
      geocoder.geocode({ placeId }, (results, status) => {
        if (status !== OK) reject(status);
        resolve(results);
      });
    });
  }

  handleSubmit(suggestion, suggestionIndex, matches) {
    this.setState({ value: suggestion });
    const { autocompleteItems } = this.state;
    const { onSubmit, modValue, reportValue } = this.props;
    const id = autocompleteItems[suggestionIndex]['place_id'];
    this.geocodeByPlaceId(id)
      .then(results => {
        let currentValue = this.transformAddress(results)
        if (onSubmit) onSubmit(currentValue)
        if (modValue) currentValue = modValue(currentValue, this.id, );
        if (reportValue) reportValue(currentValue);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { predictions, value, scriptLoaded } = this.state;
    if (!scriptLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Autocomplete
          id={this.id}
          label={this.props.label}
          data={predictions}
          onAutocomplete={this.handleSubmit}
          fullWidth
          simplifiedMenu={false}
          closeOnOutsideClick={true}
          onChange={this.handleInputChange}
          onKeyDown={e => this.handleInputKeyDown(e)}
          onBlur={e => this.handleInputOnBlur(e)}
          value={ this.props.value || value }
          onMenuClose={this.clearAutocomplete}
        />
      </div>
    );
  }
}

PlacesAutocomplete.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  debounce: PropTypes.number,
  modValue: PropTypes.func,
  reportValue: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlacesAutocomplete.defaultProps = {
  debounce: 200,
};

export default PlacesAutocomplete;
