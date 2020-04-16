import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AdminArt.css'

function AddArt(props) {
	console.log(props)
	const [art, setArt] = useState({
		artist: "",
		title: "",
		type: "",
		medium_support: "",
		desciption: "",
		creation_date: "",
		credit_line: "",
		accession_number: ""
	}); 

	const handleChange = event => setArt({...art, [event.target.name]: event.target.value})

	const handleSubmit = event => {
		event.preventDefault(); 
		axios
			.post(`https://artmuseumdraft.herokuapp.com/art`, art)
			.then(response => {
				console.log(response);
				// props.history.push('/Admin')
			})
			.catch(error => {
				console.log(error.response)
			})
	}

	return (
		<div id="add-art-container">
			<h1>New Artwork Form</h1>
			<p>Please fill in all sections of the form completely.</p>
			<p>If the artwork is missing information, enter 'Not Available' in the input field.</p>
			<form onSubmit={handleSubmit} id="art-form">
				<h3 className="add-placeholder">Artist</h3>
				<input type="text"
						name="artist"
						placeholder="artist"
						value={art.artist}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Title</h3>
				<input type="text"
						name="title"
						placeholder="title"
						value={art.title}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Type</h3>
				<input type="text"
						name="type"
						placeholder="type"
						value={art.type}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Medium Support</h3>
				<input type="text"
						name="medium_support"
						placeholder="medium_support"
						value={art.medium_support}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Description</h3>
				<input type="text"
						name="description"
						placeholder="description"
						value={art.description}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Creation Date</h3>
				<input type="text"
						name="creation_date"
						placeholder="creation_date"
						value={art.creation_date}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Credit Line</h3>
				<input type="text"
						name="credit_line"
						placeholder="credit_line"
						value={art.credit_line}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Accession Number</h3>
				<input type="text"
						name="accession_number"
						placeholder="accession_number"
						value={art.accession_number}
						className="art-input"
						onChange={handleChange} />
				
				<button type="submit" id="add-button">Add Artwork</button>
			</form>
		</div>
	);
}

export default AddArt;

