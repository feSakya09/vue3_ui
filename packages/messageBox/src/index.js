import {h, render} from 'vue'
import messageBoxConstructor from './message-box'


export const MsgBox = opts => {
    return createMsgBox(opts)
}

const createMsgBox = opts => {
    const instance = createMsgBoxByOpts(opts)
    appendToBody(instance)
    return new Promise((resolve, reject) => {
        instance.props.callBack = {
            reject,
            resolve
        }
    })
}

const createMsgBoxByOpts = opts => {
    return createComponent(messageBoxConstructor, opts)
}

const appendToBody = componentInstance => {
    console.log(componentInstance.vnode)
    document.body.appendChild(componentInstance.vnode.el)
}

// 创建组件
const createComponent = (Component, opts, children) => {
    const vnode = h(Component, {...opts}, children)
    const container = document.createElement('div')
    render(vnode, container)
    return vnode.component
}

