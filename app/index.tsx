import { StyleSheet, View, Text, Button, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { usePowerState } from 'expo-battery';

export default function MyPager() {
    const { lowPowerMode, batteryLevel, batteryState } = usePowerState();

    console.log("teste");

    return (
        <View style={styles.container}>
            <PagerView style={styles.container} initialPage={0}>
                {/* Página 1: Informações sobre o nível de bateria */}
                <View style={styles.page} key="1">
                    <Text style={styles.title}>Nível de Bateria</Text>
                    <View style={styles.batteryLevel}>
                        <Text style={styles.batteryText}>
                            {batteryLevel !== null ? `${(batteryLevel * 100).toFixed(0)}%` : 'Carregando...'}
                        </Text>
                    </View>
                  
                </View>

                {/* Página 2: Exemplo de botão */}
                <View style={styles.page} key="2">
                    <Text style={styles.title}>Página 2</Text>
                    <Text>
                        Modo de Economia de Energia: {lowPowerMode ? 'Ativado' : 'Desativado'}
                    </Text>
                </View>

                {/* Página 3: Exibição de imagem */}
                <View style={styles.page} key="3">
                    <Text style={styles.title}>Página 3</Text>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>Aqui está uma imagem simples para demonstrar!</Text>
                </View>
            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    batteryLevel: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        width: '30%',
        height: 100,
        borderColor: 'gray',
        borderRadius: 10,
    },
    batteryText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
