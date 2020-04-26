import React, {useState} from 'react';
import { Container, Paper, TextField, Button } from '@material-ui/core'
import { Auth } from '../../firebase';
import styles from './signin.module.css';
import { useRouter } from 'next/router';

interface FormState {
    email: string,
    password: string
}


const SignInForm = () => {
    const router = useRouter();

    const [form, setform] = useState({email: '', password: ''} as FormState);

    const handleSignIn = (e) => {
        e.preventDefault();
        Auth.signInWithEmailAndPassword(form.email, form.password)
            .then(()=> {
                router.replace('/');
            })
            .catch((e) => {
                console.log(e);
                router.replace('/');
            });
    }

    return (
        <Paper className={styles.paper}>
            <h1>Sign In</h1>
            <form className={styles.signInForm}>
                <TextField 
                    className={styles.textInputs} 
                    id="standard-basic" 
                    label="Email" 
                    required 
                    placeholder="Email"
                    onChange={(e) => setform({...form, email: e.target.value})}
                />
                <TextField 
                    type="password"
                    className={styles.textInputs} 
                    id="standard-basic" 
                    label="Password" 
                    required 
                    placeholder="Password"
                    onChange={(p) => setform({...form, password: p.target.value})} 
                />

                <Button className={styles.submit}
                    variant="contained" 
                    color="primary" 
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
            </form>
        </Paper>
    )
}

export default SignInForm;