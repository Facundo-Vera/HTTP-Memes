const httpcodigoMemes = [
  {
    id: 1,
    codigo: 100,
    description: "El servidor dice: seguí, todavía no pasó nada.",
    image:"/memes/100.webp",
  },
  {
    id: 2,
    codigo: 101,
    description: "Cambiando de protocolo, ahora todo es distinto.",
    image:"/memes/101.webp"
  },
  {
    id: 3,
    codigo: 102,
    description: "Procesando… el backend está pensando.",
    image:"/memes/102.webp",
  },

  {
    id: 4,
    codigo: 200,
    description: "Todo salió perfecto ",
    image: "/memes/200.webp",
  },
  {
    id: 5,
    codigo: 201,
    description: "Se creó algo nuevo y funciona.",
    image: "/memes/201.webp",
  },
  {
    id: 6,
    codigo: 202,
    description: "Aceptado… pero todavía no terminó.",
    image: "/memes/202.webp",
  },
  {
    id: 7,
    codigo: 204,
    description: "No hay contenido, pero todo bien.",
    image: "/memes/204.webp",
  },
  {
    id: 8,
    codigo: 206,
    description: "Te mandé solo una parte.",
    image: "/memes/206.webp",
  },

  {
    id: 9,
    codigo: 300,
    description: "Elegí un camino… cualquiera.",
    image: "/memes/300.webp",
  },
  {
    id: 10,
    codigo: 301,
    description: "Me mudé, no vuelvo más.",
    image: "/memes/301.webp",
  },
    {
      id: 11,
      codigo: 302,
      description: "Está, pero no acá, es temporal.",
      image: "/memes/302.webp",
    },
    {
      id: 12,
      codigo: 303,
      description: "Mirá en otro lado.",
      image: "/memes/303.webp",
    },
    {
      id: 13,
      codigo: 304,
      description: "No cambió nada desde la última vez.",
      image: "/memes/304.webp",
    },
    {
      id: 15,
      codigo: 307,
      description: "Redirección temporal, tranqui.",
      image: "/memes/307.webp",
    },
    {
      id: 16,
      codigo: 308,
      description: "Redirección permanente, en serio.",
      image: "/memes/308.webp",
    },

    {
      id: 17,
      codigo: 400,
      description: "El pedido está mal, algo hiciste.",
      image: "/memes/400.webp",
    },
    {
      id: 18,
      codigo: 401,
      description: "¿Quién sos? Logueate primero.",
      image: "/memes/401.webp",
    },
    {
      id: 19,
      codigo: 402,
      description: "Pagá y hablamos.",
      image: "/memes/402.webp",
    },
    {
      id: 20,
      codigo: 403,
      description: "No tenés permiso ",
      image: "https://imgs.search.brave.com/ri5z07De6-fAivX29BGSFTcr5ud1uvsbNI3EXHVBKf4/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9hLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vY3JG/RTFHVDd6NkY2SEN1/d09oN3NhNkZtZ3Ra/RzlYbFluU1BScWdy/eHVWNC5qcGc"
    },
    {
      id: 21,
      codigo: 404,
      description: "Esto no existe.",
      image: "https://imgs.search.brave.com/MbSxjb-A4vKJ3hcrOfxcWgFqoJA4Q-ffMcRZdSNJuN4/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vd1dB/YTRnWmk2bUYxYXNp/TnQzSFRWYnZybm1O/WGstQlN5OXM2NEhZ/TDVZby5qcGc"
    },
    {
      id: 22,
      codigo: 405,
      description: "Ese método no va.",
      image: "https://imgs.search.brave.com/sXm7eu9gQuxXWPh_JEgzu0EiUYrZJRTOcOPoTCXyHrQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hlcmUtdGhlLWZ1/Y2stZGlkLXRoZS1h/cHBsZS1tZW1lLWNv/bWUtZnJvbS12MC1u/bGZoejhtajB5MmUx/LmpwZWc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9Yzc5MTkyNWFm/MTRhMDIzNTRkNDll/Yjc5MGU1NGEyOTJh/ZmIzODg1Yg"
    },
    {
      id: 23,
      codigo: 406,
      description: "No es aceptable.",
      image: "https://imgs.search.brave.com/4FKHwN28KvpKXdFOo-2uPzJBUD7YkeqDCL1cM6NWzUw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9i/LmRpYXJpb2RlbHlh/cXVpLm14L2ltYWdl/cy8yMDI1LzAyLzI3/L3BlcmRvbmVubWUt/dG9kb3Mtbm8tYWNl/cHRvLWxhLXZlcmRh/ZGVyYS1oaXN0b3Jp/YS1kZXRyYXMtZGUt/bGEtcGFyb2RpYS1k/NzdiYmVkYy1mb2N1/cy0wLTAtMTQ3OS04/Mjgud2VicA"
    },
    {
      id: 24,
      codigo: 408,
      description: "Tardaste demasiado.",
      image: "https://imgs.search.brave.com/kqot3CRJz03T_BOb7Sd1F-Qnlt9l5iif0M8KgKY261U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENzI3/LzY2Y2VkYjQ3M2Q3/YTkuanBlZw"
    },
    {
      id: 25,
      codigo: 409,
      description: "Conflicto detectado.",
      image: "https://imgs.search.brave.com/ycyl4Bj14JbhtUjxTAEDQGeiwEgrdqASYM-zQISByPI/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vWTkx/QjVfZW9yUWg0RzM5/WFVuOXFxdF9GcC1N/bG4xeUpQbVNnRllp/MjduVS5qcGc"
    },
    {
      id: 26,
      codigo: 410,
      description: "Se fue y no vuelve.",
      image: "https://imgs.search.brave.com/DaY5hzVR4CoUX5p8HwqR7a6stiv96tesnPqX8snm4IY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2llbXByZS1xdWUt/bWUtcGFzYS1lcy1s/by1taXNtby1xdWUt/ZW4tZWwtbWVtZS1h/LXVzdGVkZXMtdjAt/MDAyOTh0bDg1dnFk/MS5qcGVnP2F1dG89/d2VicCZzPWNkNzJk/M2I5NjkwZGNkOTQ0/YzczYTExOGY4ODNj/NTNjMGIxMjQ4MTM"
    },
    {
      id: 27,
      codigo: 411,
      description: "Falta el largo del contenido.",
      image: "https://i.imgflip.com/4/936fbe.jpg"
    },
    {
      id: 28,
      codigo: 412,
      description: "La condición falló.",
      image: "https://i.imgflip.com/6yzufi.jpg"
    },
    {
      id: 29,
      codigo: 413,
      description: "Demasiado pesado.",
      image: "https://imgs.search.brave.com/DQCUUYdsI418QGYakp8T1PZSXfWyFgi-lPZ_iYgUZ5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L20vRGpFRGs3UV9F/cWNBQUFBZC95ZS1k/ZWphLWRlLXNlci10/YW4tcGVzYW8uZ2lm.gif"
    },
    {
      id: 30,
      codigo: 414,
      description: "URL larguísima.",
      image: "https://imgs.search.brave.com/8Wxk2RgZciA3Hr420qR8tyLEGzxRHj2_OW4w7xg9wcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVtZS1hcnNlbmFs/LmNvbS9tZW1lcy8w/ZmYzZTRhNTllMGUz/OGE0ZjMwYjE3MmVj/YjM4MTE2NS5qcGc"
    },
    {
      id: 31,
      codigo: 415,
      description: "Formato no soportado.",
      image: "https://imgs.search.brave.com/ENbV5JhFqkFzRCSK9kJ3cIZM9eVF4WgNnam9iwbg2oQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzExLzhj/L2FiLzExOGNhYmM4/OGNkOTJjMDc0ZmIz/ZmI0ZGYwYjg0MzM0/LmpwZw"
    },
    {
      id: 32,
      codigo: 416,
      description: "Ese rango no existe.",
      image: "https://imgs.search.brave.com/ASGlfF0iaa-NRoPk2ajFwnPsTXl72yd0rcKRzafB5RE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRmL2Fk/LzdkLzRmYWQ3ZDYy/YzI5M2IyNDMwZDI2/YWYwMzQwNzgzNWQx/LmpwZw"
    },
    {
      id: 33,
      codigo: 417,
      description: "La expectativa falló.",
      image: "https://imgs.search.brave.com/3fZj1vT3RhOI2CH96JpI3zgYCF-fjM4uOKg76Lod3sA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/N3NnNTB0LmpwZw"
    },
    {
      id: 34,
      codigo: 418,
      description: "Soy una tetera ",
      image: "https://i.imgflip.com/4/5w3mvi.jpg"
    },
    {
      id: 35,
      codigo: 421,
      description: "Pedido mal dirigido.",
      image: "https://imgs.search.brave.com/mHl-gNqMOBy7Q5r-JApwvIxgTC0KVywILHGVcaTZK-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L20vQkdacVJmT19Y/UE1BQUFBZC9wcm9i/bGVtYS5naWY.gif"
    },
    {
      id: 36,
      codigo: 422,
      description: "No se puede procesar.",
      image: "https://imgs.search.brave.com/yKshoAK5IkR2ZjwlFikIf1JJInGVcDyN6ZIDPS0HruY/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vT0Zu/TlBnbEVFdDJ5Qm5D/QndXYlpWbUlTYVRn/REdqaUlHb3c5amVZ/WGhKUS5qcGc"
    },
    {
      id: 37,
      codigo: 423,
      description: "Está bloqueado 🔒",
      image: "https://imgs.search.brave.com/6A_BO-wf4sFAwGkO1ci_WjV5w4loboTsQm9faT3Oi44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVtZWNyZWF0b3Iu/b3JnL3N0YXRpYy9p/bWFnZXMvbWVtZXMv/NDg5MzI1Mi5qcGc"
    },
    {
      id: 38,
      codigo: 424,
      description: "Dependencia fallida.",
      image: "https://i.imgflip.com/4/5fx7tf.jpg"
    },
    {
      id: 39,
      codigo: 425,
      description: "Demasiado pronto.",
      image: "https://i.imgflip.com/17jilx.jpg"
    },
    {
      id: 40,
      codigo: 426,
      description: "Actualizá primero.",
      image: "https://imgs.search.brave.com/PX0KNqBo4APer68SjQGX_2P8DAgKA2kzC_cw6xdXrQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMzLm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVEMTI2/LzVhYWQ5OWMzNTY3/NTcuanBlZw"
    },
    {
      id: 41,
      codigo: 429,
      description: "Pará un poco ",
      image: "https://i.imgflip.com/4/a3yail.jpg"
    },
    {
      id: 42,
      codigo: 431,
      description: "Headers enormes.",
      image: "https://i.imgflip.com/4/8y2tls.jpg"
    },
    {
      id: 43,
      codigo: 451,
      description: "Bloqueado por ley ",
      image: "https://i.imgflip.com/4/5rjw75.jpg"
    },

    {
      id: 44,
      codigo: 500,
      description: "Explotó el servidor ",
      image: "https://imgs.search.brave.com/q-mfj3BS82EcqJb_7vt62SwfvLDVuPqDjMDA3FRAZ8c/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9hLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vX2Yx/WTlKakgtSW5zaUVK/WjlhSHVTOWU4NFh1/ekMzU1llQ1BjRVZD/cGpTOC5qcGc"
    },
    {
      id: 45,
      codigo: 501,
      description: "Todavía no está hecho.",
      image: "https://imgs.search.brave.com/QkIZO18urh_tOqoq1hIPOO3fQzenhzKcx5iQrHtagug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/Njk5MjZhLmpwZw"
    },
    {
      id: 46,
      codigo: 502,
      description: "El gateway falló.",
      image: "https://i.imgflip.com/4/k2uze.jpg"
    },
    {
      id: 47,
      codigo: 503,
      description: "No disponible ahora.",
      image: "https://www.rosario3.com/__export/1585949161911/sites/rosario3/img/2020/04/03/mmeme.jpg_1756841869.jpg"
    },
    {
      id: 48,
      codigo: 504,
      description: "Timeout total.",
      image: "https://i.imgflip.com/4/a2ssuc.jpg"
    },
    {
      id: 49,
      codigo: 506,
      description: "Negociación rara.",
      image: "https://i.imgflip.com/4/2yn2xy.jpg"
    },
    {
      id: 50,
      codigo: 507,
      description: "Sin espacio.",
      image: "https://imgs.search.brave.com/IZzLVWF9WieKSh5wrU9fYty2HR2hV-MuUi_7rjW7xKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENTY3/LzYyMGFmOTY5ODkz/YzUuanBlZw"
    },
    {
      id: 51,
      codigo: 508,
      description: "Loop infinito ",
      image: "https://imgs.search.brave.com/KNXwXXghxwt_6jyUVdtLFpfv-1ZMy1JuHxc7TF8I5Yo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/MWtrZTJ0LmpwZw"
    },
    {
      id: 52,
      codigo: 510,
      description: "Falta extender.",
      image: "https://i.imgflip.com/4/9ukbtk.jpg"
    },
    {
      id: 53,
      codigo: 511,
      description: "Autenticación de red requerida.",
      image: "https://i.imgflip.com/4/hd3e8.jpg"
    }
];

export default httpcodigoMemes;
