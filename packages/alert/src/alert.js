import { h, render} from 'vue'
import AlertConstructor from './alert.vue'

export const Alert = opts => {
    return createAlert(opts)
}

// 创建节点
const createComponent = (Component, opts, children) => {
    const vnode = h(Component, {...opts}, children)
    const container = document.createElement('div')
    render(vnode, container)
    return vnode.component
}
// 插入body
const appendToBody = componentInstance => {
    document.body.appendChild(componentInstance.vnode.el)
}
// 根据配置创建组件
const createAlertByOpts = opts => {
    return createComponent(AlertConstructor, opts)
}


const createAlert = opts => {
    const instance = createAlertByOpts(opts)
    appendToBody(instance)
    return instance.proxy
}

