const baseDeDatosAnalisis = [
    {
        fecha: "05/07/2025 ANÁLISIS PREVIO",
        titulo: "El Gran Tablero Geopolítico - Brzezinski marca el Rumbo Multipolar",
        descripcion: "Análisis profundo de la estrategia geopolítica de Zbigniew Brzezinski y su influencia en el orden mundial actual. Desde las ideas de \"El Gran Tablero\" hasta la formación de la coalición China-Rusia-Irán.",
        url_html: "posts/el-gran-tablero.html",
        video_id: "QTDXeE8bey0"
    },
    {
        fecha: "29/06/2025 ANÁLISIS PREVIO",
        titulo: "Los Ganadores del Nuevo Complejo Militar TECNOLÓGICO",
        descripcion: "El entramado entre Silicon Valley, Wall Street y el complejo militar global. Análisis del sistema militar-industrial-tecnológico donde BlackRock, Palantir y las élites financieras convierten la guerra en negocio.",
        url_html: "posts/nuevo-complejo-militar.html",
        video_id: "k3mX98Xo_qc"
    },
    {
        fecha: "25/06/2025 ANÁLISIS PREVIO",
        titulo: "El Segundo Borrador del Orden Mundial",
        descripcion: "Rediseño del orden financiero global, geopolítica, CBDC y nueva arquitectura del poder monetario. Análisis completo de la agenda oculta tras la crisis en Medio Oriente.",
        url_html: "posts/segundo-borrador.html",
        video_id: "zYV-hGwE-RQ"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid-analisis');
    if (!grid) return;

    const tarjetasHTML = baseDeDatosAnalisis.map(analisis => {
        const urlVideo = `https://www.youtube.com/watch?v=${analisis.video_id}`;
        return `
        <div class="section-bg rounded-2xl p-6 flex flex-col h-full">
            <div class="video-thumbnail mb-4" onclick="window.open('${urlVideo}', '_blank')">
                <img src="https://img.youtube.com/vi/${analisis.video_id}/maxresdefault.jpg" alt="${analisis.titulo}">
                <div class="play-button"><i class="fas fa-play"></i></div>
            </div>
            <div class="flex-grow flex flex-col">
                <div class="date-badge mb-3">${analisis.fecha}</div>
                <h4 class="text-xl font-bold mb-3 gold-text">${analisis.titulo}</h4>
                <p class="text-gray-300 mb-4 flex-grow">${analisis.descripcion}</p>
                <div class="flex gap-3 mt-auto">
                    <a href="${analisis.url_html}" class="btn-gradient text-sm">Ver Análisis</a>
                    <a href="${urlVideo}" target="_blank" class="btn-gradient text-sm">Ver Video</a>
                </div>
            </div>
        </div>`;
    }).join('');

    grid.innerHTML = tarjetasHTML;
});
