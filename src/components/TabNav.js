import { createMaterialTopTabNavigator } from 'react-navigation';
import Home from './Home';
import AddDeck from './AddDeck';
import { colors } from '../utils/helper';

const TabNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Decks",
        },
        
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: "Add Deck"
        }
    }
},
{
    tabBarOptions : {
        labelStyle: {
            fontWeight: "bold"
        },
        style: {
            backgroundColor: colors.headerColor,
        },
    }
})
TabNavigator.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
    
};

export default TabNavigator;