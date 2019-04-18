import React from 'react';
import { Container, Spinner } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Main from "./src/components/Main";
import { Provider } from 'react-redux';
import store from './src/store';
import { setLocalNotification } from './src/utils/helper';

export default class App extends React.Component {

    state = {
        isAppReady: false,
    };

    async componentWillMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({
            isAppReady: true
        })
    }

    componentDidMount(){
        setLocalNotification();
    }

    render() {
        if(!this.state.isAppReady){
            return  (
                <Container>
                    <Spinner color='blue' />
                </Container>
            )      
        }
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}

