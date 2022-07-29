import { ComputedRef } from 'vue';

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

interface StorageInstance {
  getStorage(key: string): any
  setStorage(key: string, value: any): void
  removeStorage(key: string): void
  clearStorage(): void
}

declare function useCountDown(options: UseCountDownOptions): CountDown

declare function useStorage(persistent?: boolean): StorageInstance
declare function useSessionStorage(): StorageInstance
declare function useLocalStorage(): StorageInstance

export { useCountDown, useLocalStorage, useSessionStorage, useStorage };
