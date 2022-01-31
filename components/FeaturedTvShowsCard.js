import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class FeaturedTvShowsCard extends React.Component{
    render() {
        return (
            <Container>
                <FeaturedTvShowsCardImage source={{
                    uri: this.props.featuredtvshowscardimage
                    }} 
                />
            <LinearGradient 
                colors= {[ "rgba(48, 48, 48, 0)", "rgba(48, 48, 48, 0.9)" ]}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 80
                }}
              />
              <ImageTitle>Fantastic Beasts and Where to Find Them</ImageTitle>
              {/* <ImageDescription> Bullied as a teen for being overweight, Bob Stone (Dwayne Johnson) shows up to his high school reunion looking fit and muscular. Claiming to be on a top-secret ...
              </ImageDescription>   */}        
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

const ImageTitle = styled.Text`
position: absolute;
bottom: 35px;
font-size:14px;
font-weight: bold;
/* text-transform: uppercase; */
color: #fff;
padding-left: 10px;
width: 325px;
white-space: nowrap;
/* flex-shrink: 1; */
overflow: hidden;
text-overflow: ellipsis;
/* display: flex; */
/* flex-direction: row; */
/* align-items: center;
justify-content: center; */
/* flex-wrap: nowrap; */
`;

const ImageDescription = styled.Text`
position: absolute;
bottom: 10px;
font-size:12px;
font-weight: normal;
font-style: italic;
/* text-transform: uppercase; */
color: #fff;
padding-left: 10px;
width: 325px;
white-space: nowrap;
/* flex-shrink: 1; */
overflow: hidden;
text-overflow: ellipsis;
/* display: flex;
flex-direction: column; */
/* align-items: center;
justify-content: center; */
/* flex-wrap: nowrap; */
`;
