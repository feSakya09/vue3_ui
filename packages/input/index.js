import Input  from './src/input'

Input.install = app => {
    app.component(Input.name, Input)
}

export default Input