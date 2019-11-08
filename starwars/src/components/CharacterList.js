import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';
import { Container, Row } from 'reactstrap';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get('https://lambda-swapi.herokuapp.com/api/people/')
            .then(response => {
                setCharacters(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log('I AM ERROR ===>', error);
            })
    }, [])

    return(
        <Container>
            <Row>
                {characters.map(char => {
                    return(
                        <CharacterCards 
                            key={char.id}
                            name={char.name}
                            gender={char.gender}
                            birth_year={char.birth_year}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}
export default CharacterList;