<template>
  <div class="home">
    <h1 class="py-4"> Lista de Projetos</h1>
    <div class="row row-cols-3">
      <div class="col center-div">
        <div class="card" style="width: 85%;">
          <img src="../assets/imglist.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">To Do List</h5>
            <p class="card-text">A simple to-do list made using Vue.js.</p>
            <router-link class="d-grid gap-2" to="/list">
              <button href="#" class="btn btn-primary">Access project</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="col center-div">
        <div class="card" style="width: 85%;">
          <img src="../assets/image.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Zip code query</h5>
            <p class="card-text">A zip code query application using the viacep api</p>
            <router-link class="d-grid gap-2" to="/cep">
              <button href="#" class="btn btn-primary">Access project</button>
            </router-link>
          </div>
        </div>

      </div>
      <div class="col center-div">
        <div class="card" style="width: 85%;">
          <img src="../assets/image.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">currency converter</h5>
            <p class="card-text">a currency converter.</p>
            <router-link class="d-grid gap-2" to="/moedas">
              <button href="#" class="btn btn-primary">Access project</button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="col center-div">
        <div class="card" style="width: 85%;">
          <img src="../assets/zip.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Digital Watch</h5>
            <p class="card-text">A Digital watch simple</p>
            <router-link class="d-grid gap-2" to="/relogio">
              <button href="#" class="btn btn-primary">Access project</button>
            </router-link>
          </div>
        </div>
      </div>

    </div>
    <div class="col center-div">
      <div class="card" style="width: 85%;">
        <img src="../assets/zip.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <router-link class="d-grid gap-2" to="/carro">
            <button href="#" class="btn btn-primary">Access project</button>
          </router-link>
        </div>
      </div>
      
     

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
  .center-div {
    display: flex;
    justify-content: center;
  }



</style>