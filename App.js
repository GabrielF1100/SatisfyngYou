import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const App = (props) => {

  return (

    <View style={estilos.container}>

      {/* View da logo e o nome na tela de login */}
      <View style={estilos.containerLogo}>

        <Text style={estilos.titulo} > Satisfying.You </Text>   
        <Icon name='smiley' size={50} color={'white'}/> 

      </View>

      {/* View do Formulário e o botão de entrar */}
      <View style={estilos.containerFormulario}>

        <View style={estilos.containerEmail}>
          
          <Text style={estilos.txtDescricao}> E-mail </Text>
        
        </View>

        <View style={estilos.containerEmailInput}>

          <TextInput style={estilos.inputText}
            placeholder="Email"
            placeholderTextColor={'#3F92C5'}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={() => {}}
          />
        
        </View>

        <View style={estilos.containerSenha}>
          
          <Text style={estilos.txtDescricao}> Senha </Text>
        
        </View>

        <View style={estilos.containerSenhaInput}>
          <TextInput style={estilos.inputText}
            placeholder="Senha"
            placeholderTextColor={'#3F92C5'}
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />
        </View>

        <View style={estilos.containerBotaoEntrar}>

          <TouchableOpacity style={estilos.buttonSubmit} onPress={() => {props.navigation.navigate("DrawerNavigation")}} >

              <Text style={estilos.submitText}>Entrar</Text>

          </TouchableOpacity>

        </View>

      </View>

      {/* View dos botões de criar uma nova conta e de refazer a senha */}
      <View style={estilos.containerBotoes}>
        
          <TouchableOpacity style={estilos.buttonNewAcc}>
            <Text style={estilos.submitText}>Criar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.buttonNewPass}>
            <Text style={estilos.submitText}>Esqueci minha senha</Text>
          </TouchableOpacity>

      </View>

  </View>
  );
};

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#372775'
  },

  containerLogo: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: 'orange',
    width: '100%',
    height: '100%',
    paddingHorizontal: 250
    
  },

  containerFormulario: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },

  containerBotoes: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //backgroundColor: 'pink',
    width: '100%',
    height: '100%'
  },

  containerEmail: {
    flex: 2,
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    height: '100%'
  },

  containerEmailInput: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  containerSenha: {
    flex: 2,
    alignItems: 'start',
    width: '100%',
    height: '100%',
  },  

  containerSenhaInput: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  containerBotaoEntrar: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },

  txtDescricao: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Regular',
    width: '60%',
    paddingLeft: 133,
    paddingTop: 10
  },

  inputText: {
    backgroundColor: 'white',
    width: '70%',
    height: '80%',
    color: '#3F92C5',
    fontSize: 10,
    borderRadius: 1,
    fontFamily: 'AveriaLibre-Regular',
  },

  titulo: {
    fontSize: 45,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },

  buttonSubmit: {
    backgroundColor: '#49B976',
    width: '70%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  buttonNewAcc: {
    flex: 5,
    backgroundColor: '#419ED7',
    width: '70%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  buttonNewPass: {
    flex: 5,
    backgroundColor: '#B5C7D1',
    width: '70%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  submitText: {
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'AveriaLibre-Regular'
  }

})

export default App