import React from 'react';
import { StyleSheet, View, ActivityIndicator , KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Button, Text, Spinner, H2, Body,Item, Input, Form } from 'native-base';

export default class AddDeck extends React.Component {
    render() {
        return (
            
                <Container style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={[styles.selfAlign,styles.text1]}>What is the title of your new deck?</Text>
                    <Form style={{alignSelf:"stretch"}}>
                        <Item rounded>
                            <Input placeholder='Deck Title dd'/>
                        </Item>
                    </Form>
                    
                    <View style={{flex:1, flexDirection:"row",  alignSelf:"stretch", justifyContent:"center"}} full>
                        <Button style={[styles.btn]} >
                            <Text>
                                Create Deck d
                            </Text>
                        </Button>
                    </View>
                    </KeyboardAvoidingView>
                </Container>
            
        );
    }
}

const styles = StyleSheet.create({
    selfAlign : {
        alignSelf:"center"
    },
    text1 : {
        fontWeight:"bold",
        fontSize: 20,
        marginTop:30,
        marginBottom:30,
    },  
    btn : {
        alignSelf:"center",
    },
    container: {
        flex:1,
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
});