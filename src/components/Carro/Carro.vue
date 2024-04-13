<template>
  <div>
    <div class="background-senna">
      <img src="../../assets/senna.jpg" alt="Foto do carro Mclaren Senna" class="img-fluid">
    </div>
    <div class="logo">
      <img src="../../assets/logo carro.png" alt="Logo" class="img-fluid">
    </div>
    <div class="icon-wrapper">
      <div class="idioma">
        <img src="../../assets/icone.png" alt="Icone tradução" class="img-fluid">
      </div>
    </div>
      <div class="name-car">
        <img src="../../assets/mclaren-nome.png" alt="Nome do carro" class="img-fluid">
      </div>
  </div>

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

  <div class="ceo-container">
    <div class="img-ceo">
      <img src="../../assets/enzo.png" alt="Foto Do CEO">
    </div>
    <div class="first-ceo">
      <p>
        Enzo Filippelli era um jovem italiano nascido em 1997, com uma fascinação precoce por carros de luxo.
        Ele cresceu em uma cidade italiana, imerso na cultura automobilística elegante e sofisticada que permeava as ruas.
        Desde tenra idade, ele passava horas desenhando e estudando carros, absorvendo cada detalhe de seus designs e desempenho.
      </p>
      <p>
      Conforme Enzo crescia, sua paixão pela indústria automotiva só se intensificava.
      Ele se dedicou aos estudos, mergulhando em disciplinas como engenharia automotiva, design de carros e administração de negócios. 
      Cada passo que ele dava era uma preparação para o seu grande sonho de fundar sua própria empresa de carros de luxo.
      </p>
      <p>
        Aos 18 anos, Enzo finalmente deu vida ao seu sonho, fundando a Filippelli Motors. 
      Seus carros não eram apenas veiculos, mas obras de arte sobre rodas, combinando elegância, desempenho e inovação. 
      Os modelos iniciais da empresa foram rapidamente aclamados pela crítica e conquistaram um lugar de destaque no mercado de carros de luxo.
      </p>
      <p>
        Com o passar dos anos, a Filippelli Motors se tornou sinônimo de excelência no mundo dos carros de luxo. 
        Enzo liderava sua empresa com uma mistura única de paixão, visão e determinação, sempre buscando elevar o padrão da indústria automotiva. 
        Seus carros exclusivos tornaram-se objetos de desejo para colecionadores e entusiastas de todo o mundo.  
      </p>
    </div>
  </div>

  <div class="firts-title">
    <p>Esportivos</p>
  </div>

  <div class="row row-cols-3">
    <div class="col center-div" v-for="(car, index) in this.dataCars.esportivos"  :key="index" >
      <showroom 
        :image = car.image
        :title = car.title
        :description = car.description
        :destiny = car.destiny
        :button = car.button>
      </showroom>
    </div>
  </div>

  <div class="second-title">
    <p>SUVS</p>
  </div>

  <div class="row row-cols-3">
    <div class="col center-div" v-for="(car, index) in this.dataCars.suv"  :key="index" >
      <showroom 
        :image = car.image
        :title = car.title
        :description = car.description
        :destiny = car.destiny
        :button = car.button>
      </showroom>
    </div>
  </div>

  <div class="rastreador">
    <div class="rastreamento">
      <p>Rastreamento</p>
    </div>

    <div class="box-1"></div>
    <div class="box-2"></div>
  </div>

  <div class="descricao-rastreador">
    <p>Digite seu código de rastreio</p>
  </div>

  <div class="maps">
    <img src="../../assets/maps.png" alt="mapa">
  </div>

  <div class="footer">
    
  </div>

</template>
<script>
import Showroom from '../Showroom.vue';

export default {
  components: {
    Showroom
  },
  data() {
    return {
      dataCars: {
        esportivos:[
          {
            image:"Porsche-918.png",
            title:"Porsche 918 Spyder",
            description:"O Porsche 918 Spyder é um supercarro híbrido plug-in produzido pela fabricante alemã Porsche. Lançado em 2013.",
            destiny:"/porsche",
            button:"Saiba mais"
          },
          {
            image:"Lamborghini-Aventador.png",
            title:"Lamborghini Aventador",
            description:"A Lamborghini Aventador é um supercarro icônico fabricado pela famosa montadora italiana Lamborghini. Lançado em 2011.",
            destiny:"/lamborghine",
            button:"Saiba mais"
          },
          {
            image:"Nissan-Gtr.png",
            title:"Nissan Gtr R35",
            description:"O Nissan GT-R R35, também conhecido simplesmente como Nissan GT-R, é um dos carros esportivos mais reconhecidos e respeitados do mundo. Lançado em 2007",
            destiny:"/nissan",
            button:"Saiba mais"
          },
        ],
        suv:[
          {
            image:"Lamborghini-Urus.png",
            title:"Lamborghini Urus",
            description:"O Lamborghini Urus é um SUV de alto desempenho produzido pela fabricante italiana Lamborghini. Lançado em 2018.",
            destiny:"/urus",
            button:"Saiba mais"
          },
          {
            image:"Range-Rover.png",
            title:"Range Rover",
            description:"O Land Rover Range Rover é um dos SUVs mais icônicos e reconhecidos do mundo, produzido pela fabricante britânica Land Rover.",
            destiny:"/range",
            button:"Saiba mais"
          },
          {
            image:"Volvo-XC60.png",
            title:"Volvo xc60",
            description:"O Volvo XC60 é um SUV de luxo produzido pela montadora sueca Volvo Cars. o XC60 se destaca por sua segurança, estilo elegante e tecnologia avançada.",
            destiny:"/volvo",
            button:"Saiba mais"
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
 
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

  .background-senna {
    position: relative;
    width: 100%;
    height: auto;
  }

  .logo {
    position: absolute;
    top: 20px;
    right: 70px;
  }

  .icon-wrapper {
    position: absolute;
    top: 140px;
    left: 50px;
  }

  .idioma img {
    width: 50px;
  }

  .name-car {
    position: absolute;
    top: 750px;
    left: 150px;
  }

  .ceo-container {
    display: flex;
    position: relative;
    background-color: #edf0f2;
    padding: 20px;
  }

  .img-ceo {
    margin-left: 20px;
  }

  .first-ceo {
    font-size: 24px;
    text-align: justify;
    padding: 0 50px;
  }

  .firts-title {
    font-family: "Anton", sans-serif;
    font-size: 100px;
    color: #3A3A3A;
 }

  .esportivos {
    display: flex;
    margin-top: 20px;
  }

  .card {
    width: 560px;
    margin-right: 80px;
  }

  .first-card {
    margin-left: 60px;
  }

  .second-title {
    font-family: "Anton", sans-serif;
    font-size: 100px;
    color: #3A3A3A;
  }

  .suv {
    display: flex;
    margin-top: 20px;
  }

  .card {
    width: 560px;
    margin-right: 80px;
  }

  .rastreamento {
    left: 550px;
    font-size: 34px;
    margin-top: 280px;
    font-family: "Roboto", sans-serif;
    color: black;
    font-weight: bold;
  }

  .box-1 {
    position: absolute;
    top: 4420px;
    left: 490px;
    width: 950px;
    height: 380px;
    border-radius: 10px;
    background-color: #EDF0F2;
  }

  .box-2 {
    position: absolute;
    top: 4570px;
    left: 840px;
    width: 210px;
    height: 50px;
    border-radius: 10px;
    background-color: #bbbbbb;
  }

  .descricao-rastreador {
    position: absolute;
    top: 4520px;
    left: 840px;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: black;
  }

  .maps {
    margin-top: 680px;
  }

  .btn {
    text-decoration: none;
  }


</style>
