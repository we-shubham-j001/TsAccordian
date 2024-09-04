<template>
  <div>
    <div class="space-y-2">
      <div v-for="(item, index) in props.items" :key="index" class="border-b">
        <button
          @click="toggle(index)"
          class="w-full text-left font-semibold p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          {{ item?.title }}
        </button>
        <div
          v-show="isActive(index)"
          class="overflow-hidden transition-all duration-300"
        >
          <div class="p-4 bg-white">
          <slot :name="`accordion-${index}`">
            <Blocks
              :parent="props.builderBlock?.id"
              :path="`component.options.items.${index}.content`"
              :blocks="item.content"
            />
          </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Blocks } from "@builder.io/sdk-vue";

type BuilderBlock = {
  id: string;
};

type Props = {
  items?: {
    title: string;
    content: any[];
  }[];
  builderBlock?: BuilderBlock;
};

const props = withDefaults(defineProps<Props>(), {
  items: () => [
    {
      title: "Accordion-1",
      content: [],
    },
    {
      title: "Accordion-2",
      content: [],
    },
    {
      title: "Accordion-3",
      content: [],
    },
  ],
});

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const isActive = (index: number) => {
  return activeIndex.value === index;
};
</script>

<style scoped></style>
