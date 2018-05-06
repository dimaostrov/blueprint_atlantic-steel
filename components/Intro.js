import React from "react";
import { Card, Elevation, Button, Colors } from '@blueprintjs/core';

const Intro = () => (
    <Card interactive={true} elevation={Elevation.FOUR} className='section' style={{background: Colors.GRAY3}}>
        <h1>Atlantic Steel</h1>
        <p>Card content</p>
        <Button>Submit</Button>
    </Card>
);

export default Intro;
