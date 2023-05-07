<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <main class="max-w-7xl m-auto p-4 grid grid-cols-[1fr_460px]">
    <article class="leading-loose">
      <h1 class="text-2xl font-sans italic text-cyan-300 mb-8 font-black">
        BloC no Frontend
      </h1>
      <section class="text-gray-400 font-light">
        <p>
          Com a crescente complexidade dos projetos de desenvolvimento web, a modularização e organização do código tornou-se 
          uma necessidade cada vez mais urgente. É neste contexto que entra o <i class="font-bold text-lime-500">BloC (Business Logic Component)</i>, 
          um padrão arquitetural que separa a lógica de negócios da interface do usuário. Embora não seja a solução 
          para todos os projetos de frontend, o BloC é particularmente útil para projetos grandes e complexos, 
          nos quais a separação clara e organizada das responsabilidades pode fazer toda a diferença para a manutenibilidade
          e escalabilidade do código. Neste artigo, exploraremos mais a fundo o que é o BloC, como ele funciona e como 
          pode ser implementado em projetos de frontend.
      </p>
      </section>
      <section class="text-gray-400 font-light">
        <h3 class="text-1xl font-sans italic text-cyan-300 my-8 font-semibold">
          Importância do BloC para a organização e manutenção de projetos web grandes e monolíticos
        </h3>
        <p>
          Projetos web grandes e monolíticos podem ter uma grande complexidade na organização do código e na manutenibilidade, 
          principalmente se houver uma grande quantidade de funcionalidades e módulos interconectados. Nesse contexto, 
          o BloC pode ser importante, pois separa claramente a lógica de negócios da interface do usuário, permitindo que 
          cada uma dessas partes seja desenvolvida e mantida de forma independente.
        </p>
      </section>
    </article>
    <div>

    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
