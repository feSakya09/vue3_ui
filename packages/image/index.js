import Image from './src/image'

Image.install = app => {
    app.component(Image.name, Image)
}

export default Image