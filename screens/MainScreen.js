import React, { Component } from 'react';
import { View, Text, FlatList} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            title: '',
        };
    }

    componentDidMount() {
        this.fetchSubjects();
    }

    fetchSubjects() {
        console.log('http://178.128.172.170:8000/subjects');
        fetch('http://178.128.172.170:8000/subjects')
          .then(response => response.json())
          .then(subjects => this.setState({ subjects: subjects }))
      }

    static navigationOptions = {
        title: 'Thèmes'
    };

    render() {
        return (
            <View>
                <Text>{this.state.title} Bonjour </Text>
            </View>
        );
    }
}

export default MainScreen;