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

//本地读取json数据
import newsfocusdata from './newsfocus.json';

import ListViewCell from './ListViewCell';

//获取屏幕的宽度和高度
const screenSize = Dimensions.get('window');

//定义网络请求的url
const request_url = 'https://www.toutiao.com/api/comment/list/?group_id=6531845812878574084&item_id=6531845812878574084&offset=0&count=100';

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
                let dataBlob = responseData.data.comments;
                this.setState({
                    //复制数据源
                    dataArray: dataBlob,
                    isLoading: false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
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
                <ListViewCell
                    item={item}
                    onCellClick={this.onCellClick}
                ></ListViewCell>
            </View>
        );
    }

    //索引
    keyExtractor = (item: Object, index: number): string => {
        return `${index}`;
    };

    //分割线
    _separator = () => {
        return <View style={{height: 0.5, backgroundColor: 'red'}}/>;
    }


    renderData() {
        console.log('渲染');
        return (
            <FlatList
                style={styles.homeList}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this._separator}//分割线
                data={this.state.dataArray}
                renderItem={this.renderItemView}
            />
        );
    }

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             {/*<Text>{newsfocusdata.data.pc_feed_focus[0].title + '111'}</Text>*/}
    //             <FlatList style={styles.homeList}
    //                       data={
    //                           newsfocusdata.data.pc_feed_focus
    //                       }
    //                       ItemSeparatorComponent={this._separator}
    //                       keyExtractor={this.keyExtractor}
    //                       renderItem={({item}) => <ListViewCell item={item}></ListViewCell>}>
    //             </FlatList>
    //         </View>
    //     )
    // }


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