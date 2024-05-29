/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    // colors:{
    //   sidebar:   '#0f0f0f',
    //   general:   '#353535',
    //   navbar:    '#232323',
    //   container: '#ffffff',
    //   primary:   '#f16136',
    //   success:   '#198754',
    //   danger:    '#DC3545',
    //   warning:   '#FFC107',
    //   disable:   '#999'
    // },
    extend: {
      colors:{
        sidebar:   '#0f0f0f',
        general:   '#353535',
        navbar:    '#232323',
        container: '#ffffff',
        primary:   '#f16136',
        success:   '#198754',
        danger:    '#DC3545',
        warning:   '#FFC107',
        disable:   '#999'
      },
    },
  },
  plugins: [],
}

