import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SignUpText, NameField, TextInputBox} from './styledComponents';

class SignUpFormScene extends Component {
  firstName = '';
  lastName = '';

  onChangeFirstName = (text: any) => {
    this.firstName = text;
  };

  onChangeLastName = (text: any) => {
    this.lastName = text;
  };

  render() {
    return (
      <>
        <View>
          <SignUpText>SignUp</SignUpText>
          <Text>Please fill in this form to create an account</Text>
          <NameField>
            <TextInputBox
              onChangeText={text => this.onChangeFirstName(text)}
              defaultValue={this.firstName}
            />
            <TextInputBox
              onChangeText={text => this.onChangeLastName(text)}
              defaultValue={this.lastName}
            />
          </NameField>
        </View>
      </>
    );
  }
}

export default SignUpFormScene;
