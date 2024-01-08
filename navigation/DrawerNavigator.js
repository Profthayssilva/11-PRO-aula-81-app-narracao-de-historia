// Importa a biblioteca React
import React from "react";

// Importa o componente createDrawerNavigator do pacote @react-navigation/drawer
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importa o componente TabNavigator personalizado
import TabNavigator from "./TabNavigator";

// Importa o componente Profile da pasta ../screens
import Profile from "../screens/Profile";

// Cria um objeto Drawer utilizando o createDrawerNavigator
const Drawer = createDrawerNavigator();

// Define o componente funcional DrawerNavigator
const DrawerNavigator = () => {
    // Retorna a estrutura do DrawerNavigator
    return (
        // Utiliza o componente Drawer.Navigator para configurar a navegação de gaveta
        <Drawer.Navigator>
            {/* Define a primeira tela do Drawer com o nome "Tela Inicial" e o componente TabNavigator */}
            <Drawer.Screen name="Tela Inicial" component={TabNavigator} />
            {/* Define a segunda tela do Drawer com o nome "Perfil" e o componente Profile */}
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

// Exporta o componente DrawerNavigator para ser utilizado em outras partes do aplicativo
export default DrawerNavigator;
