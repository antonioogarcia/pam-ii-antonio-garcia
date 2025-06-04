import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDcAut9BG4fabGjP_bGrag3rvs3NHLfILc",
  authDomain: "pam-ii-antonio.firebaseapp.com",
  projectId: "pam-ii-antonio",
  storageBucket: "pam-ii-antonio.appspot.com", // CORRIGIDO AQUI
  messagingSenderId: "441673826765",
  appId: "1:441673826765:web:3531a40015a6599b258484"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nomesCollection = firebase.firestore().collection('brainrots');
        const snapshot = await nomesCollection.get();

        const data = [];
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        console.log('Dados recebidos do Firestore:', data);
        setNomes(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            {/* Testa mostrar o item inteiro */}
            <Text>{item.nome} {item.sobrenome}</Text>
            {/* <Text>{JSON.stringify(item)}</Text> */}
          </View>
        )}
      />
    </View>
  );
}
