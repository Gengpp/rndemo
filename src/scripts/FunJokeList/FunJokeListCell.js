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
        let imgHeight = new Number(this.props.item.wpic_m_height);
        if (imgHeight > 400){
            imgHeight = 400;
        }
        contentheigtht = imgHeight + 100;
        console.log(imgHeight);
        console.log(contentheigtht);

        return (

            <View style =  {{backgroundColor: '#ffffff',
                margin:10,
                height:contentheigtht,
                borderColor: '#555555',
                borderWidth: 0.5}}>
                <Text style = {HomeItemCellStyles.title}>
                    {this.props.item.wbody}
                </Text>


                {/*<View style={HomeItemCellStyles.imgBackView}>*/}
                    {/*<Image source={{uri: this.props.item.image_list[0].url}}*/}
                           {/*style={HomeItemCellStyles.imageStyle}/>*/}
                    {/*<Image source={{uri: this.props.item.image_list[1].url}}*/}
                           {/*style={HomeItemCellStyles.imageStyle}/>*/}
                    {/*<Image source={{uri: this.props.item.image_list[2].url}}*/}
                           {/*style={HomeItemCellStyles.imageStyle}/>*/}
                {/*</View>*/}



            </View>
        );
    };
    render() {
        return this.renderImagesContent();
    }
}
const HomeItemCellStyles = StyleSheet.create({
    cell1Content: {
        backgroundColor: '#ffffff',
        margin:10,
        height:contentheigtht,
        borderColor: '#555555',
        borderWidth: 0.5
    },
    imageStyle: {
        flex: 1,
        marginTop: 5,
        marginLeft:10,
        marginRight:10,
        marginBottom:5,
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
        color: '#888888',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        borderColor: '#555555',
        borderWidth: 0.5
    }
});
















