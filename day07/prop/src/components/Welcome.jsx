import React from 'react';
import Greetings from './Greetings';
const Welcome = ({object}) => {
    return (
        <div>
            {/* <Greetings /> */}
            <Greetings title="Welcome" props={object.name} />
            <h1>{object.name}</h1>
            <h1>{object.age}</h1>
            <h1>{object.city}</h1>
        </div>
    );
};

export default Welcome;