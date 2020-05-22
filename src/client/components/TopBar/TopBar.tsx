import React from 'react';
import { makeStyles, createStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import { logout } from '../../lib/auth';



const useStyles = makeStyles((theme) =>
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


    return (
        <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton onClick={triggerOpen} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NH Companion
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;