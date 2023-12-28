// função factory não cria cache
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}