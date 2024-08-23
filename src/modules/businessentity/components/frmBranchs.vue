<script setup>
    import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
    import btAgreagar from '@/commons/ui/btn-agregar/btn-agregar.vue';
    import searchIcon from '@/commons/ui/icons/actionIcons/searchIco.vue';

    import tableBranchs from '@/modules/businessEntity/components/tableBranchs.vue'

</script>

<template>
    <div class="flex flex-col">
        <div class="flex w-[100%]">
            <titleH1>Sucursal</titleH1>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col w-[100%]">
                <div class="flex flex-col w-[100%]">
                    <div class="flex">
                        <label class="flex text-[1rem]" for="Branch">Sucursal</label>
                    </div>
                </div>
                <div class="flex flex-row w-full space-x-9">
                    <input class="w-[70%]" name="Branch" role="Branch" placeholder="Sucursal" type="text" />
                    <searchIcon /> 
                    <btAgreagar>Sucursal</btAgreagar>
                </div>
                <div class="flex w-full mt-2 mb-2">
                    <tableBranchs></tableBranchs>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input,
    select,
    textarea {
        /* flex: 1 0 12rem; */
        padding: 0.25rem 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        outline: none;
    }
    input[type="radio"] {
        -ms-transform: scale(1.25);
        -webkit-transform: scale(1.25);
        flex: 1 0 auto;
        height: 1rem;
        margin: auto;
        transform: scale(1.25);
        width: 1rem;
    }
    input[type="checkbox"] {
        flex: 1 0 auto;
    }

    .descr {
        display: flex;
        flex-direction: row;
    }

    textarea {
        resize: none;
        flex-grow: 1;
        height: 5rem;
    }

    .clickeable{
        cursor: pointer;
        transition: all 0.3s;
    }
    .clickeable:hover{
        color: #353535;
    }
</style>