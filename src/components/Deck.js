import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';

export default class Deck extends React.Component {
    
    onAddCardPress() {
        this.props.navigation.navigate("AddCard");
    }

    onStartQuizPress() {
        this.props.navigation.navigate("Quiz");
    }
    
    render() {
        return (
            <Container style={styles.container}>     

                <Text style={styles.deckTitle}>Deck 1</Text>
                <Text style={styles.deckCardCount}>{3} cards</Text>
                <Button style={styles.btn} onPress={()=> this.onAddCardPress() } bordered block >
                    <Text>Add Card</Text>
                </Button>
                <Button style={styles.btn} onPress={()=> this.onStartQuizPress() } block >
                    <Text>Start Quiz</Text>
                </Button>
                <Button style={styles.btn} onPress={()=> alert("hello") } transparent danger block >
                    <Text>Delete Deck</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
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