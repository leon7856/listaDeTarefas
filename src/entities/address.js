module.exports = class Address {
    constructor(address) {
        this.cep = address.cep || "",
        this.endereco = address.logradouro,
        this.bairro = address.bairro,
        this.cidade = address.localidade,
        this.estado = address.uf,
        this.ddd = address.ddd
    }
}