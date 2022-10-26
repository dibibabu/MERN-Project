import React from 'react'

import FollowersCard from '../FollowersCard/Followerscard'
import InfoCard from '../infoCard/infoCard'
import LogoSearch from '../logoSearch/logoSearch'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
   
       <LogoSearch/>
       <InfoCard/>
       <FollowersCard/> 
   </div>
  )
}

export default ProfileLeft