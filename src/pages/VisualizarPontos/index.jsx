import { Text, View , StyleSheet, StatusBar , TouchableOpacity, Image, FlatList, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function VisualizarPontos(){

    const navigation=useNavigation()
    const [user,setUser] = useState('')
    const usuario = user
    const [pontos,setPontos] = useState()

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_key')
      if(value !== null) {
        setUser(value)

        setTimeout(() => {
          setPontos([
            {
                id:1,
                nomeUsuario:usuario,
                dataPonto:' 11/05/2022 12:45:12'
            },
            {
                id:2,
                nomeUsuario:usuario,
                dataPonto:' 01/07/2022 07:45:12'
            },
            {
                id:3,
                nomeUsuario:usuario,
                dataPonto:' 16/10/2022 12:45:12'
            },
            {
                id:4,
                nomeUsuario:usuario,
                dataPonto:' 27/10/2022 08:45:12'
            },
            {
               id:5,
                nomeUsuario:usuario,
                dataPonto:' 18/12/2022 06:45:12'
            },
            {
               id:6,
                nomeUsuario:usuario,
                dataPonto:' 11/05/2023 12:45:12'
            },
            {
                id:7,
                nomeUsuario:usuario,
                dataPonto:' 01/07/2023 07:45:12'
            },
            {
               id:8,
                nomeUsuario:usuario,
                dataPonto:' 16/10/2023 12:45:12'
            },

        ])
        }, 100);
      }
    } catch(e) {
      // error reading value
    }
  }

  useEffect(()=>{
    getData()
  },[user])

  const [id,setId] = useState()

  const createTwoButtonAlert = () =>
  Alert.alert(
    "",
    "Tem certeza que deseja remover este ponto?",
    [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "Adicionar"
      },
      { text: "Remover Ponto", onPress: () => {
        setPontos(pontos.filter(ponto => ponto.id!== id))
      } }
    ]
  );
    
    return(
        <View style={styles.container}>
            <StatusBar />
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
           <Text style={[styles.buttonBack]}><Icon size={18} color='#fff' name='arrow-return-left' /> Voltar</Text>
          </TouchableOpacity>
            </View>
            
          </View>
          
          </View>

        <View style={{marginTop:75,width:'90%',marginBottom:10}}>
            <FlatList 
            data={pontos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item})=>(
                    <View style={{padding:10,backgroundColor:'#35AAFF',marginTop:10,borderRadius:10,margin:0,position:'relative'}}>
                      <View  style={{display:'flex',flexDirection:'row-reverse',width:'100%',justifyContent:'space-between'}}>
                      <TouchableOpacity 
                      onPress={()=>{
                        createTwoButtonAlert()
                        setId(item.id)
                      }}
                      >
                       <Icon size={21} 
                      color='#fff' 
                      name='close' 
                       />
                      </TouchableOpacity>
                      <Text style={{color:'white',padding:5}}>Usuário :{item.nomeUsuario}</Text>
                      </View>
                        <Text style={{color:'white',padding:5}}>Data do Ponto: {item.dataPonto}</Text>
                    </View>
            )}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  });