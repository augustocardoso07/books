import React from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import colors from '../constants/Colors';
import { requestBooks, updateQuery } from '../redux/actions';


//https://stackoverflow.com/questions/41056761/detect-scrollview-has-reached-the-end
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 1;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

class ListScreen extends React.Component {
  static navigationOptions = {
    headerBackTitle: null
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => this.props.updateQuery(this.props.query)}
          />}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            //console.log("end");
            this.props.requestBooks()
          }
        }}
        scrollEventThrottle={400}
      >
        <View style={styles.images}>
          { this.props.books.map((book, i) => {
            const url = book.volumeInfo.imageLinks.thumbnail.startsWith('https') ?
              book.volumeInfo.imageLinks.thumbnail :
              'https' + book.volumeInfo.imageLinks.thumbnail.substr(4);
            return (
              <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('DetailScreen', { book, url })}>
                <Image resizeMode='cover' style={styles.image} source={{ uri: url }} />
              </TouchableOpacity>
            )
          })}
        </View>
        {this.props.loadding && <ActivityIndicator size="large" color="#0000ff" />}
        {this.props.error && <Text>Opss...... :(</Text>}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellowBackground,
  },
  images: {
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 151,
    marginBottom: 20,
    //marginLeft: 16,
  }
});

const mapStateToProps = state => ({
  books: state.books,
  loadding: state.loadding,
  query: state.query,
  error: state.error,
});

export default connect(mapStateToProps, { requestBooks, updateQuery })(ListScreen);