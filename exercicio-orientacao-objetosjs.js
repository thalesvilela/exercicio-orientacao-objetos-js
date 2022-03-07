
//criação da class conta bancária
class ContaBancaria{
    //utilização do constructor com seus parâmetros, sem saldo pq sempre começa com zero
    constructor(agencia, numero, tipo){
        //vinculação pelo .this do constructor aos parâmetros
        //this sempre se refere ao objeto, que no caso é a conta bancária
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        //como teremos um getter e setter, colocar _ para poder usar o nome no geter e seter
        this._saldo = 0;
    }

    //criando getter e setter de saldo
    get saldo(){
        return this._saldo;
    }

    set saldo (valor){
        this._saldo = valor;
    }

    //criar sacar
    sacar(valor){
        //condicional para ver se há saldo disponível com return
        if (valor > this._saldo){
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    //criar depositar. Não precisa de condicional.
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;

    }
}

//criar class conta corrente com extends por causa do super
class contaCorrente extends ContaBancaria{
   //criar sem o tipo, pois o tipo é conta corrente, com o cartão de crédito
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    //criar get cartão de crédito
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    //criar set cartão de crédito
    set cartaoCredito(valor) {
      this._cartaoCredito = valor;
    }
}

//criar class conta poupança com extends por causa do super
class contaPoupanca extends ContaBancaria{
   //criar sem o tipo, pois o tipo é conta poupança
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

//criar class conta universitária com extends por causa do super
class contaUniversitaria extends ContaBancaria{
   //criar sem o tipo, pois o tipo é conta poupança
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    sacar(valor) {
        if(valor>500){
            return 'Operação negada!';
        }
        this._saldo = this._saldo - valor;
    }
}