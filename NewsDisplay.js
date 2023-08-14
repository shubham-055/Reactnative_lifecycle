import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentWillUnmount(){
    console.log("component will unmounted")
  }
 
  render() {
    const { article } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Text>Error loading news article.</Text>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: '#666',
  },
});

export default NewsDisplay;



