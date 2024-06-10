/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
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
        disable:   '#999',
        /* Lalo */
        primaryFontColor: '#000000',
        secondaryFontColor: '#ffffff',
        placeholderFontColor: '#353535',
        
        backgroundInputColor: '#f2f2f2',

        primaryBtnColor: '#353535',
        
        primaryHeaderTable: '#353535',

        primaryUnderline: '#fff',

        primaryBodyTable: '#e6e6e6',
        secondaryBodyTable: '#d8d5d5',
        disableBodyTable: '#aaaaaa',

        primaryPlaceholderColor: '#CBCBCB',

        primaryFrmContainer: '#d9d9d9',
        secondaryFrmContainer: '#cbcbcb',
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
  plugins: [],
}
