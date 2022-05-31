import { writable, readable } from 'svelte/store';

export let filterList = writable([
    {
        node_type: "BOOLEAN_OPERATION",
        name: "Boolean Operation",
        count: 0,
    },
    {
        node_type: "COMPONENT",
        name: "Component",
        count: 0,
    },
    {
        node_type: "COMPONENT_SET",
        name: "Component Set",
        count: 0,
    },
    {
        node_type: "ELLIPSE",
        name: "Ellipse",
        count: 0,
    },
    {
        node_type: "FRAME",
        name: "Frame",
        count: 0,
    },
    {
        node_type: "GROUP",
        name: "Group",
        count: 0,
    },
    {
        node_type: "INSTANCE",
        name: "Instance",
        count: 0,
    },
    {
        node_type: "LINE",
        name: "Line",
        count: 0,
    },
    {
        node_type: "POLYGON",
        name: "Polygon",
        count: 0,
    },
    {
        node_type: "RECTANGLE",
        name: "Rectangle",
        count: 0,
    },
    {
        node_type: "SLICE",
        name: "Slice",
        count: 0,
    },
    {
        node_type: "STAR",
        name: "Star",
        count: 0,
    },
    {
        node_type: "TEXT",
        name: "Text",
        count: 0,
    },
    {
        node_type: "VECTOR",
        name: "Vector",
        count: 0,
    },

]);
