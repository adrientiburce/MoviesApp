import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Search from '../components/FilmSearch/Search'
import FilmDetail from '../components/FilmDetail/FilmDetail'

const SearchStackNavigator = createStackNavigator({
        'Search': {
            screen: Search,
            navigationOptions: {
                title: 'Rechercher'
            }
        },
        'FilmDetail': {
            screen: FilmDetail,
            navigationOptions: {
                title: 'Un Film'
            }
        },
    }
);

export default createAppContainer(SearchStackNavigator)
