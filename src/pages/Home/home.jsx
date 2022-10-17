import React from 'react'
import './home.css'
import ProfileSide from '../../components/profileSide/profileSide'

const home = () => {
  return (
    <div className='Home'>
       <ProfileSide/>
        <div className='postSide'>home</div>
        <div className='RightSide'>rightside</div>
      
    </div>
  )
}

export default home
