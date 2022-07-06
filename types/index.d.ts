import { UseCountDownOptions, CountDown } from '../src/composables/useCountdown'
import { StorageInstance } from '../src/composables/useStorage'

declare function useCountDown(options: UseCountDownOptions): CountDown

declare function useStorage(persistent?: boolean): StorageInstance
declare function useSessionStorage(): StorageInstance
declare function useLocalStorage(): StorageInstance

export { useCountDown, useStorage, useSessionStorage, useLocalStorage }
