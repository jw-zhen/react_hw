import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button, FormControlLabel} from '@material-ui/core';
import  SaveIcon from '@material-ui/icons/Save';
import Checkbox from'@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange ,green} from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
}
const useStyles = makeStyles({
  root: {
      background:'linear-gradient(45deg, #333 ,#999)',
      border: 0,
      borderRadius:15,
      color:'white',
      padding:'5px 30px',
      marginBottom:10,
    },
})
const theme = createMuiTheme({
  palette: {
    primary: {
      main:green[400],
    },secondary:{
      main:orange[500],
    }
    },
});

function ButtonStyled(){
  const classes = useStyles();
return(
  <Button className={classes.root}>
    自帶樣式
    </Button>
)

}

function CheckboxExample(){
  const [checked,setChecked] =React.useState(true);
  return(
    
    <FormControlLabel>
      control={<Checkbox 
      checked={checked} 
      onChange={(e)=>{setChecked(e.target.checked)}}  
      inputProps={{'aria-label':'secomdary checkbox'}}
      />}  
      label="Checkbox 測試"
    </FormControlLabel>
    
  )
}

 function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <theme>
       <AppBar position="static">
        <Toolbar>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
       <ButtonStyled/>
       <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" Type='date'/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
        <img src={logo} className="App-logo" alt="logo" />
        <Button startIcon={<SaveIcon />} size='large' onClick={() => { alert('clicked') }} variant="outlined" color="primary">
        Primary
        </Button>
        </theme>
      </header>
    </div>
  );
}

export default App;
