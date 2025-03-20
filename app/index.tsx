import { StyleSheet, View, Text } from 'react-native';
import PagerView, { usePagerView } from 'react-native-pager-view';
import { usePowerState } from 'expo-battery';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react';

export default function MyPager() {
    const { batteryLevel, batteryState } = usePowerState();
    const { ref, setPage } = usePagerView();

    let buttonColor = 'green';
    if (batteryLevel > 0.6) {
        buttonColor = 'green';
    } else if (batteryLevel <= 0.60 && batteryLevel > 0.25) {
        buttonColor = 'yellow';
    } else {
        buttonColor = 'red';
    }

    useEffect(() => {
        if(batteryState === 0){
            setPage(0)
        }
        else if(batteryState === 1){
            setPage(1)
        }
        else if(batteryState === 2){
            setPage(2)
        }
        else {
            setPage(3)
        }
    }, [batteryState])

    return (

        <PagerView style={styles.pager} initialPage={0} ref={ref}>
            <View style={styles.page} key="1">
                {batteryState === 0 && (
                    <>
                        <MaterialIcons name="battery-unknown" size={50} color="white" />
                        <Text style={styles.subtitulo}>Desconhecido</Text>
                    </>
                )}
            </View>
            <View style={styles.page} key="2">
                {batteryState === 1 && (
                    <>
                        <MaterialIcons name="battery-4-bar" size={50} color="white" />
                        <Text style={styles.subtitulo}>Desplugado</Text>
                    </>
                )}
            </View>
            <View style={styles.page} key="3">
                {batteryState === 2 && (
                    <>
                        <MaterialIcons name="battery-charging-full" size={50} color="green" />
                        <Text style={styles.subtitulo}>Carregando</Text>
                    </>
                )}
            </View>
            <View style={styles.page} key="4">
                {batteryState === 3 && (
                    <>
                        <MaterialIcons name="battery-full" size={50} color="white" />
                        <Text style={styles.subtitulo}>Completa</Text>
                    </>
                )}
            </View>
        </PagerView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pager: {
        flex: 1,
        width: '100%',
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(236, 177, 90)', // Fundo levemente transparente
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
});
