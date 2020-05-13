import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import SettingsIcon from '@material-ui/icons/Settings';
import BeetsIcon from '../Icons/BeetsIcon';


const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: '#148AA8',
    },
    buttonSelected:{
        color: '#ffffff !IMPORTANT'
    }
  });


const BottomNav = () => {

    const classes = useStyles();

    const buttonClass = {
        color: '#ffffff',
    }
    
    const [value, setValue] = React.useState('Feed');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction classes={{selected: classes.buttonSelected}} label="Feed" value="Feed" icon={<ListIcon/>}/>
            <BottomNavigationAction classes={{selected: classes.buttonSelected}} label="Tasks" value="Tasks" icon={<TodayIcon />} />
            <BottomNavigationAction classes={{selected: classes.buttonSelected}} label="Bugs" value="Bugs" icon={<EmojiNatureIcon />}/>
            <BottomNavigationAction classes={{selected: classes.buttonSelected}} label="Turnips" value="Turnips" icon={<BeetsIcon />}/>
            <BottomNavigationAction classes={{selected: classes.buttonSelected}} label="Settings" value="Settings" icon={<SettingsIcon />}/>
        </BottomNavigation>
    );
}

export default BottomNav;