import Cell from './src/cell'

Cell.install = app => {
    app.component(Cell.name, Cell)
}
export default Cell