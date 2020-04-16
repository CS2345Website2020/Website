import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../../styles/LoginSign.css'

const SignUpForm = ({ errors, touched, values, handleSubmit, status, props}) => {

    // hook keeps track of login information 
    const [admin, setAdmin] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setAdmin(info => ({...admin, info}))
        }
    }, [status]); 

    return(
        <div id="sign-container">
            <div id="sign-text">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            </div>
            <Form className="form">
                {/* username */}
                <h2 className="placeholder">Userame</h2>
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Userame"
                    className="text-field"
                />
                {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}


                {/* password */}
                <h2 className="placeholder">Password</h2>
                <Field 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="text-field"
                />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                <p>By creating an account to our <a href="https://library.bowdoin.edu/">Terms and Privacy</a>.</p>
                <button type="submit" className="button">Submit</button>
            </Form>
        </div>
    );
};

// using formik 
const SignUp = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        username: Yup
        .string()
        .required("Please Enter Your Username"),
        password: Yup
        .string()
        .required("Please Enter Your Password"),
    }),
    
    // update values and set status 
    handleSubmit(values, { resetForm, props }) {
        // console.log("values, props", values, props)
        
        axios
            .post('https://artmuseumdraft.herokuapp.com/auth/register', values)
            .then(response => {
                // successful 
                console.log("post login api response object", response.data);
                
                props.history.push('/Login')
            }) 
    
            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });

        resetForm(); 
    }

})(SignUpForm); // currying functions

export default SignUp; 