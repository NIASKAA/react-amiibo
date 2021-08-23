import React, {useState} from 'react'
import {FormControl, TextField, Button} from '@material-ui/core'
import {send} from 'emailjs-com'
import useStyles from './styles.js'

const Contact = () => {
    const classes = useStyles();
    const [toSend, setToSend] = useState({
        fromName: '',
        replyTo: '',
        message: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send('service_fwnoj3b', 'template_j66lou7', toSend, 'user_7VsQOjvdMWICsgKL3qCvS')
        .then((response) => {
            console.log('Success!', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed', err)
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})
    }
    return (
        
        <>
        <h2>Contact</h2>
           <form onSubmit={onSubmit}>
                <FormControl>
                        <TextField 
                            label="Name" 
                            value={toSend.fromName}
                            className={classes.nameInput}
                            type="name" 
                            onChange={handleChange}
                            variant="filled"
                        />
                </FormControl>
                <br/>
                <FormControl>
                    <TextField 
                        label="Email" 
                        value={toSend.replyTo}
                        className={classes.emailInput}
                        type="Email" 
                        onChange={handleChange}
                        variant="filled"
                    />
                </FormControl>
                <br/>
                <FormControl>
                    <TextField 
                        label="Message" 
                        rows={4}
                        multiline
                        value={toSend.message}
                        className={classes.messageInput}
                        type="message" 
                        onChange={handleChange}
                        variant="filled"
                    />
                </FormControl>
                <br/>
                <Button type="submit" variant="primary" className="sendIt">Send It!</Button>
           </form>
        </>
    )
}

export default Contact
