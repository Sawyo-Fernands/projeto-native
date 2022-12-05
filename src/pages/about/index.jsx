import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, StatusBar, Alert  } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function About() {

    const navigation=useNavigation()
  const [ clock,setClock ] = useState()

  useEffect(()=>{
    setInterval(() => {
      const date = new Date()
      setClock(date.toLocaleTimeString())
    }, 1000);
  },[])

  const [user,setUser] = useState('')

  const [pontoSelecionado,setPontoSelecionado] = useState()

  const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "Deseja adicionar um ponto?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "Adicionar"
      },
      { text: "Adicionar", onPress: () => {
        setPontoSelecionado(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`)
        Toast.show({
          type: 'success',
          text1: '',
          text2: 'Ponto adicionado com sucesso! 👋'
        });
      } }
    ]
  );

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_key')
      if(value !== null) {
        setUser(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <View style={styles.container}>
      <StatusBar />
      <Toast />
        <View style={{position: 'absolute', left: 2, right: 0, top: 10,width:'95%',margin:'auto'}}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../../../assets/user.png')} style={{width:40,height:40,marginRight:10}} />
            <Text style={{fontWeight:'bold',color:'#0a2c26'}}>{user}</Text>
            </View>
            <View>
            <TouchableOpacity 
          onPress={()=>navigation.goBack()}
          >
           <Text style={[styles.buttonBack]}><Icon size={18} color='#fff' name='arrow-return-left' /> Sair</Text>
          </TouchableOpacity>
            </View>
            
          </View>
          
          </View>

      <Text style={styles.clockItem}>{clock}</Text>

      <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity 
          onPress={createTwoButtonAlert}
          >
           <Text style={[styles.button,{marginRight:20}]}><Icon size={13} color='#fff' name='check' style={{marginRight:15}} />  Adicionar Ponto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('VisualizarPontos',{
            paramKey: pontoSelecionado
          })}
          >
           <Text style={styles.button}><Icon size={13} color='#fff' name='angle-dobule-right' style={{marginRight:15}} />  Visualizar Pontos</Text>
          </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', left: 2, right: 0, bottom: 5,width:'95%',margin:'auto',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',color:'#0a2c26'}}>PontoBS©2022</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding:10,
    borderRadius:8,
    backgroundColor:"#11BF9F",
    color:'#fff',
    borderRadius: 7,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,

},
  buttonBack:{
      paddingHorizontal:18,
      paddingVertical:12,
      borderRadius:8,
      backgroundColor:"#c94848",
      color:'#fff',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      height: 45,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
  },
  clockItem:{
      textTransform:'uppercase',
      fontSize:50,
      marginBottom:10,
  },
  containerCard:{
    color:'#fff',
    backgroundColor:"#35AAFF",
    padding:10,
    marginTop:60,
    borderRadius:12
  },
  textContainerCard:{
    color:'#fff',
    fontSize:14,
    textTransform:'uppercase'
  }
});
