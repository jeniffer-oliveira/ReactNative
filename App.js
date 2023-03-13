import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button,Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      melhor: '',
      alcool: 0,
      gasolina: 0
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){
    if ( (this.state.alcool === 0) || (this.state.gasolina === 0) ){
      alert('Digite um valor!')
      return;
    }
    res = this.state.alcool / this.state.gasolina
    this.setState({resultado: 'Resultado: ' + res});


    if(res > 0.7){
      this.setState({melhor:'Melhor usar gasolina!'});
                 
    } else if(res < 0.7){
      this.setState({melhor: 'Melhor usar Alcool!'});
      }    
      
    


  }


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Alcool ou Gasolina?</Text>


      <View style = {{alignItems:'center', marginTop: 20}}>
        <Image source = {{uri: 'https://royalficinstitucional.com.br/wp-content/uploads/2019/07/qual-combustivel-compensa-mais-alcool-ou-gasolina.png'}}
        style = {{width: 250, height: 150, marginTop: 10}} />
      </View>
      
      <TextInput
      style={styles.input}
      placeholder="Digite o preço do alcool"
      onChangeText={ (valor) => this.setState({alcool: valor})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o preço da gasolina"
      onChangeText={ (valor) => this.setState({gasolina: valor})}
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

