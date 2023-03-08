
// npm i -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
   
// postcss.config.js 설정 (아무수정 안해줘도됨)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
 
//  tailwind.config.js 설정
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// next js tailwind.config.js 설정
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;



// index.html // 넣었다가 오류뜨면 지워도됨
<!-- Tailwind css -->
<link href="/dist/output.css" rel="stylesheet"> 
