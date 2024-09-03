<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref } from 'vue';
import { registeredComponents } from '../init-builder';

const route = useRoute();

// TO DO: Add your Public API Key here
const apiKey = '94204d0409314038a22c9eb6de654f56';
const canShowContent = ref(false);
const model = 'page';

const { data: content } = await useAsyncData('builderData', () =>
  fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);


const getRegisteredComponents = () => {
    return registeredComponents
}
canShowContent.value = content.value ? true : isPreviewing(route.path);
</script>

<template>
  <div v-if="canShowContent">
    <Content :api-key="apiKey" :model="model" :content="content" :custom-components="getRegisteredComponents()" />
  </div>
  <div v-else>Content not Found</div>
</template>