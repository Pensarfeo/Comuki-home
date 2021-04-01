import React from 'react';

/*
  Life Cycles
  before Event => Before the event is triggered.
  *triggerEvent => event is executed
  beforeResolution => before the event resolves the
  *handleSuccess, handleFailure => component state changed
  

*/

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function makeAsync (WrappedComponent) {   
  class Async extends React.Component {
    constructor(props) {
      super();
      this.state = {
        loading: false,
        error: false,
        completed: 0, // Counter to track multiple calls to the same event
      };

      this.eventHandlers = {
        beforeSuccess: props.beforeSuccess || this.defaultHandleBeforeSuccess,
        success: this.defaultHandleSuccess,
        beforeFailure: props.beforeFailure || this.deafultHandleBeforeFailure,
        failure: this.defaultHandleFailure,
      };
      // debugger
    }

    componentDidUpdate(prevProvs, prevState) {
      if (!prevState.loading && this.state.loading) {
        this.event()
      }
    }

    componentWillUnmount() {
      delete this.eventHandlers.success;
      delete this.eventHandlers.error;
    }

    // beforeEvents have access to the date before dispatch to store
    defaultHandleBeforeSuccess = (data) => this.handleBeforeSuccess(data)
    defaultHandleSuccess = (data) => this.handleSuccess(data)
    deafultHandleBeforeFailure = (data) => this.handleBeforeFailure(data)
    defaultHandleFailure = (data) => this.handleFailure(data)

    handleBeforeSuccess = (data) => {}
    // For now, this are meant to be overwritten, mostly go to another page so that the component will
    handleSuccess = () => { this.setState({ loading: false, error: false, completed: this.state.completed + 1 }); }


    handleBeforeFailure = () => {}
    handleFailure = (errors) => {
      this.setState({ loading: false, error: true, errors, completed: this.state.completed + 1 });
    }
  
    defaultHandleFailure = (error) => {
      this.handleFailure(error)
    }
    defaultHandleSuccess = (response) => this.handleSuccess(response);

    defaultHandleEvent = () => {
      this.setState({ loading: true, error: false });
    }

    triggerEvent = (event) => {
      this.event = event
      this.defaultHandleEvent();
    }

    render() {
      return(
        <WrappedComponent
          {...this.props}
          {...this.state}
          eventHandlers = {this.eventHandlers}
          triggerEvent = {this.triggerEvent.bind(this)}
        />
      )

    }

  }

  Async.displayName = `Async(${getDisplayName(WrappedComponent)})`;
  return Async;
}