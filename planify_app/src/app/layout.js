// rör inget, lägg bara ill länkar om vi använder ramverk
import '../Style/globals.css'; 
import '../Style/Components.css';
export default function Layout({ children }) {
  return (
    <html lang="sve">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossOrigin="anonymous"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}

