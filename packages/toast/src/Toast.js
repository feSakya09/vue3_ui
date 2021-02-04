import {
    h,
    render,
    isVNode,
} from 'vue'

import toastConstructor from './Toast.vue'

let flag = false

// const toastConstructor = defineComponent(toastVue)
const instanceList = []


export function Toast(opts) {
    return createToast(mergeOptions(opts))
}

function mergeOptions(opts) {
    const defaultOptions = {
        iconClass: '',
        message: '',
        className: '',
        position: ''
    }
    if (typeof opts === 'string' || isVNode(opts)) {
        defaultOptions.message = opts
        return defaultOptions
    }

    return Object.assign({}, defaultOptions, opts)
}

function createToast(opts) {
    if(flag) {
       return false
    }
    let time = 3000

    if(opts.time) {
        time = opts.time * 1000
    }
    console.log(time)
    const instance = createToastComponentByOpts(opts)
    hasVnode(instance)
    appendToBody(instance)
    addInstance(instance)
    flag = true
    setTimeout(() => {
        removeToBody(instance)
        flag = false
    }, time)
    return instance.proxy
}

function createToastComponentByOpts(opts) {
    if(isVNode(opts.message)) {
        return createComponent(toastConstructor, opts, () => opts.message)
    }
    return createComponent(toastConstructor, opts)
}

function appendToBody(componentInstance) {
    document.body.append(componentInstance.vnode.el)
}

function removeToBody(componentInstance) {
    document.body.removeChild(componentInstance.vnode.el)
}

function addInstance(instance) {
    instanceList.push(instance)
}

function hasVnode(componentInstance) {
    console.log(document.body.hasChildNodes(componentInstance.vnode.el));
}


/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 */
const MOUNT_COMPONENT_REF = 'jy_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('jy_component_container')

const createComponent = (Component, props, children) => {
    const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children)
    const container = document.createElement('div')
    vnode[COMPONENT_CONTAINER_SYMBOL] = container
    render(vnode, container)
    return vnode.component
}
