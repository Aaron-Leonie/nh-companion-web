import React from 'react';
import { useRouter } from 'next/router';
import { withAuth } from '../../../providers/AuthProvider';
import SignedIn from '../../../layouts/SignedIn';
import { makeStyles } from '@material-ui/core';
import ProfileAbout from '../../../components/ProfileAbout/ProfileAbout';
import Post from '../../../components/Post/Post';
import Head from 'next/head';

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
        flexDirection: 'column',
        margin: 15,
    }
});

const UserProfile = () => {

    const router = useRouter();
    const { userId } = router.query;
    const classes = useStyles();
    const [state, setState] = React.useState({userId: 'asd2389huif3', userFullName: 'Aaron Hawkey'});

    return (
        <SignedIn>
            <Head>
                <title>{`${state.userFullName} - Profile`}</title>
            </Head>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    <ProfileAbout 
                        userFullName="After Midnight"
                        islandName="Island Name"
                        userFriendCode="Friend Code: SW-1234-5678-9012"
                        userAbout="This is a lot of text about me. I need lots of money. Give me all your money bitch."
                    />
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
    )
}

export default withAuth(UserProfile);