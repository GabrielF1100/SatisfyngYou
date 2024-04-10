import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const App = () => {

  return (

    <View style={estilos.container}>

      {/* View da logo e o nome na tela de login */}
      <View style={estilos.containerLogo}>
        <Text style={estilos.titleText}>Statisfying.You</Text>
        <Image style={estilos.logo} source={require('./assets/Logo.png')}/>
      </View>

      {/* View do Formulário e o botão de entrar */}
      <View style={estilos.form}>

        <Text style={estilos.Txt}>E-mail</Text>
        <TextInput style={estilos.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Text style={estilos.Txt}>Senha</Text>
        <TextInput
          style={estilos.input}
          placeholder="Senha"
          textContentType="password"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={estilos.buttonSubmit}>
          <Text style={estilos.submitText}>Entrar</Text>
        </TouchableOpacity>

      </View>

      {/* View dos botões de criar uma nova conta e de refazer a senha */}
      <View style={estilos.viewButtons}>
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
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 5

  },

  Txt: {
    color: '#FFF',
    fontSize: 19,
    fontFamily: 'AveriaLibre-Regular'
  },

  titleText: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular'
  },

  logo: {
    width: 45,
    height: 45
  },

  viewButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    gap: 5
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '60%',
    paddingVertical: 20,
    borderRadius: 1
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#3F92C5',
    fontSize: 20,
    borderRadius: 1,
    padding: 5,
    height: '30%',
    fontFamily: 'AveriaLibre-Regular'
    
  },

  buttonSubmit: {
    backgroundColor: '#49B976',
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  buttonNewAcc: {
    backgroundColor: '#419ED7',
    width: '90%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1
  },

  buttonNewPass: {
    backgroundColor: '#B5C7D1',
    width: '90%',
    height: '25%',
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