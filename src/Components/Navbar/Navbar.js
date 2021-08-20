import React, {useState} from 'react'
import {AppBar, Toolbar, Button, IconButton, Modal} from '@material-ui/core'
import {Link} from 'react-router-dom'; 
import useStyles from './styles.js'

const Navigation = () => {
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    const body = (
        <div className={classes.paper}>
            Some names to search: Mario, Peach, Link, Isabella
            <br/>
            Some series to search could be: Super Mario, Legend of Zelda
        </div>
    )
    return (
        <>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Button component={Link} to={"/"} color="inherit">Home</Button>
                    <Button component={Link} to={"/about"} color="inherit">About</Button>
                    <Button onClick={handleOpen} color="inherit">Examples</Button>
                    <Modal 
                        open={openModal}
                        onClose={handleClose}
                    >
                        {body}
                    </Modal>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navigation
