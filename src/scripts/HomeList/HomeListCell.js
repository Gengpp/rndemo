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
    item: Object

    // onCellClick: (item: Object) => voids
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
            <View>
                <Text style = {HomeItemCellStyles.abstract}>
                    {this.props.item.title} + {this.props.item.keywords}
                </Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={{uri: this.props.item.image_list[0].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                    <Image source={{uri: this.props.item.image_list[1].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                    <Image source={{uri: this.props.item.image_list[2].url}}
                           style={HomeItemCellStyles.imageStyle}/>
                    /*<Image source={{uri: 'https://p3.pstatp.com/origin/6c4d000864c6b849a576'}}
                           style={HomeItemCellStyles.imageStyle}/>*/
                </View>

            </View>
        );
    };

    renderContent() {
        return (
            <View style = {HomeItemCellStyles.cell1}>
                <Text style = {HomeItemCellStyles.content2}>
                    {this.props.item.title} + {this.props.item.keywords}
                </Text>
            </View>
        );
    };

    render() {



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
        backgroundColor: '#F59900'
    },
    imageStyle: {
        width: 40,
        height: 40,
        margin: 10,
        borderColor: '#555555',
        borderWidth: 0.5,
    },
    subTitle: {
        fontSize: 13,
        color: '#ff2233',
        left: 10,
        bottom: 5,
        width: screenSize.width - 20,
        borderColor: '#00ff00',
        borderWidth: 1,
    },
    name: {
        fontSize: 12,
        color: '#112233',
        left: 0,
        top: 15
    },
    abstract: {
        fontSize: 13,
        color: '#ff2233',
        left: 10,
        top: 5,
        bottom: 15,
        width: screenSize.width - 20,
        borderColor: '#00ff00',
        borderWidth: 1,
    },
    content2 : {
        fontSize: 13,
        color: '#ff0033'
    }
});
















