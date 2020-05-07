import React, {useContext, useEffect} from 'react';
import { Auth } from '../firebase';
import { withAuth, UserConext  } from '../providers/AuthProvider';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import SingedIn from '../layouts/SignedIn';

const dashboard = (props) => {
    const router = useRouter();
    const user = useContext(UserConext);
    console.log(user);

    const handleSignOut = (e) => {
        router.push('/sign-in');
        Auth.signOut();
    };

    return (
        <SingedIn>
            <Button onClick={handleSignOut} color="primary" variant="contained">Sign Out</Button>
            <h1>Welcome</h1>
            <p>{user.uid}</p>
        </SingedIn>
    );
}


export default withAuth(dashboard);
