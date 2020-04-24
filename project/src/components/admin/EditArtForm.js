import React, { useState, useEffect } from 'react';
import axios from 'axios';

// styles 
import '../../styles/AdminForms.css'

// icons 
import { FaTimes } from 'react-icons/fa'

const EditArtForm = ({ artId, closeModal }) => {
	console.log("art ID", artId)
    
    // hook keeps track of art information  
	const [art, setArt] = useState({}); 

    // get the artwork by its id 
	const fetchArt = id => {
		console.log("hi")
		axios
			.get(`https://artmuseumdraft.herokuapp.com/art/${id}`)
			.then(response => {setArt(response.data); console.log(art)})
			.catch(error => console.log(error.response));
	}

	useEffect(function getArtData() {

        // use fetchArt function to get art data 
		fetchArt(artId);
		
	}, [artId])

	// update hook info 
	const handleChange = event => setArt({...art, [event.target.name]: event.target.value})

	const handleSubmit = event => {
		event.preventDefault(); 
		axios
			.put(`https://cs2345-db-api.herokuapp.com/art_object${art.id}`, art)
			.then(response => {
				console.log("edit art form response data", response);
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
			<p>You <strong>must</strong> have all IDs in order to add an artwork.</p>
			<p>If the artwork is missing information, enter 'Not Available' or 'Unknown' in the input input.</p>
			<form 
				onSubmit={handleSubmit} 
				id="edit-art-form"
			>
				{/* title */}
 				<h3 className="edit-placeholder">Title</h3>
				 <input
				 	type="text"
					name="title"
					placeholder="Enter Title"
					value={art.title}
					className="edit-input"
					onChange={handleChange} 
				/>
				
				{/* basic description */}
 				<h3 className="edit-placeholder">Basic Description</h3>
 				<input
					type="text"
					component="textarea"
					name="description_basic"
					placeholder="Enter Basic Description"
					value={art.description_basic}
					className="edit-input"
					onChange={handleChange} 
				/>

				{/* spatial description */}
 				<h3 className="edit-placeholder">Spatial Description</h3>
				<input 
					type="text"
					component="textarea"
					name="description_spatial"
					placeholder="Enter Spacial Description"
					value={art.description_spatial}
					className="description-input"
					onChange={handleChange}
				/>
				
				{/* thematic description */}
 				<h3 className="edit-placeholder">Thematic Description</h3>
				<input 
					type="text"
					component="textarea"
 					name="description_thematic"
 					placeholder="Enter Thematic Description"
 					value={art.description_thematic}
 					className="description-input"
					onChange={handleChange} 
				/>
				
				{/* country origin */}
 				<h3 className="edit-placeholder">Country of Origin</h3>
				<input 
					type="text"
 					name="country_origin"
 					placeholder="Enter Country of Origin"
 					value={art.country_origin}
 					className="edit-input"
					onChange={handleChange}
				/>

				{/* artist id */}
 				<h3 className="edit-placeholder">Artist ID</h3>
				<input 
					type="text"
 					name="artistId"
 					placeholder="Enter Artist ID"
 					value={art.artistId}
 					className="edit-input"
 					onChange={handleChange} 	
				/>

				{/* category id */}
 				<h3 className="edit-placeholder">Category ID</h3>
				<input 
					type="text"
 					name="categoryId"
 					placeholder="Enter Category ID"
 					value={art.categoryId}
 					className="edit-input"
					onChange={handleChange} 	
				/>
				
				{/* owner id */}
 				<h3 className="edit-placeholder">Owner ID</h3>
				<input 
					type="text"
 					name="ownerId"
 					placeholder="Enter Owner ID"
 					value={art.ownerId}
 					className="edit-input"
					onChange={handleChange} 	
				/>
				
				{/* geometry id */}
 				<h3 className="edit-placeholder">Geometry ID</h3>
				<input 
					type="text"
					name="geometryId"
					placeholder="Enter Geometry ID"
					value={art.geometryId}
					className="edit-input"
					onChange={handleChange}	 
				/>

				{/* accession number */}
				<h3 className="edit-placeholder">Accession Number</h3>
				<input type="text"
					name="accession_number"
					placeholder="Enter Accession Number"
					value={art.accession_number}
					className="edit-input"
					onChange={handleChange}		 
				/>
			</form>
		</div>
	);
}

export default EditArtForm;



// const handleSubmit = event => {
// 	event.preventDefault(); 
// 	axios
// 		.put(`https://artmuseumdraft.herokuapp.com/art/${art.id}`, art)
// 		.then(response => {
// 			console.log(response);
// 			// props.history.push('/Admin')
// 		})
// 		.catch(error => {
// 			console.log(error.response)
// 		})
	
// 	// wait for a second before closing the modal 
// 	setTimeout(function() { 
// 		closeModal()
// 	}, 1000);
// }