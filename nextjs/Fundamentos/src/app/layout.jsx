import "./layout.css";
import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }){
  return (
    <html lang="pt-br">
      <head>
        <title>Fundamentos</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
