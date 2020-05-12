import React from 'react';
import { useRouter } from 'next/router';
import { withAuth } from '../../../providers/AuthProvider';
import SignedIn from '../../../layouts/SignedIn';
import { makeStyles } from '@material-ui/core';
import ProfileAbout from '../../../components/ProfileAbout/ProfileAbout';

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

const UserProfile = () => {

    const router = useRouter();
    const { userId } = router.query;
    const classes = useStyles();

    return (
        <SignedIn>
            <div className={classes.parentPageContents}>
                <div className={classes.pageContents}>
                    {/* <h1>Hello {userId}</h1> */}
                    <ProfileAbout />
                </div>
            </div>
        </SignedIn>
    )
}

export default withAuth(UserProfile);