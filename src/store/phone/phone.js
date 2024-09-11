import {ref} from 'vue';

import { defineStore } from 'pinia';

import { getPhoneBusinessEntityList } from '@/services/phones/phoneservice';

export const usePhone = defineStore('phone',{
    state:()=>({
        ListaTelefonosEmpresa: []
    }),
    getters:{
        getListaTelefonosEmpresa(state){
            return this.ListaTelefonosEmpresa
        }
    },
    actions:{
        async loadListaTelefonosEmpresa(id){
            try{
                const { data } = await getPhoneBusinessEntityList(id)
                this.ListaTelefonosEmpresa = data
            }catch(error){
                console.error(error)
            }
        }
    }
})