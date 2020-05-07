import React from 'react';
import { makeStyles, createStyles, Theme, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Auth } from '../../firebase';
import { useRouter } from 'next/router';



const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            title: {
                flexGrow: 1,
            },
        }),
);

const TopBar = (props) => {

    const classes = useStyles();

    const router = useRouter();

    const triggerOpen = () => {
        props.openDrawer();
    };

    const logOut = () => {
      Auth.signOut()
        .then(() => {
          router.push('/sign-in');
        })
        .catch(() => {
          console.log('Error signing out');
        });
    };

    return (
        <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={triggerOpen} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NH Companion
          </Typography>
          <Button color="inherit" onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;