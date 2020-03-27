import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; //importar ícones
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); //carrega uma página por vez

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident }); //passa o nome da rota
    }

    async function loadIncidents(){
        if(loading){ //evita que mais de uma requisição seja feita 'ao mesmo tempo'
            return;
        }

        if(total > 0 && incidents.lenght === total){ //se já carregou todos os incidentes existentes
            return;
        }
   
        setLoading(true);

        const response = await api.get('incidents', {
            params: { page } //passa a página atual
        });

        setIncidents([...incidents, ...response.data]); //guarda os dados dentro de um estado, juntando com os que já carregaram
        
        setTotal(response.headers['X-Total-Count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>             
            </View>   
            
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>
            
            <FlatList
                data={incidents}
                style={styles.incidentList} /* Lista que pode fazer Scroll */               
                keyExtractor={incident => String(incident.id)}
                // showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents} /* função disparada quando o usuário chega ao final da lista */
                onEndReachedThreshold={0.2} /* quando o usuário estiver à 20% da lista, carrega novos itens */
                renderItem={({ item: incident }) => ( /* retorna um JSX */
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                                }).format(incident.value)}
                        </Text>
                    
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}                
            />
        </View>
    );
}