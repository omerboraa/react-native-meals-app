import { StyleSheet, Text, View,  } from "react-native";
function List({data}) {
    return data.map((dataPoint) => (
            <View key={dataPoint} style={styles.listItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
            
        ));
    
    
}

export default List;

const styles= StyleSheet.create({
    listItem:  {
        margin:1,
        
        backgroundColor: '#AA77FF',
    },
    itemText:  {
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        fontSize:25,
        fontFamily:'Rowdies-Light'

    }

})