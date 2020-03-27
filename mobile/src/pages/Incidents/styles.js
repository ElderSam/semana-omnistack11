import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1, /* ocupa a tela inteira */
        paddingHorizontal: 24, /* padding nas laterais */
        paddingTop: Constants.statusBarHeight + 10, /* dá uma distância superior na status bar */
    },

    header: {
        flexDirection: 'row', /* coloquei row, porque por padrão é column (um item em baixo do outro, quando dentro do header) */
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold' /* negrito */
    },

    title: {
        fontSize: 30,
        marginBottom: 7,
        marginTop: 15,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        color: '#737380',
    },

    incidentList: {
        marginTop: 22,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 0,
        fontSize: 15,
        marginBottom: 8,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row', /* para que a flexa fique do lado do texto (na mesma linha) */
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
});