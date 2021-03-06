import { readable, writable } from 'svelte/store';

export let nodeTypeFilterListDefault = writable([])

export let nodeTypeFilterList = writable([
    {
        node_type: "ALL",
        name: "All Types",
        count: 0,
        sticky: true,
        default: true
    },
    {
        node_type: "BOOLEAN_OPERATION",
        name: "Boolean Operation",
        count: 0,
        sticky: false,
    },
    {
        node_type: "COMPONENT",
        name: "Component",
        count: 0,
        sticky: false
    },
    {
        node_type: "COMPONENT_SET",
        name: "Component Set",
        count: 0,
        sticky: false
    },
    {
        node_type: "ELLIPSE",
        name: "Ellipse",
        count: 0,
        sticky: false
    },
    {
        node_type: "FRAME",
        name: "Frame",
        count: 0,
        sticky: false
    },
    {
        node_type: "GROUP",
        name: "Group",
        count: 0,
        sticky: false
    },
    {
        node_type: "INSTANCE",
        name: "Instance",
        count: 0,
        sticky: false
    },
    {
        node_type: "LINE",
        name: "Line",
        count: 0,
        sticky: false
    },
    {
        node_type: "POLYGON",
        name: "Polygon",
        count: 0,
        sticky: false
    },
    {
        node_type: "RECTANGLE",
        name: "Rectangle",
        count: 0,
        sticky: false
    },
    {
        node_type: "SLICE",
        name: "Slice",
        count: 0,
        sticky: false
    },
    {
        node_type: "STAR",
        name: "Star",
        count: 0,
        sticky: false
    },
    {
        node_type: "TEXT",
        name: "Text",
        count: 0,
        sticky: false
    },
    {
        node_type: "VECTOR",
        name: "Vector",
        count: 0,
        sticky: false
    },

]);

export let activeFilters = writable({
    node_types: [],
    query_text: "",
    restrict_to_selection: false,
    selected_node_ids: [],
    exact_string_match: false
})


export let recentSearches = writable([

])

export let searchQuery = writable({
    node_types: [],
    query_text: "",
    restrict_to_selection: false,
    selected_node_ids: [],
    query_submit_time: "",
    exact_string_match: false

})

export let UIState = writable({
    showMainMenu: true,
    showSearchResults: false,
})

export let defaultSettings = readable({
    recentSearchLength: 20,
    rememberNodeFilterCounts: true
})

export let settings = writable({

})


// function createTestStore() {
//     const { subscribe, set, update } = writable([]);

//     return {
//         subscribe,
//         // set: (value) => set(value),
//         increment: () => update(n => n + 1),
//         decrement: () => update(n => n - 1),
//         add: addSearch(),
//         reset: () => set(0)
//     };

//     function addSearch(params) {

//     }
// }

// const testStore = createTestStore()
// export { testStore }