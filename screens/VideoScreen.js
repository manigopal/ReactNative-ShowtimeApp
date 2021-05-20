import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

class VideoScreen extends React.Component{
    render() {

        const { navigation} = this.props;
        const moviedata = navigation.getParam('moviedata');

        return (
            <Container>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                >
                <Text> {moviedata.title} </Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default VideoScreen;

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
`;