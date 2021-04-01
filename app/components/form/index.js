import {Component, createContext} from 'react'
import propTypes from 'prop-types';

/*

This for only deals with giving access to the value collection and validation to the child inputs.
and give the info the the eventHandler.



*/
const FormContext = createContext({
  formValues: {},
  addValidableField: () => {},
})

class Form extends Component {
  constructor({handleInvalidSubmit, handleSubmit}) {
    super();
    this.values = {}
    this.validableFields = []

    this.handleInvalidSubmit = handleInvalidSubmit || (() => {}) 
    this.handleSubmit = handleSubmit || (() => {})
  }

  // getValue = (key, value) => {
  //   this.values[key] = value;
  //   console.log(this.values)
  // }

  // deleteValue = (key) => {
  //   delete this.values[key];
  // }

  addValidableField(field) {
    this.validableFields.push(field)
  }

  validateFields = () => {
    this.validableFields.forEach((field) => field.isValid());
    return this.validableFields.reduce((prev, field) => prev && field.valid, true);
  }

  // Event that needs to happen for this specific item
  defaultEvent (event) {
    if (event && event.preventDefault) event.preventDefault();
    return this.validateFields()
  }

  defaultHandleSubmit (event) {
    if (event && event.preventDefault) event.preventDefault();

    const valid = this.validateFields()

    if (valid){
      this.handleSubmit(event, this.values, valid);      
    } else {
      this.handleInvalidSubmit(event, this.values, valid);
    }
  }

  render () {
    const formValues = this.values
    const addValidableField = this.addValidableField.bind(this)
    return(
      <FormContext.Provider value = {{formValues, addValidableField}}>
        <form className = {this.props.className} onSubmit = {this.defaultHandleSubmit.bind(this)} >
          {this.props.children}
        </form>
      </FormContext.Provider>
    )
  }

}

Form.propTypes = {
  saga: propTypes.any,
  action: propTypes.any,
  handleSubmit: propTypes.func,
};

export default Form;
export {FormContext}