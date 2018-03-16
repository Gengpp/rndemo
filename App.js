/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Dimensions,
    Animated,
    ActivityIndicator
} from 'react-native';

//获取屏幕的宽度和高度
const screenSize = Dimensions.get('window');

//定义网络请求的url
const request_url = 'https://www.toutiao.com/api/comment/list/?group_id=6531845812878574084&item_id=6531845812878574084&offset=0&count=100';

export default class App extends Component<Props> {
    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    content: {
        fontSize: 15,
        color: 'black',
    },
    homeList: {
        borderWidth: 1,
        borderColor: '#ff0000',
        width: screenSize.width,
        height: screenSize.height
    },
    cell: {
        width: screenSize.width,
        height: 50
    }


});