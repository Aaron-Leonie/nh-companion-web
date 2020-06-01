import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import Router from 'next/router'

interface PostMenuProps {
    userId?: string,
};

const PostMenu = (props: PostMenuProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        // TODO: Handle redirect on click of menu item
        setAnchorEl(null);
    };

    return (
        <div style={{marginLeft: 'auto'}}>
            <IconButton onClick={handleClick}><MoreVertIcon /></IconButton>
            <Menu 
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                    <MenuItem onClick={() => {handleClose(); Router.push(`/user/${props.userId}`)} }>View Profile</MenuItem>
                <MenuItem onClick={handleClose}>Message User</MenuItem>
            </Menu>
        </div>
    );
}

export default PostMenu;