import React from 'react';
import { Text } from 'react-native';
import checkIfFirstLaunch from './components/firstLaunch';

export default class AppStart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFirstLaunch: false,
      hasCheckedAsyncStorage: false
    };
  }

  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }

  render() {
    const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;

    if (!hasCheckedAsyncStorage) {
      return null;
    }

    if (isFirstLaunch) {
      return <Text>This is the first launch</Text>
    } else {
      return <Text>This is the second</Text>
    }
  }
}