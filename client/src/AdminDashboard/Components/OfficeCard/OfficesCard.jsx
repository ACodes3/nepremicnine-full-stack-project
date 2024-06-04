import React from 'react'
import "./AgentsCard.css";
import profile_icon from "../../../AdminDashboard/assets/images/person_one.jpg"
import { listData } from '../../../lib/dummydata';
import OfficeMap from '../../OfficeDashboard/Map/OfficeMap';

const OfficesCard = () => {
  const data = listData;
  return (
    <div className='upc'>
        <div className="gradient">
          <OfficeMap items={data} />
        </div>
        <div className="profile-down">
            <div className="profile-title">Office 1</div>
            <div className="profile-description">Some description here for start, after then goes other data for salesperson.</div>
            <div className="profile-button"><a href='#'>Contact Office</a></div>
        </div>
    </div>
  )
}

export default OfficesCard