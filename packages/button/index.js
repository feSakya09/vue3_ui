import Button from './src/button'

Button.install = app => {
    app.component(Button.name, Button)
}
export default Button