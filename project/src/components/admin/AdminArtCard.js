import React, { useState } from 'react';
import axios from 'axios';

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
		axios
			.delete(`https://artmuseumdraft.herokuapp.com/art/${art.id}`)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response)
			})
    }


    return (
        <tr>
            {/* <td><img src={art.imgUrl} alt={`${art.title} by ${art.artist}`} className="admin-photo"/></td> */}
            <td>{art.accession_number}</td>
            <td>{art.title}</td>
            <td>{art.artist}</td>
            <td>{art.type}</td> 
            <td>{art.medium_support}</td>
            <td>{art.credit_line}</td>
            <td>{art.description}</td>
            <td>{art.creation_date}</td>
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