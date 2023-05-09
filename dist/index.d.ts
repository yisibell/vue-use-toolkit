import { ComputedRef } from 'vue';

interface StorageInstance<T = any> {
  getStorage(key: string): T | ''
  setStorage(key: string, value: T): void
  removeStorage(key: string): void
  clearStorage(): void
}

type UseStorage = <T = any>(persistent?: boolean) => StorageInstance<T>
type UseSessionStorage = <T = any>() => StorageInstance<T>
type UseLocalStorage = <T = any>() => StorageInstance<T>

type CurrentTime = {
  days: number
  hours: number
  total: number
  minutes: number
  seconds: number
  milliseconds: number
}

type UseCountDownOptions = {
  time: number
  millisecond?: boolean
  onChange?: (current: CurrentTime) => void
  onFinish?: () => void
}

type CountDown = {
  start: () => void
  pause: () => void
  reset: (totalTime: number) => void
  current: ComputedRef<CurrentTime>
}

type UseCountDown = (opts: UseCountDownOptions) => CountDown

declare const useCountDown: UseCountDown
declare const useStorage: UseStorage
declare const useSessionStorage: UseSessionStorage
declare const useLocalStorage: UseLocalStorage

export { useCountDown, useLocalStorage, useSessionStorage, useStorage };
