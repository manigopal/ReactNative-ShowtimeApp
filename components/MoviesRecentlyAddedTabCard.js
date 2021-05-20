import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

export default class MoviesRecentlyAddedTabCard extends React.Component{
    render() {
        return (
            <Container>
                <MoviesRecentlyAddedTabCardImage source={{
                    uri: this.props.moviesrecentlyaddedtabcardimage
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

const MoviesRecentlyAddedTabCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

