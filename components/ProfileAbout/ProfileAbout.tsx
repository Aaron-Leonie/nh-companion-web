import React from 'react';
import styles from './ProfileAbout.module.css';
import {Avatar} from '@material-ui/core';


const ProfileAbout = (props) => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutHeader}>
                <Avatar className={styles.avatar}>AH</Avatar>
                <div className={styles.titleAbout}>
                    <div className={styles.nameText}>
                        <span>After Midnight</span>
                    </div>
                    <div className={styles.islandName}>
                        <span>Island Name</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;