import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button,Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      melhor: '',
      peso: 0,
      altura: 0
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ( (this.state.peso === 0) || (this.state.altura === 0) ){
      alert('Digite um valor!')
      return;
    }
    res = this.state.peso / (this.state.altura ** 2)
    this.setState({resultado: 'Resultado: ' + res});


    if(res < 18.5){
      this.setState({melhor:'BAIXO PESO'});            
    } 
    else if(res >= 18.6 && res <= 24.9){
      this.setState({melhor: 'PESO NORMAL'});
    }    
    else if(res >= 25 && res <= 29.9){
      this.setState({melhor: 'EXCESSO DE PESO'});
    }
    else if(res >= 30 && res <= 34.9){
      this.setState({melhor: 'OBESIDADE GRAU 1 (MODERADA)'});
    }
    else if(res >= 35 && res <= 39.9){
      this.setState({melhor: 'OBESIDADE GRAU 2 (SEVERA)'});
    }
    else if(res >= 40){
      this.setState({melhor: 'OBESIDADE GRAU 3 (MORBIDA)'});
    }
      
    


  }


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Calculadora IMC</Text>


      <View style = {{alignItems:'center', marginTop: 20}}>
        <Image source = {{uri: 'https://www.saudebemestar.pt/media/89347/obesidade.jpg'}}
        style = {{width: 250, height: 150, marginTop: 10}} />
      </View>
      
      <TextInput
      style={styles.input}
      placeholder="Digite o seu peso"
      onChangeText={ (valor) => this.setState({peso: valor})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a sua altura"
      onChangeText={ (valor) => this.setState({altura: valor})}
      />


      <Button title="Calcular" onPress={this.calcular} />


      <Text style={styles.texto}> {this.state.resultado} </Text>

      <Text style={styles.texto1}> {this.state.melhor} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 15
  },
    texto1:{
    textAlign: 'center',
    fontSize: 25,
    color:'red'
  }
})


export default App;
