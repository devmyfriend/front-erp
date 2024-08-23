<script setup>
    import { useTheme } from '@/commons/composables/theme';
    
</script>
<template>
    <div class=" modal-background" :class="theme ? `bg-background-${theme}`:'bg-background'">
        <div class="modal-container fade-in">
            <slot name="header"></slot>
            <hr>
            <slot name="body"></slot>
            <hr>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
    }

    .modal-container {
        width: 60%;
        height: 60%;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 250px;
        color: red;
    }


    .fade-in {
        animation: fadeIn ease-out 0.2s;
        -webkit-animation: fadeIn ease-out 0.2s;
        -moz-animation: fadeIn ease-out 0.2s;
        -o-animation: fadeIn ease-out 0.2s;
        -ms-animation: fadeIn ease-out 0.2s;
    }

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

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

    .contact{
        overflow:auto;
    }
</style>