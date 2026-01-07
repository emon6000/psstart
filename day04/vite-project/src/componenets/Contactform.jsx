import React from 'react';

const contactform = () => {
    return (
        <div>
            <form action="">
                <input type="text" name='fname' />
                <input type="text" name='lname' />
                <input type="email" name='email' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default contactform;