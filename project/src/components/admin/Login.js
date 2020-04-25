import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../../styles/LoginSign.css';

const LoginForm = (props, { status }) => {
    
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    // hook keeps track of login information 
    const [login, setLogin] = useState({});

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setLogin(user => ({...login, user}))
        }
    }, [status, login]); 

    return(
        <div id="login-container">
            <h1>Sign In</h1>

            <Form 
                className="sl-form"
                onSubmit={handleSubmit}
                >

                {/* username */}
                <h2 className="sl-placeholder">Username</h2>
                <Field 
                    type="text" 
                    name="username" 
                    placeholder="Enter Username"
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
                    placeholder="Enter Password" 
                    className="text-field"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched.password && errors.password && <p className="sl-error">{errors.password}</p>}

                <button type="submit" className="sl-button">Submit</button>

                <Link to="/Admin/Register" id="create"><p>Create an account</p></Link>
            </Form>
        </div>
    );
};

// using formik 
const Login = withFormik({
    
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
            .post('https://cs2345-db-api.herokuapp.com/admin/login', values)
            .then(response => {
                // successful 
                console.log("post login api response object", response.data);
                
                localStorage.setItem('token', response.data.jwt);

                props.history.push('/Admin')
            }) 
    
            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
            });
        
        resetForm();
    }

})(LoginForm); // currying functions

export default Login;  