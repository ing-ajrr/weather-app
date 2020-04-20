import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Santiago,cl",
  "Washington,us",
  "Bogota,col",
  "Madrid,es",
  "Lima,pe"
];

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h3" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
              <LocationListContainer 
                cities={ cities }/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
  
}

export default App;