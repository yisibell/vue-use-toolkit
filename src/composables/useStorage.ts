import type { UseStorage } from '../interfaces/storage'

export const useStorage: UseStorage = <T = any>(persistent?: boolean) => {
  const storage = () =>
    persistent ? window.localStorage : window.sessionStorage

  /**
   * 获取
   */
  const getStorage = (key: string): T | '' => {
    if (!key || !storage()) return ''

    try {
      const value: string = storage().getItem(key) || ''

      return JSON.parse(value)
    } catch (_err) {
      return ''
    }
  }

  /**
   * 设置
   */
  const setStorage = (key: string, value: T) => {
    if (!storage()) return
    return storage().setItem(key, JSON.stringify(value))
  }

  /**
   * 删除
   */
  const removeStorage = (key: string) => {
    if (!storage()) return
    return storage().removeItem(key)
  }

  /**
   * 删除全部
   */
  const clearStorage = () => {
    if (!storage) return
    return storage().clear()
  }

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearStorage,
  }
}

export const useSessionStorage = <T = any>() => {
  return useStorage<T>(false)
}

export const useLocalStorage = <T = any>() => {
  return useStorage<T>(true)
}
