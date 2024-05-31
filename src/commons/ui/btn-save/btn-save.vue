<script setup>

const emit = defineEmits(['handleClick'])

const click = ()=>{
    emit('handleClick')
}


</script>


<template>
    <button
        @click="click()" 
        class=" w-36 h-8 rounded-md bg-cyan-900 text-white hover:bg-cyan-950"
    >
        <slot></slot>
    </button>
</template>

