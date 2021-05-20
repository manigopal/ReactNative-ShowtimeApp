import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

export default class MoviesFeaturedTabCard extends React.Component{
    render() {
        return (
            <Container>
                <MoviesFeaturedTabCardImage source={{
                    uri: this.props.moviesfeaturedtabcardimage
                    }} />
            </Container>

        )
    }
}

const Container = styled.View`
  width: 135px;
  height: 190px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  margin-left: 10px;
`;

const MoviesFeaturedTabCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

