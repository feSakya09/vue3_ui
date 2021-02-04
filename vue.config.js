const path = require('path')
function resolve (filePaht) {
    return path.join(__dirname, filePaht)
}
module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        config.resolve.alias
            .set('packages', resolve('packages'))
            .set('comp', resolve('src/components'))
            .set('@', resolve('src'))
            .set('style', resolve('styles'))
    }
}