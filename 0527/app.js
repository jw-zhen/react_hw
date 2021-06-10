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


function ButtonAppBar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(167),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function Types() {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
    </div>
  );
}

function CustomCheckbox() {
  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.status.danger,
      '&$checked': {
        color: theme.status.danger,
      },
    },
    checked: {},
  }));

  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}


function App() {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
  const theme = createMuiTheme({
    status: {
      danger: orange[500],
    },
  });

  const [checked, setChecked] = React.useState(true);

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes1 = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <header className="App-header">
      <ThemeProvider theme={theme}>
        
        <ButtonAppBar />

        <Types />
        
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
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

        <form className={classes1.root} noValidate autoComplete="off">
        <TextField
          id="filled-secondary"
          label="Filled secondary"
          variant="filled"
          color="secondary"
        />
        </form>
        
        <CustomCheckbox />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Secondary"
        />

        <Button variant="contained" color="primary">
          Primary
        </Button>

      </ThemeProvider>
      </header>
    </div>
  );
}

export default App;