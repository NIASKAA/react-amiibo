import React from 'react'
import {Card, CardHeader, Typography, CardContent, Container} from '@material-ui/core'
import useStyles from './styles.js'
const About = () => {
    const classes = useStyles();
    return (
        <>
            <Container>
                <Card>
                    <CardHeader title="About Amiibo Search Engine"></CardHeader>
                    <CardContent>
                        <Typography>
                                Amiibo Search Engine is a website that is purely on searching up your favorite amibbos. 
                                It will display information on what the amiibo's game series is from. It will also display 
                                the release dates in different regions. Amiibo Search Engine is still in it's early stages 
                                so more functions will be added later on!
                                <br/>
                                If you have any questions, please use the contact button and it will direct you to us. Thank you!
                        </Typography>
                    </CardContent>
                    <img className="marioBow" src="/images/marioBow.png" alt="marioBow"></img>
                </Card>
            </Container>
        </>
    )
}

export default About
