import React from 'react';
import styled from 'styled-components/native';

class MoviesScreen extends React.Component{
    render() {
        return (
            <Container>
                <Text> Video Screen </Text>
            </Container>
        )
    }
}

export default MoviesScreen;

const Container = styled.View`
    flex : 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
`;