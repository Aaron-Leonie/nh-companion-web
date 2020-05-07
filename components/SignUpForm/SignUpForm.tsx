import React, {useState} from 'react';
import { Container, Paper, TextField, Button } from '@material-ui/core'
import { Auth } from '../../firebase';
import styles from './SignUpForm.module.css';
import SimpleDialog from '../SimpleDialog/SimpleDialog';
import { useRouter } from 'next/router';

interface FormState {
    email: string,
    password: string,
    confirmPassword: string,
    errors: {
        email: boolean,
        password: boolean,
        confirmPassword: boolean,
    },
    dialog: {
        title: string,
        message: string,
        opened: boolean,
    }
}


const SignUpForm = () => {
    const router = useRouter();

    const [form, setform] = useState({
        email: '', 
        password: '', 
        confirmPassword: '',
        errors: {
            email: false,
            password: false,
            confirmPassword: false,

        },
        dialog: {
            title: '',
            message: '',
            opened: false,
        }
    } as FormState);

    // Holds if form is currently valid
    const isValid: boolean = 
        (form.email.length > 0 && !form.errors.email) && 
        (form.password.length >= 8 && !form.errors.password) &&
        (form.confirmPassword.length >= 8 && form.password === form.confirmPassword);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = form.errors;

        switch(name){
            case 'email': 
                errors.email = !validEmailRegex(value);
                break;
            case 'password':
                errors.password = value.length < 8;
                if(form.confirmPassword.length > 0) {
                    errors.confirmPassword = form.confirmPassword !== value;
                }
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== form.password;
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

    const handleSignUp = (e) => {
        e.preventDefault();

        if(isValid) {
            Auth.createUserWithEmailAndPassword(form.email, form.password)
            .then(()=> {
                router.push('/');
            })
            .catch((e) => {
                setform({
                    ...form,
                    dialog: {
                        opened: true,
                        message: 'Please try again later.',
                        title: 'Error Signing Up'
    
                    }
                });
            });
        } else {
            setform({
                ...form,
                dialog: {
                    opened: true,
                    message: 'Please enter valid information.',
                    title: 'Error Signing Up'

                }
            });
        }
    }

    const handleClose = (): void => {
        setform({ 
            ...form,
            dialog: {
                ...form.dialog,
                opened: false,
            }
        });
    }

    return (
        <Paper className={styles.paper}>
            <h1>Sign Up</h1>
            <form className={styles.signInForm}>
                <TextField 
                    className={styles.textInputs} 
                    id="standard-basic" 
                    label="Email" 
                    required 
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    error={form.errors.email}
                    helperText={!form.errors.email ? '' : 'Enter a valid email'}
                />
                <TextField 
                    type="password"
                    className={styles.textInputs} 
                    id="standard-basic" 
                    label="Password" 
                    required 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange} 
                    error={form.errors.password}
                    helperText={!form.errors.password ? '' : 'Must be 8 characters'}
                />

                <TextField 
                    type="password"
                    className={styles.textInputs} 
                    id="standard-basic"
                    label="Confirm Password"
                    required
                    placeholder="Password"
                    name="confirmPassword"
                    onChange={handleChange}
                    error={form.errors.confirmPassword}
                    helperText={!form.confirmPassword ? '' : 'Password must match'}
                />

                <Button className={styles.submit}
                    variant="contained" 
                    color="primary" 
                    disabled={!isValid}
                    onClick={handleSignUp}
                >
                    Sign In
                </Button>
            </form>
            <SimpleDialog 
                open={form.dialog.opened}
                title={form.dialog.title}
                body={form.dialog.message}
                onClose={handleClose}
            />
        </Paper>
    )
}

export default SignUpForm;