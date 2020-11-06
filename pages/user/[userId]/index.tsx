import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { withAuthSync } from '../../../providers/Auth';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'
import SignedIn from '../../../layouts/SignedIn';
import { makeStyles } from '@material-ui/core';
import { PublicUser } from '../../../lib/interfaces';
import ProfileAbout from '../../../components/ProfileAbout/ProfileAbout';
import Post from '../../../components/Post/Post';
import Head from 'next/head';
import ErrorPage from 'next/error'

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

const FETCH_PUBLIC_USER = gql`
query GetPublicUser($userId: String!) {
    getPublicUser(userId: $userId) {
        userId,
        avatarUrl,
        friendCode,
        aboutText,
        userName,
        islandName
    }
}
`;

const UserProfile = () => {

    const router = useRouter();
    const { userId } = router.query;
    const classes = useStyles();
    const { loading, error, data } = useQuery(FETCH_PUBLIC_USER, {variables: {userId}});
    const publicUser: PublicUser = data && data.getPublicUser;

    if(error) {
        return (<ErrorPage statusCode={404}></ErrorPage>);
    }
    
    if(loading) {
        return(<SignedIn>Loading...</SignedIn>);
    }

    return (
        <SignedIn>
            <Head>
                <title>{`${publicUser.userName} - Profile`}</title>
            </Head>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    <ProfileAbout 
                        publicUser={publicUser}
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

export default withAuthSync(UserProfile);