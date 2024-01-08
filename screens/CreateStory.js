// Importa o React e Component do React para a construção de componentes de classe
import React, { Component } from 'react';

// Importa os componentes de Texto e Visão do React Native para construir a interface do usuário
import { Text, View } from 'react-native';

// Define uma classe CreateStory que estende a classe Component do React
export default class CreateStory extends Component {
    // O método render é obrigatório em componentes de classe e é responsável por renderizar o conteúdo
    render() {
        return (
            // Retorna um componente de Visão (View) que contém um componente de Texto (Text)
            <View
                style={{
                    // Estilo flexível para preencher todo o espaço disponível
                    flex: 1,
                    // Centraliza os itens verticalmente no centro
                    justifyContent: "center",
                    // Centraliza os itens horizontalmente no centro
                    alignItems: "center"
                }}>
                {/* Exibe o texto "Criar História" dentro do componente de Texto */}
                <Text>Criar História</Text>
            </View>
        )
    }
}
