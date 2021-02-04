import Alert from './alert';
import JyButton from './button';
import JyImage from './image';
import JyInput from './input';
import Toast from "./toast";
import JyMask from './mask';
import JyCard from './card';
import MsgBox from "./messageBox";
import Scroll from './scroll';
import CellGroup from './cellGroup'
import Cell from './cell'

const components = [
    JyButton,
    JyImage,
    JyInput,
    JyMask,
    JyCard,
    Scroll,
    CellGroup,
    Cell
]

const defaultInstallOpt = {
    size: '',
    zIndex: 1000,
}

const install = (app, opts = {}) => {
    const option = Object.assign(defaultInstallOpt, opts)
    components.forEach(item => {
        app.component(item.name, item)
    })

    app.config.globalProperties.$ELEMENT = option
}

export {
    JyButton,
    JyImage,
    JyInput,
    JyMask,
    JyCard,
    Alert,
    Toast,
    MsgBox,
    Scroll,
    CellGroup,
    Cell,
    install
}

export default {
    install,
}