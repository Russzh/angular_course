interface IStore {
  [key: string]: string;
}

export interface ILocalStorage {
  getItem(key: string): string,

  setItem(key: string, value: string): void,

  clear(): void;

  removeItem(key: string): void;

  getAll(): IStore;
}

export const localStorageMock = ((): ILocalStorage => {
  let store: IStore = {};

  return {
    getItem(key: string): string {
      return store[key];
    },

    setItem(key: string, value: string): void {
      store[key] = value;
    },

    clear(): void {
      store = {};
    },

    removeItem(key: string): void {
      delete store[key];
    },

    getAll(): IStore {
      return store;
    },
  };
})();
