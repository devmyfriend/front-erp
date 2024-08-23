import { defineStore } from "pinia";

import { getListRegimenes } from "@/services/regimenfiscal/regimenfiscalservice";

export const useRegimenFiscal = defineStore('regimenfiscal',{
    state:()=>({
        ListaRegimenFiscal: []
    }),
    getters:{
        getListaPersonaFisica(state){
            return this.ListaRegimenFiscal.filter(PhysicalPerson => PhysicalPerson.Fisica===true)
        },
        getListaPersonaMoral(state){
            return this.ListaRegimenFiscal.filter(PhysicalMoral => PhysicalMoral.Moral === true);
        }
    },
    actions:{
        async loadListaRegimenFiscal(){
            try{
                const { data }= await getListRegimenes()
                
                const regimen = data.map((object)=>{
                    const item = {
                        ClaveRegimenFiscal : object.regimen.ClaveRegimenFiscal,
                        Descripcion:         object.regimen.Descripcion,
                        Fisica:              object.regimen.Fisica,
                        Moral:               object.regimen.Moral
                    }
                    return item
                })

                this.ListaRegimenFiscal= regimen;
                
            }catch(error){
                console.log(error)
            }
        }
    }
})