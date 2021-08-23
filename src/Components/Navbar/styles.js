import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    navbar: {
        marginBottom: '4%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: '500px',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
    image: {
        width: '500px',
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));