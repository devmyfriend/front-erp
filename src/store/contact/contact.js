
// importación de librerias
import { defineStore } from 'pinia'

//servicios
import { getContactList } from '@/services/contacts/contactservice'

export const useContact = defineStore('contact',{
    state: ()=>{
        ListadoContactosEmpresa: []
    },
    getters:{
        getListaContactos(state){
            return state.ListadoContactosEmpresa
        }
    },
    actions:{
        async loadListaContactosEmpresa(idEmpresa){
            try{
                const {data} = await getContactList(idEmpresa)
                this.ListadoContactosEmpresa = data;
            }catch(error){
                console.log(error)
            }
        }
    }
})