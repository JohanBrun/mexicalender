import './MexiHeader.css'
import logo from '../logo.png';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: '#333',
  },
})

export default function MexiHeader() {
  const classes = useStyles();

  return (
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <IconButton>
            <img src={logo} className="App-logo" alt="logo" />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}