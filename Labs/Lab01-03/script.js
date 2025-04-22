function mostrarResultado(html) {
    document.getElementById("lab04-resultados").innerHTML = html;
}

// Problema 1
function problema1() {
    const n = parseInt(prompt("Introduce un número:"));
    if (isNaN(n) || n < 1) {
        alert("Por favor ingresa un número válido mayor que 0.");
        return;
    }

    let tabla = "<table border='1' style='margin: 1rem auto;'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
    for (let i = 1; i <= n; i++) {
        tabla += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
    }
    tabla += "</table>";

    mostrarResultado(tabla);
}

// Problema 2
function problema2() {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const start = performance.now();
    const respuesta = parseInt(prompt(`¿Cuánto es ${a} + ${b}?`));
    const end = performance.now();
    const tiempo = ((end - start) / 1000).toFixed(2);
    const correcta = respuesta === a + b;
    const mensaje = correcta ? "¡Correcto!" : `Incorrecto. La respuesta era ${a + b}`;
    mostrarResultado(`<p>${mensaje}. Tiempo: ${tiempo} segundos.</p>`);
}

// Problema 3
function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;
    for (let num of arr) {
        if (num < 0) negativos++;
        else if (num === 0) ceros++;
        else positivos++;
    }
    return [negativos, ceros, positivos];
}

function testProblema3() {
    console.assert(JSON.stringify(contador([-1, 0, 1, -2, 3, 0])) === JSON.stringify([2, 2, 2]), "Error en testProblema3");
    mostrarResultado(`<p>Tests del problema 3 completados. Ver consola para detalles.</p>`);
}

// Problema 4
function promedios(matrix) {
    return matrix.map(row => row.reduce((a, b) => a + b, 0) / row.length);
}

function testProblema4() {
    console.assert(JSON.stringify(promedios([[1, 2, 3], [4, 5, 6]])) === JSON.stringify([2, 5]), "Error en testProblema4");
    mostrarResultado(`<p>Tests del problema 4 completados. Ver consola para detalles.</p>`);
}

// Problema 5
function inverso(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

function testProblema5() {
    console.assert(inverso(12345) === 54321, "Error en testProblema5");
    console.assert(inverso(100) === 1, "Error en testProblema5 con ceros");
    mostrarResultado(`<p>Tests del problema 5 completados. Ver consola para detalles.</p>`);
}
