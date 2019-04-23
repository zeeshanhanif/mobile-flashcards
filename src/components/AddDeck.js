import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { Container, Button, Text, Item, Input, Form } from 'native-base';
import { connect } from "react-redux";
import { handleAddDecks, resetNewDeckId  } from "../store/actions/decks";
import { colors } from "../utils/helper";

class AddDeck extends React.Component {

    state = {
        deckTitle:''
    };
    onAddCreateDeckPress() {
        if(!this.state.deckTitle) {
            return alert("Please Enter Deck title")
        }
        this.props.addDeck(this.state.deckTitle);        
    }

    handleChange = name => value => {
        this.setState({ [name]: value });
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.newDeckId !== this.props.newDeckId){
            this.props.navigation.navigate("Deck", {
                deckId : nextProps.newDeckId,
                title : this.state.deckTitle
            })
            this.setState({deckTitle:''});
        }
    }

    render() {
        return (            
                <Container style={styles.container}>
                    <KeyboardAvoidingView behavior="padding">
                        <Text style={[styles.selfAlign,styles.text1]}>What is the title of your new deck?</Text>
                        <Form style={{alignSelf:"stretch"}}>
                            <Item style={{backgroundColor:"white"}} rounded>
                                <Input  placeholder='Deck Title' 
                                    value={this.state.deckTitle}
                                    onChangeText={this.handleChange('deckTitle')} />
                            </Item>
                        </Form>
                        
                        <View style={{flex:1, flexDirection:"row",  alignSelf:"stretch", justifyContent:"center"}} full>
                            <Button style={[styles.btn]} onPress={()=> this.onAddCreateDeckPress() }>
                                <Text>
                                    Create Deck
                                </Text>
                            </Button>
                        </View>
                    </KeyboardAvoidingView>
                </Container>            
        );
    }
}

function mapStateToProps({newDeckId}) {
    return {
        newDeckId : newDeckId.newDeckId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addDeck: (deckTitle) => {
            dispatch(handleAddDecks(deckTitle));
        },
        resetNewDeckId: ()=> {
            dispatch(resetNewDeckId());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

const styles = StyleSheet.create({
    selfAlign : {
        alignSelf:"center"
    },
    text1 : {
        fontWeight:"bold",
        fontSize: 20,
        marginTop:30,
        marginBottom:30,
        color:colors.darkTextColor,
    },  
    btn : {
        alignSelf:"center",
        backgroundColor: colors.darkButtonColor
    },
    container: {
        flex:1,
        backgroundColor:colors.allScreensBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});