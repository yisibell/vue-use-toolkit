# useStorage

浏览器本地缓存 api，可以让你方便使用 `localStorage` 和 `sessionStorage` 进行数据的 **增删改查**。

**示例：**

```ts
import { useStorage } from 'vue-use-toolkit'
import { defineComponent, onMounted } from 'vue'

interface IStoredData {
  some: 'value'
}

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useStorage<IStoredData>()

    // 使用 localStorage 进行持久化
    // const { setStorage, getStorage, removeStorage, clearStorage } = useStorage(true)
    
    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```

## useSessionStorage

直接使用会话级本地存储（sessionStorage）。

**示例：**

```js
import { useSessionStorage } from 'vue-use-toolkit'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useSessionStorage()

    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```

## useLocalStorage

直接使用持久化本地存储（localStorage）。

**示例：**

```js
import { useLocalStorage } from 'vue-use-toolkit'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const { setStorage, getStorage, removeStorage, clearStorage } = useLocalStorage()

    // set storage
    setStorage('your-key-num', 666)
    setStorage('your-key-obj', { foo: 1 })

    onMounted(() => {
      // get storage
      console.log(getStorage('your-key-num')) // 666
      console.log(getStorage('your-key-obj')) // { foo: 1 }
    })

    // remove storage by some key
    const remove = () => {
      removeStorage('your-key-num')
    }

    // clear all storage
    const clear = () => {
      clearStorage()
    }

    return {
      remove,
      clear
    }

  },
})
```