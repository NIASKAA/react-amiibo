import React, {useState, useEffect} from 'react'
import {TextField, FormControl, Card, CardHeader, Typography, CardContent, Container} from '@material-ui/core'
import axios from 'axios'
import useStyles from './styles.js'

const Home = () => {
    const [result, setResult] = useState(null)
    const [gameResult, SetGameResult] = useState(null)
    const [nameInput, setNameInput] = useState({value: ""})
    const [gameInput, setGameInput] = useState({value: ""})
    const url = `https://www.amiiboapi.com/api/amiibo/?name=${nameInput}`;
    const gameUrl = `https://www.amiiboapi.com/api/amiibo/?gameseries=${gameInput}`;

    const classes = useStyles();

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setResult(response.data.amiibo[0])
        }, [])
        .catch((error) => {
            console.log(error)
        })
    })

    useEffect(() => {
        axios.get(gameUrl)
        .then(response => {
            SetGameResult(response.data.amiibo[0])
        }, [])
        .catch((error) => {
            console.log(error)
        })
    })

    if(result) {
        return (
            <>
                <FormControl className="formContainer">
                    <TextField 
                        className={classes.nameInput}
                        onChange={(e) => setNameInput(e.target.value)} 
                        variant="outlined" 
                        label="Search through name"
                    />
                    
                    <TextField 
                        className={classes.gameInput}
                        onChange={(e) => setGameInput(e.target.value)} 
                        variant="outlined" 
                        label="Search through game series" 
                    />
                </FormControl>
                
                <Container>
                    <Card>
                        <CardHeader title={result.name} className="cardTitle"></CardHeader>
                        <img src={result.image}/>
                        <CardContent>
                            <Typography>
                                Character: {result.character}
                                <br/>
                                Amiibo Series: {result.amiiboSeries}
                                <br/>
                                Game Series: {result.gameSeries}
                                <br/>
                                Release Date for Australia: {result.release.au}
                                <br/>
                                Release Date for Europe: {result.release.eu}
                                <br/>
                                Release Date for Japan: {result.release.jp}
                                <br/>
                                Release Date for America: {result.release.na}
                                <br/>
                                Type: {result.type}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </>
        )
    }

    if(gameResult) {
        return (
            <>
               <FormControl className="formContainer">
                    <TextField 
                        className={classes.nameInput}
                        onChange={(e) => setNameInput(e.target.value)} 
                        variant="outlined" 
                        label="Search through name"
                    />
                    
                    <TextField 
                        className={classes.gameInput}
                        id="gameInput"
                        onChange={(e) => setGameInput(e.target.value)} 
                        variant="outlined" 
                        label="Search through game series" 
                    />
                </FormControl>
              
                <Container>
                    <Card>
                        <CardHeader title={gameResult.name} className="cardTitle"></CardHeader>
                        <img src={gameResult.image}/>
                        <CardContent>
                            <Typography>
                                Character: {gameResult.character}
                                <br/>
                                Amiibo Series: {gameResult.amiiboSeries}
                                <br/>
                                Game Series: {gameResult.gameSeries}
                                <br/>
                                Release Date for Australia: {gameResult.release.au}
                                <br/>
                                Release Date for Europe: {gameResult.release.eu}
                                <br/>
                                Release Date for Japan: {gameResult.release.jp}
                                <br/>
                                Release Date for America: {gameResult.release.na}
                                <br/>
                                Type: {gameResult.type}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </>
        )
    }

    return (
        <>
            <img src="/images/amiibo.png" alt="amiiboLogo" className={classes.amiiboLogo}/>
            <br/>
            <FormControl className="formContainer">
                <TextField 
                    className={classes.nameInput}
                    onChange={(e) => setNameInput(e.target.value)} 
                    variant="outlined" 
                    label="Search through name"
                />
                
                <TextField 
                    className={classes.gameInput}
                    onChange={(e) => setGameInput(e.target.value)} 
                    variant="outlined" 
                    label="Search through game series" 
                />
            </FormControl>
        </>
    )
}

export default Home
