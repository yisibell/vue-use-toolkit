import { ref, computed, onActivated, onDeactivated, onBeforeUnmount } from 'vue'
import { raf, cancelRaf, inBrowser } from './utils'
import type {
  CurrentTime,
  UseCountDownOptions,
  CountDown,
} from '../interfaces/countdown'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}

const useCountDown: (options: UseCountDownOptions) => CountDown = (options) => {
  let rafId: number
  let endTime: number
  let counting: boolean
  let deactivated: boolean

  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))

  const pause = () => {
    counting = false
    cancelRaf(rafId)
  }

  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)

  const setRemain = (value: number) => {
    remain.value = value
    options.onChange?.(current.value)

    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }

  const microTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        setRemain(getCurrentRemain())

        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }

  const macroTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        const remainRemain = getCurrentRemain()

        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }

  const tick = () => {
    // should not start counting in server
    // see: https://github.com/youzan/vant/issues/7807
    if (!inBrowser) {
      return
    }

    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }

  const reset = (totalTime: number = options.time) => {
    pause()
    remain.value = totalTime
  }

  onBeforeUnmount(pause)

  onActivated(() => {
    if (deactivated) {
      counting = true
      deactivated = false
      tick()
    }
  })

  onDeactivated(() => {
    if (counting) {
      pause()
      deactivated = true
    }
  })

  return {
    start,
    pause,
    reset,
    current,
  }
}

export default useCountDown
