import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Products() {

    // const ContentList = () => {
    // Dados de exemplo para os itens da lista
    const listProduct = [
        {
            id: 1,
            title: 'Tratamento de Unhas Encravadas',
            description: 'Remoção e ajuste das unhas para prevenir e tratar infecções e dor causadas por unhas encravadas..',
            image: '../assets/images/card-001.png', // URL da imagem de exemplo
        },
        {
            id: 2,
            title: 'Tratamento de Calos e Calosidades',
            description: 'Remoção de calos e calosidades para aliviar a dor e prevenir complicações como úlceras.',
            image: '../assets/images/card-002.png', // URL da imagem de exemplo
        },
        {
            id: 3,
            title: 'Tratamento de Micoses nas Unhas (Onicomicose)',
            description: 'Terapia antifúngica e acompanhamento para o tratamento de infecções fúngicas nas unhas.',
            image: '../assets/images/card-003.png', // URL da imagem de exemplo
        },
        {
            id: 4,
            title: 'Tratamento de Verrugas Plantares',
            description: 'Aplicação de tratamentos tópicos ou crioterapia para remover verrugas causadas pelo vírus HPV.',
            image: '../assets/images/card-004.png', // URL da imagem de exemplo
        },
        {
            id: 5,
            title: 'Correção de Deformidades dos Pés',
            description: 'Orientação e aplicação de órteses para corrigir problemas estruturais, como joanetes ou dedos em garra.',
            image: '../assets/images/card-005.png', // URL da imagem de exemplo
        },
        {
            id: 6,
            title: 'Avaliação e Tratamento de Pé Diabético',
            description: 'Prevenção e tratamento de feridas em pacientes diabéticos para evitar complicações graves.',
            image: '../assets/images/card-002.png', // URL da imagem de exemplo
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Pés sem dor
            </Text>
            {listProduct.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleProduct}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>                
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: '#000', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#98fb98',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#FFFF',
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});
