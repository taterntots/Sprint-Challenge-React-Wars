import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                setCharacter(response);
                console.log(response);
            })
            .catch(error => {
                console.log('I AM ERROR ===>', error);
            })
    }, [])

    return(
        <h1>I'm working!</h1>
    )
}
export default CharacterList;