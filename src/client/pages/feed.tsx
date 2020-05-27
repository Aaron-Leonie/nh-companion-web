import React from 'react';
import { withAuthSync } from '../providers/Auth';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import SignedIn from '../layouts/SignedIn';
import PostField from '../components/PostField/PostField';
import Post from '../components/Post/Post';
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
        flexDirection: 'column'
    }
});

const CREATE_POST = gql`
mutation CreatePost($post: NewPost!) {
    createPost(newPost: $post) {
        postId,
        user {
            userId,
            avatarUrl,
            islandName,
            userName
        },
        postType,
        textBody {
            body
        },
        eventBody {
            eventTitle,
            body,
            inviteStatus
        }
    }
}
`;

const dashboard = (props) => {
    const classes = useStyles();
    const router = useRouter();

    const [createPost, { data }] = useMutation(CREATE_POST);

    // TODO create event for Open Flights 
    const handleDialoguePublishClick = (type, event, eventPermissions, dodoCode, postBody) => {
        let inviteStatus: string;
        if (dodoCode) {
            inviteStatus = `Dodo Code: ${dodoCode}`;
        } else {
            inviteStatus = eventPermissions;
        }
        
        const newPost = {
            postType: 'event',
            eventBody: {
                // TODO Append user Island Name to event message
                eventTitle: event.eventMessage,
                body: postBody,
                inviteStatus,
            },
        };

        return createPost({variables: { post: { ...newPost } } })
            .then(() => {
                console.log('Sucess');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <SignedIn>
            <Head>
                <title>News Feed</title>
            </Head>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    <PostField handleDialoguePublishClick={handleDialoguePublishClick}/>
                    <Post 
                        type="text"
                        postHeader={{
                            createdAt:1589233544224,
                            userFullName: 'AfterMidnight',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        textBody={{
                            postBody: 'This is my post. Hello everyone.'
                        }}
                    />
                    <Post 
                        type="event"
                        postHeader={{
                            createdAt:1589233547224,
                            userFullName: 'AfterMidnight',
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
                            userFullName: 'AfterMidnight',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        textBody={{
                            postBody: 'ASDF',
                        }}
                    />
                    <Post 
                        type="event"
                        postHeader={{
                            createdAt:1589233547224,
                            userFullName: 'AfterMidnight',
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
                            userFullName: 'AfterMidnight',
                            islandName: 'Island Name',
                            userId: 'asd2389huif3',
                            avatarSrc: 'asdasdassdasda.com'
                        }}
                        textBody={{
                            postBody: 'ASDF',
                        }}
                    />
                    <Post 
                        type="event"
                        postHeader={{
                            createdAt:1589233547224,
                            userFullName: 'AfterMidnight',
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
                            userFullName: 'AfterMidnight',
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


export default withAuthSync(dashboard);
