import React from "react";
import { Card, Elevation, Button, Colors } from '@blueprintjs/core';

const About = () => (
    <Card interactive={true} elevation={Elevation.FOUR} className='section' style={{background: Colors.GRAY2}}>
        <h1>About Us</h1>
        <p>Card content</p>
    </Card>
);

export default About;