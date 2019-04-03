import React from 'react';
import { StyleSheet, View, ActivityIndicator , KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Button, Text, Spinner, H2, Body,Item, Input, Form } from 'native-base';

export default class AddCard extends React.Component {
    
    onAddCardPress() {
        this.props.navigation.navigate("AddCard");
    }

    onStartQuizPress() {
        this.props.navigation.navigate("Quiz");
    }
    
    render() {
        return (
            <Container style={styles.container}>     
                <KeyboardAvoidingView behavior="padding">
                    
                    <Form style={{alignSelf:"stretch"}}>
                        <Item rounded>
                            <Input placeholder='Question'/>
                        </Item>
                        <Item rounded>
                            <Input placeholder='Answer'/>
                        </Item>
                    </Form>
                    <Button style={styles.btn} onPress={()=> this.onStartQuizPress() } block >
                        <Text>Submit</Text>
                    </Button>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"red",
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