import {ref, h} from 'vue'

export default {
    setup() {
        return {
            createDom
        }
    }
}
function createDom() {
    const root = ref(null)
    return () =>
        h('div', {
            ref: root
        })
}