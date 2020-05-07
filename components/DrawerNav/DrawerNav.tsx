import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const DrawerNav = (props) => {

    const handleClose = () => {
        props.onClose();
    }


    
    return (
        <Drawer anchor="left" open={props.open} onClose={handleClose} style={{zIndex: 1101}}>
            <List>
                <ListItem>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default DrawerNav;