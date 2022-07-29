import { VueConstructor } from 'vue'
import { getCurrentInstance as getVM } from 'vue'

export function getCurrentInstance() {
  const vm = getVM()

  if (!vm) return

  return vm.proxy as InstanceType<VueConstructor>
}

export const inBrowser = typeof window !== 'undefined'

export function raf(fn: FrameRequestCallback): number {
  return inBrowser ? requestAnimationFrame(fn) : -1
}

export function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id)
  }
}

// double raf for animation
export function doubleRaf(fn: FrameRequestCallback): void {
  raf(() => raf(fn))
}
