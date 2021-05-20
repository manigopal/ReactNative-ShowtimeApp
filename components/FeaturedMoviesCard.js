import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export default class FeaturedMoviesCard extends React.Component{
    render() {
        return (
            <Container>
                <FeaturedMoviesCardImage source={{
                    uri: this.props.featuredmoviescardimage
                    }} />
            </Container>

        )
    }
}

const Container = styled.View`
  width: 125px;
  height: 150px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  margin-left: 10px;
`;

const FeaturedMoviesCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

