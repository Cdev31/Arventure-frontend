/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00CEC9',   // Teal brillante (Botones y destacados)
        'secondary': '#2D3436', // Gris oscuro (Textos secundarios y fondos)
        'accent': '#C69749',    // Dorado/Café (Detalles y estrellas)
        'background': '#FDFEFE', // Blanco/Crema muy claro
        'text': '#1A1A1B',      // Negro para lectura
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}