import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Main from "./src/components/Main";
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {

    state = {
        isAppReady: false,
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({
            isAppReady: true
        })
    }

    render() {
        if(!this.state.isAppReady){
            return  (
                <Container>
                    <Spinner color='blue' />
                </Container>
            )      
        }
        return (
            <Main />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
