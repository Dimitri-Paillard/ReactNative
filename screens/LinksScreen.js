import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';

function Item({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
class LinkScreen extends Component {

  static navigationOptions = {
    title: 'Thèmes'
  };

  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      title: '',
      questions: '',
    };
  }
  componentDidMount() {
    this.fetchSubjects();
  }

  fetchSubjects() {
    console.log('http://178.128.172.170:8000/subjects' + );
    fetch('http://178.128.172.170:8000/subjects')
      .then(response => response.json())
      .then(subjects => this.setState({ subjects: subjects }))
  }

  render() {
    return (
      <SafeAreaView>
        
        <FlatList
          data={this.state.subjects}
          renderItem={({ item }) => <SubjectItem title={item.title} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
};
export default LinkScreen;