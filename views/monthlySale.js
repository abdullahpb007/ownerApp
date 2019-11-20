import React, {Component} from 'react';

import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

class MonthlySale extends Component {
  state = {
    thisMonth: this.props.navigation.getParam('thisMonth'),
    lastMonth: this.props.navigation.getParam('lastMonth'),
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
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <Icon
                      name="arrow-upward"
                      iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                    />
                  </View>
                  <View style={{flex: 3, flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: wp('4%'),
                        fontWeight: 'normal',
                        color: '#fff',
                        letterSpacing: 10,
                      }}>
                      THIS MONTH
                    </Text>
                    <Text
                      style={{
                        fontSize: wp('8%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.thisMonth.TOTAL}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="account-balance-wallet"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      CASH
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.thisMonth.CASH}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="credit-card"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      CARD
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.thisMonth.CARD}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="web"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      ONLINE
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.thisMonth.ONLINE}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <Icon
                      name="arrow-downward"
                      iconStyle={{color: '#f7b71d', fontSize: wp('15%')}}
                    />
                  </View>
                  <View style={{flex: 3, flexDirection: 'column'}}>
                    <Text
                      style={{
                        fontSize: wp('4%'),
                        fontWeight: 'normal',
                        color: '#fff',
                        letterSpacing: 10,
                      }}>
                      LAST MONTH
                    </Text>
                    <Text
                      style={{
                        fontSize: wp('8%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.lastMonth.TOTAL}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="account-balance-wallet"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      CASH
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.lastMonth.CASH}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="credit-card"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      CARD
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.lastMonth.CARD}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      paddingLeft: wp('2'),
                    }}>
                    <Icon
                      name="web"
                      iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                    />
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      {' '}
                      ONLINE
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: wp('5%'),
                        fontWeight: 'bold',
                        color: '#fff',
                      }}>
                      Rs. {this.state.lastMonth.ONLINE}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default MonthlySale;
