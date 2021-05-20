import React from 'react';
import { Stylesheet, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export default class ScrollableTabView extends React.Component{
    render() {
        return (
            <Container>
                <Tabs source={{
                    uri: this.props.bigcardimage
                    }} />
            </Container>

        )
    }
}

const Container = styled.View`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  margin-left: 10px;
`;

const Tabs = styled.Text`
  width: 100%;
  height: 20px;
`;