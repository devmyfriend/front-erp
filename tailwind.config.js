/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* Diseños generales */
        blanco: '#fff',
        negro: '#000',
        disabled: ({
          DEFAULT: '#999',
          MyFriend: 'var(--myfriend-100)',
          TheFit: 'var(--thefit-orange-200)',
          Bonavida: 'var(--bonavida-dark-200)',
        }),



        MyFriend: {
          primary: '#0F6F7B',
          secondary: '#2BA0A3',
          sidebar: '#0F6F7B',
          navbar: '#CBE7E8',
          headers: '#2BA0A3',
          text: '#0F6F7B',
          subtext: '#fff',
          background: '#54BDBB',
          container: "#2BA0A3"
        },
        TheFit: {
          primary: '#EC633A',
          secondary: '#999999',
          sidebar: '#EC633A',
          navbar: '#FBD6CC',
          headers: '#999999',
          text: '#999999',
          subtext: '#EC633A',
          background: '#FBD6CC',
          container: "#F5AA95"
        },
        Bonavida: {
          primary: '#1c75b9',
          secondary: '#CDD1DE',
          sidebar: '#1c75b9',
          navbar: '#CDD1DE',
          headers: '#1c75b9',
          text: '#1c75b9',
          subtext: '#1c75b9',
          background: '#CDD1DE',
          container: "#8AAED0"
        },



        success:   '#198754',
        danger:    '#DC3545',
        warning:   '#FFC107',

        /* Diseño por componente */
        sidebar: ({
          DEFAULT: '#0f0f0f',
          myfriend: 'var(--myfriend-900)',
          thefit: 'var(--thefit-orange-600)',
          bonavida: 'var(--bonavida-light-600)'
        }),
        navbar: ({
          DEFAULT: '#232323',
          myfriend: 'var(--myfriend-100)',
          thefit: 'var(--thefit-orange-100)',
          bonavida: 'var(--bonavida-dark-100)',
        }),
        background: {
          DEFAULT: '#fff',
          myfriend: '#fff',
          thefit: '#fff',
          bonavida: '#fff',
        },
        container: ({
          DEFAULT: '#232323',
          myfriend: 'var(--myfriend-500)',
          thefit: 'var(--thefit-orange-100)',
          bonavida: 'var(--bonavida-dark-100)',
        }),
        subcontainer: ({
          DEFAULT: '#232323',
          myfriend: 'var(--myfriend-300)',
          thefit: 'var(--thefit-orange-200)',
          bonavida: 'var(--bonavida-dark-200)',
        }),
        h1: ({
          DEFAULT: '#000',
          myfriend: 'var(--myfriend-900)',
          thefit: 'var(--thefit-gray-600)',
          bonavida: 'var(--bonavida-light-600)',
        }),
        h2: ({
          DEFAULT: '#fff',
          myfriend: '#fff',
          thefit: 'var(--thefit-orange-600)',
          bonavida: 'var(--bonavida-light-600)',
        }),
        headerTable: ({
          DEFAULT: '#000',
          myfriend: 'var(--myfriend-700)',
          thefit: 'var(--thefit-gray-600)',
          bonavida: 'var(--bonavida-light-600)',
        }),
        textTable: ({
          DEFAULT: '#000',
          myfriend: 'var(--myfriend-700)',
          thefit: 'var(--thefit-gray-600)',
          bonavida: 'var(--bonavida-light-600)',
        }),
        primaryButton: ({
          DEFAULT: '#000',
          myfriend:         'var(--myfriend-700)',
          'myfriend-hover': 'var(--myfriend-800)',
          thefit:           'var(--thefit-gray-500)',
          'thefit-hover':   'var(--thefit-gray-600)',
          bonavida:         'var(--bonavida-light-500)',
          'bonavida-hover': 'var(--bonavida-light-600)',
        }),
        secondaryButton: ({
          DEFAULT: '#000',
          myfriend:         'var(--myfriend-400)',
          'myfriend-hover': 'var(--myfriend-600)',
          thefit:           'var(--thefit-orange-600)',
          'thefit-hover':   'var(--thefit-orange-500)',
          bonavida:         'var(--bonavida-dark-500)',
          'bonavida-hover': 'var(--bonavida-dark-600)',
        }),
        window: ({
          DEFAULT: 'transparent',
          myfriend: 'var(--myfriend-900)',
          thefit: 'var(--thefit-orange-600)',
          bonavida: 'var(--bonavida-light-600)',
        }),
      },
      fontSize: {
        h2Size: '1.5rem',
        labelSize: '1rem',
      },
      fontWeight: {
        h2Weight: 'bold',
        BtnWeight: 'bold',
        labelWeight: 'bold',
      },
      height: {
        inputHeight: '2.1875rem',
        primaryTableHeight: 'calc(100% - 7.5rem)',
        primaryHeaderTableHeight: '2.75rem',
        primaryBodyTableHeight: '2.5rem',
        buscadorIconHeight: '1.35rem',
      },
      borderColor: {
        inputBorder: '#000',
      },
      borderRadius: {
        inputRadius: '0.3125rem',
        primaryHeaderTableRadius: '0.5rem',
        primaryContainerRadius: '2rem',
        primaryWindowRadius: '0 0 0.5rem 0.5rem',
      primaryButtonRadius: '0.75rem',
      },
      borderWidth: {
        inputWidth: '1px',
        primaryTableWidth: '0.125rem',
      secondaryTableWidth: '0.25rem',
      },
      padding: {
        labelPadding: '0.5rem',
        paddingInput: '0.25rem 1rem',
        primaryPaddingContainer: '1rem',
      primaryPaddingButton: '0.5rem 1rem',
      },
      gap: {
      frmGap: '1rem',
      },
      margin: {
      h2Margin: 'auto auto 1rem auto',
      },
      letterSpacing: {
      btnAgregarLetterSpacing: '0.25rem',
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--modal-confirm': theme('colors.modalConfirm'),
          '--modal-cancel': theme('colors.modalCancel'),
        }
      });
    }
  ],
  safelist: [
    {
      pattern: /bg-MyFriend-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /bg-TheFit-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /bg-Bonavida-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },



    {
      pattern: /text-MyFriend-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /text-TheFit-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /text-Bonavida-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },



    {
      pattern: /border-MyFriend-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /border-TheFit-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
    {
      pattern: /border-Bonavida-.*/,
      variants: ['responsive', 'hover', 'focus', 'active'],
    },
  ],
}
