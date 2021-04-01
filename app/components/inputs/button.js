// style
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;

  height: 42px;
  padding: 0 24px;
  font-size: 16px;
  color: white;
  text-align: center;

  line-height: 16px;
  background-color: var(--background-darkBlue);
  border: 0px;
  border-radius: 8px;
  outline: none;

  /* box-shadow: 0 8px 32px rgba(31, 222, 130, 0.46); */

  &:hover{
    /* background-color: #333; */
    opacity: 0.9;
  }
  &:active {
    background-color:var(--background-darkBlue2);
  }
`;

export default Button;
