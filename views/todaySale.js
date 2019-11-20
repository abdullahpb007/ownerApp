import React, {Component} from 'react';

import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

class TodaySale extends Component {
  state = {
    data: this.props.navigation.getParam('values'),
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#DE9E04" barStyle="dark-content" />
        <SafeAreaView>
          <View
            style={{backgroundColor: '#032d3c', width: '100%', height: '100%'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: wp('1%'),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    padding: wp('5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="account-balance-wallet"
                    iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                  />
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'normal',
                      color: '#fff',
                    }}>
                    CASH SALES
                  </Text>
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    Rs. {this.state.data.CASH}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: wp('5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="credit-card"
                    iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                  />
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'normal',
                      color: '#fff',
                    }}>
                    CARD SALES
                  </Text>
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    Rs. {this.state.data.CARD}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: wp('10%'),
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  TOTAL SALES
                </Text>
                <Text
                  style={{
                    fontSize: wp('7%'),
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Rs. {this.state.data.TOTAL}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    padding: wp('5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="web"
                    iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                  />
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'normal',
                      color: '#fff',
                    }}>
                    ONLINE SALES
                  </Text>
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    Rs. {this.state.data.ONLINE}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: wp('5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="cancel"
                    iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                  />
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'normal',
                      color: '#fff',
                    }}>
                    CANCLE
                  </Text>
                  <Text
                    style={{
                      fontSize: wp('5%'),
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>
                    Rs. {this.state.data.CANCEL}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default TodaySale;
