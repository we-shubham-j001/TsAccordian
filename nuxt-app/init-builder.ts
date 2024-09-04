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
        defaultValue: [
          {
            title: 'Heading 1',
            content: []
          }
        ],
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
      }
    ],
  },
];
