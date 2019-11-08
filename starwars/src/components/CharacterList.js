import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCards from './CharacterCards';
import PageChange from './PageChange';
import { Container, Row } from 'reactstrap';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        axios
            .get(`https://lambda-swapi.herokuapp.com/api/people/?page=${pageNum}`)
            .then(response => {
                setCharacters(response.data.results);
                console.log(response.data);
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
            <div className='footer'>
                <PageChange />
            </div>
        </Container>
    )
}
export default CharacterList;