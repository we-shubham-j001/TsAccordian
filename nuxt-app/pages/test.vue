<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 my-4 text-center">Accordion For TEST</h1>
    <TsAccordion :items="accordionItems" class="accordion-container" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const accordionItems = ref([
  {
    title: "Accordion-1",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia debitis asperiores vero? Sint laboriosam adipisci earum voluptates culpa quod, aliquid nostrum voluptate nobis neque dignissimos? Iusto officiis labore sed neque.",
  },
  {
    title: "Accordion-2",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia debitis asperiores vero? Sint laboriosam adipisci earum voluptates culpa quod, aliquid nostrum voluptate nobis neque dignissimos? Iusto officiis labore sed neque.",
  },
  {
    title: "Accordion-3",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia debitis asperiores vero? Sint laboriosam adipisci earum voluptates culpa quod, aliquid nostrum voluptate nobis neque dignissimos? Iusto officiis labore sed neque.",
  },
]);
</script>

<style scoped></style>
