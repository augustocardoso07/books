import React from 'react';
import { ScrollView, StyleSheet ,Text} from 'react-native';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'WishlistScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Favorite books </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
