import AsyncStorage from '@react-native-community/async-storage';

export enum LocalStorageKey {
  // --- auth token
  TOKEN = 'user_token',

  // --- app theme
  DARK_THEME = 'dark_theme',

  // for firebase notification
  FIREBASE_TOKEN = 'FIREBASE_TOKEN',
}

class LocalStorage {
  static getItem(key: LocalStorageKey) {
    return AsyncStorage.getItem(key);
  }

  static async getObject(key: LocalStorageKey) {
    const value = await AsyncStorage.getItem(key);
    return value == null ? null : JSON.parse(value);
  }

  static setItem(key: LocalStorageKey, value: string) {
    return AsyncStorage.setItem(key, value);
  }

  static setObject(key: LocalStorageKey, value: Object) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: LocalStorageKey) {
    return AsyncStorage.removeItem(key);
  }
}

export default LocalStorage;
