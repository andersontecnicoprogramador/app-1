import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Products() {

    // const ContentList = () => {
    // Dados de exemplo para os itens da lista
    const listProduct = [
        {
            id: 1,
            title: 'Espresso',
            description: 'Assim como o espresso é a base para muitas bebidas de café, C é uma linguagem fundamental amplamente usada como base para muitas outras linguagens de programação.',
            image: '../assets/images/card-001.png', // URL da imagem de exemplo
        },
        {
            id: 2,
            title: 'Latte',
            description: 'O Python é conhecido por sua simplicidade e sua capacidade de "suavizar" o processo de programação, assim como o leite suaviza o sabor do café no latte',
            image: '../assets/images/card-002.png', // URL da imagem de exemplo
        },
        {
            id: 3,
            title: 'Cappuccino',
            description: 'Java é robusto e fortemente tipado, assim como o cappuccino é uma mistura equilibrada de café e leite',
            image: '../assets/images/card-003.png', // URL da imagem de exemplo
        },
        {
            id: 4,
            title: 'Mocha',
            description: 'Assim como o mocha é uma combinação de café e chocolate, JavaScript combina elementos de várias linguagens e é versátil em aplicação, assim como o mocha é versátil em sabor',
            image: '../assets/images/card-004.png', // URL da imagem de exemplo
        },
        {
            id: 5,
            title: 'Macchiato',
            description: 'Swift é moderno, ágil e focado no desenvolvimento para dispositivos Apple, assim como o macchiato é uma variação focada e concentrada de café',
            image: '../assets/images/card-005.png', // URL da imagem de exemplo
        },
        {
            id: 6,
            title: 'Affogato',
            description: 'Ruby é conhecido por sua elegância e é frequentemente usado para criar aplicações web interativas, assim como o affogato combina café e sorvete de maneira única',
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
