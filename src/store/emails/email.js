

import { defineStore } from "pinia";

import { getEmailBusinessEntityList } from "@/services/emails/email";


export const useEmailBusinessEntity = defineStore('emailbusinessentity',{

    state: ()=>{
        ListaCorre: []
    },
    getters:{
        getListaEmail(state){
            return state.ListaCorre;
        }
    },
    actions:{
        async loadListaEmailsBusinessEntity( idEmpresa ){
            try{

                const { data } = await getEmailBusinessEntityList(idEmpresa);                
                this.ListaCorre = data;

            }catch(error){
                console.error(error);
            }
        }
    }
})