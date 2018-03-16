import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    NativeModules
} from 'react-native';

const screenSize = Dimensions.get('window');

type Props = {
    info: Object,
    onCellClick: (item: Object) => voids
};


export default class ListViewCell extends Component <Props> {
    onCellClick = () => {
        console.log('点击cell...............');
        const {item} = this.props;

        // 创建原生模块
        var rnManager = require('react-native').NativeModules.RNNativeManager;
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


        rnManager.goWebDetail({item});

    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onCellClick}>

                <View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Image source={{uri: this.props.item.user.avatar_url}}
                               style={HomeItemCellStyles.imageStyle}/>
                        <Text style={HomeItemCellStyles.name}>
                            {'姓名：' + this.props.item.user.name}
                        </Text>
                    </View>
                    <Text style={HomeItemCellStyles.subTitle}
                          adjustsFontSizeToFit={true}>{this.props.item.text}</Text>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

const HomeItemCellStyles = StyleSheet.create({
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
    }
});
