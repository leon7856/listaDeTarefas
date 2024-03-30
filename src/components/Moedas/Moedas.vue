<template>
  <div class="currency-converter">
    <h2>currency converter</h2>
    <div class="input">
      <input type="number" v-model="amount" @input="convertCurrency" class="amount" />
      <select v-model="from" @change="convertCurrency" class="select">
        <option v-for="currency in currencies" :value="currency" :key="currency">{{ currency }}</option>
      </select>
      <span class="text">para</span>
      <select v-model="to" @change="convertCurrency" class="select">
        <option v-for="currency in currencies" :value="currency" :key="currency">{{ currency }}</option>
      </select>
    </div>
    <div class="result">
      <p>Resultado: {{ result }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      amount: 1,
      from: 'USD',
      to: 'EUR',
      result: 0,
      currencies: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'BRL'],
    };
  },
  methods: {
    async convertCurrency() {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${this.from}`);
        const rate = response.data.rates[this.to];
        this.result = (this.amount * rate).toFixed(2);
      } catch (error) {
        console.error('Ocorreu um erro ao converter a moeda:', error);
        this.result = 'Erro';
      }
    },
  },
};
</script>

<style scoped>
.currency-converter {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.input {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.amount {
  width: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.select {
  margin: 0 10px;
  padding: 8px;
  font-size: 16px;
}

.text {
  font-size: 16px;
}

.result {
  font-size: 18px;
  font-weight: bold;
  color: #007bff; /* Azul */
}
</style>
