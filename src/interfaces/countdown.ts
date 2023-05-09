import type { ComputedRef } from 'vue'

export type CurrentTime = {
  days: number
  hours: number
  total: number
  minutes: number
  seconds: number
  milliseconds: number
}

export type UseCountDownOptions = {
  time: number
  millisecond?: boolean
  onChange?: (current: CurrentTime) => void
  onFinish?: () => void
}

export type CountDown = {
  start: () => void
  pause: () => void
  reset: (totalTime: number) => void
  current: ComputedRef<CurrentTime>
}

export type UseCountDown = (opts: UseCountDownOptions) => CountDown
