export interface StorageInstance<T = any> {
  getStorage(key: string): T | ''
  setStorage(key: string, value: T): void
  removeStorage(key: string): void
  clearStorage(): void
}

export type UseStorage = <T = any>(persistent?: boolean) => StorageInstance<T>
export type UseSessionStorage = <T = any>() => StorageInstance<T>
export type UseLocalStorage = <T = any>() => StorageInstance<T>
