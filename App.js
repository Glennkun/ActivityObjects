import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/style';

const userDataWithImages = [
  {
    firstName: 'Jess',
    lastName: 'Jumawan',
    nickname: 'kap',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jj.jpg'), 
  },
  {
    firstName: 'Junrey',
    lastName: 'Genzon',
    nickname: 'Retri Godz',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jg.jpg'), 
  },
  {
    firstName: 'Jovert',
    lastName: 'Davirao',
    nickname: 'Bert',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jd.jpg'), 
  },
  {
    firstName: 'John Mark',
    lastName: 'Lagrimas',
    nickname: 'Mark',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jm.jpg'), 
  },
  {
    firstName: 'James',
    lastName: 'Noble',
    nickname: 'Jamis',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jn.jpg'), 
  },
  {
    firstName: 'John Carlo',
    lastName: 'Razon',
    nickname: 'WamPyb',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/jr.jpg'), 
  },
  {
    firstName: 'Aldwin',
    lastName: 'Handumon',
    nickname: 'Kol',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/ah.jpg'), 
  },
  {
    firstName: 'Rodel Glenn',
    lastName: 'Jawa',
    nickname: 'Delro',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/rj.jpg'), 
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>Choose your Pokemon</Text>
      <FlatList
        data={userDataWithImages}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text>Nickname: {selectedUser.nickname}</Text>
              <Text>Course: {selectedUser.course}</Text>
              <Text>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 200, height: 200 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default UserList;
