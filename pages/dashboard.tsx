import React, {useContext, useEffect} from 'react';
import { Auth } from '../firebase';
import { withAuth, UserConext  } from '../providers/AuthProvider';
import { useRouter } from 'next/router';
import { Button, makeStyles } from '@material-ui/core';
import SingedIn from '../layouts/SignedIn';
import PostField from '../components/PostField/PostField';
import Post from '../components/Post/Post';


const useStyles = makeStyles({
    pageContents: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        maxWidth: 600,
    },
    parentPageContents: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
});

const dashboard = (props) => {
    const classes = useStyles();
    const router = useRouter();
    const user = useContext(UserConext);
    console.log(user);

    const handleSignOut = (e) => {
        router.push('/sign-in');
        Auth.signOut();
    };

    return (
        <SingedIn>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    <PostField />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </SingedIn>
    );
}


export default withAuth(dashboard);
