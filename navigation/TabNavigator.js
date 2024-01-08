// Importa o React para construir componentes
import React from 'react';

// Importa o componente createBottomTabNavigator do pacote @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa o componente Ionicons para ícones vetoriais
import Ionicons from 'react-native-vector-icons/Ionicons';

// Importa os componentes de tela Feed e CreateStory da pasta ../screens
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

// Cria um objeto Tab utilizando o createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Define o componente funcional BottomTabNavigator
const BottomTabNavigator = () => {
  return (
    // Renderiza o Tab.Navigator que configura a navegação por abas na parte inferior
    <Tab.Navigator
      // Configurações individuais para cada aba (screen)
      screenOptions={({ route }) => ({
        // Configuração do ícone para cada aba
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Se a aba for "Feed", define o ícone com base no foco
          if (route.name === 'Feed') {
            // 'book' quando a aba está focada, 'book-outline' quando não está
            iconName = focused ? 'book' : 'book-outline';
          } 
          // Se a aba for "Criar História", define o ícone com base no foco
          else if (route.name === 'Criar História') {
            // 'create' quando a aba está focada, 'create-outline' quando não está
            iconName = focused ? 'create' : 'create-outline';
          }

          // Retorna o componente Ionicons com o ícone correspondente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      // Opções de estilo da barra de navegação por abas
      tabBarOptions={{
        // Cor quando a aba está ativa
        activeTintColor: 'tomato',
        // Cor quando a aba está inativa
        inactiveTintColor: 'gray',
      }}
    >
      {/* Define a aba "Feed" com o componente Feed */}
      <Tab.Screen name="Feed" component={Feed} />
      {/* Define a aba "Criar História" com o componente CreateStory */}
      <Tab.Screen name="Criar História" component={CreateStory} />
    </Tab.Navigator>
  );
}

// Exporta o componente BottomTabNavigator para ser utilizado em outras partes do aplicativo
export default BottomTabNavigator;
