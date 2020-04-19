import React, { useState } from 'react';

// icon 
import { FiEdit } from 'react-icons/fi';

// modal
import Modal from 'react-modal';
import EditArt from './EditArt';

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

    return (
        <tr>
            {/* <td><img src={photo} alt={`${art.title} by ${art.artist}`} className="admin-photo"/></td> */}
            <td>{art.accession_number}</td>
            <td>{art.title}</td>
            <td>{art.artist}</td>
            <td>{art.type}</td> 
            <td>{art.medium_support}</td>
            <td>{art.credit_line}</td>
            <td>{art.description}</td>
            <td>{art.creation_date}</td>
            <td><FiEdit onClick={openModal}/></td>

            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Edit Form"
            >
                <EditArt artId={art.id} closeModal={closeModal}/>
            </Modal>
        </tr>
    );
}
 
export default AdminArtCard;