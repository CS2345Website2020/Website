import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../../styles/LoginSign.css'

const SignUpForm = (props, { status }) => {
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
    const [admin, setAdmin] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setAdmin(info => ({...admin, info}))
        }
    }, [status, admin]); 

    return(
        <div id="bottom-padding">
        <div id="sign-container">
            <div id="sign-text">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <Form 
                className="sl-form"
                onSubmit={handleSubmit}
            >   
                {/* first name */}
                <h2 className="sl-placeholder">First Name</h2>
                <Field 
                    type="text" 
                    name="firstName" 
                    placeholder="Enter First Name"
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && ( <p className="sl-error">{errors.firstName}</p> )}

                {/* last name */}
                <h2 className="sl-placeholder">Last Name</h2>
                <Field 
                    type="text" 
                    name="lastName" 
                    placeholder="Enter Last Name"
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && ( <p className="sl-error">{errors.lastName}</p> )}

                {/* username */}
                <h2 className="sl-placeholder">Username</h2>
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                />
                {touched.username && errors.username && ( <p className="sl-error">{errors.username}</p> )}


                {/* password */}
                <h2 className="sl-placeholder">Password</h2>
                <Field 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched.password && errors.password && <p className="sl-error">{errors.password}</p>}

                <p>By creating an account you are agreeing to our <a href="https://library.bowdoin.edu/">Terms and Privacy</a>.</p>
                <button type="submit" className="sl-button">Submit</button>
            </Form>
        </div>
        </div>
    );
};

// using formik 
const SignUp = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ username, password, firstName, lastName }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            username: username || "",
            password: password || ""
        };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        firstName: Yup
        .string()
        .required("Please Enter Last Name"),
        lastName: Yup
        .string() 
        .required("Please Enter First Name"),
        username: Yup
        .string()
        .required("Please Enter A Valid Username"),
        password: Yup
        .string()
        .min(4)
        .required("Password Must Be More Than 3 Characters"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        // console.log("values, props", values, props)
        
        axios
            .post('https://cs2345-db-api.herokuapp.com/admin', values)
            .then(response => {
                // successful 
                console.log("sign up form api response object", response.data);
                
                props.history.push('/Admin/Login')
            }) 
    
            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });

        resetForm(); 
    }

})(SignUpForm); // currying functions

export default SignUp; 