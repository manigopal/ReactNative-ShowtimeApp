import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import FeaturedMoviesCard from '../components/FeaturedMoviesCard';

class MoviesScreen extends React.Component{

    static navigationOptions = {
        header:null
    }

    render() {

        const { navigation} = this.props;
        const moviedata = navigation.getParam('moviedata');
        const FeaturedMoviesCardData = navigation.getParam('datas');

        return (
            <Container>
                {/* <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                >
                <Text> {moviedata.title} </Text>
                </TouchableOpacity> */}
                <VideoContainter>
                    <Video source = {{
                        uri : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    }}
                    shouldPlay
                    resizeMode="cover"
                    useNativeControls={true}
                    style={{ width:"100", height:"100%"}}
                    />
                    </VideoContainter>
                    <VideoTitle> {moviedata.title} </VideoTitle>
                    {
          FeaturedMoviesCardData.map((data, index) => (
            //return <FeaturedMoviesCard key={index} featuredmoviescardimage={data.image} />;
            <TouchableOpacity key={index}
            onPress={() => {
              this.props.navigation.push("Movies",{
                moviedata: data,
                datas: FeaturedMoviesCardData
              });
            }}>
              <FeaturedMoviesCard featuredmoviescardimage={data.image} />
            </TouchableOpacity>
          ))
        }
                    
            </Container>
        )
    }
}

export default MoviesScreen;

const Container = styled.View`
flex : 1;
background: #f5f5f5;
`;

const VideoContainter = styled.View`
width: 100%;
height: 205px;
background: #000;
`;

const VideoTitle = styled.Text`
color: #000;
margin-top:10px;
margin-left: 10px;
font-family: 'Roboto';
font-size: medium;
font-style: normal;
font-weight: 600;
line-height: medium;
`;