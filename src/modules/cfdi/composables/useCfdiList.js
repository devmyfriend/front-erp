import { ref, computed } from "vue";
import { useCfdi } from "@/store/cfdiStore";

export function useCfdiList() {
  const store = useCfdi();

  const currentPage = ref(1);
  const itemsPerPage = ref(10);

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return store.getCfdi.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(store.getCfdi.length / itemsPerPage.value);
  });

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  const loadData = async () => {
    await store.loadCfdi();
  };

  return {
    loadData,
    paginatedData,
    currentPage,
    totalPages,
    changePage,
  };
}
