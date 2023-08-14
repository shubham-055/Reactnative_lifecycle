import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import NewsDisplay from './NewsDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null,
    };
  }

  componentDidMount() {
    this.fetchRandomNews();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.news !== nextState.news;
  }
  fetchRandomNews = () => {
    const apiKey = '259caf0819f44a4ebd130b9f5805122d';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        this.setState({ news: data.articles[randomIndex] });
      })
      .catch(error => console.error('Error fetching news:', error));
  };

  render() {
    const { news } = this.state;

    return (
      <View style={styles.container}>
        {news ? <NewsDisplay article={news} /> : <Text>No news available.</Text>}
        <Button title="Get Random News" onPress={this.fetchRandomNews} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5fcff',
  },
});

export default App;
