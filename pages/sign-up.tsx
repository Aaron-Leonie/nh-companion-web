import React from 'react';
import { Container } from '@material-ui/core';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUp = () => {
    return (
        <Container style={styles.pageContainer}>
            <SignUpForm />
        </Container>
    )
}

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
    }

}


export default SignUp;