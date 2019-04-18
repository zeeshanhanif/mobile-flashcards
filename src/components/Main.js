import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';
import Stack from "./StackNav";
import Tab from "./TabNav";
import { Constants } from "expo";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import { handleGetAllDecks  } from "../store/actions/decks";

class Main extends React.Component {

    componentDidMount() {
        this.props.initilizeData();
    }

    render() {
        return (
            <Container>
                <View style={{height:Constants.statusBarHeight}}>
                    <StatusBar />
                </View>
                <Stack />
            </Container>
            
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initilizeData: () => {
            dispatch(handleGetAllDecks());
        }
    };
}
//export default Main;
export default connect(null, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
