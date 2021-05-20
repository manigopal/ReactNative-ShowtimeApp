import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const MenuCard = props => (
    <Container>
        <IconView>
            <Ionicons name={ props.icon } size={25} color="#254522" />
        </IconView>
        <Content>
            <MenuButton> {props.text} </MenuButton>
            <MenuText> {props.caption} </MenuText>
        </Content>
    </Container>
)

export default MenuCard;

const Container = styled.View`
/* width: 100%;
height: 100%;
padding: 30px; */
flex-direction: row;
/* align-items: center;
justify-content: center; */
margin: 15px 0;
`;

const IconView = styled.View`
width: 32px;
height: 32px;
justify-content: center;
align-items: center;
`;

const Content = styled.View`
padding-left: 10px;
`;

const MenuButton = styled.Text`
 font-size:25px;
 color: #000;
 font-weight: 600;
 /* width: 100%;
 height: 80px; */
`;

const MenuText = styled.Text`
 font-size:15px;
 color: #000;
 /* width: 100%;
 top: 30;
 right: 70;
 position: absolute; */
 margin-top: 5px;
 opacity: 0.5;
 padding-left: 4px;
`;