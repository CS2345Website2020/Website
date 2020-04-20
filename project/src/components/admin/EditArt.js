import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/AdminEdit.css'
import { FaTimes } from 'react-icons/fa'

function EditArt({ artId, closeModal }) {
    console.log("art ID", artId)
    
    // hook keeps track of art information  
	const [art, setArt] = useState(null); 

    // get the artwork by its id 
	const fetchArt = id => {
		axios
			.get(`https://artmuseumdraft.herokuapp.com/art/${id}`)
			.then(response => setArt(response.data))
			.catch(error => console.log(error.response));
	}

	useEffect(() => {

        // use fetchArt function to get art data 
		fetchArt(artId);
		
	}, [artId])

    // update hook info 
	const handleChange = event => setArt({...art, [event.target.name]: event.target.value})

	const handleSubmit = event => {
		event.preventDefault(); 
		axios
			.put(`https://artmuseumdraft.herokuapp.com/art/${art.id}`, art)
			.then(response => {
				console.log(response);
				// props.history.push('/Admin')
			})
			.catch(error => {
				console.log(error.response)
			})
		
		// wait for a second before closing the modal 
		setTimeout(function() { 
			closeModal()
		}, 1000);
	}

    // waiting for art data to load 
	if (!art) {
	    return <div>Loading...</div>;
	}

	return (
		<div>
			<div id="edit-heading">
				<h1>Edit {art.accession_number}</h1> 
				<div onClick={closeModal} id="x"><FaTimes/></div>
			</div>
			<p>Please fill in all sections of the form completely.</p>
			<p>If the artwork is missing information, enter 'Not Available' in the input field.</p>
			<form onSubmit={handleSubmit} id="edit-art-form">
				<h3 className="edit-placeholder">Artist</h3>
				<input type="text"
						name="artist"
						placeholder="Enter Artist"
						value={art.artist}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Title</h3>
				<input type="text"
						name="title"
						placeholder="Enter Title"
						value={art.title}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Type</h3>
				<input type="text"
						name="type"
						placeholder="Enter Type"
						value={art.type}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Medium and Support</h3>
				<input type="text"
						name="medium_support"
						placeholder="Enter Medium Support"
						value={art.medium_support}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Description</h3>
				<textarea type="text"
						name="description"
						placeholder="Enter Description"
						value={art.description}
						className="description-input"
						onChange={handleChange}></textarea>
				<h3 className="edit-placeholder">Creation Date</h3>
				<input type="text"
						name="creation_date"
						placeholder="Enter Creation Date"
						value={art.creation_date}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Credit Line</h3>
				<input type="text"
						name="credit_line"
						placeholder="Enter Credit Line"
						value={art.credit_line}
						className="edit-input"
						onChange={handleChange} />
				<h3 className="edit-placeholder">Accession Number</h3>
				<input type="text"
						name="accession_number"
						placeholder="Enter Accession Number"
						value={art.accession_number}
						className="edit-input"
						onChange={handleChange} />
				<div id="buttons">
					<button type="submit" id="update-button"><span>Update Artwork</span></button>
					<button onClick={() => closeModal} id="cancel-button"><span>Cancel</span></button>
				</div>
			</form>
		</div>
	);
}

export default EditArt;



