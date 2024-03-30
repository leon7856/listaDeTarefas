<template>
  <div>
    <div class="mb-3 row justify-content-center">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <label for="formZipCode" class="form-label">Zip code</label>
        <input type="text" class="form-control" id="formZipCode" placeholder="Enter the zip code" v-model="address.cep">
      </div>
    </div>
    <div v-if="this.address.cep.length >= 8">
      <div class="mb-3 row justify-content-center">
        <div class="col-sm-8 col-md-7">
          <label for="formAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="formAddress" v-model="address.endereco">
        </div>
      </div>
      <div class="mb-3 row justify-content-center">
        <div class="col-sm-5 col-md-4">
          <label for="formNeighborhood" class="form-label">neighborhood</label>
          <input type="text" class="form-control" id="formNeighborhood" v-model="address.bairro">
        </div>
        <div class="col-sm-3 col-md-3">
          <label for="formCity" class="form-label">City</label>
          <input type="text" class="form-control" id="formCity" v-model="address.cidade">
        </div>
      </div>
      <div class="mb-3 row justify-content-center">
        <div class="col-sm-5 col-md-5">
          <label for="formCountry" class="form-label">Country</label>
          <input type="text" class="form-control" id="formCountry" v-model="address.estado">
        </div>
        <div class="col-sm-3 col-md-2">
          <label for="formCode" class="form-label">Code</label>
          <input type="text" class="form-control" id="formCode" v-model="address.ddd">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Address from '@/entities/address';

// Service
import viacep from '@/Service/viacep'

export default {
  data() {
    return {
      address: new Address({})
    };
  },
  watch: {
    "address.cep": function (value) {
      if (value.length >= 8) {
        this.buscarCEP(this.address.cep)
      }
    }
  },
  methods: {
    async buscarCEP(cep) {
      try {
        const cepSemtraco = this.removeTraco(cep);
        const response = await viacep.getLocation(cepSemtraco)
        console.log(response);
        if (!response.data.erro) {
          this.address = new Address(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    },
    removeTraco(palavra) {
      const palavraSeparada = palavra.split("-");
        return palavraSeparada.join("");
    }
  }
};
</script>

<style scoped></style>