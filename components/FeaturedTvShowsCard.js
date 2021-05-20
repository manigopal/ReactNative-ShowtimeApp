import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export default class FeaturedTvShowsCard extends React.Component{
    render() {
        return (
            <Container>
                <FeaturedTvShowsCardImage source={{
                    uri: this.props.featuredtvshowscardimage
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

const FeaturedTvShowsCardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

