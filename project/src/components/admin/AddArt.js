import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AdminArt.css'

function AddArt() {

	const [art, setArt] = useState({
		title: "",
		description_thematic: "",
		description_basic: "",
		description_spatial: "",
		country_origin: "",
		accession_number: "",
		artistId: "",                       
		categoryId: "",                	   
		ownerId: "",                        
		geometryId: ""                      
	})

	const handleChange = event => setArt({...art, [event.target.name]: event.target.value})
	
	const handleSubmit = event => {
		// remember to change the ids to ints using parseInt

		event.preventDefault(); 
		axios
			.post(`https://artmuseumdraft.herokuapp.com/art`, art)
			.then(response => {
				console.log(response);
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
				<h3 className="add-placeholder">Title</h3>
				<input type="text"
						name="title"
						placeholder="Enter Title"
						value={art.title}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Basic Description</h3>
				<textarea type="text"
						name="description_basic"
						placeholder="Enter Basic Description"
						value={art.description_basic}
						className="art-input"
						onChange={handleChange} ></textarea>
				<h3 className="add-placeholder">Spatial Description</h3>
				<textarea type="text"
						name="description_spatial"
						placeholder="Enter Spacial Description"
						value={art.description_spatial}
						className="description-input"
						onChange={handleChange} ></textarea>
				<h3 className="add-placeholder">Thematic Description</h3>
				<textarea type="text"
						name="description_thematic"
						placeholder="Enter Thematic Descriptiond"
						value={art.description_thematic}
						className="description-input"
						onChange={handleChange} ></textarea>
				<h3 className="add-placeholder">Country of Origin</h3>
				<input type="text"
						name="country_origin"
						placeholder="Enter Country of Origin"
						value={art.country_origin}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Artist ID</h3>
				<input type="text"
						name="artistId"
						placeholder="Enter Artist ID"
						value={art.artistId}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Category ID</h3>
				<input type="text"
						name="categoryId"
						placeholder="Enter Category ID"
						value={art.categoryId}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Owner ID</h3>
				<input type="text"
						name="ownerId"
						placeholder="Enter Owner ID"
						value={art.ownerId}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Geometry ID</h3>
				<input type="text"
						name="geometryId"
						placeholder="Enter Geometry ID"
						value={art.geometryId}
						className="art-input"
						onChange={handleChange} />
				<h3 className="add-placeholder">Accession Number</h3>
				<input type="text"
						name="accession_number"
						placeholder="Enter Accession Number"
						value={art.accession_number}
						className="art-input"
						onChange={handleChange} />
				
				<button type="submit" id="add-button"><span>Submit</span></button>
			</form>
		</div>
	);
}

export default AddArt;

/** 
	Mock Database Art Object 

		const [art, setArt] = useState({
			artist: "",
			title: "",
			type: "",
			medium_support: "",
			description: "",
			creation_date: "",
			credit_line: "",
			accession_number: ""
		}); 

*/
	