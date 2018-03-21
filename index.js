import { AppRegistry } from 'react-native';
import App from './App';

import HomeList from './src/scripts/HomeList';
import ItemCommentsList from './src/scripts/ItemCommentsList';
import FunJokeList from './src/scripts/FunJokeList';


AppRegistry.registerComponent('rndemo', () => App);
AppRegistry.registerComponent('HomeList',() => HomeList , false)
AppRegistry.registerComponent('ItemCommentsList',() => ItemCommentsList, false)
AppRegistry.registerComponent('FunJokeList',() => FunJokeList, false)