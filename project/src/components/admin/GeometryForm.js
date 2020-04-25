import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from './axiosWithAuth.js';

const AddGeometry = (props, { status }) => {
    // used with formik and yup validation 
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    // hook keeps track of login information 
    const [geometry, setGeometry] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setGeometry(info => ({...geometry, info}))
        }
    }, [status, geometry]); 

    return(
        <div id="geometry-container">
            <div id="geometry-text">
                <h1>Geometry Form</h1>
                <p>Please fill in all sections of the form completely.</p>
                <p>If missing information, please enter <strong>'Not Available'</strong> in the input field.</p>
            </div>
            <Form 
                id="geometry-form"
                onSubmit={handleSubmit}
            >
                {/* shape */}
                <h2 className="placeholder">Shape</h2>
                <Field 
                    type="text" 
                    name="shape" 
                    placeholder="Enter Shape"
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.shape}
                />
                {touched.shape && errors.shape && ( <p className="error">{errors.shape}</p> )}

                {/* head */}
                <h2 className="placeholder">Head</h2>
                <Field 
                    type="test" 
                    name="head" 
                    placeholder="Enter Head" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.head}
                />
                {touched.head && errors.head && <p className="error">{errors.head}</p>}

                {/* width */}
                <h2 className="placeholder">Width</h2>
                <Field 
                    type="number" 
                    name="width" 
                    placeholder="Enter Width" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.width}
                />
                {touched.width && errors.width && <p className="error">{errors.width}</p>}

                {/* length */}
                <h2 className="placeholder">Length</h2>
                <Field 
                    type="number" 
                    name="length" 
                    placeholder="Enter Length" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.length}
                />
                {touched.length && errors.length && <p className="error">{errors.length}</p>}

                {/* height */}
                <h2 className="placeholder">Height</h2>
                <Field 
                    type="number" 
                    name="height" 
                    placeholder="Enter Height" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                />
                {touched.height && errors.height && <p className="error">{errors.height}</p>}

                {/* radius */}
                <h2 className="placeholder">Radius</h2>
                <Field 
                    type="number" 
                    name="radius" 
                    placeholder="Enter Radius" 
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.radius}
                />
                {touched.radius && errors.radius && <p className="error">{errors.radius}</p>}

                <div className="form-buttons">
                    <button type="submit" className="submit-button"><span>Submit</span></button>
                    <button className="cancel-button" onClick={() => props.history.push('/Admin')}><span>Cancel</span></button>
                </div>
            </Form>
        </div>
    );
};

// using formik 
const GeometryForm = withFormik({
    
    // assign default value if given value is undefined 
    mapPropsToValues({ shape, head, width, length, height, radius }) {
        return {
            shape: shape || "",
            head: head || "",
            width: width || "",
            length: length || "",
            height: height || "",
            radius: radius || ""
        };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        shape: Yup
        .string()
        .required("Please Enter Geometry Shape"),
        head: Yup
        .string()
        .required("Please Enter Geometry Head"),
        width: Yup
        .number()
        .required("Please Enter Geometry Width"),
        length: Yup
        .number()
        .required("Please Enter Geometry Length"),
        height: Yup
        .number()
        .required("Please Enter Geometry Height"),
        radius: Yup
        .number()
        .required("Please Enter Geometry Radius")
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        console.log("geometry form values, props", values, props)
        
        axiosWithAuth()
            .post('https://cs2345-db-api.herokuapp.com/geometry', values)
            .then(response => {
                // successful 
                console.log("geometry form api response object", response.data);
            }) 

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });

        resetForm();
    }

})(AddGeometry); // currying functions

export default GeometryForm;