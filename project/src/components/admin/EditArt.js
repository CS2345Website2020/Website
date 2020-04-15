import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditArt(props) {
    console.log(props)
    
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
		fetchArt(props.match.params.id);
		
	}, [props.match.params.id])

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
	}

    // waiting for art data to load 
	if (!art) {
	    return <div>Loading...</div>;
	}

	return (
		<form onSubmit={handleSubmit} id="edit-art-form">
			<input type="text"
					name="artist"
					placeholder="artist"
                    value={art.artist}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="title"
					placeholder="title"
                    value={art.title}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="type"
					placeholder="type"
                    value={art.type}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="medium_support"
					placeholder="medium_support"
                    value={art.medium_support}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="description"
					placeholder="description"
                    value={art.description}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="creation_date"
					placeholder="creation_date"
                    value={art.creation_date}
                    className="art-input"
					onChange={handleChange} />
            <input type="text"
					name="credit_line"
					placeholder="credit_line"
                    value={art.credit_line}
                    className="art-input"
					onChange={handleChange} />
			<input type="text"
					name="accession_number"
					placeholder="accession_number"
                    value={art.accession_number}
                    className="art-input"
					onChange={handleChange} />
			
			<button type="submit">Update Artwork</button>
	    </form>
	);
}

export default EditArt;



