import React from 'react';
import HomePage from './Home/HomePage';
import CardList from './Home/CardList';
import Protection from './Home/Protection'
import Privacy from './Home/Privacy';
import Performance from './Home/Performance';
import Map from './Home/Map';
import Tips from './Home/Tips';
import Testimonial from './Home/Testimonial';
const LandingPage = () => {
    return (
        <>
            <HomePage />
            <CardList />
            <Protection />
            <Privacy />
            <Performance />
            <Map />
            <Tips />
            <Testimonial />

        </>);
};

export default LandingPage;