import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'; 
import List from '../../components/mealDetail/List';


const PopUpButton = ({ SelectMeal, selected, title, buttonTitle, icon}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const renderIngredients = () => {
    return <List data={selected}/>
   
  };

  const renderModal = () => {
    return (
      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <View style={{ backgroundColor: '#AA77FF', padding: 20, borderRadius:20,alignItems: 'center', justifyContent : 'center' }}>
          <Text style={{ fontSize: 40, fontFamily: 'Kanit-Bold', marginBottom: 10 }}>
            {title}
          </Text>
          {renderIngredients()}
          <TouchableOpacity
            onPress={closeModal}
            style={{ alignSelf: 'flex-end', marginTop: 20 }}
          >
            <Text style={{ color: 'blue' }}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={openModal}>
      <Text >
      <View style={styles.iconMain}>
        <Ionicons name={icon} size={30}/>
        <Text style={styles.title}>{buttonTitle}</Text>
      </View>
        </Text>   
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default PopUpButton;

const styles  =StyleSheet.create({
    iconMain: {
        width:150,
        backgroundColor: '#AA77FF',
        height:60,
        marginHorizontal:25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize:16,
        color: 'black',
        fontFamily: 'Kanit-Bold'
    }
})