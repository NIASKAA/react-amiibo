import React, {useState} from 'react'
import {AppBar, Toolbar, Button, IconButton, Modal} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'; 
import './styles.css'

const Navigation = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <AppBar position="static" className="navbar">
                <Toolbar>
                    <IconButton edge="start" className={""} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Button component={Link} to={"/"} color="inherit">Home</Button>
                    <Button component={Link} to={"/about"} color="inherit">About</Button>
                    <Button onClick={""} color="inherit">Examples</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
