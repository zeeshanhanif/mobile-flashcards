import React from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner, Card, CardItem,Body, Left, Right } from 'native-base';

export default class Home extends React.Component {

    onButtonPress (){
        this.props.navigation.navigate("Details");
    }

    render() {
        return (
            <Container style={{backgroundColor:"red"}}>
                <Content style={{backgroundColor:"blue"}} padder >
                    {
                        [1,2,3,4].map((id)=> (
                            <TouchableOpacity key={id} onPress={() => this.props.navigation.navigate("Deck")}>
                                <Card style={{backgroundColor:"yellow"}} bordered >
                                    <CardItem header style={{justifyContent:"center"}} >
                                            <Text>Deck 1</Text>
                                    </CardItem>
                                    <CardItem >
                                        <Body style={{alignItems:"center"}}>
                                            <Text>
                                                {3} cards
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                        ))
                    }
                    
                </Content>
            </Container>
        );
    }
}
