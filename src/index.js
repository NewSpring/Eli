import {
  AppRegistry, Platform, StyleSheet, View,
} from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { nest, withProps } from 'recompose';

import { ThemeProvider } from '@ui/theme';
import FontLoader from '@ui/FontLoader';
import { ActionSheetProvider } from '@ui/ActionSheet';
import Client from '@data/Client';
import OnboardingModal from '@ui/OnboardingModal';
import orientation from '@utils/orientation';
import trackAppState from '@utils/trackAppState';
import styled from '@ui/styled';

import AppRouter from './AppRouter';

const WebLayoutFix = styled({
  ...StyleSheet.absoluteFillObject,
  ...Platform.select({
    web: {
      width: '100vw',
      height: '100vh',
    },
  }),
})(View);

const App = nest(
  WebLayoutFix,
  withProps({ client: Client })(ApolloProvider),
  ThemeProvider,
  FontLoader,
  ActionSheetProvider,
  OnboardingModal,
  AppRouter,
);

orientation.allow(orientation.Orientation.PORTRAIT_UP);

trackAppState();

export default App;

// TODO: It'd be nicer if we could move this using webpack.config.js
if (Platform.OS === 'web') {
  AppRegistry.registerComponent('App', () => App);

  AppRegistry.runApplication('App', {
    rootTag: document.getElementById('root'),
  });
}
