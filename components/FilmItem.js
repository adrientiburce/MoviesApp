import React, {Component} from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {getImageFromApi} from '../API/TMDBApi'

class FilmItem extends Component {
    render() {
        const {film, displayDetailForFilm} = this.props;
        return (
            <TouchableOpacity
                style={styles.main_container}
                onPress={() => displayDetailForFilm(film.id)}>
                <Image
                    style={styles.image}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.vote_average}</Text>
                    </View>
                    <View style={styles.overview}>
                        <Text numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text>Film sorti le {film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    content: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: '#eee'
    },
    header: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        flex: 1,
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#c7c7c7',
    },
    overview: {
        flex: 7
    },
    date: {
        flex: 1,
        fontStyle: 'italic',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default FilmItem;
