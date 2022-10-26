import React from 'react'
import LogoSearch from '../logoSearch/logoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import Followerscard from '../FollowersCard/Followerscard'
import "./profileSide.css"

const profileSide = () => {
  return (
    <div className="ProfileSide">
   <LogoSearch/>
   <ProfileCard/>
   <Followerscard/>
   </div>
   
  )
}

export default profileSide
