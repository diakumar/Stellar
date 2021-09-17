import React, {Component} from 'react';
import { ViewBase,Text,Stylesheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image } from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
           <ImageBackground source={require('../assets/space.gif')} style={styles.backroundImage}>
               <View style={styles.titleBar}>
                   <Text style={styles.titleText}>STELLAR APP</Text>
               </View>

               <TouchableOpacity style={styles.routeCard} onPress{()=>this.props.navigation.navigate("TonightSky")}>
               <Text style={styles.routeText}>Tonight SKy</Text>
               <Image source={require("..assets/stars.gif)} style={{width:80,height:80}}></Image>
               </TouchableOpacity>
        )
    }
    }
}