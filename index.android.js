import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Container,
         Content,
         Header,
         Left,
         Body,
         Right,
         Button,
         Icon,
         Title,
         Text,
         Item,
         Input,
         FooterTab,
         Card,
         CardItem} from 'native-base';

export default class Facebook extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#FFF',}}>
          <Header searchBar rounded style={{backgroundColor:'#39579a'}}>
              <Left>
                <Button small transparent>
                  <Icon name="md-arrow-back" />
                </Button>
              </Left>

              <Body>
                 <Item style={{paddingLeft:10, height:40, width:275, backgroundColor:'#FFF', marginLeft:-25}}>
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

      <View>


      <View style = {{ flexDirection:'row', justifyContent:'center'}}>
          <Right>
          <Button light full >
          <Text>About</Text>
          </Button>
          </Right>

          <Body>
          <Button light full >
          <Text>Photos</Text>
          </Button>
          </Body>

          <Left>
          <Button light full >
          <Text>Friends</Text>
          </Button>
          </Left>

      </View>

        <Content style={{backgroundColor:'#e5e5e5',}}>

          <Card>
            <CardItem>
            <Image source={require('./img/image1.jpg')} style={{width:40, height:40, marginRight:5}} />
            <Input placeholder="What's on Your mind?" />
            </CardItem>

          <View style = {{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

            <View style = {{ flexDirection:'row', paddingRight:1, justifyContent:'center', alignItems:'center'}}>
                <Icon name="md-videocam" />
                <Text>  Live</Text>
            </View>

            <View style = {{ flexDirection:'row', paddingLeft:45, justifyContent:'center', alignItems:'center'}}>
                <Icon name="md-images" />
                <Text>  Image</Text>
            </View>

            <View style = {{ flexDirection:'row', paddingLeft:35, justifyContent:'center', alignItems:'center'}}>
                <Icon name="md-flag" />
                <Text>  Life Event</Text>
            </View>

            </View>
          </Card>

        </Content>
      </View>
          
          <View style={styles.backSeven}>
              <Item>
              <Left>
                <Text>Friends</Text>
              </Left>

              <Right>
                <Button small transparent>
                <Text></Text>
                </Button>
              </Right>

            </Item>

            <Item style={{marginBottom:5}}>
              <View>
              <Image source={require('./img/adiba.jpg')} style={{width:110, height:110, marginRight:5}} />
              <Text style={{marginRight:5}}>Adiba Khanza</Text>
              </View>
              <View>
              <Image source={require('./img/iqbale.jpg')} style={{width:110, height:110}} />
              <Text style={{marginLeft:5}}>Iqbal Dhiafa...</Text>
              </View>
              <View>
              <Image source={require('./img/muzzamil.jpg')} style={{width:110, height:110, marginLeft:5}} />
              <Text style={{marginLeft:5}}>Muzzamil Ha...</Text>
              </View>
            </Item>

            <Item style={{marginBottom:5}}>
              <View>
              <Image source={require('./img/yusufm.jpg')} style={{width:110, height:110, marginRight:5}} />
              <Text style={{marginRight:5}}>Yusuf Mansur</Text>
              </View>
              <View>
              <Image source={require('./img/okist.jpg')} style={{width:110, height:110}} />
              <Text style={{marginLeft:5}}>Oki Setiana ...</Text>
              </View>
              <View>
              <Image source={require('./img/taqy.jpg')} style={{width:110, height:110, marginLeft:5}} />
              <Text style={{marginLeft:5}}>Taqy Malik</Text>
              </View>
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
                <Image source={require('./img/image9.jpg')} style={{width:180, height:150}} />
              </Item>

              <Item>
                <Image source={require('./img/image10.jpg')} style={{width:115, height:120, marginRight:5}} />
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
    backgroundColor:'#ededed',
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
