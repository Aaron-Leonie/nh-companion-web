import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './DrawerNav.module.css';
import { makeStyles } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import Link from 'next/link';


const useStyles = makeStyles({
    navPaper: {
        backgroundColor: '#73B9CB',
        color: 'white',
        fontWeight: 550,
        width: 250,
    }
});


const DrawerNav = (props) => {

    const handleClose = () => {
        props.onClose();
    }

    const muiStyles = useStyles();


    
    return (
        <div className={styles.navContainer}>
            <Drawer 
            anchor="left" 
            open={props.open} 
            onClose={handleClose} 
            style={{zIndex: 1101}}
            classes={{paper: muiStyles.navPaper}}
            >
                <List>
                    <Link href='/feed'>
                        <ListItem>
                            <ListItemIcon><ListIcon style={{color: 'white'}}/></ListItemIcon>
                            <ListItemText primary="News Feed" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
}

export default DrawerNav;