import React, {useContext, useEffect} from 'react';
import { Auth } from '../firebase';
import { withAuth, UserConext  } from '../providers/AuthProvider';
import { useRouter } from 'next/router';
import { Button, makeStyles } from '@material-ui/core';
import SignedIn from '../layouts/SignedIn';
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
        <SignedIn>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    <PostField />
                    <Post 
                        type="text"
                        postHeader={{
                            createdAt:1589233544224,
                            userFullName: 'Aaron Hawkey',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        textBody={{
                            postBody: 'This is my post. Hello everyone. I want some fucking turnips.'
                        }}
                    />
                    <Post 
                        type="event"
                        postHeader={{
                            createdAt:1589233547224,
                            userFullName: 'Aaron Hawkey',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        eventBody={{
                            eventTitle: 'Island Name\'s gates are open.',
                            body: 'Come on friends. Lets party on my island.',
                            inviteStatus: 'Friends Only',
                        }}
                    />
                    <Post 
                        type="text"
                        postHeader={{
                            createdAt: 1589233547224,
                            userFullName: 'Aaron Hawkey',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        textBody={{
                            postBody: 'ASDF',
                        }}
                    />
                </div>
            </div>
        </SignedIn>
    );
}


export default withAuth(dashboard);
