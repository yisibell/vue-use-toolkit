import type {
  UseLocalStorage,
  UseSessionStorage,
  UseStorage,
} from '../src/interfaces/storage'
import type { UseCountDown } from '../src/interfaces/countdown'

declare const useCountDown: UseCountDown
declare const useStorage: UseStorage
declare const useSessionStorage: UseSessionStorage
declare const useLocalStorage: UseLocalStorage

export { useCountDown, useStorage, useSessionStorage, useLocalStorage }
