import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';

const CharacterCards = props => {
    return(
        <div>
            <Card>
                <CardImg top width="100%" src="https://source.unsplash.com/random" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.gender}, born in {props.birth_year}</CardSubtitle>
                    {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                </CardBody>
            </Card>
        </div>
    )
}
export default CharacterCards;