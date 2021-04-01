import React, {Component} from 'react';
import styled from "styled-components";
import {FormContext} from "components/form";

const InputErrorContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  & span {
    margin-top:5px;
    font-size: 12px;
    color: red;
  }
`

const InputStyled = styled.input`
  height: calc(100% - 12px);
  border-radius: 8px;
  border: 0px;
  padding: 0px 12px;

  &:hover,
  &:focus {
    outline: none;
  }
`;


const TextAreaStyled = styled.textarea`
  height: calc(100% - 12px);
  border-radius: 8px;
  border: 0px;
  padding: 18px 12px;
  font-family: inherit;
  font-size: ${({thereIsText}) => thereIsText ? 16 : 18}px;
  &:hover,
  &:focus {
    outline: none;
  }
`;


function InputErrorContainer ({valid, showError, errorMessage, children}) {
  return(
    <InputErrorContainerStyled>
      {children}
      {(!valid && showError) ? <span>*{errorMessage}</span> : null}
    </InputErrorContainerStyled>
  )
}

const validators = {
  email(email) {
    return /^\w+([+.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,20})+$/.test(email);
  },
  password(password) {
    return password.length > 6;
  },
  firstName(name) {
    return name;
  },
  lastName(name) {
    return name;
  },
  textarea(text) {
    return text.length > 2
  }
};

/*
  props:
    modValues: function => changes the values to enforce requirments, or to help the user, for example search

*/ 

class InputOwner extends Component {
  constructor(props) {
    super();
    props.addValidableField(this)
    this.validator = props.validator || validators[props.type] 
    this.formValues = props.formValues
    this.id = props.id ? props.id : (Math.random() * 10000).toString();
    this.state = {
      value: props.defaultValue ? props.defaultValue : '',
      valid: null,
      showError: false,
    };
    this.formValues[this.id] = this.state.value
  }

    // validatable = () => !!validators[ this.props.id ]
    checkValidity = (value) => {
      const valid = this.validator(value);
      const showError = !valid
      this.valid = valid;

      return {value, valid, showError}
    }
    
    isValid = () => {
      const newState = this.checkValidity(this.state.value)
      this.setState({...newState});
    }
  
    defaultModValue = (ele) => ele

    handleChange = (event, input) => {
      // console.log(event, event.nativeEvent.data, event.target.value);
      const { modValue, onChange } = this.props;
      let currentValue = event.target.value;
      if (modValue) currentValue = modValue(currentValue, this.id, this.state);
      if (this.formValues) this.formValues[this.id] = currentValue;
      if (onChange) onChange(input, event, currentValue);
      this.setState({ ...this.state, valid: null, showError: false, value: currentValue});
    };

  render() {
    const {
      errorMessage,
      placeholder,
      className,
      type,
    } = this.props;
    // if (icon) {
    //   const Icon = <FontIcon iconClassName={icon} />;
    //   mdIcon = {
    //     leftIcon: Icon,
    //   };
    // }
    const val = this.state.value || ""
    // debugger
    const InputComponent = (type =="textarea") ? TextAreaStyled : InputStyled
    return (
      <InputErrorContainer errorMessage = {errorMessage} {...this.state}>
        <InputComponent
          // {...mdIcon}
          // id={this.id}
          // label={label}
          thereIsText = {this.state.value.length > 0}
          onChange = {this.handleChange.bind(this)}
          onBlur = {this.isValid.bind(this)}
          placeholder={placeholder}
          type={type || "text"}
          value = {val}
          className = {className}
        />
      </InputErrorContainer>
    );
  }
}


function Input (props){
  return(
    <FormContext.Consumer>
      {({ formValues, addValidableField }) => (
        <InputOwner
          {...props}
          formValues = {formValues}
          addValidableField = {addValidableField}
        />
      )}
    </FormContext.Consumer>
  )
}

export default styled(Input)`
  height: 26px;
  border-radius: 8px;
  border: 0px;

  &:hover,
  &:focus {
    outline: none;
  }
`

