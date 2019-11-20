import React, {Component} from 'react';

import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {BarChart, Grid, YAxis} from 'react-native-svg-charts';

class TodaySale extends Component {
  state = {
    data: this.props.navigation.getParam('values'),
  };

  render() {
    const fill = 'rgb(134, 65, 244)';
    return (
      <>
        <StatusBar backgroundColor="#DE9E04" barStyle="dark-content" />
        <SafeAreaView>
          <View style={{height: 200, flexDirection: 'row'}}>
            <YAxis
              data={[50, 10, 40, 95, 85, 0, 35, 53, 24, 50]}
              contentInset={{top: 20, bottom: 20}}
              svg={{
                fill: 'grey',
                fontSize: 10,
              }}
              formatLabel={value => `${value}ºC`}
            />
            <BarChart
              horizontal={true}
              style={{flex: 1, marginLeft: 0}}
              data={[50, 10, 40, 95, 85, 0, 35, 53, 24, 50]}
              svg={{stroke: 'rgb(134, 65, 244)'}}
              contentInset={{top: 20, bottom: 20}}></BarChart>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default TodaySale;
