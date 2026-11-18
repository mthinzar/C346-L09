import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, Alert} from 'react-native';

const datasource = [
    {
        data: [
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title: "Vowels", bgColor: "skyblue"
    },
    {
        data: [
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'}
        ],
        title: "Consonants", bgColor: "khaki"
    }
];


const renderItem = ({item, index, section}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}
        onPress={() => Alert.alert(item.key + " is selected")}>
            <Text style={styles.textStyle}>{index+1}. {section.title} {item.key}</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>L09 Exercise 2</Text>
            {/*<FlatList data={datasource} renderItem={renderItem}/>*/}
            <SectionList contentContainerStyle={{padding:10}}
                         sections={datasource}
                         renderItem={renderItem}
                         renderSectionHeader={({section: {title, bgColor}}) => (
                             <Text style={[styles.headerText, {backgroundColor:bgColor}]}>{title}</Text>
                         )}/>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
