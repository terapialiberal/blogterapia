//js/database.js
const articlesData = [
    {
        id: "trumpcbdc",
        title: "TRUMP ES el Caballo de Troya Tecnocrático!",
        date: "24/07/2025",
        description: "La batalla por el control ha comenzado. Análisis profundo sobre la 'Big Beautiful Bill' y la implementación encubierta de CBDCs y el sistema de vigilancia AI.GOV.",
        video_id: "UEgEIzZ9dYo",
        isFeatured: true // Marcar como 'true' para el último análisis
    },
    {
        id: "elgrantablero",
        title: "El Gran Tablero Geopolítico - Brzezinski marca el Rumbo Multipolar",
        date: "05/07/2025",
        description: "Análisis profundo de la estrategia geopolítica de Zbigniew Brzezinski y su influencia en el orden mundial actual.",
        video_id: "QTDXeE8bey0",
        isFeatured: false
    },
    {
        id: "29062025-nuevocomplejomilitar",
        title: "Los Ganadores del Nuevo Complejo Militar TECNOLÓGICO",
        date: "29/06/2025",
        description: "El entramado entre Silicon Valley, Wall Street y el complejo militar global donde la guerra se convierte en negocio.",
        video_id: "k3mX98Xo_qc",
        isFeatured: false
    },
    {
        id: "140625-SEGUNDAGLOBALIZACION",
        title: "El Segundo Borrador del Orden Mundial",
        date: "25/06/2025",
        description: "Rediseño del orden financiero global, geopolítica, CBDC y nueva arquitectura del poder monetario.",
        video_id: "zYV-hGwE-RQ",
        isFeatured: false
    }
];

// Función para obtener la URL del archivo HTML del artículo
function getArticleUrl(articleId) {
    return `articles/${articleId}.html`;
}