import React from "react";
import { Card, Elevation, Button, Colors } from '@blueprintjs/core';

const Gallery = () => (
    <Card interactive={true} elevation={Elevation.ONE} className='section' style={{background: Colors.GRAY1}}>
        <h1>Portfolio</h1>
        <p>Card content</p>
        <Button>Submit</Button>
    </Card>
);

export default Gallery;