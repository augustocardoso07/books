import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Button } from 'react-native-elements';
import Rating from 'react-native-star-rating';

import colors from '../constants/Colors';

export default class DetailScreen extends React.Component {

  state = {
    rating: 0,
  }

  render() {
    const book = this.props.navigation.getParam('book')
    const url = this.props.navigation.getParam('url')
    const saleability = book.saleInfo.saleability === 'FOR_SALE';
    const amount = saleability ? `R$${book.saleInfo.listPrice.amount.toFixed(2)}` : book.saleInfo.saleability
    return (
      <ScrollView style={styles.container}>
        <Grid>
          <Row style={styles.info}>
            <Col size={1} style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: url }} />
              <Text style={styles.opacityText}>{book.volumeInfo.pageCount} pages</Text>
            </Col>
            <Col size={2} style={styles.titleContainer}>
              <Text style={styles.title}>{book.volumeInfo.title}</Text>
              <Text style={styles.opacityText}>by {book.volumeInfo.authors[0]}</Text>
              <View style={styles.priceRating}>
                <Text style={styles.priceText}>{amount}</Text>
                <Rating 
                  starSize={24}
                  rating={this.state.rating}
                  selectedStar={(rating) => this.setState({rating})} />
              </View>
              <View style={styles.buttons}>
                <Button title='BUY' buttonStyle={styles.buttonBuy}/>
                <Button icon={
                  <Icon 
                    type='font-awesome' 
                    name="heart-o" 
                    size={22} 
                    color='white' />
                  }
                  title=''
                  buttonStyle={styles.buttonFav}
                />
                
              </View>
            </Col>
          </Row>
          <Row style={styles.description}>
            <Text style={styles.textDescription}>{book.volumeInfo.description}</Text>
          </Row>
        </Grid>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.yellowBackground,
    padding: 15,
  },
  imageContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 12,
  },
  textDescription: {
    padding: 15,
    lineHeight: 30,
  },
  image: {
    width: 100,
    height: 151,
    marginBottom: 20,
  },
  priceRating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  priceText: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonBuy: {
    backgroundColor: colors.blueButton,
    borderRadius: 100,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFav: {
    backgroundColor: colors.redButton,
    borderRadius: 100,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6
  },
  title: {
    fontSize: 26,
  },
  opacityText: {
    color: colors.opacityText,
  }
});