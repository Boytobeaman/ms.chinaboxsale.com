import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="ms">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pengilang Krat Lipat Berkualiti Tinggi, keranjang buah plastik</title>
        <meta name="description" content="Krat Lipat Plastik Berkualiti Tinggi - Penyelesaian Penyimpanan & Pengangkutan Jimat Ruang. Tahan Lama, Boleh Disusun TIndih & Boleh Diguna Semula. Pengilang & Pembekal Borong. OEM/ODM tersedia." />
        <meta name="keywords" content=" keranjang buah plastik, keranjang plastik, keranjang lipat serbaguna" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
