import LocalStorage, { LocalStorageKey } from '../utils/LocalStorage';

class TokenManager {
  static getToken() {
    return LocalStorage.getItem(LocalStorageKey.TOKEN);
  }

  static setToken(token: string) {
    LocalStorage.setItem(LocalStorageKey.TOKEN, token);
  }

  static clearToken() {
    LocalStorage.removeItem(LocalStorageKey.TOKEN);
  }

  static async isAuthenticate() {
    const token = await LocalStorage.getItem(LocalStorageKey.TOKEN);
    return !!token;
  }
}

export default TokenManager;
