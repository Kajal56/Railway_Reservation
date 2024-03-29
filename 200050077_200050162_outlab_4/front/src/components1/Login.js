import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthApi from '../utils/AuthApi';
import { login } from './auth-api';
import { useState, useContext } from 'react';

// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { login } from "../actions/session";
// const mapStateToProps = ({ errors }) => ({
//   errors
// });
// const mapDispatchToProps = dispatch => ({
//   login: user => dispatch(login(user))
// });

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default Login => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const authApi = useContext(AuthApi)

  const handleOnChange  = (e) => {
    e.preventDefault();
    if(e.target.name === 'id'){
      setId(e.target.value)
    }else if(e.target.name === 'password'){
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const user_login = {
      id: id,
      password: password
    }
    // console.log(user_login)
    // login(user_login);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await login({id, password})
    // console.log(res)
    if(res.auth){
      authApi.setAuth(true);
      authApi.setId(id)
    }else{
      authApi.setAuth(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="student_id"
              name="id"
              autoComplete="id"
              autoFocus
              style={{ fontSize: 80 }}
              onChange={handleOnChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleOnChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick = {handleLogin}
              // onClick = {handleSubmit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);