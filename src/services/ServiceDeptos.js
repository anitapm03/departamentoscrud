import Global from './../Global';
import axios from 'axios';

export default class ServiceDeptos {
    getDepartamentos(){
        return new Promise(function(resolve){
            var request = "api/departamentos";
            var url = Global.urlApiDeptos + request;
            var deptos = [];

            axios.get(url).then(response => {
                deptos = response.data;
                resolve(deptos);
            })
        })
    }

    insertDepartamento(depto){
        return new Promise(function(resolve){
            var request = "api/departamentos";
            var url = Global.urlApiDeptos + request;

            axios.post(url, depto).then(response => {
                resolve(response);
            })
        })
    }

    getDeptoId(id){
        return new Promise(function(resolve){
            var request = "api/departamentos/" +id;
            var url = Global.urlApiDeptos +request;
            var depto = {};
            axios.get(url).then(response => {
                depto = response.data;
                resolve(depto);
            })


        })
    }
}