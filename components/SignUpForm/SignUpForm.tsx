import React, {useState} from 'react';
import { Container, Paper, TextField, Button } from '@material-ui/core'
import { Auth } from '../../firebase';
import styles from './SignUpForm.module.css';
import { useRouter } from 'next/router';

interface FormState {
    email: string,
    password: string,
    confirmPassword: string,
    errors: {
        email: boolean,
        password: boolean,
        confirmPassword: boolean,
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

        }
    } as FormState);

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
                break;
            case 'confirmPassword':
                errors.confirmPassword = value !== form.password;
                break;
            default:
                break;
        }
        setform({...form, errors, [name]: value});
        console.log(form.errors.confirmPassword && form.errors.password && form.errors.email);
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

        if(!form.errors.confirmPassword && !form.errors.password && !form.errors.email) {
            Auth.createUserWithEmailAndPassword(form.email, form.password)
            .then(()=> {
                router.replace('/');
            })
            .catch((e) => {
                console.log(e);
                router.replace('/');
            });
        }
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
                    disabled={form.errors.confirmPassword && form.errors.password && form.errors.email}
                    onClick={handleSignUp}
                >
                    Sign In
                </Button>
            </form>
        </Paper>
    )
}

export default SignUpForm;