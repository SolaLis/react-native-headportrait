/**
 * Created by Zyf on 2017/8/2.
 * 基于webview的Canvas画布
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native';

var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var _width,_height;

import ImagePicker from 'react-native-image-crop-picker'; 

//获取屏幕宽高
const{width,height}=Dimensions.get('window');

var Headportrait = createReactClass({

  propTypes: {

      text_tackphoto: PropTypes.string,
      text_choose: PropTypes.string,
      text_cancel: PropTypes.string,
      action_cancel: PropTypes.func,
      action_getImgUrl: PropTypes.func,
      portraitShow:PropTypes.bool,
  },

  //本地相册
  getpic(){

    var paths=[];
    // 调用多个图像
    setTimeout(() => {
      ImagePicker.openPicker({  
          multiple: false,  
          waitAnimationEnd:false,
          includeExif:true,
          width: 960,
          height:1280,
          cropping: true,
          compressImageQuality: 0.5,
          maxFiles:1,

      }).then(images => {  

          this.props.action_getImgUrl(images.path);
      });
    }, 1000)
  },

  tackpic(){

      // 启动相机拍照
      setTimeout(() => {
        ImagePicker.openCamera({  
            width: 960,
            height:1280,
            maxFiles:1,
            cropping:true,
            compressImageQuality: 0.5,
        }).then(images => { 

            this.props.action_getImgUrl(images.path);
        }); 
      }, 1000)


  },

  render() {
    return (
      <Modal 
          ref='modal'
          animationType='fade'
          transparent={true} 
          visible={this.props.portraitShow} 
          onShow={() => {}} 
          onRequestClose={() => {}} > 
            <View style={{flex:1,width:width,height:height,backgroundColor:'rgba(0, 0, 0, 0.5)'}}>

              <View style={styles.modalStyle}> 

                <TouchableOpacity onPress={()=>this.tackpic()}>
                    <Text style={{fontSize:16,padding:14,color:'black'}}>{this.props.text_tackphoto}</Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: "#f2f2f2",  height: 1,width:width}}/>

                <TouchableOpacity onPress={()=>this.getpic()}>
                    <Text style={{fontSize:16,padding:14,color:'black'}}>{this.props.text_choose}</Text>
                </TouchableOpacity>

                <View style={{ backgroundColor: "#f2f2f2",  height: 8,width:width}}/>

                <TouchableOpacity onPress={()=>{this.props.action_cancel}}>
                    <Text style={{fontSize:16,paddingTop:14,paddingBottom:26,color:'black'}}>{this.props.text_cancel}</Text>
                </TouchableOpacity>
              
              </View>

            </View>
      </Modal>
    );
  }
});

const styles = StyleSheet.create({ 
    container: {  
        alignItems: 'flex-start',  
        backgroundColor: 'green',
        borderWidth:1

    },
    // modal的样式 
    modalStyle: { 
        backgroundColor:'#fff', 
        width:width,
        alignItems: 'center', 
        justifyContent:'center', 
        flex:1, 
        position:'absolute',
        bottom:0,
        borderRadius: 10, 
        borderWidth: 0.5, 
        borderColor:'#ccc', 
    }, 
});  

module.exports = Headportrait;