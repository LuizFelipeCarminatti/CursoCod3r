import "./globals.css";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon"  />
      <title>Cadastro De Usuário</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
