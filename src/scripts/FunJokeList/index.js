/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList, Dimensions,
    Animated,
    ActivityIndicator
} from 'react-native';

// import HomeItemCell from './HomeItemCell';
import FunJokeListCell from './FunJokeListCell';

const screenSize = Dimensions.get('window');
//定义网络请求的url
const request_url = 'http://120.55.151.67/weibofun/hot/hot_weibo_list.php?apiver=20600&page=0&page_size=30&max_timestamp=-1&latest_viewed_ts=1520434680&udid=933B1302-80ED-408C-8011-1A47347BDFD8';

// http://120.55.151.67/weibofun/hot/hot_weibo_list.php?apiver=20600&page=0&page_size=30&max_timestamp=-1&latest_viewed_ts=1520434680&udid=933B1302-80ED-408C-8011-1A47347BDFD8
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    //声明创建各种props
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
        }
    }


    //网络请求
    fetchData() {
        //这个是js的访问网络的方法
        fetch(request_url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                let dataComments = responseData.items;
                this.setState({
                    //复制数据源
                    dataArray: dataComments,
                    isLoading: false,
                });
                dataComments = null;
            })
            .catch((error) => {
                console.log('error:         ' + error)
                this.setState({
                    error: true,
                    errorInfo: error

                })
            })
            .done();
    }

    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    //加载等待的view
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, {height: 80}]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail:这里请求访问失败！
                </Text>
            </View>
        );
    }

    //list 渲染cell
    renderItemView({item}) {
        return (
            <View>
                style = {styles.cell}
                <FunJokeListCell
                    item={item}
                    onCellClick={this.onCellClick}
                />
            </View>
        );
    }

    //索引
    keyExtractor = (item: Object, index: number): string => {
        return `${index}`;
    };
    //分割线
    _separator = () => {
        return <View style={styles.separatorLine}/>;
    }


    renderData() {
        console.log('渲染');
        return (
            <FlatList
                style={styles.homelistStyle}
                keyExtractor={this.keyExtractor}
                data={this.state.dataArray}
                renderItem={this.renderItemView}
            />
        );
    }
    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据
        return this.renderData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
    },
    homelistStyle: {
        width: screenSize.width,
        height: screenSize.height,
        backgroundColor: '#E6E6E6'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    separatorLine:{
        height: 0.3,
        backgroundColor: '#c6c6c6',
        marginLeft:10,
        marginRight:10,
        marginTop: 5,
        marginBottom:5
    }
});
