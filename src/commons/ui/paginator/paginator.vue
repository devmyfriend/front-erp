<script setup>
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const emits = defineEmits(["changePage"]);

const goToPage = (page) => {
  if (page > 0 && page <= props.totalPages) {
    emits("changePage", page);
  }
};
</script>

<template>
  <div class="frm flex justify-center gap-4 mb-6 p-2">
    <button
      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-white"
      type="button"
      @click="goToPage(1)"
      :disabled="currentPage === 1"
    >
      <span
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </span>
    </button>
    <button
      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-white"
      type="button"
      @click="goToPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      <span
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 5l-7 7 7 7"
          />
        </svg>
      </span>
    </button>
    <p
      class="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700"
    >
      Page <strong class="text-gray-900">{{ currentPage }}</strong> /
      <strong class="text-gray-900">{{ totalPages }}</strong>
    </p>
    <button
      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-white"
      type="button"
      @click="goToPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
    >
      <span
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </button>
    <button
      class="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] bg-white"
      type="button"
      @click="goToPage(totalPages)"
      :disabled="currentPage === totalPages"
    >
      <span
        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 5l7 7-7 7M6 5l7 7-7 7"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
