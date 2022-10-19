import React from 'react'
import Cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const profilecard = () => {
    const ProfilePage = true;
    return (
        <div className='ProfileCard'>
            <div className='ProfileImages'>
                <img src={Cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="ProfileName">
                <span>Virat kholi</span>
                <span>Cricketer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>1</span>
                        <span>following</span>
                    </div>
                    <div className="vL"></div>
                    <div className="follow">
                        <span>113M</span>
                        <span>followers</span>
                    </div>
                    {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
                </div>
                <hr />
            </div>
            {ProfilePage ? "" : <span>My Profile</span>}
        </div>
    )
}

export default profilecard
