import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Component } from 'react';
import SubjectItem from '../components/SubjectItem';

class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Thèmes'
};

  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
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

  render() {
    return (
    <SafeAreaView>
      
      <FlatList
        data={this.state.subjects}
        renderItem={({ item }) => <SubjectItem id={item._id} title={item.title} questions={ item.questions }/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
    );
  }
};
export default HomeScreen;