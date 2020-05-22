import React, {useState, useContext} from 'react';
import BottomNav from '../components/BottomNav/BottomNav';
import DrawerNav from '../components/DrawerNav/DrawerNav';
import TopBar from '../components/TopBar/TopBar';
import { withAuth } from '../providers/AuthProvider';
import { withStyles } from '@material-ui/styles';
import cssStlyes from './SignedIn.module.css';
import { withAuthSync } from '../providers/Auth';


const styles = theme => ({
    toolbar: theme.mixins.toolbar,
  });



const SingedIn = (props) => {

    const { classes } = props; 

    const [drawer, setdrawer] = useState(false);

    const handleClose = () => {
        setdrawer(prv => (!drawer));
    };

    const openDrawer = () => {
        setdrawer(!drawer);
    };
    
    
    return (
        <React.Fragment>
            <TopBar openDrawer={openDrawer}/>
            <div className={classes.toolbar}/>
            <DrawerNav open={drawer} onClose={handleClose}/>
                <div className={cssStlyes.container}>
                    {props.children}
                </div>
            <BottomNav />
        </React.Fragment>
    );

}

export default withStyles(styles)(withAuthSync(SingedIn));