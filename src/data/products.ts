export type Produto = {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  categoria: string;
};

export const categorias = [
  "Telas iPhone",
  "Telas Samsung",
  "Telas Motorola",
  "Telas Xiaomi & Poco",
  "Telas LG",
  "Tampas iPhone",
  "Baterias iPhone",
  "Baterias Android",
  "Baterias Tablet",
  "Conectores de Carga"
] as const;

export const produtos: Produto[] = [
  {
    "id": 1,
    "nome": "Tela iPhone 6G",
    "preco": "R$ 60,05",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 2,
    "nome": "Tela iPhone 6 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 3,
    "nome": "Tela iPhone 6S",
    "preco": "R$ 60,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 4,
    "nome": "Tela iPhone 6S PLUS",
    "preco": "R$ 70,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 5,
    "nome": "Tela iPhone 7G",
    "preco": "R$ 60,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 6,
    "nome": "Tela iPhone 7 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 7,
    "nome": "Tela iPhone 7 PLUS (PREMIUM KBS)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 8,
    "nome": "Tela iPhone 8G",
    "preco": "R$ 60,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 9,
    "nome": "Tela iPhone 8 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 10,
    "nome": "Tela iPhone X (JK FHD)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 11,
    "nome": "Tela iPhone X (KBS HD)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 12,
    "nome": "Tela iPhone X (PREMIUM)",
    "preco": "R$ 220,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 13,
    "nome": "Tela iPhone XS (JK FHD)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 14,
    "nome": "Tela iPhone XS (KBS HD)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 15,
    "nome": "Tela iPhone XS (PREMIUM)",
    "preco": "R$ 220,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 16,
    "nome": "Tela iPhone XR (INCELL)",
    "preco": "R$ 80,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 17,
    "nome": "Tela iPhone XR (JK FHD)",
    "preco": "R$ 100,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 18,
    "nome": "Tela iPhone XR (KBS FHD)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 19,
    "nome": "Tela iPhone XR (PREMIUM REAPRT)",
    "preco": "R$ 150,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 20,
    "nome": "Tela iPhone XS MAX (JK FHD)",
    "preco": "R$ 130,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 21,
    "nome": "Tela iPhone XS MAX (PREMIUM REPART)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 22,
    "nome": "Tela iPhone 11 (INCELL)",
    "preco": "R$ 80,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 23,
    "nome": "Tela iPhone 11 (JK FHD)",
    "preco": "R$ 100,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 24,
    "nome": "Tela iPhone 11 (KBS HD+)",
    "preco": "R$ 120,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 25,
    "nome": "Tela iPhone 11 (PREMIUM REPART)",
    "preco": "R$ 150,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 26,
    "nome": "Tela iPhone 11 PRO (JK FHD)",
    "preco": "R$ 130,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 27,
    "nome": "Tela iPhone 11 PRO (KBS FHD)",
    "preco": "R$ 220,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 28,
    "nome": "Tela iPhone 11 PRO (PREMIUM REPART)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 29,
    "nome": "Tela iPhone 11 PRO (ORIGINAL RETIRADA)",
    "preco": "R$ 700,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 30,
    "nome": "Tela iPhone 11 PRO MAX (JK FHD)",
    "preco": "R$ 150,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 31,
    "nome": "Tela iPhone 11 PRO MAX (KBS FHD)",
    "preco": "R$ 220,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 32,
    "nome": "Tela iPhone 11 PRO MAX (PREMIUM REPART)",
    "preco": "R$ 330,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 33,
    "nome": "Tela iPhone 11 PRO MAX (ORIGINAL RETIRADA)",
    "preco": "R$ 800,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 34,
    "nome": "Tela iPhone 12 MINI (REPART INCELL)",
    "preco": "R$ 310,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 35,
    "nome": "Tela iPhone 12 MINI (PREMIUM)",
    "preco": "R$ 400,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 36,
    "nome": "Tela iPhone 12/ 12 PRO (JK FHD)",
    "preco": "R$ 150,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 37,
    "nome": "Tela iPhone 12/12 PRO (KBS FHD)",
    "preco": "R$ 230,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 38,
    "nome": "Tela iPhone 12/ 12 PRO (PREMIUM)",
    "preco": "R$ 410,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 39,
    "nome": "Tela iPhone 12 PRO MAX (JK FHD)",
    "preco": "R$ 200,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 40,
    "nome": "Tela iPhone 12 PRO MAX (KBS FHD)",
    "preco": "R$ 250,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 41,
    "nome": "Tela iPhone 12 PRO MAX (PREMIUM)",
    "preco": "R$ 470,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 42,
    "nome": "Tela iPhone 13 MINI (KBS FHD)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 43,
    "nome": "Tela iPhone 13 MINI (REPART INCELL)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 44,
    "nome": "Tela iPhone 13 (JK FHD)",
    "preco": "R$ 180,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 45,
    "nome": "Tela iPhone 13 (KBS FHD)",
    "preco": "R$ 250,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 46,
    "nome": "Tela iPhone 13 (PREMIUM REPART SOFT OLED)",
    "preco": "R$ 400,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 47,
    "nome": "Tela iPhone 13 (REPART SOFT OLED DIAGNÓSTICO)",
    "preco": "R$ 560,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 48,
    "nome": "Tela iPhone 13 PRO (JK FHD)",
    "preco": "R$ 240,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 49,
    "nome": "Tela iPhone 13 PRO (KBS FHD)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 50,
    "nome": "Tela iPhone 13 PRO (PREMIUM)",
    "preco": "R$ 600,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 51,
    "nome": "Tela iPhone 13 PRO (REPART SOFT OLED DIAG\n    NÓSTICO)",
    "preco": "R$ 750,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 52,
    "nome": "Tela iPhone 13 PRO MAX (JK FHD)",
    "preco": "R$ 250,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 53,
    "nome": "Tela iPhone 13 PRO MAX (KBS FHD)",
    "preco": "R$ 350,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 54,
    "nome": "Tela iPhone 13 PRO MAX (PREMIUM REPART SOFT OLED)",
    "preco": "R$ 650,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 55,
    "nome": "Tela iPhone 14 (JK FHD)",
    "preco": "R$ 220,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 56,
    "nome": "Tela iPhone 14 (KBS FHD)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 57,
    "nome": "Tela iPhone 14 (PREMIUM SOFT OLED)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 58,
    "nome": "Tela iPhone 14 (REPART SOFT OLED DIAGNÓSTICO)",
    "preco": "R$ 650,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 59,
    "nome": "Tela iPhone 14 PLUS (REPART INCELL)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 60,
    "nome": "Tela iPhone 14 PLUS (PREMIUM SOFT OLED)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 61,
    "nome": "Tela iPhone 14 PLUS (REPART SOLF OLED DIAGNÓSTICO)",
    "preco": "R$ 700,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 62,
    "nome": "Tela iPhone 14 PRO (JK FHD)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 63,
    "nome": "Tela iPhone 14 PRO (KBS FHD)",
    "preco": "R$ 450,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 64,
    "nome": "Tela iPhone 14 PRO (PREMIUM)",
    "preco": "R$ 800,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 65,
    "nome": "Tela iPhone 14 PRO MAX (JK FHD)",
    "preco": "R$ 350,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 66,
    "nome": "Tela iPhone 14 PRO MAX (KBS FHD)",
    "preco": "R$ 400,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 67,
    "nome": "Tela iPhone 14 PRO MAX (REPART SOFT OLED DIAGNÓSTICO)",
    "preco": "R$ 1000,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 68,
    "nome": "Tela iPhone 15 (JK FHD)",
    "preco": "R$ 280,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 69,
    "nome": "Tela iPhone 15 (KBS FHD)",
    "preco": "R$ 300,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 70,
    "nome": "Tela iPhone 15 (PREMIUM SOLF OLED)",
    "preco": "R$ 1000,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 71,
    "nome": "Tela iPhone 15 PLUS (BASIC INCELL)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 72,
    "nome": "Tela iPhone 15 PLUS (REPART SOFT OLED DIAGNÓSTICO)",
    "preco": "R$ 1000,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 73,
    "nome": "Tela iPhone 15 PRO (JK FHD)",
    "preco": "R$ 320,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 74,
    "nome": "Tela iPhone 15 PRO (KBS FHD)",
    "preco": "R$ 400,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 75,
    "nome": "Tela iPhone 15 PRO MAX (KBS FHD)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 76,
    "nome": "Tela iPhone 16 (KBS FHD)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 77,
    "nome": "Tela iPhone 16 (PREMIUM REPART)",
    "preco": "R$ 900,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 78,
    "nome": "Tela iPhone 16 PLUS (REPART INCELL)",
    "preco": "R$ 500,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 79,
    "nome": "Tela iPhone 16 PLUS (PREMIUM REPART)",
    "preco": "R$ 880,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 80,
    "nome": "Tela iPhone 16 PRO (KBS FHD)",
    "preco": "R$ 700,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 81,
    "nome": "Tela iPhone 16 PRO (PREMIUM REPART)",
    "preco": "R$ 1250,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 82,
    "nome": "Tela iPhone 16 PRO MAX (INCELL)",
    "preco": "R$ 800,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 83,
    "nome": "Tela iPhone 16 PRO MAX (KBS FHD)",
    "preco": "R$ 750,00",
    "descricao": "Principal IPHONE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 84,
    "nome": "Tela iPhone 11",
    "preco": "R$ 150,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 85,
    "nome": "Tela iPhone 11 PRO",
    "preco": "R$ 250,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 86,
    "nome": "Tela iPhone 11 PRO MAX",
    "preco": "R$ 330,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 87,
    "nome": "Tela iPhone 12/ 12 PRO",
    "preco": "R$ 410,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 88,
    "nome": "Tela iPhone 12 MINI",
    "preco": "R$ 450,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 89,
    "nome": "Tela iPhone 12 PRO MAX",
    "preco": "R$ 500,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 90,
    "nome": "Tela iPhone 13",
    "preco": "R$ 400,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 91,
    "nome": "Tela iPhone 13 PRO",
    "preco": "R$ 600,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 92,
    "nome": "Tela iPhone 14",
    "preco": "R$ 500,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 93,
    "nome": "Tela iPhone 14 PLUS",
    "preco": "R$ 500,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 94,
    "nome": "Tela iPhone 14 PRO",
    "preco": "R$ 800,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 95,
    "nome": "Tela iPhone 14 PRO MAX",
    "preco": "R$ 1000,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 96,
    "nome": "Tela iPhone 15",
    "preco": "R$ 1000,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 97,
    "nome": "Tela iPhone 16",
    "preco": "R$ 900,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 98,
    "nome": "Tela iPhone 16 PLUS",
    "preco": "R$ 880,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 99,
    "nome": "Tela iPhone 16 PRO",
    "preco": "R$ 1250,00",
    "descricao": "IPHONE PREMIUM",
    "categoria": "Telas iPhone"
  },
  {
    "id": 100,
    "nome": "Tela iPhone XR",
    "preco": "R$ 120,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 101,
    "nome": "Tela iPhone 11",
    "preco": "R$ 120,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 102,
    "nome": "Tela iPhone 11 PRO",
    "preco": "R$ 220,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 103,
    "nome": "Tela iPhone 11 PRO MAX",
    "preco": "R$ 220,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 104,
    "nome": "Tela iPhone 12/12 PRO",
    "preco": "R$ 230,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 105,
    "nome": "Tela iPhone 12 PRO MAX",
    "preco": "R$ 250,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 106,
    "nome": "Tela iPhone 13 MINI",
    "preco": "R$ 320,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 107,
    "nome": "Tela iPhone 13",
    "preco": "R$ 250,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 108,
    "nome": "Tela iPhone 13 PRO",
    "preco": "R$ 300,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 109,
    "nome": "Tela iPhone 13 PRO MAX",
    "preco": "R$ 350,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 110,
    "nome": "Tela iPhone 14 PRO",
    "preco": "R$ 350,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 111,
    "nome": "Tela iPhone 14 PRO MAX",
    "preco": "R$ 400,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 112,
    "nome": "Tela iPhone 15",
    "preco": "R$ 300,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 113,
    "nome": "Tela iPhone 15 PRO",
    "preco": "R$ 400,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 114,
    "nome": "Tela iPhone 15 PRO MAX",
    "preco": "R$ 500,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 115,
    "nome": "Tela iPhone 16",
    "preco": "R$ 500,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 116,
    "nome": "Tela iPhone 16 PRO",
    "preco": "R$ 700,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 117,
    "nome": "Tela iPhone 16 PRO MAX",
    "preco": "R$ 750,00",
    "descricao": "IPHONE KBS FHD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 118,
    "nome": "Tela iPhone X (com chave)",
    "preco": "R$ 250,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 119,
    "nome": "Tela iPhone XS (com chave)",
    "preco": "R$ 250,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 120,
    "nome": "Tela iPhone XS MAX (com chave)",
    "preco": "R$ 300,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 121,
    "nome": "Tela iPhone 11 PRO (com chave)",
    "preco": "R$ 270,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 122,
    "nome": "Tela iPhone 11 PRO MAX (com chave)",
    "preco": "R$ 330,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 123,
    "nome": "Tela iPhone 12/12 PRO (com chave)",
    "preco": "R$ 360,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 124,
    "nome": "Tela iPhone 12 PRO MAX (com chave)",
    "preco": "R$ 430,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 125,
    "nome": "Tela iPhone 13 (com chave)",
    "preco": "R$ 370,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 126,
    "nome": "Tela iPhone 13 PRO (com chave)",
    "preco": "R$ 500,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 127,
    "nome": "Tela iPhone 13 PRO MAX (com chave)",
    "preco": "R$ 600,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 128,
    "nome": "Tela iPhone 14 (com chave)",
    "preco": "R$ 450,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 129,
    "nome": "Tela iPhone 14 PRO (com chave)",
    "preco": "R$ 750,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 130,
    "nome": "Tela iPhone 15 (com chave)",
    "preco": "R$ 700,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 131,
    "nome": "Tela iPhone 15 PRO (com chave)",
    "preco": "R$ 850,00",
    "descricao": "TELAS PREMIUM OLED KBS COM CHAVE",
    "categoria": "Telas iPhone"
  },
  {
    "id": 132,
    "nome": "Tela iPhone 13",
    "preco": "R$ 560,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 133,
    "nome": "Tela iPhone 13 PRO",
    "preco": "R$ 750,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 134,
    "nome": "Tela iPhone 14",
    "preco": "R$ 650,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 135,
    "nome": "Tela iPhone 14 PLUS",
    "preco": "R$ 700,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 136,
    "nome": "Tela iPhone 14 PRO MAX",
    "preco": "R$ 1000,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 137,
    "nome": "Tela iPhone 15 PLUS",
    "preco": "R$ 1000,00",
    "descricao": "FRONTAL PREMIUM REPART 🔝 ✅(Telas Sem Mensagem)",
    "categoria": "Telas iPhone"
  },
  {
    "id": 138,
    "nome": "Tela iPhone IPAD 2 (TOUCH)",
    "preco": "R$ 60,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 139,
    "nome": "Tela iPhone IPAD 3/4 (TOUCH)",
    "preco": "R$ 60,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 140,
    "nome": "Tela iPhone IPAD 5/IPAD AIR (TOUCH)",
    "preco": "R$ 100,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 141,
    "nome": "Tela iPhone IPAD 6 (TOUCH)",
    "preco": "R$ 100,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 142,
    "nome": "Tela iPhone IPAD 7/8/9 (TOUCH)",
    "preco": "R$ 120,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 143,
    "nome": "Tela iPhone IPAD 10 (TOUCH)",
    "preco": "R$ 150,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 144,
    "nome": "Tela iPhone IPAD 5/ IPAD AIR (LCD)",
    "preco": "R$ 450,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 145,
    "nome": "Tela iPhone IPAD 6 (LCD)",
    "preco": "R$ 500,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 146,
    "nome": "Tela iPhone IPAD 7/8/9 (LCD)",
    "preco": "R$ 600,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 147,
    "nome": "Tela iPhone IPAD 10 (LCD)",
    "preco": "R$ 800,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 148,
    "nome": "Tela iPhone IPAD AIR 2 (FRONTAL)",
    "preco": "R$ 600,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 149,
    "nome": "Tela iPhone IPAD AIR 3 (FRONTAL)",
    "preco": "R$ 700,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 150,
    "nome": "Tela iPhone IPAD AIR 5 (FRONTAL)",
    "preco": "R$ 900,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 151,
    "nome": "Tela iPhone IPAD PRO 12.9 GEN 2020 4TH (FRONTAL)",
    "preco": "R$ 1200,00",
    "descricao": "LINHA IPAD",
    "categoria": "Telas iPhone"
  },
  {
    "id": 152,
    "nome": "Tela Samsung J2 CORE J260",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 153,
    "nome": "Tela Samsung J2 PRO (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 154,
    "nome": "Tela Samsung J410/J415 PLUS CORE",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 155,
    "nome": "Tela Samsung J5 (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 156,
    "nome": "Tela Samsung J570 PRIME",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 157,
    "nome": "Tela Samsung J530 PRO (OLED)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 158,
    "nome": "Tela Samsung J6 (INCELL FINO)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 159,
    "nome": "Tela Samsung J6 (OLED)",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 160,
    "nome": "Tela Samsung J610 PLUS/ J6+",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 161,
    "nome": "Tela Samsung J7 (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 162,
    "nome": "Tela Samsung J730 PRO (OLED)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 163,
    "nome": "Tela Samsung J730 PRO (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 164,
    "nome": "Tela Samsung J710 METAL (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 165,
    "nome": "Tela Samsung J7 PRIME(G610)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 166,
    "nome": "Tela Samsung J7 PRIME2 (G611)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 167,
    "nome": "Tela Samsung J8 (INCELL FINO)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 168,
    "nome": "Tela Samsung J8 (OLED)",
    "preco": "R$ 170,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 169,
    "nome": "Tela Samsung A6 PLUS (OLED)",
    "preco": "R$ 180,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 170,
    "nome": "Tela Samsung A750 (OLED)",
    "preco": "R$ 180,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 171,
    "nome": "Tela Samsung A01",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 172,
    "nome": "Tela Samsung A01 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 173,
    "nome": "Tela Samsung A01 (ORIGINAL RETIRADA)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 174,
    "nome": "Tela Samsung A01 (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 175,
    "nome": "Tela Samsung A01 CORE",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 176,
    "nome": "Tela Samsung A01 CORE (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 177,
    "nome": "Tela Samsung A02 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 178,
    "nome": "Tela Samsung A02 (PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 179,
    "nome": "Tela Samsung A02 (ORIGINAL RETIRADA)",
    "preco": "R$ 180,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 180,
    "nome": "Tela Samsung A02S/A03S/A03/A04E",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 181,
    "nome": "Tela Samsung A02S",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 182,
    "nome": "Tela Samsung A02S (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 183,
    "nome": "Tela Samsung A02S (ORIGINAL RETIRADA)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 184,
    "nome": "Tela Samsung A03",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 185,
    "nome": "Tela Samsung A03 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 186,
    "nome": "Tela Samsung A03 (PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 187,
    "nome": "Tela Samsung A03S",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 188,
    "nome": "Tela Samsung A03S (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 189,
    "nome": "Tela Samsung A03 CORE",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 190,
    "nome": "Tela Samsung A03 CORE (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 191,
    "nome": "Tela Samsung A03 CORE (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 192,
    "nome": "Tela Samsung A03 CORE (PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 193,
    "nome": "Tela Samsung A04",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 194,
    "nome": "Tela Samsung A04 (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 195,
    "nome": "Tela Samsung A04S/ A13 5G",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 196,
    "nome": "Tela Samsung A04S (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 197,
    "nome": "Tela Samsung A04E",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 198,
    "nome": "Tela Samsung A04E (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 199,
    "nome": "Tela Samsung A05",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 200,
    "nome": "Tela Samsung A05 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 201,
    "nome": "Tela Samsung A05S",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 202,
    "nome": "Tela Samsung A05S (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 203,
    "nome": "Tela Samsung A06",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 204,
    "nome": "Tela Samsung A06 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 205,
    "nome": "Tela Samsung A07",
    "preco": "R$ 100,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 206,
    "nome": "Tela Samsung A07 (COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 207,
    "nome": "Tela Samsung A10 INCELL",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 208,
    "nome": "Tela Samsung A10 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 209,
    "nome": "Tela Samsung A10 (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 210,
    "nome": "Tela Samsung A10S",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 211,
    "nome": "Tela Samsung A10S (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 212,
    "nome": "Tela Samsung A10S (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 213,
    "nome": "Tela Samsung A10S (ORIGINAL RETIRADA)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 214,
    "nome": "Tela Samsung A11",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 215,
    "nome": "Tela Samsung A11 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 216,
    "nome": "Tela Samsung A11 (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 217,
    "nome": "Tela Samsung A11 (PREMIUM COM ARO)",
    "preco": "R$ 140,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 218,
    "nome": "Tela Samsung A12 125/A12 127/A02/M12/A32 5G",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 219,
    "nome": "Tela Samsung A12 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 220,
    "nome": "Tela Samsung A13/A23/M13/M23",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 221,
    "nome": "Tela Samsung A13 4G",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 222,
    "nome": "Tela Samsung A13 4G (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 223,
    "nome": "Tela Samsung A13 5G",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 224,
    "nome": "Tela Samsung A13 5G(PREMIUM)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 225,
    "nome": "Tela Samsung A14 4G",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 226,
    "nome": "Tela Samsung A14 5G",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 227,
    "nome": "Tela Samsung A14 5G (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 228,
    "nome": "Tela Samsung A15 (INCELL COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 229,
    "nome": "Tela Samsung A15 (OLED COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 230,
    "nome": "Tela Samsung A16 4G (INCELL COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 231,
    "nome": "Tela Samsung A16 4G (OLED COM ARO)",
    "preco": "R$ 280,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 232,
    "nome": "Tela Samsung A16 5G (INCELL COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 233,
    "nome": "Tela Samsung A16 5G (OLED COM ARO)",
    "preco": "R$ 280,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 234,
    "nome": "Tela Samsung A16 5G (PREMIUM COM ARO)",
    "preco": "R$ 350,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 235,
    "nome": "Tela Samsung A16 5G (NACIONAL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 236,
    "nome": "Tela Samsung A20 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 237,
    "nome": "Tela Samsung A20 (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 238,
    "nome": "Tela Samsung A20 (PREMIUM COM ARO)",
    "preco": "R$ 190,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 239,
    "nome": "Tela Samsung A20 (ORIGINAL RETIRADA)",
    "preco": "R$ 220,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 240,
    "nome": "Tela Samsung A20S (INCELL)",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 241,
    "nome": "Tela Samsung A20S (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 242,
    "nome": "Tela Samsung A20S (PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 243,
    "nome": "Tela Samsung A20S (ORIGINAL RETIRADA)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 244,
    "nome": "Tela Samsung A21S",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 245,
    "nome": "Tela Samsung A21S (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 246,
    "nome": "Tela Samsung A21S (ORIGINAL RETIRADA)",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 247,
    "nome": "Tela Samsung A22 4G (INCELL COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 248,
    "nome": "Tela Samsung A22 4G (OLED COM ARO)",
    "preco": "R$ 170,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 249,
    "nome": "Tela Samsung A22 5G",
    "preco": "R$ 100,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 250,
    "nome": "Tela Samsung A22 5G (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 251,
    "nome": "Tela Samsung A23 4G",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 252,
    "nome": "Tela Samsung A23 4G (INCELL COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 253,
    "nome": "Tela Samsung A23 5G",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 254,
    "nome": "Tela Samsung A23 5G (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 255,
    "nome": "Tela Samsung A23 5G(PREMIUM) (COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 256,
    "nome": "Tela Samsung A24 (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 257,
    "nome": "Tela Samsung A24 (OLED COM ARO)",
    "preco": "R$ 240,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 258,
    "nome": "Tela Samsung A24 (NACIONAL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 259,
    "nome": "Tela Samsung A25 5G (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 260,
    "nome": "Tela Samsung A25 5G (OLED COM ARO)",
    "preco": "R$ 260,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 261,
    "nome": "Tela Samsung A26 (INCELL COM ARO)",
    "preco": "R$ 160,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 262,
    "nome": "Tela Samsung A26 (OLED COM ARO)",
    "preco": "R$ 360,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 263,
    "nome": "Tela Samsung A30 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 264,
    "nome": "Tela Samsung A30 (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 265,
    "nome": "Tela Samsung A30 (PREMIUM COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 266,
    "nome": "Tela Samsung A30 (ORIGINAL RETIRADA)",
    "preco": "R$ 220,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 267,
    "nome": "Tela Samsung A31 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 268,
    "nome": "Tela Samsung A31 (OLED COM ARO)",
    "preco": "R$ 160,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 269,
    "nome": "Tela Samsung A30S (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 270,
    "nome": "Tela Samsung A30S (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 271,
    "nome": "Tela Samsung A30S (PREMIUM COM ARO)",
    "preco": "R$ 190,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 272,
    "nome": "Tela Samsung A32 4G (INCELL COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 273,
    "nome": "Tela Samsung A32 4G (OLED COM ARO)",
    "preco": "R$ 170,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 274,
    "nome": "Tela Samsung A32 4G (OLED PREMIUM)",
    "preco": "R$ 250,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 275,
    "nome": "Tela Samsung A32 5G",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 276,
    "nome": "Tela Samsung A33 (PREMIUM COM ARO)",
    "preco": "R$ 280,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 277,
    "nome": "Tela Samsung A33 (ORIGINAL RETIRADA)",
    "preco": "R$ 450,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 278,
    "nome": "Tela Samsung A34 (ORIGINAL RETIRADA SEM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 279,
    "nome": "Tela Samsung A35 (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 280,
    "nome": "Tela Samsung A50 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 281,
    "nome": "Tela Samsung A50 (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 282,
    "nome": "Tela Samsung A50 (PREMIUM COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 283,
    "nome": "Tela Samsung A51 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 284,
    "nome": "Tela Samsung A51 (OLED)",
    "preco": "R$ 160,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 285,
    "nome": "Tela Samsung A51 (OLED BORDA FINA)",
    "preco": "R$ 190,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 286,
    "nome": "Tela Samsung A51 (PREMIUM COM ARO)",
    "preco": "R$ 270,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 287,
    "nome": "Tela Samsung A52/A52S (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 288,
    "nome": "Tela Samsung A52 5G (OLED)",
    "preco": "R$ 190,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 289,
    "nome": "Tela Samsung A52 5G (OLED BORDA FINA)",
    "preco": "R$ 220,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 290,
    "nome": "Tela Samsung A52 5G (NACIONAL COM ARO)",
    "preco": "R$ 550,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 291,
    "nome": "Tela Samsung A52S (OLED BORDA FINA)",
    "preco": "R$ 220,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 292,
    "nome": "Tela Samsung A52S (ORIGINAL RETIRADA)",
    "preco": "R$ 450,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 293,
    "nome": "Tela Samsung A54 (NACIONAL SEM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 294,
    "nome": "Tela Samsung A54 (NACIONAL COM ARO)",
    "preco": "R$ 630,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 295,
    "nome": "Tela Samsung A70 (INCELL COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 296,
    "nome": "Tela Samsung A70 (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 297,
    "nome": "Tela Samsung A70 (OLED BORDA FINA)",
    "preco": "R$ 250,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 298,
    "nome": "Tela Samsung A70 (OLED PREMIUM)",
    "preco": "R$ 320,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 299,
    "nome": "Tela Samsung A70 (ORIGINAL RETIRADA)",
    "preco": "R$ 450,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 300,
    "nome": "Tela Samsung A71 (INCELL COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 301,
    "nome": "Tela Samsung A71 (OLED COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 302,
    "nome": "Tela Samsung A71 (OLED BORDA FINA)",
    "preco": "R$ 250,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 303,
    "nome": "Tela Samsung A71 (OLED PREMIUM)",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 304,
    "nome": "Tela Samsung A72 (OLED BORDA FINA)",
    "preco": "R$ 250,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 305,
    "nome": "Tela Samsung A72 (PREMIUM COM ARO)",
    "preco": "R$ 350,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 306,
    "nome": "Tela Samsung A80 (NACIONAL COM ARO)",
    "preco": "R$ 700,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 307,
    "nome": "Tela Samsung M10",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 308,
    "nome": "Tela Samsung M12 127",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 309,
    "nome": "Tela Samsung M13",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 310,
    "nome": "Tela Samsung M15 (ORIGINAL RETIRADA)",
    "preco": "R$ 380,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 311,
    "nome": "Tela Samsung M20",
    "preco": "R$ 70,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 312,
    "nome": "Tela Samsung M23",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 313,
    "nome": "Tela Samsung M31S (NACIONAL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 314,
    "nome": "Tela Samsung M32 (ORIGINAL RETIRADA)",
    "preco": "R$ 350,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 315,
    "nome": "Tela Samsung M33",
    "preco": "R$ 60,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 316,
    "nome": "Tela Samsung M53 (ORIGINAL RETIRADA)",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 317,
    "nome": "Tela Samsung M54 (ORIGINAL RETIRADA)",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 318,
    "nome": "Tela Samsung M55 (NACIONAL COM ARO)",
    "preco": "R$ 460,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 319,
    "nome": "Tela Samsung S8 (ORIGINAL NACIONAL SEM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 320,
    "nome": "Tela Samsung S8 (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 321,
    "nome": "Tela Samsung S8 PLUS (INCELL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 322,
    "nome": "Tela Samsung S9 (INCELL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 323,
    "nome": "Tela Samsung S9 (ORIGINAL RETIRADA)",
    "preco": "R$ 550,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 324,
    "nome": "Tela Samsung S9 (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 325,
    "nome": "Tela Samsung S20 FE (INCELL COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 326,
    "nome": "Tela Samsung S20 FE (OLED BORDA FINA)",
    "preco": "R$ 250,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 327,
    "nome": "Tela Samsung S20 FE (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 328,
    "nome": "Tela Samsung S20 FE (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 329,
    "nome": "Tela Samsung S20 PLUS (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 1100,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 330,
    "nome": "Tela Samsung S20 ULTRA (INCELL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 331,
    "nome": "Tela Samsung S20 ULTRA (PREMIUM)",
    "preco": "R$ 1000,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 332,
    "nome": "Tela Samsung S20 ULTRA (ORIGINAL NACIONAL)",
    "preco": "R$ 1200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 333,
    "nome": "Tela Samsung S21 FE (OLED BORDA FINA)",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 334,
    "nome": "Tela Samsung S21 FE (NACIONAL COM ARO)",
    "preco": "R$ 900,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 335,
    "nome": "Tela Samsung S21 ULTRA (INCELL COM ARO)",
    "preco": "R$ 700,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 336,
    "nome": "Tela Samsung S23 FE (PREMIUM COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 337,
    "nome": "Tela Samsung S23 FE (ORIGINAL NACIONAL SEM ARO)",
    "preco": "R$ 750,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 338,
    "nome": "Tela Samsung S23 FE (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 800,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 339,
    "nome": "Tela Samsung S23 PLUS (NACIONAL COM ARO)",
    "preco": "R$ 1500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 340,
    "nome": "Tela Samsung S24 ULTRA (ORIGINAL NACIONAL SEM ARO)",
    "preco": "R$ 1600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 341,
    "nome": "Tela Samsung S25 PLUS (ORIGINAL NACIONAL)",
    "preco": "R$ 1600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 342,
    "nome": "Tela Samsung S25 ULTRA (ORIGINAL NACIONAL COM ARO)",
    "preco": "R$ 1900,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 343,
    "nome": "Tela Samsung NOTE 10 PLUS (NACIONAL COM ARO)",
    "preco": "R$ 1750,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 344,
    "nome": "Tela Samsung NOTE 20 (NACIONAL COM ARO)",
    "preco": "R$ 800,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 345,
    "nome": "Tela Samsung NOTE 20 PLUS (NACIONAL COM ARO)",
    "preco": "R$ 1700,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 346,
    "nome": "Tela Samsung Z FLIP (ORIGINAL RETIRADA)",
    "preco": "R$ 1000,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 347,
    "nome": "Tela Samsung Z FLIP 3 (ORIGINAL RETIRADA)",
    "preco": "R$ 1300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 348,
    "nome": "Tela Samsung Z FOLD 2 EXTERNA (ORIGINAL RETIRADA)",
    "preco": "R$ 700,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 349,
    "nome": "Tela Samsung Z FOLD 2 (ORIGINAL RETIRADA)",
    "preco": "R$ 1500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 350,
    "nome": "Tela Samsung Z FOLD 4 (ORIGINAL RETIRADA)",
    "preco": "R$ 1600,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 351,
    "nome": "Tela Samsung T870/T875",
    "preco": "R$ 500,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 352,
    "nome": "Tela Samsung T810/T813/T815/T819",
    "preco": "R$ 550,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 353,
    "nome": "Tela Samsung T590/T595",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 354,
    "nome": "Tela Samsung T560",
    "preco": "R$ 320,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 355,
    "nome": "Tela Samsung T540/T545/T547",
    "preco": "R$ 350,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 356,
    "nome": "Tela Samsung T510/T515",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 357,
    "nome": "Tela Samsung T500/T505",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 358,
    "nome": "Tela Samsung T385",
    "preco": "R$ 330,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 359,
    "nome": "Tela Samsung T307",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 360,
    "nome": "Tela Samsung T220/T225",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 361,
    "nome": "Tela Samsung T290/T295",
    "preco": "R$ 200,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 362,
    "nome": "Tela Samsung T280/T285",
    "preco": "R$ 150,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 363,
    "nome": "Tela Samsung X110/X115",
    "preco": "R$ 220,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 364,
    "nome": "Tela Samsung X200/X205",
    "preco": "R$ 300,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 365,
    "nome": "Tela Samsung X210/X211/X215/X216",
    "preco": "R$ 350,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 366,
    "nome": "Tela Samsung X510/X515/X519",
    "preco": "R$ 420,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 367,
    "nome": "Tela Samsung X610/X616",
    "preco": "R$ 400,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 368,
    "nome": "Tela Samsung P610/P613/P615/",
    "preco": "R$ 450,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 369,
    "nome": "Tela Samsung P200/P205",
    "preco": "R$ 330,00",
    "descricao": "Telas Samsung",
    "categoria": "Telas Samsung"
  },
  {
    "id": 370,
    "nome": "Tela Motorola G2",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 371,
    "nome": "Tela Motorola G5",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 372,
    "nome": "Tela Motorola G5G",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 373,
    "nome": "Tela Motorola G5G PLUS",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 374,
    "nome": "Tela Motorola G5 PLUS",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 375,
    "nome": "Tela Motorola G5 PLUS (NACIONAL)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 376,
    "nome": "Tela Motorola G6 PLAY (NACIONAL)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 377,
    "nome": "Tela Motorola G7 PLAY",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 378,
    "nome": "Tela Motorola G7 PLAY (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 379,
    "nome": "Tela Motorola G7/G7 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 380,
    "nome": "Tela Motorola G7 POWER",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 381,
    "nome": "Tela Motorola G7 POWER (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 382,
    "nome": "Tela Motorola G8 PLAY",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 383,
    "nome": "Tela Motorola G8 PLAY (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 384,
    "nome": "Tela Motorola G8 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 385,
    "nome": "Tela Motorola G8 PLUS (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 386,
    "nome": "Tela Motorola G8 PLUS (PREMIUM COM ARO)",
    "preco": "R$ 170,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 387,
    "nome": "Tela Motorola G8",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 388,
    "nome": "Tela Motorola G8 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 389,
    "nome": "Tela Motorola G8 POWER",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 390,
    "nome": "Tela Motorola G8 POWER (PREMIUM COM ARO)",
    "preco": "R$ 170,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 391,
    "nome": "Tela Motorola G8 POWER (NACIONAL COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 392,
    "nome": "Tela Motorola G8 POWER LITE",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 393,
    "nome": "Tela Motorola G8 POWER LITE (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 394,
    "nome": "Tela Motorola G9 PLAY/ E7 PLUS",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 395,
    "nome": "Tela Motorola G9 PLAY (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 396,
    "nome": "Tela Motorola G9 PLAY/E7 PLUS (PREMIUM SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 397,
    "nome": "Tela Motorola G9 PLAY (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 398,
    "nome": "Tela Motorola G9 PLUS",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 399,
    "nome": "Tela Motorola G9 POWER",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 400,
    "nome": "Tela Motorola G9 POWER(PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 401,
    "nome": "Tela Motorola G10/G20/G30",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 402,
    "nome": "Tela Motorola G10/G20/G30 (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 403,
    "nome": "Tela Motorola G10 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 404,
    "nome": "Tela Motorola G10 (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 405,
    "nome": "Tela Motorola G20(PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 406,
    "nome": "Tela Motorola G04/G04S/G24/G24 POWER/E14",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 407,
    "nome": "Tela Motorola G04/G04S (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 408,
    "nome": "Tela Motorola G04S",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 409,
    "nome": "Tela Motorola G05/G15/G15 POWER/E15",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 410,
    "nome": "Tela Motorola G05/G15(COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 411,
    "nome": "Tela Motorola G05/G15(PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 412,
    "nome": "Tela Motorola G06(PREMIUM COM ARO)",
    "preco": "R$ 170,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 413,
    "nome": "Tela Motorola G13/G23/G34/G53/G45",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 414,
    "nome": "Tela Motorola G13/G23 (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 415,
    "nome": "Tela Motorola G13/G23/G34/G53/G45 (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 416,
    "nome": "Tela Motorola G14/G54/G54 POWER/G64/G32 G73/G55",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 417,
    "nome": "Tela Motorola G14 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 418,
    "nome": "Tela Motorola G14(PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 419,
    "nome": "Tela Motorola G15/G05(PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 420,
    "nome": "Tela Motorola G20",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 421,
    "nome": "Tela Motorola G20 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 422,
    "nome": "Tela Motorola G22/E32/E22s",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 423,
    "nome": "Tela Motorola G22 (INCELL COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 424,
    "nome": "Tela Motorola G23",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 425,
    "nome": "Tela Motorola G23 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 426,
    "nome": "Tela Motorola G24",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 427,
    "nome": "Tela Motorola G24 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 428,
    "nome": "Tela Motorola G24(PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 429,
    "nome": "Tela Motorola G24 POWER",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 430,
    "nome": "Tela Motorola G30",
    "preco": "R$ 60,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 431,
    "nome": "Tela Motorola G30 (COM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 432,
    "nome": "Tela Motorola G31/G41/G71(INCELL SEM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 433,
    "nome": "Tela Motorola G31/G41/G71 (OLED BORDA FINA SEM ARO)",
    "preco": "R$ 180,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 434,
    "nome": "Tela Motorola G31 (OLED BORDA FINA COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 435,
    "nome": "Tela Motorola G31/G41/G71 (PREMIUM SEM ARO KBS)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 436,
    "nome": "Tela Motorola G31 (PREMIUM COM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 437,
    "nome": "Tela Motorola G32/ G73 5G",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 438,
    "nome": "Tela Motorola G32 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 439,
    "nome": "Tela Motorola G34",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 440,
    "nome": "Tela Motorola G34 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 441,
    "nome": "Tela Motorola G34(PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 442,
    "nome": "Tela Motorola G35",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 443,
    "nome": "Tela Motorola G35(COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 444,
    "nome": "Tela Motorola G35(PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 445,
    "nome": "Tela Motorola G41 (OLED BORDA FINA)",
    "preco": "R$ 180,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 446,
    "nome": "Tela Motorola G41 (OLED COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 447,
    "nome": "Tela Motorola G41 (NACIONAL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 448,
    "nome": "Tela Motorola G42 (INCELL)",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 449,
    "nome": "Tela Motorola G42 (OLED BORDA FINA)",
    "preco": "R$ 180,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 450,
    "nome": "Tela Motorola G42 (OLED BORDA FINA COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 451,
    "nome": "Tela Motorola G42 (PREMIUM SEM ARO KBS)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 452,
    "nome": "Tela Motorola G42 (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 453,
    "nome": "Tela Motorola G50 4G",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 454,
    "nome": "Tela Motorola G50 5G",
    "preco": "R$ 70,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 455,
    "nome": "Tela Motorola G50 5G (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 456,
    "nome": "Tela Motorola G52/G72/G82/G71s/ (EDGE 30 (INCELL SEM ARO",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 457,
    "nome": "Tela Motorola G52 (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 458,
    "nome": "Tela Motorola G52/G72/G82/G71S/EDGE30 (OLED SEM ARO)",
    "preco": "R$ 220,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 459,
    "nome": "Tela Motorola G52 (OLED COM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 460,
    "nome": "Tela Motorola G52/G72/G82/G71s (EDGE 30 PREMIUM SEM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 461,
    "nome": "Tela Motorola G52 (PREMIUM COM ARO)",
    "preco": "R$ 350,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 462,
    "nome": "Tela Motorola G53",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 463,
    "nome": "Tela Motorola G53 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 464,
    "nome": "Tela Motorola G54/G64",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 465,
    "nome": "Tela Motorola G54/G64 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 466,
    "nome": "Tela Motorola G54(PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 467,
    "nome": "Tela Motorola G60/G60s",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 468,
    "nome": "Tela Motorola G60 (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 469,
    "nome": "Tela Motorola G60 (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 470,
    "nome": "Tela Motorola G60S (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 471,
    "nome": "Tela Motorola G60S (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 472,
    "nome": "Tela Motorola G62",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 473,
    "nome": "Tela Motorola G64",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 474,
    "nome": "Tela Motorola G64 (COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 475,
    "nome": "Tela Motorola G71 (OLED COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 476,
    "nome": "Tela Motorola G72 (OLED SEM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 477,
    "nome": "Tela Motorola G72 (PREMIUM COM ARO)",
    "preco": "R$ 460,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 478,
    "nome": "Tela Motorola G73",
    "preco": "R$ 80,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 479,
    "nome": "Tela Motorola G73(COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 480,
    "nome": "Tela Motorola G73(PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 481,
    "nome": "Tela Motorola G75",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 482,
    "nome": "Tela Motorola G75(PREMIUM COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 483,
    "nome": "Tela Motorola G75 (ORIGINAL NACIONAL SEM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 484,
    "nome": "Tela Motorola G82 (OLED SEM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 485,
    "nome": "Tela Motorola G84 (INCELL SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 486,
    "nome": "Tela Motorola G84 (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 487,
    "nome": "Tela Motorola G84 (OLED)",
    "preco": "R$ 220,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 488,
    "nome": "Tela Motorola G84 (OLED COM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 489,
    "nome": "Tela Motorola G84(PREMIUM COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 490,
    "nome": "Tela Motorola G85(PREMIUM COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 491,
    "nome": "Tela Motorola G100",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 492,
    "nome": "Tela Motorola G200",
    "preco": "R$ 120,00",
    "descricao": "Modelo G Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 493,
    "nome": "Tela Motorola E5 (NACIONAL C/ARO)",
    "preco": "R$ 100,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 494,
    "nome": "Tela Motorola E6 PLUS",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 495,
    "nome": "Tela Motorola E6 PLAY",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 496,
    "nome": "Tela Motorola E6 PLAY (NACIONAL C/ARO)",
    "preco": "R$ 100,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 497,
    "nome": "Tela Motorola E6S",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 498,
    "nome": "Tela Motorola E6i",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 499,
    "nome": "Tela Motorola E6i (RETIRADA COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 500,
    "nome": "Tela Motorola E7/ E7 POWER",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 501,
    "nome": "Tela Motorola E7 (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 502,
    "nome": "Tela Motorola E7 POWER (COM ARO)",
    "preco": "R$ 85,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 503,
    "nome": "Tela Motorola E7 PLUS",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 504,
    "nome": "Tela Motorola E7 PLUS (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 505,
    "nome": "Tela Motorola E13",
    "preco": "R$ 70,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 506,
    "nome": "Tela Motorola E13 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 507,
    "nome": "Tela Motorola E13 (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 508,
    "nome": "Tela Motorola E20",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 509,
    "nome": "Tela Motorola E20 (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 510,
    "nome": "Tela Motorola E20 (PREMIUM SEM ARO KBS)",
    "preco": "R$ 120,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 511,
    "nome": "Tela Motorola E22",
    "preco": "R$ 60,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 512,
    "nome": "Tela Motorola E22 (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 513,
    "nome": "Tela Motorola E22 (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 514,
    "nome": "Tela Motorola E32",
    "preco": "R$ 75,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 515,
    "nome": "Tela Motorola E32 (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 516,
    "nome": "Tela Motorola E32 (PREMIUM COM ARO)",
    "preco": "R$ 130,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 517,
    "nome": "Tela Motorola E40/E30",
    "preco": "R$ 70,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 518,
    "nome": "Tela Motorola E40 (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Linha E Preço (R$)",
    "categoria": "Telas Motorola"
  },
  {
    "id": 519,
    "nome": "Tela Motorola ONE",
    "preco": "R$ 70,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 520,
    "nome": "Tela Motorola ONE (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 521,
    "nome": "Tela Motorola ONE VISION/ONE ACTION",
    "preco": "R$ 170,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 522,
    "nome": "Tela Motorola ONE MACRO",
    "preco": "R$ 60,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 523,
    "nome": "Tela Motorola ONE MACRO (COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 524,
    "nome": "Tela Motorola ONE ZOOM (OLED)",
    "preco": "R$ 170,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 525,
    "nome": "Tela Motorola ONE HYPER",
    "preco": "R$ 80,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 526,
    "nome": "Tela Motorola ONE FUSION",
    "preco": "R$ 70,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 527,
    "nome": "Tela Motorola ONE FUSION PLUS",
    "preco": "R$ 80,00",
    "descricao": "Linha One",
    "categoria": "Telas Motorola"
  },
  {
    "id": 528,
    "nome": "Tela Motorola EDGE (NACIONAL COM ARO)",
    "preco": "R$ 670,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 529,
    "nome": "Tela Motorola EDGE PLUS (NACIONAL COM ARO)",
    "preco": "R$ 750,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 530,
    "nome": "Tela Motorola EDGE 20 LITE (INCELL SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 531,
    "nome": "Tela Motorola EDGE 20 LITE (PREMIUM SEM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 532,
    "nome": "Tela Motorola EDGE 20 LITE (NACIONAL SEM ARO)",
    "preco": "R$ 460,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 533,
    "nome": "Tela Motorola EDGE 20 LITE (NACIONAL COM ARO)",
    "preco": "R$ 470,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 534,
    "nome": "Tela Motorola EDGE 20 (NACIONAL COM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 535,
    "nome": "Tela Motorola EDGE 20 PRO (NACIONAL SEM ARO)",
    "preco": "R$ 410,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 536,
    "nome": "Tela Motorola EDGE 20 PRO (NACIONAL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 537,
    "nome": "Tela Motorola EDGE 30/G52/G72/G82 (PREMIUM SEM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 538,
    "nome": "Tela Motorola EDGE 30 NEO (INCELL SEM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 539,
    "nome": "Tela Motorola EDGE 30 NEO (NACIONAL SEM ARO)",
    "preco": "R$ 540,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 540,
    "nome": "Tela Motorola EDGE 30 (NACIONAL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 541,
    "nome": "Tela Motorola EDGE 30 ULTRA (NACIONAL SEM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 542,
    "nome": "Tela Motorola EDGE 30 ULTRA (NACIONAL COM ARO)",
    "preco": "R$ 750,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 543,
    "nome": "Tela Motorola EDGE 30 FUSION (NACIONAL COM ARO)",
    "preco": "R$ 780,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 544,
    "nome": "Tela Motorola EDGE 40 (NACIONAL COM ARO)",
    "preco": "R$ 750,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 545,
    "nome": "Tela Motorola EDGE 40 NEO (NACIONAL SEM ARO)",
    "preco": "R$ 520,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 546,
    "nome": "Tela Motorola EDGE 40 PRO (NACIONAL COM ARO)",
    "preco": "R$ 950,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 547,
    "nome": "Tela Motorola EDGE 50 (NACIONAL COM ARO)",
    "preco": "R$ 800,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 548,
    "nome": "Tela Motorola EDGE 50 NEO (NACIONAL SEM ARO)",
    "preco": "R$ 540,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 549,
    "nome": "Tela Motorola EDGE 50 ULTRA (NACIONAL SEM ARO)",
    "preco": "R$ 530,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 550,
    "nome": "Tela Motorola EDGE 60 PRO(PREMIUM COM ARO)",
    "preco": "R$ 470,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 551,
    "nome": "Tela Motorola EDGE 60 NEO",
    "preco": "R$ 520,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 552,
    "nome": "Tela Motorola EDGE 60 (PREMIUM COM ARO)",
    "preco": "R$ 470,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 553,
    "nome": "Tela Motorola EDGE 60 FUSION (PREMIUM COM ARO)",
    "preco": "R$ 470,00",
    "descricao": "Linha Edge",
    "categoria": "Telas Motorola"
  },
  {
    "id": 554,
    "nome": "Tela Motorola RAZR 50 ULTRA (NACIONAL SEM ARO)",
    "preco": "R$ 1200,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 555,
    "nome": "Tela Motorola RAZR 60 ULTRA (NACIONAL COM ARO)",
    "preco": "R$ 2400,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 556,
    "nome": "Tela Motorola X PLAY",
    "preco": "R$ 50,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 557,
    "nome": "Tela Motorola Z PLAY (OLED)",
    "preco": "R$ 120,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 558,
    "nome": "Tela Motorola Z2 PLAY (OLED)",
    "preco": "R$ 130,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 559,
    "nome": "Tela Motorola Z3 PLAY (OLED)",
    "preco": "R$ 170,00",
    "descricao": "Linha Razr e Série Z/X",
    "categoria": "Telas Motorola"
  },
  {
    "id": 560,
    "nome": "Tela POCO C65/REDMI 13C(SEM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 561,
    "nome": "Tela POCO C85/REDMI 15C(SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 562,
    "nome": "Tela POCO F2 (COM ARO)",
    "preco": "R$ 280,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 563,
    "nome": "Tela POCO F3(PREMIUM COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 564,
    "nome": "Tela POCO X3/PRO",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 565,
    "nome": "Tela POCO X4 PRO/NOTE 11T PRO 5G (PREMIUM COM ARO)",
    "preco": "R$ 370,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 566,
    "nome": "Tela POCO X4 GT/NOTE 11T PRO 5G (COM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 567,
    "nome": "Tela POCO X5 (PREMIUM COM ARO)",
    "preco": "R$ 340,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 568,
    "nome": "Tela POCO X6/X6PRO/ NOTE 13 PRO 5G (ORIGINAL SEM ARO)",
    "preco": "R$ 380,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 569,
    "nome": "Tela POCO X7 PRO (ORIGINAL SEM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 570,
    "nome": "Tela POCO X7 PRO (PREMIUM SEM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 571,
    "nome": "Tela POCO M3",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 572,
    "nome": "Tela POCO M3 (COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 573,
    "nome": "Tela POCO M3 PRO",
    "preco": "R$ 120,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 574,
    "nome": "Tela POCO M4 PRO 4G (OLED)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 575,
    "nome": "Tela POCO M4/M5/NOTE 11E /11R/REDMI 10 5G",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 576,
    "nome": "Tela POCO M4/M5 (PREMIUM SEM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 577,
    "nome": "Tela POCO M6 PRO (PREMIUM SEM ARO)",
    "preco": "R$ 550,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 578,
    "nome": "Tela POCO M7 (ORIGINAL COM ARO)",
    "preco": "R$ 600,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 579,
    "nome": "Tela POCO M7 PRO 5G(PREMIUM COM ARO)",
    "preco": "R$ 650,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 580,
    "nome": "Tela MI MAX 3 (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 581,
    "nome": "Tela REDMI A1/ REDMI A2/REDMI A1 PLUS",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 582,
    "nome": "Tela REDMI A1/ REDMI A2/REDMI A1 PLUS (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 583,
    "nome": "Tela MI A3 OLED",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 584,
    "nome": "Tela MI NOTE 5/NOTE 5 PRO (C/ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 585,
    "nome": "Tela MI NOTE 7",
    "preco": "R$ 70,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 586,
    "nome": "Tela MI NOTE 7 (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 587,
    "nome": "Tela MI NOTE 8",
    "preco": "R$ 70,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 588,
    "nome": "Tela MI NOTE 8T",
    "preco": "R$ 90,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 589,
    "nome": "Tela NOTE 8T (PREMIUM COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 590,
    "nome": "Tela MI NOTE 8 PRO",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 591,
    "nome": "Tela MI 8 LITE",
    "preco": "R$ 90,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 592,
    "nome": "Tela MI 9 OLED",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 593,
    "nome": "Tela MI 9T/MI 9T PRO OLED",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 594,
    "nome": "Tela MI 9 LITE OLED",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 595,
    "nome": "Tela MI 9 LITE (PREMIUM COM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 596,
    "nome": "Tela REDMI 9T",
    "preco": "R$ 90,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 597,
    "nome": "Tela REDMI 9",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 598,
    "nome": "Tela MI NOTE 9",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 599,
    "nome": "Tela MI NOTE 9 PRO/ MI NOTE9S",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 600,
    "nome": "Tela MI 9A/9C/10A/POCO C3/C31",
    "preco": "R$ 70,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 601,
    "nome": "Tela NOTE 10 4G / REDMI NOTE 10S (INCELL SEM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 602,
    "nome": "Tela NOTE 10 4G / REDMI NOTE 10S (INCELL COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 603,
    "nome": "Tela NOTE 10 4G/REDMI NOTE 10S (OLED SEM ARO)",
    "preco": "R$ 160,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 604,
    "nome": "Tela NOTE 10 4G (OLED COM ARO)",
    "preco": "R$ 180,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 605,
    "nome": "Tela NOTE 10 4G/REDMI NOTE 10S (PREMIUM COM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 606,
    "nome": "Tela NOTE 10 5G",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 607,
    "nome": "Tela REDMI 10C/12C",
    "preco": "R$ 90,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 608,
    "nome": "Tela NOTE 10 PRO/ NOTE 10 PRO MAX/ NOTE 11 PRO/ NOTE 12 PRO 4G/ POCO\n                X4 PRO 4G 5G (OLED SEM ARO)",
    "preco": "R$ 230,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 609,
    "nome": "Tela NOTE 11 4G/ 11S/ 12S/ M4 PRO 4G (INCELL SEM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 610,
    "nome": "Tela NOTE 11 4G (INCELL COM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 611,
    "nome": "Tela NOTE 11 4G/ 11S/12S/ M4 PRO 4G (OLED SEM ARO)",
    "preco": "R$ 160,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 612,
    "nome": "Tela NOTE 11 4G (OLED COM ARO)",
    "preco": "R$ 180,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 613,
    "nome": "Tela NOTE 11 4G/ 11S/ 12S (PREMIUM SEM ARO)",
    "preco": "R$ 250,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 614,
    "nome": "Tela NOTE 11 4G/ 11S/ 12S (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 615,
    "nome": "Tela NOTE 11 5G / M4 PRO 5G",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 616,
    "nome": "Tela MI 11 LITE (ORIGINAL COM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 617,
    "nome": "Tela MI 12 LITE (PREMIUM SEM ARO)",
    "preco": "R$ 350,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 618,
    "nome": "Tela MI 12 / 12X (COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 619,
    "nome": "Tela REDMI 12/ REDMI 13/ POCO M6 PRO 5G",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 620,
    "nome": "Tela MI NOTE 12 4G/5G/ POCO X5 (INCELL SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 621,
    "nome": "Tela MI NOTE 12 4G/5G/ POCO X5 (INCELL COM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 622,
    "nome": "Tela MI NOTE 12 4G/5G/ POCO X5 (OLED SEM ARO)",
    "preco": "R$ 200,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 623,
    "nome": "Tela MI NOTE 12 4G (OLED COM ARO)",
    "preco": "R$ 220,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 624,
    "nome": "Tela MI NOTE 12 4G (PREMIUM COM ARO)",
    "preco": "R$ 300,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 625,
    "nome": "Tela Mi 12X (PREMIUM COM ARO)",
    "preco": "R$ 700,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 626,
    "nome": "Tela REDMI 12C/ POCO C55/11A",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 627,
    "nome": "Tela REDMI 13",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 628,
    "nome": "Tela REDMI 13C/POCO C65",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 629,
    "nome": "Tela NOTE 13 5G (PREMIUM COM ARO)",
    "preco": "R$ 350,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 630,
    "nome": "Tela NOTE 13 PRO 5G (PREMIUM COM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 631,
    "nome": "Tela NOTE 13 PRO 5G/POCO X6/ x6pro (PREMIUM SEM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 632,
    "nome": "Tela REDMI 14C",
    "preco": "R$ 80,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 633,
    "nome": "Tela REDMI 14C (PREMIUM SEM ARO)",
    "preco": "R$ 120,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 634,
    "nome": "Tela REDMI 14C (PREMIUM COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 635,
    "nome": "Tela REDMI 15C/POCO C85(SEM ARO)",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 636,
    "nome": "Tela NOTE 14 4G (PREMIUM COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 637,
    "nome": "Tela NOTE 14 4G (ORIGINAL COM ARO)",
    "preco": "R$ 550,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 638,
    "nome": "Tela NOTE 14 5G (PREMIUM COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 639,
    "nome": "Tela NOTE 14 5G (ORIGINAL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 640,
    "nome": "Tela NOTE 14 PRO 4G (ORIGINAL COM ARO)",
    "preco": "R$ 500,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 641,
    "nome": "Tela NOTE 14 PRO 5G (PREMIUM COM ARO)",
    "preco": "R$ 450,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 642,
    "nome": "Tela NOTE 14 PRO PLUS (ORIGINAL COM ARO)",
    "preco": "R$ 400,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 643,
    "nome": "Tela 15C",
    "preco": "R$ 100,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 644,
    "nome": "Tela RED PAD PRO",
    "preco": "R$ 450,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 645,
    "nome": "Tela RED PAD SE 11",
    "preco": "R$ 350,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 646,
    "nome": "Tela RED PAD SE 8.7",
    "preco": "R$ 350,00",
    "descricao": "Telas Xiaomi & Poco",
    "categoria": "Telas Xiaomi & Poco"
  },
  {
    "id": 647,
    "nome": "Tela LG K8(K350) (C/ARO)",
    "preco": "R$ 50,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 648,
    "nome": "Tela LG K8 2017(X240) (C/ARO)",
    "preco": "R$ 50,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 649,
    "nome": "Tela LG K9 (C/ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 650,
    "nome": "Tela LG K10 2017 M250 (C/ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 651,
    "nome": "Tela LG K10 POWER M320 (C/ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 652,
    "nome": "Tela LG K11+ (COM ARO)",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 653,
    "nome": "Tela LG K12 K12+, K40 (SEM ARO)",
    "preco": "R$ 70,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 654,
    "nome": "Tela LG k12 K12+, K40 (C/ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 655,
    "nome": "Tela LG K22 K22+",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 656,
    "nome": "Tela LG K22+ (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 657,
    "nome": "Tela LG K22 K22+ (NACIONAL COM ARO)",
    "preco": "R$ 150,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 658,
    "nome": "Tela LG K40S",
    "preco": "R$ 70,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 659,
    "nome": "Tela LG K40S (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 660,
    "nome": "Tela LG K41S",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 661,
    "nome": "Tela LG K41S (COM ARO)",
    "preco": "R$ 90,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 662,
    "nome": "Tela LG K50S",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 663,
    "nome": "Tela LG K51",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 664,
    "nome": "Tela LG K51S",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 665,
    "nome": "Tela LG K42/K52/K62",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 666,
    "nome": "Tela LG K12 MAX, K50, K12 PRIME",
    "preco": "R$ 80,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 667,
    "nome": "Tela LG X STYLE K200",
    "preco": "R$ 50,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 668,
    "nome": "Tela LG X POWER K220",
    "preco": "R$ 50,00",
    "descricao": "Telas LG",
    "categoria": "Telas LG"
  },
  {
    "id": 669,
    "nome": "Tampa Traseira iPhone 8G",
    "preco": "R$ 20,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 670,
    "nome": "Tampa Traseira iPhone 8 Plus",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 671,
    "nome": "Tampa Traseira iPhone X",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 672,
    "nome": "Tampa Traseira iPhone XS",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 673,
    "nome": "Tampa Traseira iPhone XS Max",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 674,
    "nome": "Tampa Traseira iPhone XR",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 675,
    "nome": "Tampa Traseira iPhone SE 2020",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 676,
    "nome": "Tampa Traseira iPhone SE 2022",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 677,
    "nome": "Tampa Traseira iPhone 11",
    "preco": "R$ 30,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 678,
    "nome": "Tampa Traseira iPhone 11 Pro",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 679,
    "nome": "Tampa Traseira iPhone 11 Pro Max",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 680,
    "nome": "Tampa Traseira iPhone 12 Mini",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 681,
    "nome": "Tampa Traseira iPhone 12",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 682,
    "nome": "Tampa Traseira iPhone 12 Pro",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 683,
    "nome": "Tampa Traseira iPhone 12 Pro Max",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 684,
    "nome": "Tampa Traseira iPhone 13 Mini",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 685,
    "nome": "Tampa Traseira iPhone 13",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 686,
    "nome": "Tampa Traseira iPhone 13 Pro",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 687,
    "nome": "Tampa Traseira iPhone 13 Pro Max",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 688,
    "nome": "Tampa Traseira iPhone 14",
    "preco": "R$ 40,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 689,
    "nome": "Tampa Traseira iPhone 14 Plus",
    "preco": "R$ 50,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 690,
    "nome": "Tampa Traseira iPhone 14 Pro",
    "preco": "R$ 50,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 691,
    "nome": "Tampa Traseira iPhone 14 Pro Max",
    "preco": "R$ 50,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 692,
    "nome": "Tampa Traseira iPhone 15",
    "preco": "R$ 50,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 693,
    "nome": "Tampa Traseira iPhone 15 Pro",
    "preco": "R$ 60,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 694,
    "nome": "Tampa Traseira iPhone 15 Pro Max",
    "preco": "R$ 60,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 695,
    "nome": "Tampa Traseira iPhone 15 Plus",
    "preco": "R$ 110,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 696,
    "nome": "Tampa Traseira iPhone 16E",
    "preco": "R$ 120,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 697,
    "nome": "Tampa Traseira iPhone 16",
    "preco": "R$ 130,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 698,
    "nome": "Tampa Traseira iPhone 16 Plus",
    "preco": "R$ 130,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 699,
    "nome": "Tampa Traseira iPhone 16 Pro",
    "preco": "R$ 130,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 700,
    "nome": "Tampa Traseira iPhone 16 Pro Max",
    "preco": "R$ 130,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 701,
    "nome": "Tampa Traseira iPhone 17 Pro",
    "preco": "R$ 150,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 702,
    "nome": "Tampa Traseira iPhone 17 Pro Max",
    "preco": "R$ 150,00",
    "descricao": "Tampas iPhone",
    "categoria": "Tampas iPhone"
  },
  {
    "id": 703,
    "nome": "Bateria iPhone 6G",
    "preco": "R$ 60,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 704,
    "nome": "Bateria iPhone 6 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 705,
    "nome": "Bateria iPhone 6S",
    "preco": "R$ 60,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 706,
    "nome": "Bateria iPhone 6S PLUS",
    "preco": "R$ 70,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 707,
    "nome": "Bateria iPhone 7G",
    "preco": "R$ 70,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 708,
    "nome": "Bateria iPhone 7 PLUS",
    "preco": "R$ 80,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 709,
    "nome": "Bateria iPhone 8G",
    "preco": "R$ 80,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 710,
    "nome": "Bateria iPhone 8 PLUS",
    "preco": "R$ 80,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 711,
    "nome": "Bateria iPhone X",
    "preco": "R$ 100,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 712,
    "nome": "Bateria iPhone XS",
    "preco": "R$ 100,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 713,
    "nome": "Bateria iPhone XS MAX",
    "preco": "R$ 120,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 714,
    "nome": "Bateria iPhone XR",
    "preco": "R$ 100,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 715,
    "nome": "Bateria iPhone 11",
    "preco": "R$ 100,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 716,
    "nome": "Bateria iPhone 11 PRO",
    "preco": "R$ 130,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 717,
    "nome": "Bateria iPhone 11 PRO MAX",
    "preco": "R$ 130,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 718,
    "nome": "Bateria iPhone SE 2",
    "preco": "R$ 80,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 719,
    "nome": "Bateria iPhone SE 3",
    "preco": "R$ 150,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 720,
    "nome": "Bateria iPhone 12 MINI",
    "preco": "R$ 110,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 721,
    "nome": "Bateria iPhone 12 / 12 PRO",
    "preco": "R$ 120,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 722,
    "nome": "Bateria iPhone 12 PRO MAX",
    "preco": "R$ 150,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 723,
    "nome": "Bateria iPhone 13 MINI",
    "preco": "R$ 150,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 724,
    "nome": "Bateria iPhone 13",
    "preco": "R$ 130,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 725,
    "nome": "Bateria iPhone 13 PRO",
    "preco": "R$ 160,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 726,
    "nome": "Bateria iPhone 13 PRO MAX",
    "preco": "R$ 160,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 727,
    "nome": "Bateria iPhone 14",
    "preco": "R$ 160,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 728,
    "nome": "Bateria iPhone 14 PLUS",
    "preco": "R$ 160,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 729,
    "nome": "Bateria iPhone 14 PRO",
    "preco": "R$ 170,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 730,
    "nome": "Bateria iPhone 14 PRO MAX",
    "preco": "R$ 180,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 731,
    "nome": "Bateria iPhone 15",
    "preco": "R$ 200,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 732,
    "nome": "Bateria iPhone 15 PRO",
    "preco": "R$ 220,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 733,
    "nome": "Bateria iPhone 15 PRO MAX",
    "preco": "R$ 230,00",
    "descricao": "Baterias iPhone",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 734,
    "nome": "Iphone 12 mini",
    "preco": "R$ 150,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 735,
    "nome": "Iphone 6S",
    "preco": "R$ 70,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 736,
    "nome": "Iphone 7 PLUS",
    "preco": "R$ 70,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 737,
    "nome": "Iphone 8 PLUS",
    "preco": "R$ 80,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 738,
    "nome": "Iphone X",
    "preco": "R$ 100,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 739,
    "nome": "Iphone XR",
    "preco": "R$ 100,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 740,
    "nome": "Iphone 11",
    "preco": "R$ 100,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 741,
    "nome": "Iphone 11 PRO",
    "preco": "R$ 120,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 742,
    "nome": "Iphone 11 PRO MAX",
    "preco": "R$ 120,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 743,
    "nome": "Iphone 12/ 12PRO",
    "preco": "R$ 120,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 744,
    "nome": "Iphone 12 PRO MAX",
    "preco": "R$ 130,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 745,
    "nome": "Iphone 13",
    "preco": "R$ 120,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 746,
    "nome": "Iphone 13 PRO",
    "preco": "R$ 150,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 747,
    "nome": "Iphone 13 PRO MAX",
    "preco": "R$ 150,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 748,
    "nome": "Iphone 14",
    "preco": "R$ 130,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 749,
    "nome": "Iphone 14 PRO",
    "preco": "R$ 170,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 750,
    "nome": "Iphone 14 PRO MAX",
    "preco": "R$ 170,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 751,
    "nome": "Iphone 15 PRO",
    "preco": "R$ 200,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 752,
    "nome": "Iphone 15 PRO MAX",
    "preco": "R$ 200,00",
    "descricao": "Bat KBS para Iphone Preço",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 753,
    "nome": "Iphone XR",
    "preco": "R$ 70,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 754,
    "nome": "Iphone 11",
    "preco": "R$ 70,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 755,
    "nome": "Iphone 11 PRO",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 756,
    "nome": "Iphone 11 PRO MAX",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 757,
    "nome": "Iphone 12 MINI",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 758,
    "nome": "Iphone 12 / 12 PRO",
    "preco": "R$ 90,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 759,
    "nome": "Iphone 12 PRO MAX",
    "preco": "R$ 120,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 760,
    "nome": "Iphone 13 MINI",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 761,
    "nome": "Iphone 13",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 762,
    "nome": "Iphone 13 PRO",
    "preco": "R$ 120,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 763,
    "nome": "Iphone 13 PRO MAX",
    "preco": "R$ 130,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 764,
    "nome": "Iphone 14",
    "preco": "R$ 100,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 765,
    "nome": "Iphone 14 PLUS",
    "preco": "R$ 120,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 766,
    "nome": "Iphone 14 PRO",
    "preco": "R$ 130,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 767,
    "nome": "Iphone 14 PRO MAX",
    "preco": "R$ 140,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 768,
    "nome": "Iphone 15",
    "preco": "R$ 140,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 769,
    "nome": "Iphone 15 PRO",
    "preco": "R$ 150,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 770,
    "nome": "Iphone 15 PRO MAX",
    "preco": "R$ 150,00",
    "descricao": "BATERIA SEM FLEX 🔋",
    "categoria": "Baterias iPhone"
  },
  {
    "id": 771,
    "nome": "Bateria Iphone 12 mini",
    "preco": "R$ 150,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 772,
    "nome": "Bateria Iphone 12 / 12PRO",
    "preco": "R$ 150,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 773,
    "nome": "Bateria Iphone 12 PRO MAX",
    "preco": "R$ 180,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 774,
    "nome": "Bateria Iphone 13 mini",
    "preco": "R$ 150,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 775,
    "nome": "Bateria Iphone 13",
    "preco": "R$ 160,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 776,
    "nome": "Bateria Iphone 13 PRO",
    "preco": "R$ 180,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 777,
    "nome": "Bateria Iphone 13 PRO MAX",
    "preco": "R$ 200,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 778,
    "nome": "Bateria Iphone 14",
    "preco": "R$ 190,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 779,
    "nome": "Bateria Iphone 14 PRO",
    "preco": "R$ 200,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 780,
    "nome": "Bateria Iphone 14 PRO MAX",
    "preco": "R$ 220,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 781,
    "nome": "Bateria Iphone 15",
    "preco": "R$ 220,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 782,
    "nome": "Bateria Iphone 15 PRO",
    "preco": "R$ 230,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 783,
    "nome": "Bateria Iphone 15 PRO MAX",
    "preco": "R$ 250,00",
    "descricao": "Bat Genuina Apple Preço",
    "categoria": "Baterias Android"
  },
  {
    "id": 784,
    "nome": "Bateria iPad Mini",
    "preco": "R$ 120,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 785,
    "nome": "Bateria iPad Mini 4",
    "preco": "R$ 150,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 786,
    "nome": "Bateria iPad Mini 5",
    "preco": "R$ 150,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 787,
    "nome": "Bateria iPad 2",
    "preco": "R$ 100,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 788,
    "nome": "Bateria iPad Air 1 / iPad 5/7/8/9",
    "preco": "R$ 150,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 789,
    "nome": "Bateria iPad Air 2 / iPad 6",
    "preco": "R$ 150,00",
    "descricao": "Modelo Preço",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 790,
    "nome": "Bateria T290/T295/T220/T225",
    "preco": "R$ 80,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 791,
    "nome": "Bateria T500/T505",
    "preco": "R$ 130,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 792,
    "nome": "Bateria T510/T515/T517",
    "preco": "R$ 130,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 793,
    "nome": "Bateria T530/T531",
    "preco": "R$ 120,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 794,
    "nome": "Bateria T560/T561",
    "preco": "R$ 100,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 795,
    "nome": "Bateria P610/P613/P615/P617 P619/T720/T725/T860/T865",
    "preco": "R$ 130,00",
    "descricao": "BATERIA Tablet Samsung",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 796,
    "nome": "Bateria iPad Mini",
    "preco": "R$ 120,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 797,
    "nome": "Bateria iPad Mini 4",
    "preco": "R$ 150,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 798,
    "nome": "Bateria iPad Mini 5",
    "preco": "R$ 150,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 799,
    "nome": "Bateria iPad 2",
    "preco": "R$ 100,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 800,
    "nome": "Bateria iPad Air 1 / iPad 5/7/8/9",
    "preco": "R$ 150,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 801,
    "nome": "Bateria iPad Air 2 / iPad 6",
    "preco": "R$ 150,00",
    "descricao": "BATERIA iPad (Apple)",
    "categoria": "Baterias Tablet"
  },
  {
    "id": 802,
    "nome": "Iphone Se",
    "preco": "R$ 20,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 803,
    "nome": "Iphone 6G",
    "preco": "R$ 20,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 804,
    "nome": "Iphone 6 PLUS",
    "preco": "R$ 20,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 805,
    "nome": "Iphone 6S PLUS",
    "preco": "R$ 20,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 806,
    "nome": "Iphone 7G",
    "preco": "R$ 30,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 807,
    "nome": "Iphone 7 PLUS",
    "preco": "R$ 40,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 808,
    "nome": "Iphone 8G",
    "preco": "R$ 40,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 809,
    "nome": "Iphone 8 PLUS",
    "preco": "R$ 50,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 810,
    "nome": "Iphone X",
    "preco": "R$ 50,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 811,
    "nome": "Iphone XS",
    "preco": "R$ 50,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 812,
    "nome": "Iphone XS MAX",
    "preco": "R$ 50,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 813,
    "nome": "Iphone XR",
    "preco": "R$ 60,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 814,
    "nome": "Iphone 11",
    "preco": "R$ 70,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 815,
    "nome": "Iphone 11 PRO (COM CI)",
    "preco": "R$ 180,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 816,
    "nome": "Iphone 11 PRO MAX (COM CI)",
    "preco": "R$ 180,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 817,
    "nome": "Iphone 12 / 12 PRO",
    "preco": "R$ 90,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 818,
    "nome": "Iphone 12 PRO MAX",
    "preco": "R$ 100,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 819,
    "nome": "Iphone 13",
    "preco": "R$ 100,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 820,
    "nome": "Iphone 13 PRO",
    "preco": "R$ 120,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 821,
    "nome": "Iphone 13 PRO MAX",
    "preco": "R$ 130,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 822,
    "nome": "Iphone 14",
    "preco": "R$ 120,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 823,
    "nome": "Iphone 14 PRO",
    "preco": "R$ 180,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 824,
    "nome": "Iphone 14 PRO MAX",
    "preco": "R$ 180,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 825,
    "nome": "Iphone 15",
    "preco": "R$ 200,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 826,
    "nome": "Iphone 15 PRO",
    "preco": "R$ 220,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 827,
    "nome": "Iphone 15 PRO MAX",
    "preco": "R$ 300,00",
    "descricao": "Modelo (DOCK PREMIUM) Preço",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 828,
    "nome": "Conector de Carga iPhone 8 PLUS",
    "preco": "R$ 60,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 829,
    "nome": "Conector de Carga iPhone X",
    "preco": "R$ 60,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 830,
    "nome": "Conector de Carga iPhone XR",
    "preco": "R$ 70,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 831,
    "nome": "Conector de Carga iPhone 11",
    "preco": "R$ 80,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 832,
    "nome": "Conector de Carga iPhone 11 PRO MAX",
    "preco": "R$ 220,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 833,
    "nome": "Conector de Carga iPhone 12/ 12 PRO",
    "preco": "R$ 100,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 834,
    "nome": "Conector de Carga iPhone 12 PRO MAX",
    "preco": "R$ 140,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 835,
    "nome": "Conector de Carga iPhone 13",
    "preco": "R$ 120,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 836,
    "nome": "Conector de Carga iPhone 13 PRO MAX",
    "preco": "R$ 140,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  },
  {
    "id": 837,
    "nome": "Conector de Carga iPhone 14 PRO MAX",
    "preco": "R$ 200,00",
    "descricao": "Conectores de Carga",
    "categoria": "Conectores de Carga"
  }
];
