<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useHead } from '@vueuse/head';

useHead({
  title: 'Bloc no Frontend | Rafael Neves',
  meta: [
    {
      name: 'description',
      content: 'Descubra como o BloC (Business Logic Component) pode ser uma abordagem valiosa para a organização e manutenibilidade de projetos web grandes e monolíticos.',
    },
  ],
})
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>
<template>
  <main class="max-w-7xl m-auto p-4">
    <article class="leading-loose">
      <h1 class="text-3xl font-sans italic text-cyan-300 mb-8 font-black">
        BloC no Frontend
      </h1>
      <section class="text-gray-300 font-light">
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
      <section class="text-gray-300 font-light">
        <h3 class="text-2xl font-sans italic text-violet-300 my-8 font-semibold">
          Importância do BloC para a organização e manutenção de projetos web grandes e monolíticos
        </h3>
        <p>
          Projetos web grandes e monolíticos podem ter uma grande complexidade na organização do código e na manutenibilidade, 
          principalmente se houver uma grande quantidade de funcionalidades e módulos interconectados. Nesse contexto, 
          o BloC pode ser importante, pois separa claramente a lógica de negócios da interface do usuário, permitindo que 
          cada uma dessas partes seja desenvolvida e mantida de forma independente.
        </p>
        <p>
          Com o BloC, é possível criar componentes que representam a lógica de negócios do sistema, independentemente da interface
          do usuário. Esses componentes podem ser reutilizados em diferentes partes do sistema, facilitando a escalabilidade e 
          reduzindo a duplicação de código. Além disso, a separação entre a lógica de negócios e a interface do usuário torna mais
          fácil testar e manter cada uma dessas partes de forma independente.
        </p>
        <p>
          Outra vantagem do uso do BloC em projetos grandes é que ele facilita a colaboração entre equipes de desenvolvimento. 
          Como cada equipe pode se concentrar em uma parte específica do sistema, há menos conflitos e sobreposições entre os 
          membros da equipe, o que leva a um desenvolvimento mais eficiente e rápido.
        </p>
      </section>
      <section class="text-gray-300 font-light">
        <h3 class="text-2xl font-sans italic text-violet-300 my-8 font-semibold">
          Desvantagens do uso de BloC em projetos web
        </h3>
        <p>
          Curva de aprendizado: o uso do BloC pode exigir que a equipe de desenvolvimento aprenda uma nova abordagem arquitetural,
          o que pode levar algum tempo e esforço adicional.
        </p>
        <p>
          Aumento do overhead: ao usar o BloC, pode ser necessário criar mais código e estrutura,
           o que pode aumentar o overhead do projeto.
        </p>
        <p>
          Aumento da complexidade: o uso do BloC pode adicionar uma camada de complexidade ao projeto,
          especialmente se a equipe não estiver familiarizada com a abordagem ou se houver muitos módulos interconectados.
        </p>
        <p>
          Sobrecarga na comunicação: em alguns casos, a separação clara entre a lógica de negócios e a interface do usuário pode levar 
          a uma sobrecarga na comunicação entre essas partes, especialmente em projetos menores, onde a colaboração entre as equipes 
          pode ser mais simples.
        </p>
        <p>
          No entanto, é importante ressaltar que as desvantagens do uso do BloC podem ser mitigadas com uma boa compreensão 
          da abordagem e com uma implementação cuidadosa. Em geral, a abordagem do BloC pode ser uma solução valiosa para 
          projetos web grandes e complexos, mas deve ser avaliada caso a caso, considerando as necessidades específicas do 
          projeto e da equipe de desenvolvimento.
        </p>
      </section>
    </article>
  </main>
</template>