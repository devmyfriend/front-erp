<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import BtnLogin from "@/commons/ui/btn-login/btn-login.vue"

const router = useRouter()
const failLogin = ref(false)

const forceFailLogin = () => {
    failLogin.value = !failLogin.value
}
const moveHome = () => {
    router.push({name:'Menu'})
}
</script>

<template>
    <div class="flex items-center pt-8">
        <div class="flex flex-col w-[30.4rem] h-[29.8rem] mx-auto bg-white bg-opacity-[.4] shadow-md rounded-2xl">
            <form @submit.prevent>
                <div class="flex flex-col items-center p-2 m-2">
                    <h2 class="flex m-2 text-2xl text-white font-bold uppercase">Acceso</h2>
                    <img class="flex w-[20%]" src="@/assets/userIco.svg" alt="Imagen de Usuario" />
                </div>
                <transition name="fade">
                    <div class="flex items-center justify-center mb-2 mx-auto px-2 text-red-600 font-semibold" v-if="failLogin">
                        <span> El usuario y o contraseña son incorrectas </span>
                    </div>
                </transition>
                <div class="flex items-center mb-4">
                    <input
                        class=" w-[75%] border-0 rounded-md mx-auto p-2 px-4 outline-none" 
                        type="text" placeholder="Correo electrónico">
                </div>
                <div class="flex items-center mb-4">
                    <input
                        class=" w-[75%] border-0 rounded-md mx-auto p-2 px-4 outline-none" 
                        type="password" placeholder="Contraseña">
                </div>
                <div class="flex justify-center mb-4">
                    <BtnLogin @handle-click="forceFailLogin">Iniciar sesión</BtnLogin>
                    <p></p>
                </div>
                <div class="flex justify-center">
                    <p>
                        ¿Olvidaste tu contraseña? <a @click="moveHome" class="cursor-pointer hover:underline">Haz click aquí</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
