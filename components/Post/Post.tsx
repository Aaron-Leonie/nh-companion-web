import React from 'react';
import styles from './Post.module.css'
import PostHeader from './PostHeader/PostHeader';
import TextBody from './TextBody/TextBody';
import EventBody from './EventBody/EventBody';
import { PostHeaderProps } from './PostHeader/PostHeader';
import { TextBodyProps } from './TextBody/TextBody';
import { EventBodyProps } from './EventBody/EventBody';


interface PostProps {
    type: string,
    postHeader: PostHeaderProps,
    textBody?: TextBodyProps,
    eventBody?: EventBodyProps,
};

const Post  = (props: PostProps) => {

    let postBody;

    switch(props.type) {
        case 'text':
            postBody = (
                <TextBody {...props.textBody} />
            );
            break;
        case 'event':
            postBody = (
                <EventBody 
                    {...props.eventBody}
                />
            );
            break;
        default:
            break;
    }

    return (
        <div className={styles.postContainer}>
            <div className={styles.post}>
                <PostHeader {...props.postHeader}/>
                {postBody}
            </div>
        </div>
    );
}

export default Post;

// TODO: Make post type -- render on post type
// Make status post componenet