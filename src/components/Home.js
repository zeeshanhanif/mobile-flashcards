import React from 'react';
import {TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem,Body } from 'native-base';
import { connect } from "react-redux";
import { colors } from "../utils/helper";

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

                <Content style={{backgroundColor:colors.homeBackgroundColor}} padder >
                    {
                        decks && Object.keys(decks).map((id)=> (
                            <TouchableOpacity key={id} onPress={() => this.onDeckCardPress(decks[id])}>
                                <Card bordered >
                                    <CardItem header style={{justifyContent:"center",backgroundColor:colors.homeCardBackgroundColor}} >
                                            <Text>{decks[id].title}</Text>
                                    </CardItem>
                                    <CardItem style={{backgroundColor:colors.homeCardBackgroundColor}}>
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
