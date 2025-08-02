function cerrarSesion() {
    // Aquí puedes simular un cierre de sesión ocultando el menú principal y mostrando un mensaje
    document.getElementById('main-menu').style.display = 'none'; // Ocultar el menú
    alert("Has cerrado sesión. ¡Hasta pronto!"); // Mensaje de despedida
    // Aquí puedes redirigir a otra página si es necesario, como:
    window.location.href = 'D:/prueba/pag_inicio_de_sesion.html'; 
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
}

function displayMaterias() {
    const semestre = document.getElementById("semestre-select").value;
    const grupo = document.getElementById("grupo-select")?.value || null;
    const info = document.getElementById("materias-info");
    const materiasPorSemestre = {
        "1": {
            "a": ["Pensamiento Matemático I", "Ciencias Sociales", "Cultura Digital I","La Materia y sus Interacciones","Inglés I","Humanidades I","Practica y Colaboración ciudadana","Lengua y Comunicación","Tutoria"],
            "b": ["Pensamiento Matemático I", "Inglés I", "Humanidades I","Lengua y Comunicación","La Materia y sus Interacciones","Cultura Digital I","Ciencias Sociales","Practica y Colaboración ciudadana"],
            "c": ["Inglés I", "Lengua y Comunicación", "Humanidades I","La Materia y sus Interacciones","Pensamiento Matematico I","Cultura Digital I","Ciencias Sociales I","Practica y Colaboración ciudadana"],
            "d": ["Pensamiento Matemático I", "Ciencias Sociales", "Cultura Digital I","La Materia y sus Interacciones","Inglés I","Humanidades I","Practica y Colaboración ciudadana","Lengua y Comunicación","Tutoria"],
            "e": ["Pensamiento Matemático I", "Ciencias Sociales", "Cultura Digital I","La Materia y sus Interacciones","Inglés I","Humanidades I","Practica y Colaboración ciudadana","Lengua y Comunicación","Tutoria"],
        },
        "2": {
            "a": ["Pensmiento Matemático II", "Inglés II", "Cultura Digital II", "Diseña Software de Sistemas Informáticos", "Formación Socioemocional II", "Ciencias Sociales II", "Implementa Software de Sistemas de Información", "Codifica Software de Sistemas de Información", "Tutoria","La conservación de la Energía y su Interacción","Lengua y Comunicación II", ""],
            "b": ["Cultura Digital II", "Ensambla e Instala Software", "La conservación de la Energía y su Interacción", "Instala y Configura Software", "Lengua y comunicacion II","Pensmiento Matemático II", "Inglés II", "Ciencias Sociales II","Lengua y comunicacion II","Formación Socioemocional II", "Tutoria","Lengua y comunicacion II"],
            "c": ["Inglés II", "Pensmiento Matemático II", "Cultura Digital II", "Diseña Software de Sistemas Informáticos", "Formación Socioemocional II", "Ciencias Sociales II", "Implementa Software de Sistemas de Información", "Codifica Software de Sistemas de Información", "Tutoria", "La conservación de la Energía y su Interacció", "Lengua y Comunicación II"],
            "d": ["Pensmiento Matemático II", "Inglés II", "Cultura Digital II", "La conservacion de la energia y su interaccion", "Instala y configura Software","Ensambla e instala Software","Ciencias Sociales II","Formacion Socioemocional","Tutoria" ],
            "e": ["La conservacion de la energia y su interaccion", "Pensamiento Matemático II", "Cultura Digital II" ,"Instala y configura Software", "Ensambla e instala Software", "Inglés II", "Ciencias Sociales II", "Formacion Socioemocional","Lengua y comunicacion II"],
        },
        "3": {
            "a": ["Humanidades II", "Inglés III", "Ecosistemas Interacciones, Energía y Dinámica","Emplea Frameworks para el Desarrollo de Software","Pensamiento Matemático II","Tutoria","Aplica Metodologías Agiles","Lengua y Comunicación III","Formación Socioemocional III:Actividades Físicas y Deportivas"],
            "b": ["Ecosistemas,Interacciones, Energía y Dinámica","Realiza Mantenimiento Preventivo","Pensamiento Matemático III","Realiza Mantenimiento Correctivo","Lengua y Comunicación III","Inglés III","Tutoria","Formación Socioemocional III:Actividades Físicas y Deportiva"],
            "c": ["Humanidades II", "Inglés III", "Ecosistemas Interacciones, Energía y Dinámica","Emplea Frameworks para el Desarrollo de Software","Pensamiento Matemático II","Tutoria","Aplica Metodologías Agiles","Lengua y Comunicación III","Formación Socioemocional III:Actividades Físicas y Deportivas"],
            "d": ["Ecosistemas","Interacciones, Energía y Dinámica","Realiza Mantenimiento Preventivo","Pensamiento Matemático III","Realiza Mantenimiento Correctivo","Lengua y Comunicación III","Inglés III","Tutoria","Formación Socioemocional III:Actividades Físicas y Deportiva"],
            "e": ["Ecosistemas,Interacciones, Energía y Dinámica","Realiza Mantenimiento Preventivo","Pensamiento Matemático III","Realiza Mantenimiento Correctivo","Lengua y Comunicación III","Inglés III","Tutoria","Formación Socioemocional III:Actividades Físicas y Deportiva"],
        },
        "4": {
            "a": ["Temas Selectos de Matemáticas I", "Inglés IV", "Bases de Datos Relacionales","Reacciones Quimicas","Bases de Datos no Relacionales","Conciencia Histórica I","Ciencias Sociales III","Tutoria"],
            "b": ["Relaciones Químicas", "Temas Selectos de Matemáticas I", "Inglés IV","Soporte Tecnico a Distancia","Soporte Tecnico Presencial","Formación Socioemocional VI","Conciencia Histórica I","Ciencias Sociales III","Tutoria"],
            "c": ["Temas Selectos de Matemáticas I", "Inglés IV", "Bases de Datos Relacionales","Reacciones Quimicas","Bases de Datos no Relacionales","Conciencia Histórica I","Ciencias Sociales III","Tutoria"],
            "d": ["Relaciones Químicas", "Temas Selectos de Matemáticas I", "Inglés IV","Soporte Tecnico a Distancia","Soporte Tecnico Presencial","Formación Socioemocional VI","Conciencia Histórica I","Ciencias Sociales III","Tutoria"],
            "e": ["Relaciones Químicas", "Temas Selectos de Matemáticas I", "Inglés IV","Soporte Tecnico a Distancia","Soporte Tecnico Presencial","Formación Socioemocional VI","Conciencia Histórica I","Ciencias Sociales III","Tutoria"],
            
        },
        "5": {
            "a": ["Cálculo Integral","Construye Bases de Datos para Aplicaciones Web","Inglés V","Física II","Ciencia Tecnología Sociedad y Valores","Desarrolla Aplicaciones Web con Conexión a Bases de Datos","Tutoria"],
            "b": ["Diseña la Red LAN","Tutoria","Inglés V","Cálculo Integral","Ciencia Tecnología Sociedad y Valores","Física II","Clasifica los Elementos Básicos de la Red LAN"],
            "c": ["Cálculo Integral","Construye Bases de Datos para Aplicaciones Web","Inglés V","Física II","Ciencia Tecnología Sociedad y Valores","Desarrolla Aplicaciones Web con Conexión a Bases de Datos","Tutoria"],
            "d": ["Diseña la Red LAN","Tutoria","Inglés V","Cálculo Integral","Ciencia Tecnología Sociedad y Valores","Física II","Clasifica los Elementos Básicos de la Red LAN"],
            "e": ["Diseña la Red LAN","Tutoria","Inglés V","Cálculo Integral","Ciencia Tecnología Sociedad y Valores","Física II","Clasifica los Elementos Básicos de la Red LAN"],
        },
        "6": {
            "a": ["Matemáticas Aplicadas", "Desarrolla APP IOS", "Probabilidad y Estadistica", "Temas de Filosofía", "Temas de Física", "Desarrolla APP ANDROID", "Tutoria"],
            "b": ["Probabilidad y Estadistica", "Temas de Administración", "Introducción al Derecho","Instala una Red Land","Tutoria","Temas de Filosofía","Opera una Red Land"],
            "c": ["Matemáticas Aplicadas", "Desarrolla APP IOS", "Probabilidad y Estadistica", "Temas de Filosofía", "Temas de Física", "Desarrolla APP ANDROID", "Tutoria"],
            "d": ["Probabilidad y Estadistica", "Temas de Administración", "Introducción al Derecho","Instala una Red Land","Tutoria","Temas de Filosofía","Opera una Red Land"],
           
        }
    };

    const materias = grupo
        ? materiasPorSemestre[semestre]?.[grupo]?.map(materia => `<li>${materia}</li>`).join("") || "No hay materias disponibles para este grupo."
        : materiasPorSemestre[semestre]?.map(materia => `<li>${materia}</li>`).join("") || "No hay materias disponibles.";

    info.innerHTML = `<ul>${materias}</ul>`;
}

function displayFestivos() {
    const festivos = [
        { dia: "1 de enero", motivo: "Año Nuevo" },
        { dia: "6 de enero", motivo: "Día de Reyes" },
        { dia: "13 de enero", motivo: "Día Mundial de la Lucha Contra la Depresión" },
        { dia: "5 de febrero", motivo: "Día de la Constitución (1917)" },
        { dia: "24 de febrero", motivo: "Día de la Bandera" },
        { dia:  "21 de marzo",  motivo: "Natalicio Benito Juárez 1806"},
        { dia: "22 de marzo", motivo: "Día mundial del agua"},
        { dia: "1 de mayo", motivo: "Día Internacional del Trabajo" },
        { dia: "5 de mayo", motivo: "Batalla de Puebla" },
        { dia: "16 de septiembre", motivo: "Independencia de México" },
        { dia: "2 de noviembre", motivo: "Día de Muertos" },
        { dia: "12 de diciembre", motivo: "Día de la Virgen de Guadalupe" },
        { dia: "24 de febrero", motivo: "Día de la Bandera" },
    ];

    const festivosHTML = festivos.map(f => `<div class="festivo"><strong>${f.dia}</strong>: ${f.motivo}</div>`).join("");
    document.getElementById("festivos-list").innerHTML = festivosHTML;
}
function handleChat() {
    const userInput = document.getElementById('chat-input').value.toLowerCase(); // Obtener la entrada del usuario
    const chatWindow = document.getElementById('chat-window'); // Referencia al área de chat

    // Respuestas predefinidas
    const botResponses = {
        "hola": "¡Hola! Soy Alex EduBot, tu asistente educativo de preparatoria. ¿Sobre qué tema necesitas ayuda?",
        "holi": "¡Hola! Soy Alex EduBot, tu asistente educativo de preparatoria. ¿Sobre qué tema necesitas ayuda?",
        "días festivos": "Los días festivos más importantes incluyen el 16 de septiembre, el 5 de mayo y el 2 de noviembre.",
        "constancias": "Para tramitar una constancia, necesitas tu identificación oficial y número de control escolar. Visita la oficina administrativa.",
        "historial académico": "Puedes solicitar tu historial académico en el área de servicios escolares. Es necesario tener tu credencial vigente.",
        "boletas": "Las boletas se descargan desde el portal de alumnos. Usa tu número de usuario y contraseña.",
        "matemáticas": "En matemáticas, puedes practicar ecuaciones cuadráticas y problemas de álgebra básica.",
        "química": "La química básica incluye aprender los símbolos químicos, como el del agua: H2O.",
        "física": "En física, puedes estudiar las leyes del movimiento de Newton, como la ley de la inercia.",
        "literatura": "Literatura incluye obras clásicas como Don Quijote de Miguel de Cervantes.",
        "¿quién escribió don quijote?": "Don Quijote fue escrito por Miguel de Cervantes Saavedra.",
        "¿qué es velocidad?": "La velocidad es la distancia recorrida dividida entre el tiempo utilizado.",
        "¿qué es la independencia de méxico?": "La independencia de México ocurrió el 16 de septiembre de 1810.",
        "¿cómo solicito una constancia?": "Debes presentar tu identificación y número de control en la oficina administrativa.",
        "¿cuál es el símbolo químico del agua?": "El símbolo químico del agua es H2O."
    };
    

    // Mostrar mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.textContent = `Usuario: ${userInput}`;
    userMessage.classList.add('user-message'); // Opcional: agregar clase para estilos específicos
    chatWindow.appendChild(userMessage);

    // Generar respuesta del chatbot
    const botMessage = document.createElement('div');
    botMessage.textContent = botResponses[userInput] || "Lo siento, no tengo información sobre eso en este momento.";
    botMessage.classList.add('bot-message'); // Opcional: agregar clase para estilos específicos
    chatWindow.appendChild(botMessage);

    // Limpiar el input del usuario
    document.getElementById('chat-input').value = '';
}


function startQuiz(materia) {
    const quizzes = {
        "Matemáticas": { pregunta: "¿Cuánto es 2+3?", respuesta: "5" },
        "Inglés": { pregunta: "¿Como usar These-Those?", respuesta: "Para usar these y those correctamente en inglés, sigue estas pautas:These se usa para referirse a objetos o personas que están cerca del hablante. Por ejemplo:These are my books.(Estos son mis libros).Those se usa para referirse a objetos o personas que están lejos del hablante. Por ejemplo:Those are my books.(Estos son mis libros).Ambos se pueden usar en oraciones de presente o pasado, dependiendo de la distancia temporal o espacial. Por ejemplo:I saw those books yesterday.(Vimos esos libros ayer).Recuerda que these y those son adjetivos demostrativos y no tienen género" },
        "Física": { pregunta: "¿Qué es la velocidad?", respuesta: "La distancia recorrida en un tiempo específico" },
        "Química": { pregunta: "¿Cuál es el símbolo químico del agua?", respuesta: "H2O" },
        "Cultura Digital": { pregunta: "¿Quién escribió Don Quijote?", respuesta: "Miguel de Cervantes" },
        "Pensamiento Matemático I": { pregunta: "¿Que son las expresiones algebraicas?", respuestas: "Expresiones del tipo 35t + 10t, 4 – 3x² – (5)², son expresiones algebraicas y se debe distinguir que los números y letras están conectados por signos de suma, resta potenciación, como se mencionó en la definición."}
    };

    const quiz = quizzes[materia];
    const userAnswer = prompt(quiz.pregunta);
    if (userAnswer.toLowerCase() === quiz.respuesta.toLowerCase()) {
        alert("¡Correcto!");
    } else {
        alert(`Incorrecto. La respuesta correcta es: ${quiz.respuesta}`);
    }
}

