import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

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
                <p>Please fill in this form completely.</p>
            </div>
            <Form 
                className="geometry-form"
                onSubmit={handleSubmit}
            >
                {/* shape */}
                <h2 className="placeholder">Shape</h2>
                <Field 
                    type="text" 
                    name="shape" 
                    placeholder="Enter Shape"
                    className="text-field"
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
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.head}
                />
                {touched.head && errors.head && <p className="error">{errors.head}</p>}

                {/* width */}
                <h2 className="placeholder">Width</h2>
                <Field 
                    type="test" 
                    name="width" 
                    placeholder="Enter Width" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.width}
                />
                {touched.width && errors.width && <p className="error">{errors.width}</p>}

                {/* length */}
                <h2 className="placeholder">Length</h2>
                <Field 
                    type="test" 
                    name="length" 
                    placeholder="Enter Width" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.length}
                />
                {touched.length && errors.length && <p className="error">{errors.length}</p>}

                {/* height */}
                <h2 className="placeholder">Height</h2>
                <Field 
                    type="test" 
                    name="height" 
                    placeholder="Enter Height" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                />
                {touched.height && errors.height && <p className="error">{errors.height}</p>}

                {/* radius */}
                <h2 className="placeholder">Radius</h2>
                <Field 
                    type="test" 
                    name="radius" 
                    placeholder="Enter Radius" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.radius}
                />
                {touched.radius && errors.radius && <p className="error">{errors.radius}</p>}

                <button type="submit" className="button">Submit</button>
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
        .required(),
        head: Yup
        .string()
        .required(),
        width: Yup
        .number()
        .required(),
        length: Yup
        .number()
        .required(),
        height: Yup
        .number()
        .required(),
        radius: Yup
        .number()
        .required()
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        console.log("geometry form values, props", values, props)
    
        resetForm(); 
    }

})(AddGeometry); // currying functions

export default GeometryForm;