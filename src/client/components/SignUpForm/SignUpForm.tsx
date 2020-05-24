import React, {useState} from 'react';
import { Paper, TextField, Button, FormGroup, Avatar } from '@material-ui/core'
import styles from './SignUpForm.module.css';
import SimpleDialog from '../SimpleDialog/SimpleDialog';
import { useRouter } from 'next/router';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import Link from 'next/link';

interface FormState {
    email: string,
    password: string,
    confirmPassword: string,
    avatarUpload: string,
    avatarFileRaw: any,
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

const SIGN_UP = gql`
mutation SignUp($input: NewUserInput!) {
    createUser(input: $input){
        userId
    }
}
`;


const SignUpForm = () => {
    const router = useRouter();

    const [signUp , { data }] = useMutation(SIGN_UP);

    const [form, setform] = useState({
        email: '', 
        password: '', 
        confirmPassword: '',
        avatarUpload: '',
        avatarFileRaw: null,
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

    const [avatar, setAvatar] = useState({} as any);

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
            signUp({variables: {input: {email: form.email, password: form.password}}})
            // Auth.createUserWithEmailAndPassword(form.email, form.password)
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

    const imageChange = (e) => {
        if(e.target.files.length) {
            setAvatar({
                preview: e.target.value,
                raw: e.target.files[0]
            });
        }
    }

    const clearFileEvent = (e) => {
        e.target.value = null;
    };

    return (
        <Paper className={styles.paper}>
            <h2>Create an Account</h2>
            <FormGroup className={styles.signInForm}>
                <label htmlFor="avatarUpload">
                    <p>Set your avatar</p>
                    { !avatar.preview ?
                    (<Avatar style={{width: 100, height: 100}}>Upload</Avatar>) :
                    (<Avatar style={{width: 100, height: 100}} src={URL.createObjectURL(avatar.raw)}></Avatar>)    
                    }
                </label>
                <input 
                    type="file" 
                    id="avatarUpload" 
                    style={{display: 'none'}}
                    onChange={imageChange} 
                    accept=".png,.jpg,.jpeg"
                    name="avatarUpload"
                    onClick={clearFileEvent}
                />
                <TextField 
                    className={styles.textInputs} 
                    label="Email" 
                    required 
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    error={form.errors.email}
                    helperText={!form.errors.email ? '' : 'Enter a valid email'}
                    color="primary"
                    variant="outlined"
                    margin="normal"
                />
                <TextField 
                    type="password"
                    className={styles.textInputs} 
                    label="Password"
                    inputProps={{color: "primary"}}
                    required 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange} 
                    error={form.errors.password}
                    helperText={!form.errors.password ? '' : 'Must be 8 characters'}
                    color="primary"
                    variant="outlined"
                    margin="normal"
                />

                <TextField 
                    type="password"
                    className={styles.textInputs} 
                    label="Confirm Password"
                    required
                    placeholder="Password"
                    name="confirmPassword"
                    onChange={handleChange}
                    error={form.errors.confirmPassword}
                    helperText={!form.confirmPassword ? '' : 'Password must match'}
                    color="primary"
                    variant="outlined"
                    margin="normal"
                />

                {/* TODO: Dirty */}
                <div style={{marginTop: 20, marginBottom: 20, width: '100%'}}>
                    <Button className={styles.submit}
                        variant="contained" 
                        color="primary" 
                        disabled={!isValid}
                        onClick={handleSignUp}
                    >
                        Continue
                    </Button>
                </div>
            </FormGroup>
            <div className={styles.signInContainer}>
                <span>Already have an account?</span>
                <div style={{marginTop: 10}}>
                    <Link href="/sign-in" as={`/sign-in`}>
                        <Button variant="outlined" color="secondary" >
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>
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