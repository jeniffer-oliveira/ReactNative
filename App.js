import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(
        <View>

        <Text style={{fontSize: 20, textAlign: 'center', backgroundColor :'#B0E0E6'}}> Meu perfil profissinal  </Text>

        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/100139970?v=4'}}
          style={{ width: 300, height: 300, margin: 15, borderRadius: 5}}/>
'
        <Text style={{fontSize: 18, textAlign: 'center', backgroundColor: '#B0E0E6', margin: 15, borderRadius: 5}}> 
        Dados pessoais: {'\n'} Nome: Jeniffer {'\n'} Idade: 21 anos 
        </Text>
    
        <Text style={{fontSize: 18, textAlign: 'center', backgroundColor: '#B0E0E6', margin: 15, borderRadius: 5}}> 
        Formacao: {'\n'} Tecnologo em Sistemas para Internet na Fatec Baixada Santista
        </Text>

         <Text style={{fontSize: 18, textAlign: 'center', backgroundColor: '#B0E0E6', margin: 15, borderRadius: 5}}> 
         Projetos: {'\n'}
         https://github.com/jeniffer-oliveira
        </Text>
      
      </View>
    )
  }
}


export default App;

