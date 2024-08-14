import { ref } from 'vue';

const tabsCollection = ref([]);
const activeTab = ref(0);

export function useWindows() {
    const setTabsCollection = (newTabsCollection) => {
        tabsCollection.value = newTabsCollection;
    };

    const setActiveTab = (newActiveTab) => {
        activeTab.value = newActiveTab;
    };

    return {
        tabsCollection,
        activeTab,
        setTabsCollection,
        setActiveTab,
    };
}
