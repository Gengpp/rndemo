import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    NativeModules,
    Button
} from 'react-native';


import DateUtil from './DateUtil'

const screenSize = Dimensions.get('window');

let contentheigtht = 9090;

type Props = {
    item: Object,
    onCellClick: (item: Object) => void,
    onButtonPress: () => void
};



export default class FunJokeListCell extends Component <Props> {
    constructor(props) {
        super(props);
        this.state = {
            // imageslistcount: int
        }
    };

    //判断字符是否为空的方法
    // isEmpty(obj){
    //     if(typeof obj == "undefined" || obj == null || obj == ""){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    onCellClick = () => {
        console.log('点击cell...............' + item);
        const {item} = this.props;

        //创建原生模块
        var rnManager = require('react-native').NativeModules.RNNativeManager;
        //方法调用
        rnManager.showImages(item);
    };

    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
    };

    //渲染
    renderImagesContent() {
        return (

            <TouchableWithoutFeedback onPress={this.onCellClick}>

                <View style={HomeItemCellStyles.cell1Content}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={HomeItemCellStyles.TimeText}>
                            {DateUtil.formatDate(this.props.item.update_time * 1000, "yyyy-MM-dd hh:mm")}
                        </Text>

                        {
                            this.props.item.user_avatar
                                ?
                                <Image source={{uri: this.props.item.user_avatar, cache: 'force-cache'}}
                                       style={HomeItemCellStyles.user_avatar}/>

                                : null
                        }
                        {
                            this.props.item.user_name
                                ? <Text style={HomeItemCellStyles.user_name}>
                                    {this.props.item.user_name}
                                </Text>
                                : null
                        }

                    </View>

                    //文本
                    <Text style={HomeItemCellStyles.title}>
                        {this.props.item.wbody}
                    </Text>

                    //图片
                    {
                        this.props.item.wpic_small
                            ?
                                <Image source={{uri: this.props.item.wpic_small, cache: 'force-cache'}}
                                       style={HomeItemCellStyles.imageStyle}/>
                            : null
                    }


                    //cell的bottom
                    <View style={HomeItemCellStyles.bottomView}>

                        //赞
                        <View style={HomeItemCellStyles.zanView}>
                            <Image source={require('./img/like@1.5.png')}
                                   style={HomeItemCellStyles.likeImg}
                            />
                            <Text style={HomeItemCellStyles.likeTitle}>
                                {this.props.item.comments}
                            </Text>
                        </View>



                        //收藏
                        <View style={HomeItemCellStyles.storeView}>
                            <Image source={require('./img/funny.png')}
                                   style={HomeItemCellStyles.storeImg}
                            />

                        </View>

                    </View>

                </View>

            </TouchableWithoutFeedback>
        );
    };

    render() {

        return this.renderImagesContent();

    }
}
const HomeItemCellStyles = StyleSheet.create({
    cell1Content: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 10
    },
    TimeText: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 10,
        color: '#aaaaaa'
    },
    imageStyle: {
        flex: 1,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        height: 200
    },
    user_name:{
        flex:1,
        marginLeft: 5,
        marginTop: 5,
        fontSize: 10,
        color: '#aaaaaa',
        // textAlign: 'right',
    },
    user_avatar: {
        width: 12,
        height: 12,
        // 设置图片填充模式
        resizeMode: 'cover',
        // 设置圆角
        borderRadius: 7.5,
        // 设置图片位置
        marginLeft: 30,
        marginTop:5
    },
    imgBackView: {
        marginTop: 5,
        marginBottom: 5,
        width: screenSize.width,
        backgroundColor: '#252525',
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        color: '#888888',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    bottomView:{
        // borderColor:'#ff0000',
        // borderWidth:0.5,
        flexDirection: 'row',
        height:40,
        marginTop:5
    },
    zanView:{
        backgroundColor:'#ffffff',
        top:5,
        left:10,
        width:60,
        height:25,
        borderColor:'#bbbbbb',
        borderWidth:0.5,
        flexDirection: 'row',
        justifyContent:'center'
    },
    likeImg:{
        width:16,
        height:16,
        marginTop:4
    },
    likeTitle:{
        marginLeft:5,
        marginTop:5,
        color:'#a3a3a3'
    },
    storeView:{
        left:20,
        marginRight:10,
        marginTop:5,
        height:25,
        width:25,
        borderColor:'#bbbbbb',
        borderWidth:0.5,
        justifyContent:'center'
    },
    storeImg:{
        width:17,
        height:17,
        justifyContent:'center'
    }
});
















