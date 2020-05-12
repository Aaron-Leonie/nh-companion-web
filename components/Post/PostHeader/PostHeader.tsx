import React from 'react';
import styles from './PostHeader.module.css';
import { Avatar} from '@material-ui/core';
import PostMenu from './PostMenu/PostMenu';

export interface PostHeaderProps {
    userId: string,
    avatarSrc: string,
    userFullName: string,
    islandName: string,
    createdAt: number,
};

const PostHeader  = (props: PostHeaderProps) => {


    const timeAgo = (date: number) => {
        var seconds = Math.floor((Date.now() - date) / 1000);
        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };


    return ( 
        <div className={styles.postHeader}>
            <Avatar className={styles.avatar}>AH</Avatar>
            <div className={styles.headerText}>
                <div className={styles.headerTextName}>
                    <span>{props.userFullName}</span>
                </div>
                <div className={styles.headerTextIsland}>
                    <span>{props.islandName}</span>
                    <span className={styles.bulletPoint}>&bull;</span>
                    <span>{timeAgo(props.createdAt) + ' ago'}</span>
                </div>
            </div>
            <PostMenu />
        </div>
    );
};

export default PostHeader;