import React, {useEffect, useState, useRef} from "react";
import {ActivityIndicator, Button, FlatList, StyleSheet, TextInput, View} from "react-native";

import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
import FilmItem from "./FilmItem";

const Search = () => {

    const [searchText, setSearchText] = useState('');
    const [films, setFilms] = useState([]);
    // handle pagination
    const page = useRef(0);
    const totalPages = useRef(0);
    // handle api fetch
    const [isLoading, setIsLoading] = useState(false);


    const loadFilmsFromApi = () => {
        console.log("APPEL", 'loadFills');
        getFilmsFromApiWithSearchedText(searchText, page + 1).then((data) => {
            page.current = data.page;
            totalPages.current = data.total_pages;
            setFilms(films => [...films, ...data.results]);
            setIsLoading(false);
        })
    };

    const searchFilm = () => {
        if (searchText.length > 0) {
            page.current = 0;
            totalPages.current = 0;
            setIsLoading(true);
            // after the api call, clear input
            setSearchText('');
        }
    };

    useEffect(() => {
        if(searchText === '') {
            loadFilmsFromApi();
        }
        console.log(page, totalPages, "Nombre de film " + films.length);
    }, [searchText, films]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Titre du film"
                onSubmitEditing={() => searchFilm()}
                onChangeText={(text) => setSearchText(text)}
            />
            <Button title="Rechercher"
                    onPress={() => searchFilm()}
            />

            {(isLoading && <ActivityIndicator/>) ||
            <FlatList
                style={styles.list}
                data={films}
                onEndReachThreashold={0.5}
                onEndReached={() => {
                    if (page.current < totalPages.current) {
                        console.log("APPEL");
                        loadFilmsFromApi()
                    }
                }}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
            />}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        borderColor: "grey",
        borderWidth: 1,
        height: 50,
        fontSize: 18,
        paddingLeft: 5,
        marginBottom: 10
    },
    container: {
        marginTop: 20,
        flex: 1
    },
    list: {
        marginTop: 10
    }
});
