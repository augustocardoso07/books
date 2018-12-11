import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import window from '../constants/Layout';

import {updateQuery} from '../redux/actions';


class SearchBar extends React.Component {
  state = {
    text: '',
  }

  handleSeachPress = () => {
    this.textInput.focus();
  }

  handleSubmit = () => {
    if (this.state.text === '') return;
    this.props.updateQuery(this.state.text);
    //console.log(this.state.text)
  }

  render() {
    return (
      <Input
        placeholder={this.props.query}
        inputStyle={{textAlign: 'center'}}
        inputContainerStyle={{borderBottomWidth: 0, width: window.window.width-114}}
        ref={(input) => { this.textInput = input; }}
        onChangeText={(text) => this.setState({ text })}
        onSubmitEditing={this.handleSubmit}
        rightIcon={
          <TouchableOpacity onPress={this.handleSeachPress }>
            <Icon
              name='search'
              size={28}
            />
          </TouchableOpacity>
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  query: state.query,
});


export default connect(mapStateToProps, { updateQuery })(SearchBar);