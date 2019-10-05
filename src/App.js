import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline />
      <div className="App">
        Todo
      </div>
      <Typography variant="h1" component="h2">
      h1. Heading
      </Typography>
      <Button variant="contained" color="primary">
        hello,world
      </Button>
    </div>

  );
}

export default App;
