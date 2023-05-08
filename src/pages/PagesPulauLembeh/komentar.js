import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommentList = () => {
  return (
    <View>
      <Text style={styles.author}>Adzana Shaliha</Text>
      <Text style={styles.commentContainer}>Bagus banget tempatnya!!</Text>
      <Text style={styles.author}>Acelia Acelio</Text>
      <Text style={styles.commentContainer}>
        Pemandangan yang keren dan tempat yang nyaman.
      </Text>
      <Text style={styles.author}>Ashel Apacuyy</Text>
      <Text style={styles.commentContainer}>Keren bang. *Jempol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  author: {
    fontWeight: 'bold',
    top: 10,
    marginBottom: 5,
  },
});

export default CommentList;
