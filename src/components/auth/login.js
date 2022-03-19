import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from 'actions/authActions';
const Login = props => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state);

  useEffect(() => {
    dispatch(loginUser());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}></View>
  );
};
const styles = StyleSheet.create({});

export default Login;
