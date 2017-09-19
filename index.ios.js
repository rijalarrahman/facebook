import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input, FooterTab} from 'native-base';

export default class Facebook extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'white',}}>
          <Header searchBar rounded>
              <Left>
                <Button small transparent>
                  <Icon name="md-arrow-back" />
                </Button>
              </Left>

              <Body>
                 <Item style={{paddingLeft:10, width:275, backgroundColor:'white', marginLeft:-20}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
              </Body>
              <Right />
          </Header>
        <Content>

          <View style={styles.backOne}>
            <Image source={require('./img/quran.jpg')} style={{width:360, height:150}} />
          </View>

          <View style={styles.backTwo}>
            <Image source={require('./img/image1.jpg')} style={{width:120, height:120}} />
          </View>

          <View style={styles.backThree}>

          </View>

          <View style={styles.backFour}>
            <Text>Wirda Mansur</Text>
          </View>

          <FooterTab style={styles.menuOne}>

            <Button vertical>
              <Icon active name="ios-list" />
              <Text style={styles.textOne}>Activity Log</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-person" />
              <Text style={styles.textOne}>Update Info</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-more" />
              <Text style={styles.textOne}>More</Text>
            </Button>

          </FooterTab>

          <View style={styles.backFive}>
            <Text>Quran dulu, Quran lagi, Quran Terus</Text>
          </View>

          <View style={styles.backSix}>

            <Item style={{padding:5}}>
              <Icon name="ios-home" />
              <Text>Live in Jakarta, Indonesia</Text>
            </Item>
            <Item style={{padding:5}}>
              <Icon name="md-school" />
              <Text>Studied at the University of Oxford</Text>
            </Item>
            <Item style={{padding:5}}>
              <Icon name="md-pin" />
              <Text>From Jakarta, Indonesia</Text>
            </Item>
            <Item style={{padding:5}}>
              <Button small transparent>
                <Text>Edit</Text>
              </Button>
            </Item>
          </View>

<View style={styles.backSeven}>
            <Item>
              <Left>
                <Text>Photo</Text>
              </Left>

            <Right>
              <Button small transparent>
                <Text>Edit</Text>
              </Button>
            </Right>

            </Item>
            <Item style={{marginBottom:5}}>
              <Image source={require('./img/image8.jpg')} style={{width:180, height:150, marginRight:5}} />
              <Image source={require('./img/image6.jpg')} style={{width:180, height:150}} />
            </Item>
            <Item>
              <Image source={require('./img/image7.jpg')} style={{width:115, height:120, marginRight:5}} />
              <Image source={require('./img/image4.jpg')} style={{width:115, height:120, marginRight:5}} />
              <Image source={require('./img/image1.jpg')} style={{width:115, height:120}} />
            </Item>
          </View>

        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

  backOne: {
    backgroundColor:'#000',
    width:360,
    height:150,
    zIndex:0,
  },
  backTwo: {
    backgroundColor:'#B39DDB',
    width:120,
    height:120,
    zIndex:1,
    position:'absolute',
    marginLeft:125,
    marginTop:90
  },
  backThree: {
    width:360,
    height:60,
    zIndex:0,
  },
  backFour:{
    padding:10,
    alignItems:'center'
  },
  backFive:{
    padding:10,
    alignItems:'center',
  },
  backSix:{
    padding:10,
  },
  backSeven:{
    padding:5
  },

  textOne:{
    fontSize:8,
    color:'black',
    textAlign:'justify'
  },

  menuOne:{
    backgroundColor:'white',
  },
});

AppRegistry.registerComponent('facebook', () => Facebook);
