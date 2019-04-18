import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';
import { connect } from "react-redux";
import { handleDeleteDeck  } from "../store/actions/decks";

class Deck extends React.Component {
    
    static navigationOptions = ({navigation}) => {
        const { title } = navigation.state.params;

        return {
            title: title,
            headerTintColor:"white",
            headerStyle: {
                backgroundColor:"#0080FF"
            }
        }
    } 

    onAddCardPress(id) {
        this.props.navigation.navigate("AddCard", {
            deckId : id
        });
    }

    onStartQuizPress(id) {
        this.props.navigation.navigate("Quiz", {
            deckId : id
        });
    }

    onDeleteDeckPress(id) {
        this.props.deleteDeck(id);
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.deck){
            this.props.navigation.goBack();
        }
    }
    
    render() {
        const { deck } = this.props;
        if(deck){
            return (
                <Container style={styles.container}>

                    <Text style={styles.deckTitle}>{deck.title}</Text>
                    <Text style={styles.deckCardCount}>{deck.questions.length} cards</Text>
                    <Button style={styles.btn} onPress={()=> this.onAddCardPress(deck.id) } bordered block >
                        <Text>Add Card</Text>
                    </Button>
                    <Button style={styles.btn} onPress={()=> this.onStartQuizPress(deck.id) } block >
                        <Text>Start Quiz</Text>
                    </Button>
                    <Button style={styles.btn} onPress={()=> this.onDeleteDeckPress(deck.id) } transparent danger block >
                        <Text>Delete Deck</Text>
                    </Button>
                </Container>
            );
        }
        else {
            return null;
        }
    }
}

function mapStateToProps({decks}, props) {
    const { deckId } = props.navigation.state.params;
    return {
        deck : decks[deckId]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteDeck: (deckId) => {
            dispatch(handleDeleteDeck(deckId));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"lightblue"
    },
    deckTitle: {
        fontSize: 35,
        fontWeight:"bold",
        marginBottom: 40
    },
    deckCardCount: {
        fontSize: 30,
        marginBottom: 40
    },
    btn: {
        margin: 20
    },
})