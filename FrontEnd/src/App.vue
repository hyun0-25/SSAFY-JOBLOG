<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "@/common/Header.vue";
import Footer from "@/common/Footer.vue";
</script>

<style></style>
