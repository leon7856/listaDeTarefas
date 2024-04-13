<template>
    <div class="container">
      <div class="name-car">
        <h1>Lamborghini Urus</h1>
      </div>
  
      <div class="preco">
        <p>R$ 4.356.000,00</p>
      </div>
  
      <div>
        <div class="cor">
          <p>Escolha uma Cor</p>
        </div>
      </div>
  
      <div class="line"></div>

      <div class="box-1"></div>
      <div class="box-2"></div>
      <div class="box-3"></div>
      <div class="box-4"></div>
      <div class="box-5"></div>
      <div class="box-6"></div>

      <div class="botao">
        <button type="button" class="btn btn-success">Comprar</button>
      </div>

      <div class="descricao">
        <div class="motor">
            <p>Motor</p>
          </div>
        <div class="descricao-motor">
            <p>O motor do Lamborghini Urus é um V8 twin-turbo de 4.0 litros,
                que produz uma potência impressionante de até 650 cavalos, 
                tornando-o um dos SUVs mais potentes disponíveis no mercado. 
                Esse motor é montado na parte dianteira do veículo e está acoplado a uma 
                transmissão automática de oito velocidades.</p>
        </div>

        <div class="line-2"></div>

      </div>

    </div>

    

  </template>
  
  <style scoped>
 
  .name-car {
    position: absolute;
    top: 130px;
    left: 130px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: #2B2B2B;
  }

  .preco {
    position: absolute;
    top: 220px;
    left: 130px;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #404040;
    font-weight: bold;
  }

  .cor {
    position: absolute;
    top: 300px;
    left: 130px;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: #404040
  }
  
  .line {
    position: absolute;
    top: 330px;
    left: 130px;
    width: 25%;
    border-bottom: 3px solid rgb(39, 39, 39);
  }

  .box-1 {
    position: absolute;
    top: 350px;
    left: 130px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #FF3131;
  }

  .box-2 {
    position: absolute;
    top: 350px;
    left: 280px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #000000;
  }

  .box-3 {
    position: absolute;
    top: 350px;
    left: 420px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #ADADAD;
  }

  .box-4 {
    position: absolute;
    top: 430px;
    left: 130px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #DFB70A;
  }

  .box-5 {
    position: absolute;
    top: 430px;
    left: 280px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #004AAD;
  }

  .box-6 {
    position: absolute;
    top: 430px;
    left: 420px;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: #FA04B5;
  }

  .botao {
    position: absolute;
    top: 520px;
    left: 130px;
  }


  .motor {
    position: absolute;
    top: 600px;
    left: 130px;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    color: #000000
  }

  .line-2 {
    position: absolute;
    top: 640px;
    left: 130px;
    width: 25%;
    border-bottom: 3px solid rgb(39, 39, 39);
  }

  .descricao-motor {
    position: absolute;
    top: 650px;
    left: 130px;
    text-align: justify;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: #404040;
  }

  .image {
    position: absolute;
    top: 130px;
    right: 130px;
    width: 150px; 
  }

  </style>
  