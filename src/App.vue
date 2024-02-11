<script setup>
  import { useStore } from 'vuex';
  
  const store = useStore()

  import TheHeader from './components/TheHeader.vue';
  import TheNote from './components/TheNote.vue';
  import TheModal from './components/TheModal.vue';
  import EditNote from './components/EditNote.vue';

</script>


<template>
  <main>
    <div class="container">
      <Teleport to="#modal">
        <Transition name="modal">
          <TheModal></TheModal>
        </Transition>
      </Teleport>
      <TheHeader></TheHeader>
      <TheNote :notes="store.state.notes"></TheNote>
      <Teleport to="body">
        <EditNote></EditNote>
      </Teleport>
    </div>
  </main>
</template>


<style scoped>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease-out;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}

main {
  height: 100vh;
  width: 100%;
}

.container {
  max-width: 1108px;
  padding: 10px;
  margin: 0 auto;
}
</style>
