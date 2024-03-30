import axios from "axios";

export default {
    getLocation: cep => {
        console.log(cep);
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}