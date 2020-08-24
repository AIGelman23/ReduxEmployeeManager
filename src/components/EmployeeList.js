import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {employeesFetch} from '../actions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  createDataSource(employees) {
    let employeeArr = [];
    if (employees) {
      employeeArr = Object.keys(employees).map(function (k, y) {
        let empObj = employees[k];
        empObj.key = k;
        return empObj;
      });
    }
    return (
      <FlatList
        data={employeeArr}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
            <Text>{item.shift}</Text>
          </View>
        )}
      />
    );
  }

  render() {
    if (this.props.employees) {
      return <View>{this.createDataSource(this.props.employees)}</View>;
    }
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
