import { AsyncStorage } from 'react-native';

// const HAS_LAUNCHED = 'userId';

// function setAppLaunched() {
//   AsyncStorage.setItem(HAS_LAUNCHED, 'fdasjfkajsdfila');
// }

export default async function checkIfFirstLaunch() {
  try {
    const hasUserId = await AsyncStorage.getItem('userId');
    if (hasUserId === null) {
      //setAppLaunched();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
