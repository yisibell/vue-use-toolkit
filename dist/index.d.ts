interface StorageInstance {
  getStorage(key: string): any
  setStorage(key: string, value: any): void
  removeStorage(key: string): void
  clearStorage(): void
}

declare function useStorage(persistent?: boolean): StorageInstance
declare function useSessionStorage(): StorageInstance
declare function useLocalStorage(): StorageInstance

export { useLocalStorage, useSessionStorage, useStorage };
