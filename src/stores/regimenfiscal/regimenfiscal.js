// importaciones de vue
import { ref } from "vue";

// importaciones de librerias
import { defineStore } from "pinia";

//importacion de servicios
import { getListRegimenes } from "@/service/regimenfiscal/regimenfiscalservice";

export const useRegimenFiscal = defineStore('regimenfiscal',()=>{

    // state

    const PhysicalPerson = ref(true)
    const MoralPerson = ref(false)
    const ListRegimenFiscal = ref([])


    // actions

    async function getList(){
        const { data } = await getListRegimenes();
        
        const regimenes = data.map((object)=>{
            const item = {
                ClaveRegimenFiscal : object.regimen.ClaveRegimenFiscal,
                Descripcion:         object.regimen.Descripcion,
                Fisica:              object.regimen.Fisica,
                Moral:               object.regimen.Moral
            }
            return item
        })
        
        ListRegimenFiscal.value = regimenes 
    }

    function getListPhysicalPerson( isPhysical ){
        return ListRegimenFiscal.value.filter(PhysicalPerson => PhysicalPerson.Fisica === isPhysical)
    }
    
    function getListMoralPerson( isMoral ){
        return ListRegimenFiscal.value.filter(PhysicalPerson => PhysicalPerson.Moral === isMoral)
    }
     
    return{
        ListRegimenFiscal,

        getList,
        getListPhysicalPerson,
        getListMoralPerson,
    }
})