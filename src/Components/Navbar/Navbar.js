import React, {useState} from 'react'
import {AppBar, Toolbar, Button, IconButton, Modal} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css'

const Navigation = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={""} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <Button onClick={""} color="inherit">Examples</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
