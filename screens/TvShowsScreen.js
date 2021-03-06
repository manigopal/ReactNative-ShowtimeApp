import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

class TvShowsScreen extends React.Component{
    render() {

        const { navigation} = this.props;
        const tvshowdata = navigation.getParam('tvshowdata');

        return (
            <Container>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.goBack();
                }}
                >
                <Text> {tvshowdata.title} </Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default TvShowsScreen;

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
`;