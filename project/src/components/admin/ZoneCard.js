import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';
import '../../styles/AdminHome.css'

// icons
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

// images 
import imageMissing from '../../images/image-missing.png'

// modal
import Modal from 'react-modal';
import EditArtForm from './EditArtForm';
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.4)';
 
function ZoneCard({ art }) {
    
    const [modalIsOpen,setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    }
   
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        console.log('hi')
    }
   
    const closeModal = () => {
        setIsOpen(false);
    }

    const confirmDelete = () => {
        if (window.confirm("Are you sure you wish to delete this item?")) {
           handleDelete()
        }
    }

    const handleDelete = (event) => {
        event.preventDefault(); 
		axiosWithAuth()
			.delete(`'https://cs2345-db-api.herokuapp.com/art_object/${art.id}`)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response)
			})
    }


    return (
        <div className="zone-card">
            <div className="zone">{art.image_url ? <img src={art.image_url} alt={`${art.title} by Artist ID: ${art.artistId}`} className="zone-photo"/> : <img src={imageMissing} alt="No link in database for this art piece." />}</div>
            <div className="zone-title">{art.title}</div>
            <div className="zone-c">{art.country_origin}</div>
            <div className="zone-anum">{art.accession_number}</div>
            <div id="zone-edit-trash">
                <div className="zone-edit"><FiEdit onClick={openModal}/></div>
                <div className="zone-delete"><FaTrash onClick={confirmDelete}/></div>
            </div>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Edit Form"
            >
                <EditArtForm artId={art.id} closeModal={closeModal}/>
            </Modal>
        </div>
    );
}
 
export default ZoneCard;