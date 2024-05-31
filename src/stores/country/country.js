// impotaciones de vue
import { ref, reactive } from 'vue';

// importaciones librerias
import { defineStore } from "pinia";

// importacion de servcios
import { getListCountry } from '@/service/country/countryservices';

export const useCountry = defineStore('country',()=>{
    
    // states
    const ListCountry = ref([]);
    const Country = reactive({
        ClavePais: '',
        Descripcion: ''
    })

    // actions.
    async function getList () {
        const { data } = await getListCountry()
        ListCountry.value = data
    }

    function selectCountry( code ){
        const {ClavePais, Descripcion} = ListCountry.value.filter((country) => country.ClavePais === code )[0]
        Country.ClavePais = ClavePais;
        Country.Descripcion = Descripcion;
    }

    return {
        // state
        ListCountry,
        Country,

        // actions
        getList,
        selectCountry
    }
})