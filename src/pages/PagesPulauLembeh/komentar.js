import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        {id: 1, author: 'John', text: 'Great post!'},
        {id: 2, author: 'Jane', text: 'Thanks for sharing.'},
        {id: 3, author: 'Bob', text: 'Awesome!'},
      ],
    };
  }

  renderComment = ({item}) => {
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.author}>{item.author}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.comments}
        renderItem={this.renderComment}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
