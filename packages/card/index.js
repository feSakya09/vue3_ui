import Card from './src/card'

Card.install = app => {
    app.component(Card.name, Card)
}

export default Card