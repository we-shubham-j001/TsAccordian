import TsAccordion from "./components/TsAccordion.vue";

export const registeredComponents = [
  {
    component: TsAccordion,
    name: "Accordion",
    canHaveChildren: true,
    inputs: [
      {
        name: "items",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
            defaultValue: "heading 1",
          },
          {
            name: "content",
            type: "uiBlocks",
            hideFromUI: true,
            defaultValue: [],
          },
        ],
      },
      {
        name: "multiple",
        type: "boolean",
      },
    ],
  },
];
