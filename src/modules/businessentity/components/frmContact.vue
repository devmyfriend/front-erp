<script setup>
import { onBeforeMount, onMounted, ref, inject } from 'vue';
import { useTheme } from '@/commons/composables/theme';
import titleH1 from '@/commons/ui/title-h1/title-h1.vue';
import titleH3 from '@/commons/ui/title-h3/title-h3.vue';
import searchIcon from '@/commons/ui/icons/actionIcons/searchIco.vue';
import btnButton from '@/commons/ui/btn-button/btn-button.vue';
import btnSave from '@/commons/ui/btn-save/btn-save.vue';
import btnAgregar from '@/commons/ui/btn-agregar/btn-agregar.vue';
import modal from '@/commons/ui/modal/modal-md.vue'
import tableContact from '@/modules/businessEntity/components/tableContact.vue';
import tablePhones from '@/modules/businessEntity/components/tablePhones.vue';
import tableEmails from '@/modules/businessEntity/components/tableEmails.vue';
import tableBranchs from '@/modules/businessEntity/components/tableBranchs.vue';
import { useContact } from '@/store/contact/contact.js';
import { usePhone } from '@/store/phone/phone.js'
import { useEmailBusinessEntity } from '@/store/emails/email.js'

const storeContact = useContact();
const storePhone = usePhone();
const storeEmail = useEmailBusinessEntity();
const contactosEmpresa = ref([]);
const telefonosEmpresa = ref([]);
const emailsEmpresa = ref([]);
const showPanel = ref(0);
const showContact = ref(false);
const { theme } = useTheme();

const loadContact = (idEmpresa) => {
    storeContact.loadListaContactosEmpresa(idEmpresa).then(() => {
        contactosEmpresa.value = storeContact.getListaContactos;
    });
}
const loadPhones = (idEmpresa) => {
    storePhone.loadListaTelefonosEmpresa(idEmpresa).then(() => {
        telefonosEmpresa.value = storePhone.getListaTelefonosEmpresa;
    })
}
const loadEmails = (idEmpresa) => {
    storeEmail.loadListaEmailsBusinessEntity(idEmpresa).then(() => {
        emailsEmpresa.value = storeEmail.getListaEmail;
    })
}
const handleClickTab = (tab) => {
    showPanel.value = tab
}
const clickConctac = () => {
    showContact.value = true;
}
const clickCancellContact = () => {
    showContact.value = false
}
const saveContact = () => {
}
onBeforeMount(() => {
    loadContact(1);
    loadPhones(1);
    loadEmails(1);
})
</script>

<template>
    <div class="flex flex-col">
        <div class="flex w-full">
            <div class="flex flex-col w-full h-[100%]">
                <!-- tabs para sucursales, telefono, emails  -->
                <div class="flex flex-row w-max overflow-hidden rounded-xl shadow-md shadow-[#212121] h-8"
                    :class="`bg-${theme}-primary`">
                    <button @click="handleClickTab(0)"
                        :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ showPanel === 0 ? `bg-${theme}-primary-hover !px-6` : ''}`"
                        class="window-general content-center">Contactos</button>
                    <button @click="handleClickTab(1)"
                        :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ showPanel === 1 ? `bg-${theme}-primary-hover !px-6` : ''}`"
                        class="window-general content-center">Teléfonos</button>
                    <button @click="handleClickTab(2)"
                        :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ showPanel === 2 ? `bg-${theme}-primary-hover !px-6` : ''}`"
                        class="window-general content-center">Correos</button>
                    <button @click="handleClickTab(3)"
                        :class="`bg-${theme}-primary hover:bg-${theme}-primary-hover border-${theme}-primary-hover ${ showPanel === 3 ? `bg-${theme}-primary-hover !px-6` : ''}`"
                        class="window-general content-center">Sucursales</button>
                </div>
                <div class="flex flex-col w-full">
                    <!-- contactos -->
                    <div v-if="showPanel === 0" class="flex flex-col mt-2 w-full">
                        <div class="flex">
                            <label class="text-[1rem]" for="Contact">Contactos</label>
                        </div>
                        <div class="flex flex-row items-center w-full mb-4 justify-between gap-4">
                            <div class="flex items-center gap-4 flex-grow">
                                <input class="w-full" name="Contact" role="Contact" placeholder="Contactos" type="text" />
                                <searchIcon />
                            </div>
                            <btnButton :buttonText="'Agregar'" @click="clickConctac()" />
                        </div>
                        <div
                            class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-2xl max-h-[40rem]">
                            <tableContact :ListaContacto="contactosEmpresa" :editable="true" />
                        </div>
                    </div>
                    <!-- teléfonos -->
                    <div v-if="showPanel === 1" class="flex flex-col mt-2 w-full">
                        <div class="flex">
                            <label class="text-[1rem]" for="Contact">Teléfonos</label>
                        </div>
                        <div class="flex flex-row items-center w-full mb-4 justify-between gap-4">
                            <div class="flex items-center gap-4 flex-grow">
                                <input class="w-full" name="Contact" role="Contact" placeholder="Teléfonos" type="text" />
                                <searchIcon />
                            </div>
                            <btnButton :buttonText="'Agregar'" />
                        </div>
                        <div
                            class="w-full items-center flex flex-col overflow-y-scroll text-secondaryFontColor text-base rounded-2xl max-h-[40rem]">
                            <tablePhones :ListaTelefonos="telefonosEmpresa" :editable="true" />
                        </div>
                    </div>
                    <!-- correos -->
                    <div v-if="showPanel === 2" class="flex flex-col mt-2 w-full">
                        <div class="flex">
                            <label class="text-[1rem]" for="Contact">Correos Electrónicos</label>
                        </div>
                        <div class="flex flex-row items-center w-full mb-4 justify-between gap-4">
                            <div class="flex items-center gap-4 flex-grow">
                                <input class="w-full" name="Contact" role="Contact" placeholder="Correo Electrónico"
                                type="text" />
                            <searchIcon />
                            </div>
                            <btnButton :buttonText="'Agregar'" />
                        </div>
                        <div
                            class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-2xl max-h-[40rem]">
                            <tableEmails :ListaEmails="emailsEmpresa" :editable="true" />
                        </div>
                    </div>
                    <!-- sucursales -->
                    <div v-if="showPanel === 3" class="flex flex-col mt-2 w-full">
                        <div class="flex">
                            <label class="text-[1rem]" for="Contact">Sucursales</label>
                        </div>
                        <div class="flex flex-row items-center w-full mb-4 justify-between gap-4">
                            <div class="flex items-center gap-4 flex-grow">
                                <input class="w-full" name="Branch" role="Branch" placeholder="Sucursal" type="text" />
                                <searchIcon />
                            </div>
                            <btnButton :buttonText="'Agregar'" />
                        </div>
                        <div
                            class="w-full items-center flex flex-col flex-grow overflow-y-scroll text-secondaryFontColor text-base rounded-2xl max-h-[40rem]">
                            <tableBranchs :ListaSucursales="emailsEmpresa" :editable="true" />
                            <!-- ListaSucursales: sucursalesEmpresa -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- modal -->
            <modal v-if="showContact === true" class="">
                <template v-slot:header>
                    <div class="flex w-full p-2">
                        <titleH1>Contacto</titleH1>
                    </div>
                </template>
                <template v-slot:body>
                    <div class="w-full">
                        <div class="">
                            <form @submit.prevent="saveContact">
                                <fieldset class="flex flex-row w-full space-x-2 p-1">
                                    <div class="flex flex-col w-[30%]">
                                        <label class="flex  text-[1rem]" for="names">*Nombre(s)</label>
                                        <input class="border" type="text" name="names" role="names"
                                            placeholder="Nombre">
                                    </div>
                                    <div class="flex flex-col w-[30%]">
                                        <label class="flex  text-[1rem]" for="lastnamefather">Apellido
                                            Paterno</label>
                                        <input class="border" type="text" name="lastnamefather" role="lastnamefather"
                                            placeholder="Apellido Paterno">
                                    </div>
                                    <div class="flex flex-col w-[30%]">
                                        <label class="flex  text-[1rem]" for="lastnamemother">Apellido
                                            Materno</label>
                                        <input class="border" type="text" name="lastnamemother" role="lastnamemother"
                                            placeholder="Apellido Materno">
                                    </div>
                                </fieldset>
                                <fieldset class="flex flex-row w-ful space-x-2">
                                    <div class="flex flex-col w-[30%]">
                                        <label class="flex  text-[1rem]" for="depot">Departamento</label>
                                        <input class="border" type="text" name="depot" role="depot"
                                            placeholder="Departamento">
                                    </div>
                                    <div class="flex flex-col w-[30%]">
                                        <label class="flex  text-[1rem]" for="workstation">Puesto</label>
                                        <input class="border" type="text" name="workstation" role="workstation"
                                            placeholder="Departamento">
                                    </div>
                                </fieldset>
                                <fieldset class="flex flex-row w-full justify-center p-2 space-x-2">
                                    <btnButton :buttonText="'Guardar'" :iconSave="true" @click="saveContact()" />
                                    <btnButton :buttonText="'Cancelar'" :iconSave="false"
                                        @click="clickCancellContact()" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </template>
                <template v-slot:footer>
                    <div class="flex flex-col w-full">
                        <div class="flex flex-col p-2">
                            <div class="flex flex-row space-x-4 p-2">
                                <input class="border" name="Phone" role="Phone" placeholder="Teléfono" type="text" />
                                <btnButton :buttonText="'Agregar'" />
                            </div>
                            <tablePhones></tablePhones>
                        </div>
                        <div class="flex flex-col p-2">
                            <div class="flex flex-row space-x-4 p-2">
                                <input class="border" name="Contact" role="Contact" placeholder="Correos Electrónico"
                                    type="text" />
                                <btnButton :buttonText="'Agregar'" />
                            </div>
                            <tableEmails></tableEmails>
                        </div>
                    </div>
                </template>
            </modal>
            <!-- fin de modal -->
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

.clickeable {
    cursor: pointer;
    transition: all 0.3s;
}

.clickeable:hover {
    color: #353535;
}

.contact {
    overflow: auto;
}
</style>