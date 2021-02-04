import CellGroup from './src/cellGroup'

CellGroup.install = app => {
    app.component(CellGroup.name, CellGroup)
}

export default CellGroup;