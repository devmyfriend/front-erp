
import { defineStore } from "pinia";

import { getListCountry } from "@/services/contry/countryservice";

export const useCountry = defineStore('country',{
    state:()=>({
        ListaPaises: []
    }),
    getters:{
        getListaPais(state){
            return state.ListaPaises;
        }
    },
    actions:{
        //listado de paises
        async loadListaPais(){
            try{
                const { data } = await getListCountry();
                this.ListaPaises = data;
            }catch(error){
                console.log(error);
            }
        }
    }
})