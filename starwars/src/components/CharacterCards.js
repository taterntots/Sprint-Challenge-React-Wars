import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap';
import styled from 'styled-components';

const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
`
const MainTitle = styled.h1`
    font-size: 1.4rem;
`
const SubTitle = styled.h2`
    font-size: 1.0rem;
`

const CharacterCards = props => {
    return(
        <Col xs='12' s='6' md='4' lg={'3'}>
            <Card>
                <CardImg top width='100%' src='https://source.unsplash.com/random' alt='Card image cap' />
                {/* <ProfilePic src="https://source.unsplash.com/random" alt="Card image cap" /> */}
                <CardBody>
                    <MainTitle>{props.name}</MainTitle>
                    <SubTitle>{props.gender}, born in {props.birth_year}</SubTitle>
                </CardBody>
            </Card>
        </Col>
    )
}
export default CharacterCards;