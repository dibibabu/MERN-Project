import React,{useState} from 'react'
import './infoCard.css'
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className='infoCard'>
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width="2rem"
                        height="1.2rem" 
                        onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened}
                        setModalOpened={setModalOpened} />
                </div>

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives</b>
                </span>
                <span> in India</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at</b>
                </span>
                <span> Indian Cricket Team</span>
            </div>
            <button className="button logout-button">Logout</button>

        </div>
    )
}

export default InfoCard
