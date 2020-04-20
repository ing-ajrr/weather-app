import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {
    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city } = this.props;

        setWeather(cities);

        setSelectedCity(city);
    }
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }
    render(){
        const { citiesWeather } = this.props;
        return (
            <LocationList
                cities={ citiesWeather } 
                onSelectedLocation={this.handleSelectionLocation}/>
        )}
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
}

const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ 
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);