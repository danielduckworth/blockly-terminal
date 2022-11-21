import { reactive, ref } from 'vue'

export const optionsStore = reactive({
    toolbox : ref(),
    theme : ref(),
    collapse : false,
    comments : false,
    disable : false,
    maxBlocks : Infinity,
    trashcan : true,
    horizontalLayout : false,
    toolboxPosition : 'start',
    css : true,
    media : 'https://blockly-demo.appspot.com/static/media/',
    rtl : false,
    scrollbars : true,
    sounds : false,
    oneBasedIndex : true,
    grid : {
      spacing : 20,
      length : 1,
      colour : '#888',
      snap : true
    },
    zoom : {
      controls : true,
      wheel : false,
      startScale : 1,
      maxScale : 3,
      minScale : 0.3,
      scaleSpeed : 1.2
    }
})
