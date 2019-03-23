import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';
import Stack from "./StackNav";
import Tab from "./TabNav";
import { Constants } from "expo";

export default class Main extends React.Component {
    render() {
        return (
            <Container>
                <View style={{height:Constants.statusBarHeight}}>
                    <StatusBar />
                </View>
                <Stack />
            </Container>
            
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
