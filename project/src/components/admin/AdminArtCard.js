import React, { useState } from 'react';
import { axiosWithAuth } from './axiosWithAuth.js';

// icons
import { FiEdit } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

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
            {/* 
                Image
                Title 
                description Thematic 
                description Basic 
                description Spatial 
                Country of Origin
                Accession Number
                Image Url 
                Artist Id                       
                Category Id                 
                Owner Id                      
                Geometry Id  
            */}
            <td><img src={art.image_url} alt={`${art.title} by Artist ID: ${art.artistId}`} className="admin-photo"/></td>
            <td>{art.title}</td>
            <td>{art.description_basic}</td>
            <td>{art.description_spatial}</td>
            <td>{art.description_thematic}</td>
            <td>{art.country_origin}</td>
            <td>{art.accession_number}</td>
            <td>{art.artistId}</td>
            <td>{art.categoryId}</td> 
            <td>{art.ownerId}</td>
            <td>{art.geometryId}</td>
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