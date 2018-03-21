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
type Props = {
    item: Object,
    onCellClick: (item: Object) => voids
};

export default class HomeListCell extends Component <Props> {

    constructor(props) {
        super(props);
        this.state = {
            // imageslistcount: int
        }
    };


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
            <View style = {HomeItemCellStyles.cell1}>
                <Text style = {HomeItemCellStyles.abstract}>
                    {this.props.item.title} + {this.props.item.keywords}
                </Text>

                <View style={HomeItemCellStyles.imgBackView}>
                    <Image source={{uri: this.props.item.image_list[0].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                    <Image source={{uri: this.props.item.image_list[1].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                    <Image source={{uri: this.props.item.image_list[2].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                </View>

            </View>
        );
    };

    renderContent() {
        return (
            <View style = {HomeItemCellStyles.cell1}>
                <Text style = {HomeItemCellStyles.title}>
                    {this.props.item.title} + {this.props.item.keywords}
                </Text>
            </View>
        );
    };

    render() {

        console.log('图片数目：' + this.props.item.image_list.length);

        if (this.props.item.image_list.length == 3) {
            console.log('88888888888这里是测试打印2222222222222222')
            return this.renderImagesContent();
        }else{
            console.log('这里是测试打印');
            return this.renderContent();
        }
    }
}


const HomeItemCellStyles = StyleSheet.create({
    cell1: {
        backgroundColor: '#252525'
    },
    imageStyle: {
        flex: 1,
        width: (screenSize.width - 80) / 3,
        height: (screenSize.width - 80) / 3,
        margin: 10,
        borderColor: '#555555',
        borderWidth: 0.5
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
        color: '#ffffff',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5
    },
    subTitle: {
        fontSize: 13,
        color: '#ffffff',
        left: 10,
        bottom: 5,
        width: screenSize.width - 20
    },
    abstract: {
        fontSize: 13,
        color: '#ffffff',
        left: 10,
        top: 5,
        bottom: 15,
        width: screenSize.width - 20
    },
    content2 : {
        fontSize: 13,
        color: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    }
});
















