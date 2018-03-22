import React, {Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    NativeModules
} from 'react-native';

const screenSize = Dimensions.get('window');

let contentheigtht = 9090;

type Props = {
    item: Object,
    onCellClick: (item: Object) => voids
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
        console.log('点击cell...............');
        // const {item} = this.props;

        // 创建原生模块
        // var rnManager = require('react-native').NativeModules.RNNativeManager;
        // 方法调用

        //rnManager.doSomething({item});

        //
        //rnManager.alertWithTitle('title','content3');

        //
        // rnManager.callbackMethod(({item}),(error,events) => {
        //     if (error) {
        //         console.warn(error);
        //     } else {
        //         alert(events)//返回的数据
        //     }
        // });


        // rnManager.goWebDetail({item});

    };

    //渲染
    renderImagesContent() {
        return (
            <View style =  {HomeItemCellStyles.cell1Content}>
                <Text style = {HomeItemCellStyles.title}>
                    {this.props.item.wbody}
                </Text>

                <Image source={{uri: this.props.item.wpic_small,cache: 'force-cache'}}
                       style={HomeItemCellStyles.imageStyle}/>
            </View>
        );
    };
    renderTextContent() {
        return (
            <View style =  {HomeItemCellStyles.cell1Content}>
                <Text style = {HomeItemCellStyles.title}>
                    {this.props.item.wbody}
                </Text>
            </View>
        );
    };

    render() {
        if (this.props.item.wtype == '2'){
            return this.renderImagesContent();
        }
        return this.renderTextContent();

    }
}
const HomeItemCellStyles = StyleSheet.create({
    cell1Content: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin:10,
        borderColor: '#111111',
        borderWidth: 0.5
    },
    imageStyle: {
        flex: 1,
        marginTop: 5,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
        borderColor: '#555555',
        borderWidth: 0.5,
        height:200
    },
    imgBackView:{
        marginTop:5,
        marginBottom:5,
        width:screenSize.width,
        backgroundColor: '#252525',
        flex: 1,
        flexDirection: 'row'
    },
    title:{
        fontSize: 15,
        color: '#888888',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        borderColor: '#555555',
        borderWidth: 0.5
    }
});
















