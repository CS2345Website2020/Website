import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from './axiosWithAuth.js';

// styles 
import '../../styles/AdminForms.css'

const AddArt = (props, { status }) => {
	// used with formik and yup validation 
	const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
    } = props;

	// hook keeps track of art information 
	const [art, setArt] = useState({});

	useEffect(() => {
		if (status) {
			setArt(info => ({...art, info}))
		}
	}, [status, art]);


	return (
		<div id="add-art-container">
			<h1>New Artwork Form</h1>
			<p>Please fill in all sections of the form completely.</p>
			<p>If the artwork is missing information, enter 'Not Available' in the input field.</p>
 			<Form 
				onSubmit={handleSubmit} 
				id="art-form"
			>
				{/* title */}
 				<h3 className="placeholder">Title</h3>
				 <Field
				 	type="text"
					name="title"
					placeholder="Enter Title"
					value={values.title}
					className="input"
					onChange={handleChange} 
				/>
				{touched.title && errors.title && ( <p className="error">{errors.title}</p> )}

				{/* basic description */}
 				<h3 className="placeholder">Basic Description</h3>
 				<Field
					type="text"
					component="textarea"
					name="description_basic"
					placeholder="Enter Basic Description"
					value={values.description_basic}
					className="description-input"
					onChange={handleChange} 
				/>
				{touched.description_basic && errors.description_basic && ( <p className="error">{errors.description_basic}</p> )}

				{/* spatial description */}
 				<h3 className="placeholder">Spatial Description</h3>
				<Field 
					type="text"
					component="textarea"
					name="description_spatial"
					placeholder="Enter Spacial Description"
					value={values.description_spatial}
					className="description-input"
					onChange={handleChange} 
				/>
				{touched.description_spatial && errors.description_spatial && ( <p className="error">{errors.description_spatial}</p> )}
				
				{/* thematic description */}
 				<h3 className="placeholder">Thematic Description</h3>
				<Field 
					type="text"
					component="textarea"
 					name="description_thematic"
 					placeholder="Enter Thematic Descriptiond"
 					value={values.description_thematic}
 					className="description-input"
 					onChange={handleChange} 
				/>
				{touched.description_thematic && errors.description_thematic && ( <p className="error">{errors.description_thematic}</p> )}

				{/* country origin */}
 				<h3 className="placeholder">Country of Origin</h3>
				<Field 
					type="text"
 					name="country_origin"
 					placeholder="Enter Country of Origin"
 					value={values.country_origin}
 					className="input"
 					onChange={handleChange}
				/>
				{touched.country_origin && errors.country_origin && ( <p className="error">{errors.country_origin}</p> )}

				{/* artist id */}
 				<h3 className="placeholder">Artist ID</h3>
				<Field 
					type="number"
 					name="artistId"
 					placeholder="Enter Artist ID"
 					value={values.artistId}
 					className="input"
 					onChange={handleChange} 
				/>
				{touched.country_origin && errors.country_origin && ( <p className="error">{errors.country_origin}</p> )}

				{/* category id */}
 				<h3 className="placeholder">Category ID</h3>
				<Field 
					type="number"
 					name="categoryId"
 					placeholder="Enter Category ID"
 					value={values.categoryId}
 					className="input"
 					onChange={handleChange} 
				/>
				{touched.categoryId && errors.categoryId && ( <p className="error">{errors.categoryId}</p> )}
				
				{/* owner id */}
 				<h3 className="placeholder">Owner ID</h3>
				<Field 
					type="number"
 					name="ownerId"
 					placeholder="Enter Owner ID"
 					value={values.ownerId}
 					className="input"
 					onChange={handleChange} 
				/>
				{touched.ownerId && errors.ownerId && ( <p className="error">{errors.ownerId}</p> )}
				
				{/* geometry id */}
 				<h3 className="placeholder">Geometry ID</h3>
				<Field 
					type="number"
					name="geometryId"
					placeholder="Enter Geometry ID"
					value={values.geometryId}
					className="input"
					onChange={handleChange} 
				/>
				{touched.geometryId && errors.geometryId && ( <p className="error">{errors.geometryId}</p> )}

				{/* accession number */}
				<h3 className="placeholder">Accession Number</h3>
				<Field type="text"
						name="accession_number"
						placeholder="Enter Accession Number"
						value={values.accession_number}
						className="input"
						onChange={handleChange} 
				/>
				{touched.accession_number && errors.accession_number && ( <p className="error">{errors.accession_number}</p> )}

				{/* image */}
				<h3 className="placeholder">Image Url</h3>
				<Field type="text"
						name="iamge_url"
						placeholder="Enter Image Url"
						value={values.image_url}
						className="input"
						onChange={handleChange} 
				/>
				{touched.image_url && errors.image_url && ( <p className="error">{errors.image_url}</p> )}
				
				<div className="form-buttons">
                    <button type="submit" className="submit-button"><span>Submit</span></button>
                    <button className="cancel-button" onClick={() => props.history.push('/Admin')}><span>Cancel</span></button>
                </div>
 			</Form>
		</div>
	);
};

// use formik 
const AddArtForm = withFormik({

	// assign default values if value is undefined 
	mapPropsToValues({ title, country_origin, accession_number, description_basic, description_spatial, description_thematic, artistId, categoryId, ownerId, geometryId, image_url }) {
		return {
			title: title || "",
			description_thematic: description_thematic || "",
			description_basic: description_basic ||  "",
			description_spatial: description_spatial || "",
			country_origin: country_origin || "",
			accession_number: accession_number || "",
			artistId: artistId || "",                       
			categoryId: categoryId || "",                	   
			ownerId: ownerId || "",                        
			geometryId: geometryId || "", 
			image_url: image_url || "",
		};
	},

	// use yup to enforce input requirements 
	validationSchema: Yup.object().shape({
		title: Yup
		.string()
		.required("Please Enter Title or Unknown"), 
		description_basic: Yup
		.string()
		.required("Please Enter Basic Description or Not Available"),
		description_spatial: Yup 
		.string()
		.required("Please Enter Spatial Description or Not Available"),
		description_thematic: Yup
		.string()
		.required("Please Enter Thematic Description or Not Available"),
		country_origin: Yup
		.string()
		.required("Please Enter Country of Origin or Unknown"),
		accession_number: Yup
		.string()
		.required("Please Enter Accession Number or Not Available"),
		artistId: Yup
		.number()
		.required("Artist ID is Required to Create New Artwork"),
		categoryId: Yup
		.number()
		.required("Category ID is Required to Create New Artwork"),
		ownerId: Yup 
		.number()
		.required("Owner ID is Required to Create New Artwork"), 
		geometryId: Yup
		.number()
		.required("Geometry ID is Required to Create New Artwork"),
		image_url: Yup 
		.string()
		.url()
		.required()
	}),

	handleSubmit(values, { resetForm, props }) {
		console.log("add art values, props", values, props)

		axiosWithAuth()
			.post('https://cs2345-db-api.herokuapp.com/art_object', values)
			.then(response => {
				// successful 
				console.log("add art form api response object", response.data);
			}) 

			.catch(error => {
				// unsuccessful 
				console.log("The api is currently down.", error.response);
			});

		resetForm(); 
	}

})(AddArt)

export default AddArtForm;

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


// title: "",
// description_thematic: "",
// description_basic: "",
// description_spatial: "",
// country_origin: "",
// accession_number: "",
// artistId: "",                       
// categoryId: "",                	   
// ownerId: "",                        
// geometryId: "", 
// imgUrl: ""                      
	