import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import MenuCard from '../components/MenuCard';

const screenHeight = Dimensions.get('window').height;
//const screenHeight = Dimensions.get('screen').height;

// transferring data from one page to another Mandatory to add
function mapStateToProps(state) {
    return {menu: state.menu}
}

function mapDispatchToProps(dispatch) {
    return {
        closeMenu: () => dispatch({
            type: 'CLOSEMENU'
        })
    }
}

class SideMenu extends React.Component{
    state = {
        //top: 200
        //top: new Animated.Value(screenHeight)
        top: new Animated.Value(-900)
    }

    componentDidMount(){
      this.menu();
    }
    
    componentDidUpdate(){
        this.menu();
    }

    menu = () => {
        // console.log('CloseMenu Button Key Pressed');
        // Animated.spring(this.state.top, { toValue: -900}).start();
        // console.log(this.props.menu);

        if(this.props.menu == 'openMenu') {
            Animated.spring(this.state.top, { toValue: 50}).start();
          }
        
          if(this.props.menu == 'closeMenu'){
            //Animated.spring(this.state.top, { toValue: screenHeight}).start();
            Animated.spring(this.state.top, { toValue: -900}).start();
          }
    }
    
    render() {
        return (
            <AnimatedContainer style={{ position:'absolute', top: this.state.top, zIndex:100 }}>
                <Cover>
                    <LinearGradient 
                    colors= {[ "rgba(24, 179, 204, 0.5)", "rgba(24, 179, 204, 1)" ]}
                    style={{ width: "100%", height: "100%" }}
                    />
                    <MenuText>Menu</MenuText>
                </Cover>
                <TouchableOpacity 
                style={{
                    position: "absolute",
                    top: 120,
                    left: "50%",
                    marginLeft: -22
                }}
                onPress={this.props.closeMenu}
                // onPress = {() => {
                //     console.log('key pressed');
                //     Animated.spring(this.state.top, { toValue: 900}).start();
                // }}
                >
                <CloseView>
                    <Ionicons name="ios-close" color="#18b3cc" size={35} />
                </CloseView>
                </TouchableOpacity>
                <Content>
                    <MenuCard text="Account" icon="ios-settings" caption="Profile" />
                    <MenuCard text="Logout" icon="ios-log-out" caption="See you soon" />
                </Content>
            </AnimatedContainer>
        )
    }
}

// while using redux we need to export like this only
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);

const Container = styled.View`
width: 100%;
height: 100%;
background-color: #f1f1f1;
/* z-index: 100; */
overflow: hidden;
border-radius: 20px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
width: 100%;
height: 142px;
`;

const Content = styled.View`
width: 100%;
height: 100%;
padding: 30px;
`;

const CloseView = styled.View`
height: 44px;
width: 44px;
border-radius: 22px;
background-color: #fff;
justify-content: center;
align-items: center;
box-shadow: 3px 5px 10px #bab9b9;
/* align-self: center;
text-align: center; */
/*z-index: 100;*/
`;

const MenuText = styled.Text`
 position: absolute;
 font-size:25px;
 color: #fff;
 font-weight: 600;
 top: 55;
 left: 42%;
`;

