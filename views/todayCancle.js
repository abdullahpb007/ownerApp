import React, {Component} from 'react';

import {SafeAreaView, View, StatusBar} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Table, Row, Rows} from 'react-native-table-component';

class TodayCancle extends Component {
  state = {
    tableHeadCancle: ['NAME', 'QTY', 'AMOUNT', 'WAITER'],
    tableDataCancle: this.props.navigation.getParam('values'),
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
                margin: wp('2%'),
              }}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#f7b71d'}}>
                <Row
                  data={this.state.tableHeadCancle}
                  widthArr={[wp('45%'), wp('15%'), wp('18%'), wp('18%')]}
                  style={{height: 40, backgroundColor: '#f7b71d'}}
                  textStyle={{margin: 2, color: '#000'}}
                />
                <Rows
                  data={this.state.tableDataCancle}
                  widthArr={[wp('45%'), wp('15%'), wp('18%'), wp('18%')]}
                  textStyle={{margin: 6, color: '#fff'}}
                />
              </Table>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default TodayCancle;