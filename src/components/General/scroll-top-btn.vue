<template>
  <div>
    <button
      class="btn btn-portfolio4 position-fixed scroll-top-btn d-none btn-sm"
      width="50"
      height="50"
      v-scroll-to="{
        el: '.header',
        container: 'body',
        duration: 1000,
        easing: 'linear',
        offset: -299,
        force: true,
        cancelable: true,
        onStart: onStart,
        onDone: onDone,
        onCancel: onCancel,
        x: false,
        y: true,
      }"
    >
      <font-awesome-icon
        class="text-white"
        :icon="['fas', 'arrow-up']"
        size="1x"
      />
    </button>
  </div>
</template>
