import { createMaterialTopTabNavigator } from 'react-navigation';
import Home from './Home';
import AddDeck from './AddDeck';

const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Decks"
        },
        tabBarOptions : {
            activeTintColor: 'green',
            style: {
                backgroundColor: 'red',
            },
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: "Add Deck"
        }
    },
   
})
TabNavigator.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};

export default TabNavigator;