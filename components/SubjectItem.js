import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";

class SubjectItem extends Component {
    render() {

        let button = <TouchableOpacity
            onPress={() => {
                console.log('http://178.128.172.170:8000/subjects/' + this.props.id)
                fetch('http://178.128.172.170:8000/subjects/' + this.props.id)
                    .then(response => response.json())
                    .catch(err => console.log(err))
                    ;
            }}>
            <Text>{this.props.title}</Text>
            <Text >{ this.props.questions}</Text>
        </TouchableOpacity>;

        return (
            <View>
                {button}
            </View>
        );
    }
}

export default SubjectItem;


