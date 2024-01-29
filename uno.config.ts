import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    },
  },
  shortcuts: {
    btn: 'p-2 font-semibold rounded-lg select-none cursor-pointer hover:bg-[#8882] dark:hover:bg-[#fff2]',
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'middle',
      },
      warn: true,
    }),
  ],
})
