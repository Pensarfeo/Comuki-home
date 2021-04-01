import styled from "styled-components"
import { auth } from "resources/firebase";
import actions from "resources/actions"
import { defaultSaga } from "resources/sagas";
import makeAsync from "components/async";


const singOutEvent = (eventHandlers) => () => {
  console.log("Signing Out");
  return defaultSaga({}, actions.user.signOut, eventHandlers, () => auth.signOut()); 
}

function SignOutButtonOwner({triggerEvent, eventHandlers}) {  
  const asyncAction = singOutEvent(eventHandlers)
  return(
    <button onClick={() => triggerEvent(asyncAction)}>
      Log Out
    </button>
  )
}

const SignOutButtonLogic = makeAsync(SignOutButtonOwner)

const SignOutButton = styled(SignOutButtonLogic)`
  padding: 0 26px;
  display: block;
  background-color: white;

  height: 40px;
  width: 100%;

  color: var(--text-darkSoft);
  font-weight: 600;
  font-size: 16px;
  border-radius: 18px;
  border: 0;


  &:hover, &:focus {
    background-color: #f7f3eb;
    outline: none;
  }
`

export default SignOutButton
export {SignOutButtonLogic}
