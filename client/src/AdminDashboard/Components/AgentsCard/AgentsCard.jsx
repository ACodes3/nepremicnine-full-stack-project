import React from 'react'
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg"

const AgentsCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Estate Agent 1</div>
            <div className="profile-description">Some description here for start, after then goes other data for salesperson.</div>
            <div className="profile-button"><a href='#'>Contact Agent</a></div>
        </div>
    </div>
  )
}

export default AgentsCard