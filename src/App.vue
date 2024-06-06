<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
*{
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
::-moz-progress-bar {
  display: none;
}

input[type="checkbox"] {
    appearance: none;
    border: 1px solid #d9d9d9;
    outline: none;
    cursor: pointer;
    width: 1.75rem;
    height: 1.5rem;
    margin: auto 0;
    border-radius: 0.5rem;
    background-color: white;
    position: relative; 
}
input[type="checkbox"]::before {
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1rem;
    height: 1rem;
    border: none;
    border-radius: 0.3125rem;
    background-color: white;
}
input[type="checkbox"]:checked::before {
    content: '✔';
    color: #999999;
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.5rem;
}
</style>

