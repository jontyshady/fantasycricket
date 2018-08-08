import React from 'react';
import { Button } from 'reactstrap';
import { AvForm, AvField, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import './signup.css';


const signup = (props) =>{

    const handleValidSubmit = (event, values)=>{
        const name = values.name;
        const email = values.email;
        const password = values.password;
        props.signup({
            name : name,
            email: email,
            password : password
        })

    }
    return (
        <React.Fragment>
    
            <AvForm onValidSubmit={handleValidSubmit} >
    
                <AvField name="name" placeholder="Name" type="text" required />
    
                <AvField name="email" placeholder="Email" type="email" required />
    
                <AvField name="password" placeholder="Password" type="password" required />
    
                <Button className="signup_submit" >
                    Submit
                </Button>
            </AvForm>
    
        </React.Fragment>
    )
} 

export default signup;
