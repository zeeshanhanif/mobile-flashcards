import React from 'react';
import { StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner, Card, CardItem,Body, Left, Right } from 'native-base';
import { getDecks } from "../utils/api";
import { connect } from "react-redux";

class Home extends React.Component {

    state = {
        decks: null,
    };

    onButtonPress (){
        this.props.navigation.navigate("Details");
    }

    onDeckCardPress(deck) {
        this.props.navigation.navigate("Deck", {
            deckId : deck.id,
            title : deck.title
        })
    }

    render() {
        const { decks } = this.props;
        return (
            <Container>

                <Content style={{backgroundColor:"lightblue"}} padder >
                    {
                        decks && Object.keys(decks).map((id)=> (
                            <TouchableOpacity key={id} onPress={() => this.onDeckCardPress(decks[id])}>
                                <Card bordered >
                                    <CardItem header style={{justifyContent:"center"}} >
                                            <Text>{decks[id].title}</Text>
                                    </CardItem>
                                    <CardItem >
                                        <Body style={{alignItems:"center"}}>
                                            <Text>
                                                {decks[id].questions.length} cards
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

function mapStateToProps({decks}) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home);
