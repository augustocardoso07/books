import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImageOverlay from "react-native-image-overlay";

import {connect} from 'react-redux';
import {updateQuery} from '../redux/actions';

import colors from '../constants/Colors';
import dim from '../constants/Layout';

const HOME = [
  {
    title: 'Buy Books',
    description: 'Find e buy new books here',
    touchable: true,
    destiny: 'ListScreen',
    image: require('../assets/images/buy_books.jpeg'),
    color: colors.yellowHomeButton,
  },
  {
    title: 'My Books',
    description: 'Read the books on your library',
    touchable: false,
    destiny: 'BooksScreen',
    image: require('../assets/images/my_books.jpeg'),
    color: colors.blueHomeButton,
  },
  {
    title: 'My Wishlist',
    description: 'Bookd that you marked as favorite',
    touchable: false,
    destiny: 'WishlistScreen',
    image: require('../assets/images/my_wish.jpeg'),
    color: colors.greenHomeButton,

  },
  {
    title: 'Trending Now',
    description: 'Popular books right now',
    touchable: false,
    destiny: 'TrendingScreen',
    image: require('../assets/images/now.jpeg'),
    color: colors.pinkHomeButton,
  },

]

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Books Challenge',
    headerRight: null,
  };

  componentDidMount() {
    this.props.updateQuery('Harry Potter');
  }

  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          {HOME.map((option, i) => (
            <TouchableOpacity key={i} onPress={() => option.touchable && this.props.navigation.navigate(option.destiny)}>
              <ImageOverlay
                overlayColor={option.color}
                overlayAlpha={0.8}
                source={option.image}
                containerStyle={styles.button}
                title={option.title}
                titleStyle={styles.buttonText}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellowBackground,
    padding: 15,
  },
  button: {
    height: 150,
    width: dim.window.width - 30,
    marginBottom: 15,
    borderRadius: 20, 
  },
  buttonText: {
    fontSize: 34,
  }
});

export default connect(null, {updateQuery})(HomeScreen);