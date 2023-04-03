import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Viewlist1 from './components/Viewlist1';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6r_sDs9dGpvjui3KHAufGsPu1WHy5RQ",
  authDomain: "maid-for-you-3398a.firebaseapp.com",
  projectId: "maid-for-you-3398a",
  storageBucket: "maid-for-you-3398a.appspot.com",
  messagingSenderId: "370096329430",
  appId: "1:370096329430:web:fa650087470998e7822f77",
  measurementId: "G-VCWJXLCXYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ok this is view screen krishna</Text>
      <Viewlist1></Viewlist1>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
