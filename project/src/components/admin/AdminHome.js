import React from 'react';
import '../../styles/AdminHome.css'
import AdminArtList from './AdminArtList';
import DropDownList from 'react-widgets/lib/DropdownList';
import { FaCog, FaWrench, FaRegQuestionCircle } from 'react-icons/fa'

function AdminHome(props) {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours(); //To get the Current Hours
    let min = newDate.getMinutes(); //To get the Current Minutes 

    return (
        <div>
            <div id="welcome-container">
                <h1 id="welcome-admin">Welcome, Admin!</h1>
                <div id="date-and-time">
                    <p id="date-today">{`${month<10?`0${month}`:`${month}`} / ${date} / ${year} `}</p>
                    <p id="time-today">{`${hours} : ${min}`}</p>
                </div>
            </div>
            <div id="admin-home-container">
                <div id="dash-container">
                    <h4 id="dash">Dashboard</h4>
                    <DropDownList 
                        data={[
                            'Add Artist', 'Add Category', 'Add Owner', 'Add Geometry', 'Add Art'
                        ]}
                        defaultValue={"Forms"}
                        onChange={event => {props.history.push(`/Admin/${event.split(' ').join('-')}`)}}
                    />
                    {/* <Link to='/Admin/Add-Artist'>
                            <h4>Add Artist</h4>
                    </Link>
                    <Link to='/Admin/Add-Category'>
                            <h4>Add Category</h4>
                    </Link>
                    <Link to='/Admin/Add-Owner'>
                            <h4>Add Owner</h4>
                    </Link>
                    <Link to='/Admin/Add-Geometry'>
                            <h4>Add Geometry</h4>
                    </Link>
                    <Link to='/Admin/Add-Art'>
                            <h4>Add Artwork</h4>
                    </Link> */}

                    <div id="divider"></div>
                    <div id="zone-bottom">
                        <p><FaWrench size={15} style={{marginRight: '4px'}}/> Settings</p>
                        <p><FaCog size={15} style={{marginRight: '4px'}}/> Preferences</p> 
                        <p><FaRegQuestionCircle size={15} style={{marginRight: '6px'}}/>Help</p>
                    </div>
                </div>
                <div id="admin-art-container">
                    <AdminArtList />
                </div>
            </div>
        </div>
    );
}

export default AdminHome;