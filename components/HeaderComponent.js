import { StyleSheet, View, Text } from "react-native";
import GoBackButton from "../UI/GoBackButton";
function HeaderComponent ({ mainStyle, buttonStyle, textStyle, title } ) {
    return (
        <>
       
        <View style={[styles.main, mainStyle]}>
            <View style={styles.space}></View>
                <View style={[styles.button, textStyle]} >
                <GoBackButton style={[styles.button, buttonStyle]}/>
                </View>
                    
                
            <Text style={styles.text}>{title}</Text>
            </View>
           
           
           
      
        </>
    );
}
export default HeaderComponent ;

const styles = StyleSheet.create({
    main: {
      
        width: '100%',
        height: 150,
        backgroundColor: 'yellow',
        borderRadius: 8,
    },
    space: {
        height:21
    },
    text: {
        fontSize:30,
        fontFamily :'Rowdies-Bold',
       textAlign : 'center',
       
      
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        margin:10,
    
    }
    
})