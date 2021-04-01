import styled from 'styled-components'
import profilePic from 'public/images/profilePic.png'

const ProfileImage = styled.img`
  /* min-height:64px; */
  width: 100%;
  height: auto;
  padding-top: 8px;
` 

const ProfilePic = ({userid}) => <ProfileImage src = {profilePic} alt = {"profile Image"}/>

export default ProfilePic