import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

class MoviesListScreen extends React.Component{
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
                {/* <Text> {moviedata.title} </Text> */}
                <Text> Go Back </Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default MoviesListScreen;

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
`;