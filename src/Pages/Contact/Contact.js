import React, {useState} from 'react'
import {TextField} from '@material-ui/core'
import {send} from 'emailjs-com'
const Contact = () => {
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
           <form onSubmit={onSubmit}>
                <TextField 
                    label="Name" 
                    value={toSend.fromName}
                    type="name" 
                    onChange={handleChange}
                />

                <TextField 
                    label="Email" 
                    value={toSend.replyTo}
                    type="Email" 
                    onChange={handleChange}
                />
                <TextField 
                    label="Message" 
                    maxRows={4}
                    value={toSend.message}
                    type="message" 
                    onChange={handleChange}
                />
           </form>
        </>
    )
}

export default Contact
