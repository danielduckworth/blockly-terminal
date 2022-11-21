<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

</script>

<template>
  <div>
    <body>
      <slot name="top"></slot>
    <main id="container">
      <div id="terminal">
        <!-- Terminal Bar -->
        <section id="terminal__bar">
          <div id="bar__buttons">
            <v-icon button size="xs" icon="mdi-close" color="red"></v-icon>
            <v-icon size="xs" icon="mdi-minus" color="yellow"></v-icon>
            <v-icon size="xs" icon="mdi-check" color="green"></v-icon>
          </div>
          <p id="bar__user">ICILS 2077: ~</p>
        </section>
        <!-- Terminal Body -->

        <section id="terminal__body">
          <perfect-scrollbar>
          <!-- <div id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div> -->
          <slot  />
        </perfect-scrollbar>
        </section>
      </div>
    </main>
  </body>
  </div>
</template>

<style lang="scss" scoped>
@use "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// @import url('https://fonts.googleapis.com/css?family=Ubuntu');
// @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');

body {
  background: linear-gradient(45deg, #142498 0%,#539cf5 100%);
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  margin: 0px;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 51);
  /* background: rgb(246, 249, 252); */
  overflow: hidden;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 35vh;
  // height: 100%;
  height: 36vh;

}

#terminal {
  width: 38vw;
  // height: 23vh;

  box-shadow: 2px 4px 10px rgba(0,0,0,0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #282a38;
  opacity: 1;
}

#terminal__bar {
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* background: linear-gradient(#282a38 0%,#282a38 100%); */
  background: #282c34;
  font-family: monospace;
}

#bar__user {
  color: #d5d0ce;
  margin-left: 6px;
  font-size: 1em;
  line-height: 15px;


}

#terminal__body {
  /* background: #282a38;
  font-family: 'monospace';
  font-size: 16px;
  height: calc(100% - 30px);
  padding-top: 10px;
  padding-left: 5px;
  margin-top: 0px; */
  /* flex: 1 1 0%; */
  // height: 100%;
  // height: calc(100% - 30px);
  max-height: 23vh;
  // box-sizing: border-box;
  outline: none;
  color: #acffe7;
  background: #282a38;
  // font-size: 1em;
  font-family: monospace;
  padding: 0px;
  font-weight: 450;
  line-height: normal;
  // text-transform: none;
  // text-indent: 0px;
  // text-shadow: none;
  // display: block;
  // text-align: start;
  // appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  padding: 5px 5px;
  border-width: 1px;
  border-style: inset;
  /* border-color: -internal-light-dark(#333544, #2a2d3f); */
  border-color: rgba(223, 141, 231, 0.288);
  //overflow-y: scroll;

}
.ps {
  height: 21vh;
}

#terminal__prompt {
  display: flex;
}

#terminal__prompt--user {
  color: #acffe7;
  font-size: 16px;
  /* line-height: 100%; */
  margin-left: 5px;
  opacity: 0.85;
}
#terminal__prompt--location {
  color: #4878c0;
}
#terminal__prompt--bling {
  color: #f8aeff;
  margin-right: 0.25em;
    white-space: pre;
}

#terminal__prompt--cursor {
  display: block;
  height: 17px;
  width: 8px;
  margin-left: 9px;
  animation: blink 1200ms linear infinite;
}

@keyframes blink {
  0% {
    background: #ffffff;
  }
  49% {
    background: #ffffff;
  }
  60% {
    background: transparent;
  }
  99% {
    background: transparent;
  }
  100% {
    background: #ffffff;
  }
}

@media (max-width: 600px) {
  #terminal {
    max-height: 90%;
    width: 90%;
  }
}
</style>
