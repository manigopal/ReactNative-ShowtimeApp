import React from 'react';
import styled from 'styled-components/native';

class TvShowsScreen extends React.Component{
    render() {
        return (
            <Container>
                <Text> Video Screen </Text>
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