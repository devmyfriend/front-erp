<script setup>
    import { useRouter } from 'vue-router'
    
    import BtnLogin from "@/commons/ui/btn-login/btn-login.vue"
    
    const router = useRouter()
    
    
    const handleClick = ()=>{
        router.push({name:'HelloWord'})
        // console.log('click')
    }
</script>

<template>
    <div class="flex items-center pt-8">
        <div class="flex flex-col w-[30.4rem] h-[29.8rem] mx-auto bg-white bg-opacity-[.4] shadow-md">
            <form @submit.prevent>
                <div class="flex flex-col items-center p-2 m-2">
                    <h2 class="flex m-2 text-2xl text-white font-bold">Acceso</h2>
                    <img class="flex w-[20%]" src="@/assets/userIco.svg" alt="Imagen de Usuario" />
                </div>
                <div class="flex items-center">
                    <input
                        class=" w-[75%] p-2 border-0 rounded-md my-2  mx-auto" 
                        type="text" placeholder="Correo electrónico">
                </div>
                <div class="flex items-center">
                    <input
                        class=" w-[75%] p-2 border-0 rounded-md my-2  mx-auto" 
                        type="password" placeholder="Contraseña">
                </div>
                <div class="flex justify-center">
                    <BtnLogin @handle-click="handleClick">Iniciar sesión</BtnLogin>
                    <p>
                        
                    </p>
                </div>
                <div class="flex justify-center">
                    <p>
                        ¿Olvidaste tu contraseña? <a href="#">Haz click aquí</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>


