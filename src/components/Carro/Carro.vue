<template>
  <div>
    <div class="row center-page">
      <div class="col-6">
        <img src="../../assets/mustang.jpg" alt="engine v8" class="img-fluid">
      </div>
      <div class="col-6 box-size">
        <p class="first-text">O McLaren Senna é equipado com um motor V8 biturbo de 4.0 litros, que é uma versão especialmente
          ajustada do motor utilizado em outros modelos da McLaren, como o 720S. Este motor foi desenvolvido pela
          McLaren em colaboração com a Ricardo, uma empresa de engenharia britânica.</p>
        <div class="line"></div>
        <p class="second-text">Este motor é capaz de produzir uma potência impressionante, com números que variam entre
          800 a 850 cavalos de potência, dependendo da configuração específica do carro. Além disso, ele gera um torque
          significativo, contribuindo para a performance excepcional do Senna.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    font-size: 18px;
    border: 1px solid red ;
  }

  .text-page {
    width: 100%;
    height: 100%;
    padding: 0 12px;
  }
  
  .center-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0;
    margin: 0;
  }
  .line {
    width: 100%;
    border-bottom: 1px solid gray;
  }
  
  .box-size {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;
  }

  .first-text {
    text-align: justify;
    padding: 50px 0;
  }
  
  .second-text {
    text-align: justify;
    padding-top: 15px;
  }
</style>