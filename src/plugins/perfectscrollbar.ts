/**
 * plugins/perfectscrollbar.ts
 *
 * Documentation: https://github.com/mercs600/vue3-perfect-scrollbar#how-to-use`
 */

import PerfectScrollbarPlugin from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

// Global options
// https://github.com/mercs600/vue3-perfect-scrollbar#global-options
const options = {
  watchOptions: true,
  options: {
    suppressScrollX: true
  }
}

export default {PerfectScrollbarPlugin, options}
