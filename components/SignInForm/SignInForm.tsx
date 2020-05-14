import React, {useState} from 'react';
import { Container, Paper, TextField, Button, Dialog, DialogTitle, makeStyles, DialogContentText, DialogContent } from '@material-ui/core'
import { Auth } from '../../firebase';
import SimpleDialog from '../SimpleDialog/SimpleDialog'
import styles from './signin.module.css';
import { useRouter } from 'next/router';

interface FormState {
    email: string,
    password: string,
    errors: {
        email: boolean,
        password: boolean,
    },
    apiErrorMessage: string,
    dialogOpen: boolean
};


const SignInForm = () => {
    const router = useRouter();

    const [form, setform] = useState({
        email: '', 
        password: '',
        errors: {
            email: false,
            password: false,
        },
        apiErrorMessage: '',
        dialogOpen: false,
    } as FormState);

    const isValid: boolean = (
        (form.email.length > 0 && !form.errors.email) && 
        (form.password.length >= 8 && !form.errors.password)
    ); 


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = form.errors;

        switch (name) {
            case 'email':
                errors.email = !validEmailRegex(value);
                break;
            case 'password':
                errors.password = value.length < 8;
                break; 
            default:
                break;
        }
        setform({...form, errors, [name]: value});
    };

    const validEmailRegex = (email: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        } else {
            return false;
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (isValid) {
            Auth.signInWithEmailAndPassword(form.email, form.password)
            .then(()=> {
                router.push('/feed');
            })
            .catch((e) => {
                setform({
                    ...form, 
                    password: '', 
                    email: '', 
                    dialogOpen: true, 
                    apiErrorMessage:'Email and password invalid.' 
                });
            });
        } else {
            setform({...form, dialogOpen: true, apiErrorMessage:'Email and password invalid.'});
        }
    }

    const handleClose = () => {
        setform({
            ...form,
            dialogOpen: false,
        });
    }

    return (
        <Paper className={styles.paper}>
            <h1>Sign In</h1>
            <form className={styles.signInForm}>
                <TextField 
                    className={styles.textInputs} 
                    value={form.email}
                    id="standard-basic" 
                    label="Email" 
                    required 
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                />
                <TextField 
                    type="password"
                    value={form.password}
                    className={styles.textInputs} 
                    id="standard-basic" 
                    label="Password" 
                    required 
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                />

                <Button className={styles.submit}
                    variant="contained" 
                    color="primary" 
                    onClick={handleSignIn}
                    disabled={!isValid}
                >
                    Sign In
                </Button>
            </form>
            <SimpleDialog 
                title={'Cannot Sign In'} 
                body={form.apiErrorMessage}
                open={form.dialogOpen}
                onClose={handleClose}
            />
        </Paper>
    )
}

export default SignInForm;