import React from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Container, Button, Text, View } from 'native-base';
import { connect } from "react-redux";
import { handleDeleteDeck  } from "../store/actions/decks";
import { clearLocalNotification, setLocalNotification, colors } from "../utils/helper";

class Quiz extends React.Component {

    state = {
        questionIndex: 0,
        correctCount: 0,
        quizCompleted: false,
        flipButtonText: "Show Answer",
    };
    componentWillMount(){
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        })
        this.frontOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [1, 0]
        });
      
        this.backOpacity = this.animatedValue.interpolate({
            inputRange: [89, 90],
            outputRange: [0, 1]
        });
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.spring(this.animatedValue,{
                toValue: 0,
                friction: 8,
                tension: 10
            }).start();
            this.setState({flipButtonText:"Show Answer"});
        } else {
            Animated.spring(this.animatedValue,{
                toValue: 180,
                friction: 8,
                tension: 10
            }).start();
            this.setState({flipButtonText:"Show Question"})
        }
    }

    markQuestion(isCorrect){
        this.setState((state, props)=> {
            const updatedIndex = ++state.questionIndex;
            return {
                correctCount: isCorrect? ++state.correctCount: state.correctCount,
                questionIndex: updatedIndex,
                quizCompleted: props.deck.questions.length === updatedIndex
            }
        });
        this.value = 180;
        this.flipCard();
    }

    restartQuiz() {
        this.setState({
            correctCount:0,
            questionIndex:0,
            quizCompleted: false
        });
        this.value = 180;
        this.flipCard();
    }

    setupNotificaitonForTomorrow(){
        clearLocalNotification()
            .then(setLocalNotification);
    }

    render() {
        const { questions } = this.props.deck;
        if (this.state.quizCompleted) {
            this.setupNotificaitonForTomorrow();
            return this.renderWhenQuizCompleted();
        }
        else if(questions && questions.length){
            return this.renderIfQuestionExists(questions);
        }
        else {
            return this.renderIfQuestionDoesNotExists();
        }
        
    }

    renderIfQuestionExists(questions){
        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate}
            ]
          }
          const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }
        const { questionIndex } = this.state
        return (
            <Container style={styles.container}>                
                <View style={{marginBottom: 20}}>
                    <Text style={styles.questionCounterText}>{questionIndex+1}/{questions.length}</Text>
                </View>
                <View style={{flex:1}} >
                    <Animated.View style={[frontAnimatedStyle, styles.questionView, {opacity:this.frontOpacity,borderRadius:30}]}>
                        <Text style={styles.questionText}>{questions[questionIndex].question}</Text>    
                    </Animated.View>
                    <Animated.View style={[backAnimatedStyle, styles.questionView,styles.backView, {opacity:this.backOpacity,borderRadius:30}]}>
                        <Text style={styles.questionText}>{questions[questionIndex].answer}</Text>    
                    </Animated.View>
                </View>
                <View>
                    <Button style={styles.btn} onPress={()=> this.flipCard() } transparent danger block >
                        <Text style={{fontSize:20, alignSelf:"flex-end", color: colors.darkTextColor}}>{this.state.flipButtonText}</Text>
                    </Button>
                </View>
                <View style={{flex:1}}>
                    <Button block rounded style={styles.btnAnswer} onPress={()=> this.markQuestion(true) } success>
                        <Text>Correct</Text>
                    </Button>
                    <Button block rounded style={styles.btnAnswer} onPress={()=> this.markQuestion(false) } danger>
                        <Text>Incorrect</Text>
                    </Button>
                </View>
                
            </Container>
        );
    }

    renderIfQuestionDoesNotExists(){
        return (
            <Container style={styles.noQuizcontainer}>                
                <View >
                    <Text style={{fontSize:20, alignSelf:"center", marginLeft:20, marginRight:20, color:colors.darkTextColor}}>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>
                </View>
            </Container>
        );
    }

    renderWhenQuizCompleted(){
        return (
            <Container style={styles.noQuizcontainer}>                
                <View>
                    <Text style={{fontSize:20, alignSelf:"center"}}>Quiz Completed</Text>
                    <Text style={{fontSize:20, alignSelf:"center"}}>You have answered { Math.round((this.state.correctCount/this.props.deck.questions.length)*100)}% correct</Text>
                    <Button block rounded style={styles.btnQuizEnded} onPress={()=> this.restartQuiz() }>
                        <Text>Restart Quiz</Text>
                    </Button>
                    <Button block rounded style={styles.btnQuizEnded} onPress={()=> this.props.navigation.goBack() }>
                        <Text>Back to Deck</Text>
                    </Button>
                </View>
            </Container>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.allScreensBackgroundColor,
    },
    noQuizcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.allScreensBackgroundColor,
    },
    questionView: {
        width: Dimensions.get("window").width-20,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.quizCardColor,
        backfaceVisibility: 'hidden',
        marginLeft:10
    },
    backView: {
        position: "absolute",
        top: 0
    },
    btnAnswer: {
        margin: 20
    },
    questionCounterText: {
        fontSize: 20,
        marginLeft:20
    },
    questionText : {
        fontSize: 25,    
        marginLeft: 10,
        marginRight:10,
    },
    btn: {
        marginTop: 50,
    },
    btnQuizEnded: {
        margin: 20,
        backgroundColor: colors.darkButtonColor
    }
    
    
})
