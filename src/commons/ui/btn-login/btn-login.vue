<script setup>
    const emit = defineEmits(['handleClick'])

    const click = () => {
        emit('handleClick')
    }
</script>

<template>
    <button 
        @click="click()"
        class="flex items-center py-[0.625rem] px-[1.25rem] rounded-md bg-green-800 hover:bg-green-900 hover:cursor-pointer text-white"
    >
        <slot></slot>
    </button>
</template>