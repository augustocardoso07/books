import React from 'react';
import { ScrollView, StyleSheet ,Text} from 'react-native';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'TrendingScreen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Hot books right now</Text>
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
