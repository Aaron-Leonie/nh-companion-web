import React, {useState, useContext} from 'react';
import {Container, Button, makeStyles, Theme, createStyles } from '@material-ui/core';
import BottomNav from '../components/BottomNav/BottomNav';
import DrawerNav from '../components/DrawerNav/DrawerNav';
import TopBar from '../components/TopBar/TopBar';
import { withAuth, UserConext } from '../providers/AuthProvider';


const SingedIn = (props) => {

    const [drawer, setdrawer] = useState(false);
    const user = useContext(UserConext);
    console.log(user);

    const handleClose = () => {
        setdrawer(prv => (!drawer));
    };

    const openDrawer = () => {
        setdrawer(!drawer);
    };
    
    
    return (
        <React.Fragment>
            <TopBar openDrawer={openDrawer}/>
            <Container>
                <Button onClick={openDrawer} color="primary">Open </Button >
                <DrawerNav open={drawer} onClose={handleClose}/>
                    {props.children}
                <BottomNav />
            </Container>
        </React.Fragment>
    );

}

export default withAuth(SingedIn);