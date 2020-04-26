import React from 'react';
import { Container } from '@material-ui/core';
import SignInForm from '../components/SignInForm/SignInForm';


const SignIn = () => {
    return (
        <Container style={styles.pageContainer}>
            <SignInForm />
        </Container>
    )
}

const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
    }

}

export default SignIn;