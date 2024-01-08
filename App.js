// Importa o módulo 'react-native-gesture-handler' para lidar com gestos (necessário para o React Navigation)
import 'react-native-gesture-handler';

// Importa o React e outros módulos necessários
import * as React from 'react';

// Importa o componente NavigationContainer do React Navigation
import { NavigationContainer } from '@react-navigation/native';

// Importa o componente DrawerNavigator personalizado
import DrawerNavigator from "./navigation/DrawerNavigator";

// Função principal do aplicativo
export default function App() {
  // Retorna a estrutura principal do aplicativo
  return (
    // Encapsula o aplicativo no componente NavigationContainer do React Navigation
    <NavigationContainer>
      {/* Renderiza o DrawerNavigator, que pode conter outras formas de navegação */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}


// NavigationContainer envolve toda a estrutura de navegação do seu aplicativo. 
// Drawer Navigator é um tipo de navegação que fornece um menu lateral deslizante.