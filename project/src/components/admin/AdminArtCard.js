import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';

// icons
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

// images 
import imageMissing from '../../images/image-missing.png'

// modal
import Modal from 'react-modal';
import EditArtForm from './EditArtForm';
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,0.4)';
 
function AdminArtCard({ art }) {
    
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
        <tr>
            <td>{art.image_url ? <img src={art.image_url} alt={`${art.title} by Artist ID: ${art.artistId}`} className="admin-photo"/> : <img src={imageMissing} alt="No link in database for this art piece." />}</td>
            <td>{art.title}</td>
            <td>{art.country_origin}</td>
            <td>{art.accession_number}</td>
            <td><FiEdit onClick={openModal}/></td>
            <td><FaTrash onClick={confirmDelete}/></td>

            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Edit Form"
            >
                <EditArtForm artId={art.id} closeModal={closeModal}/>
            </Modal>
        </tr>
    );
}
 
export default AdminArtCard;