import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import AddDeck from './AddDeck';
import Details from './Details';
import TabNavigator from './TabNav';
import Deck from "./Deck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

const Stack = createStackNavigator({
    Main: {
        screen: TabNavigator,
    },  
    Deck: {
        screen: Deck,
        
    },
    
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: "Add Card",
            headerTintColor:"white",
            headerStyle: {
                backgroundColor:"#0080FF"
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: "Quiz",
            headerTintColor:"white",
            headerStyle: {
                backgroundColor:"#0080FF"
            }
        }
    }
})

export default createAppContainer(Stack);