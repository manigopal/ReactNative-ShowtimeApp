import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

export default class MoviesTopViewedTabCard extends React.Component{
    render() {
        return (
            <Container>
                <MoviesTopViewedTabCardImage source={{
                    uri: this.props.moviestopviewedtabcardimage
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

const MoviesTopViewedTabCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

