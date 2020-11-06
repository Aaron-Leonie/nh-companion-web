import React, { useState } from 'react';
import styles from './ProfileAbout.module.css';
import {Avatar, IconButton, Button, TextField, TextareaAutosize} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import cn from 'classnames';
import { PublicUser } from '../../lib/interfaces';
import { getUser } from '../../lib/auth';

export interface ProfileAboutProps {
    publicUser: PublicUser
};


const ProfileAbout = (props: ProfileAboutProps) => {

    const currentUser = getUser();
    const [publicUser, setPublicUser] = useState(props.publicUser);
    const [editToggle, setEditToggle] = useState(false);

    // Functions
    const handleEditClick = () => {
        setEditToggle(!editToggle);
    }

    const handleSave = () => {
        setEditToggle(!editToggle);
    }

    const handleUserUpdate = (e, fieldName) => {
        switch(fieldName) {
            case 'aboutText':
                setPublicUser({...publicUser, aboutText: e.target.value});
                break;
            case 'islandName':
                setPublicUser({...publicUser, islandName: e.target.value});
                break;
            case 'friendCode':
                setPublicUser({...publicUser, friendCode: e.target.value});
                break;
            default:
                break;
        }
    }


    // Templates
    
    if(currentUser === props.publicUser.userId && !editToggle) {
        return (
            <div className={cn(styles.aboutContainer, 'card')}>
                <div className={styles.aboutHeader}>
                    <Avatar className={styles.avatar} src={publicUser.avatarUrl}>AH</Avatar>
                    <div className={styles.titleAbout}>
                        <div className={styles.nameText}>
                            <span>{publicUser.userName}</span>
                        </div>
                        <div className={styles.islandName}>
                            <span>{publicUser.islandName}</span>
                        </div>
                    </div>
                        <span className={styles.headerButtons}>
                            <IconButton><PersonAddIcon /></IconButton>
                            <IconButton><HomeIcon /></IconButton>
                            <IconButton><InsertCommentIcon /></IconButton>
                            <IconButton onClick={handleEditClick}><EditIcon /></IconButton>
                        </span>
                </div>
                <div className={styles.friendCode}>
                    <p>{publicUser.friendCode}</p>
                </div>
                <div className={styles.aboutText}>
                    <p>{publicUser.aboutText}</p>
                </div>
            </div>
        );
    }

    if(currentUser !== props.publicUser.userId && !editToggle) {
        return (
            <div className={cn(styles.aboutContainer, 'card')}>
                <div className={styles.aboutHeader}>
                    <Avatar className={styles.avatar} src={publicUser.avatarUrl}>AH</Avatar>
                    <div className={styles.titleAbout}>
                        <div className={styles.nameText}>
                            <span>{publicUser.userName}</span>
                        </div>
                        <div className={styles.islandName}>
                            <span>{publicUser.islandName}</span>
                        </div>
                    </div>
                        <span className={styles.headerButtons}>
                            <IconButton><PersonAddIcon /></IconButton>
                            <IconButton><HomeIcon /></IconButton>
                            <IconButton><InsertCommentIcon /></IconButton>
                        </span>
                </div>
                <div className={styles.friendCode}>
                    <p>{publicUser.friendCode}</p>
                </div>
                <div className={styles.aboutText}>
                    <p>{publicUser.aboutText}</p>
                </div>
            </div>
        );
    }

    if (currentUser === props.publicUser.userId && editToggle) {
        return(
            <div className={cn(styles.aboutContainer, 'card')}>
                <div className={styles.aboutHeader}>
                    <Avatar className={styles.avatar} src={publicUser.avatarUrl}>AH</Avatar>
                    <div className={styles.titleAbout}>
                        <div className={styles.nameText}>
                            <span>{publicUser.userName}</span>
                        </div>
                        <div className={styles.islandName}>
                            <TextField 
                                label="Island Name" 
                                autoComplete="off" 
                                value={publicUser.islandName}
                                onChange = {(e) => {handleUserUpdate(e, 'islandName')}} />
                        </div>
                    </div>
                        <span className={styles.headerButtons}>
                            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                        </span>
                </div>
                <div className={styles.friendCode}>
                    <TextField  
                    label="Friend Code" 
                    autoComplete="off"
                    value={publicUser.friendCode}
                    onChange={(e) => {handleUserUpdate(e, 'friendCode')}}
                    />
                </div>
                <div className={styles.aboutText}>
                <TextareaAutosize 
                    className={styles.textArea} 
                    rowsMax={3} 
                    rowsMin={3} 
                    value={publicUser.aboutText} 
                    onChange={(e) => {handleUserUpdate(e, 'aboutText')}}/>
                </div>
            </div>
        );
    }
};

export default ProfileAbout;