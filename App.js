import React, {Component} from 'react';
import {
  AsyncStorage,
  TextInput,
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, Overlay, Button} from 'react-native-elements';

import TodaySale from './views/todaySale';
import WeeklySale from './views/weeklySale';
import MonthlySale from './views/monthlySale';
import TodayCancle from './views/todayCancle';
import SpecialItems from './views/specialItems';
// import ItemsSales from './views/itemsSales';

import Axios from 'axios';

let slug = '';

class App extends Component {
  componentDidMount() {
    let getSlug = async () => {
      slug = await AsyncStorage.getItem('ServiceUrl');
      console.log(slug);
      if (slug != '' && slug != null) {
        console.log('inside IF');
        this.setState({overlay: false});
        this.loadData();
        setInterval(this.loadData, 10000);
      }
    };
    getSlug();
    // this.loadData();
    // setInterval(this.loadData, 10000);
  }

  async loadData() {
    try {
      const todaySales = await Axios.get(`${slug}todaysale`).then(res => {
        let arr = {};
        res.data.map(e => {
          return (arr[e.group] = e.salesamount);
        });
        return arr;
      });
      const thisWeekSales = await Axios.get(`${slug}thisweeksale`).then(res => {
        let arr = {};
        res.data.map(e => {
          return (arr[e.group] = e.salesamount);
        });
        return arr;
      });
      const lastWeekSales = await Axios.get(`${slug}lastweeksale`).then(res => {
        let arr = {};
        res.data.map(e => {
          return (arr[e.group] = e.salesamount);
        });
        return arr;
      });
      const thisMonthSales = await Axios.get(`${slug}thismonthsale`).then(
        res => {
          let arr = {};
          res.data.map(e => {
            return (arr[e.group] = e.salesamount);
          });
          return arr;
        },
      );
      const lastMonthSales = await Axios.get(`${slug}lastmonthsale`).then(
        res => {
          let arr = {};
          res.data.map(e => {
            return (arr[e.group] = e.salesamount);
          });
          return arr;
        },
      );
      const cancelledSales = await Axios.get(`${slug}cancelleditems`).then(
        res => {
          let arr = [];
          res.data.map(e => {
            let newArr = [];
            newArr[0] = e.ItemName;
            newArr[1] = e.Qty;
            newArr[2] = e.Amount;
            newArr[3] = e.CancelledBy;
            arr.push(newArr);
          });
          return arr;
        },
      );
      const specialItemsList = await Axios.get(`${slug}specialitems`).then(
        res => {
          let arr = [];
          res.data.map(e => {
            let newArr = [];
            newArr[0] = e.ItemName;
            newArr[1] = e.count;
            arr.push(newArr);
          });
          return arr;
        },
      );
      this.setState({
        todaySales,
        thisWeekSales,
        lastWeekSales,
        thisMonthSales,
        lastMonthSales,
        cancelledSales,
        specialItemsList,
      });
    } catch (e) {
      console.log('<>', e);
    }
  }

  state = {
    overlayTextInput: '',
    overlay: true,
    todaySales: {},
    thisWeekSales: {},
    lastWeekSales: {},
    thisMonthSales: {},
    lastMonthSales: {},
    cancelledSales: [],
    specialItemsList: [],
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#DE9E04" barStyle="dark-content" />
        <SafeAreaView>
          <Overlay
            isVisible={this.state.overlay}
            windowBackgroundColor="rgba(222,158,4, 1)"
            overlayBackgroundColor="rgba(247,183,29, 1)"
            width={wp('95')}
            height={hp('50')}>
            <>
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => this.setState({overlayTextInput: text})}
                value={this.state.overlayTextInput}
              />
              <Button
                title="Submit"
                containerStyle={{margin: 10}}
                onPress={() => {
                  let _storeData = async () => {
                    await AsyncStorage.setItem(
                      'ServiceUrl',
                      this.state.overlayTextInput,
                    );
                    slug = this.state.overlayTextInput;
                    this.setState({overlay: false});
                    this.loadData();
                    setInterval(this.loadData, 10000);
                  };
                  _storeData();
                }}
              />
            </>
          </Overlay>
          <View
            style={{backgroundColor: '#f7b71d', width: '100%', height: '100%'}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: wp('2%'),
                }}>
                <Icon name="restaurant" />
                <Text style={{fontSize: wp('10%'), fontWeight: 'bold'}}>
                  BUHARI
                </Text>
                <Text
                  style={{
                    fontSize: wp('5%'),
                    fontWeight: 'normal',
                    letterSpacing: 10,
                  }}>
                  KANATHUR
                </Text>
              </View>
              <View
                style={{
                  flex: 4,
                  height: 100,
                  paddingLeft: wp('10%'),
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                  }}>
                  <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('TodaySale', {
                        values: this.state.todaySales,
                      })
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                      }}>
                      <Icon
                        name="today"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        TODAY SALES
                      </Text>
                    </View>
                  </View>
                  <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('WeeklySale', {
                        thisWeek: this.state.thisWeekSales,
                        lastWeek: this.state.lastWeekSales,
                      })
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="view-week"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        WEEKLY SALES
                      </Text>
                    </View>
                  </View>
                  <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('MonthlySale', {
                        thisMonth: this.state.thisMonthSales,
                        lastMonth: this.state.lastMonthSales,
                      })
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="book"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        MONTHLY SALES
                      </Text>
                    </View>
                  </View>
                  <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('TodayCancle', {
                        values: this.state.cancelledSales,
                      })
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="highlight-off"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        TODAY CANCLE
                      </Text>
                    </View>
                  </View>
                  <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('SpecialItems', {
                        values: this.state.specialItemsList,
                      })
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="favorite"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        SPECIAL ITEMS
                      </Text>
                    </View>
                  </View>
                  {/* <View
                    onStartShouldSetResponder={() =>
                      this.props.navigation.navigate('ItemsSales')
                    }
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#032d3c',
                      marginTop: wp('1%'),
                      marginBottom: wp('1%'),
                      borderTopLeftRadius: wp('100%'),
                      borderBottomLeftRadius: wp('100%'),
                      elevation: 5,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Icon
                        name="favorite"
                        iconStyle={{color: '#f7b71d', fontSize: wp('10%')}}
                        size={wp('5%')}
                      />
                    </View>
                    <View style={{flex: 4, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: wp('6%'),
                          fontWeight: 'normal',
                          color: '#fff',
                        }}>
                        ITEMS SALES
                      </Text>
                    </View>
                  </View> */}
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
      navigationOptions: {
        header: null,
      },
    },
    TodaySale: TodaySale,
    WeeklySale: WeeklySale,
    MonthlySale: MonthlySale,
    TodayCancle: TodayCancle,
    SpecialItems: SpecialItems,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#f7b71d',
      headerStyle: {
        backgroundColor: '#032d3c',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
