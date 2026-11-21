const STORAGE_KEY = "LOST_LAVENDER_YORKIE_FULL_V1";
const EMOJIS_RAPIDOS = ["🦊", "🐶", "💜", "🎀", "🌸", "🍓", "✨", "🎂", "📚", "🎧"];
const BITMOJI_PRESETS = [
  { id: "bm1", label: "Lavanda Cool", emoji: "🦄" },
  { id: "bm2", label: "Pastel Vibe", emoji: "🗓️" },
  { id: "bm3", label: "Study Star", emoji: "🧸" },
  { id: "bm4", label: "Night Owl", emoji: "🌙" }
];
const DIAS_SEMANA_CORTO = ["Lun", "Mar", "Mié", "Jue", "Vie"];

const TRADUCCIONES = {
  es: {
    locale: "es-PR",
    portadaBadge: "Portada",
    tagline: "“Por si estás perdido y no sabes ni que día es después de unas buenas vacaciones.”",
    creatorCredit: "Creado por Sofía Aguirre Rivera",
    welcomeDesc: "Organiza tu rutina académica o docente, consulta qué bloque está en curso y administra alarmas, fechas clave y comunidad desde un solo lugar.",
    pills: ["🎓 Estudiante / Maestro", "🔄 Ciclo A–F o Lun–Vie", "⏰ Alarmas y feriados", "🤝 Comunidad y QR"],
    startTutorial: "Empezar tutorial (4 pasos)",
    goApp: "Ir directo a LOST",
    prevStep: "◀ Atrás",
    nextStep: "Siguiente ▶",
    finishTutorial: "Entrar a LOST ✨",
    skipTutorial: "Omitir y entrar a LOST",
    tutorialBtn: "✨ Tutorial",
    roleStudent: "Estudiante",
    roleTeacher: "Maestro",
    modeCycle: "Ciclo A–F",
    modeWeekly: "Lun–Vie",
    cycleLabel: "Ciclo Escolar A–F",
    desc: "Horario, calendario académico, alarmas, cumpleaños y comunidad",
    badgeMateria: "Materia activa / del día",
    gymBtn: "🏋️ Gym este día",
    todayBtn: "Ir a hoy",
    dayOff: "DÍA LIBRE",
    weekend: "FINDE",
    subDayOff: "Día marcado como feriado o sin clases.",
    subGym: "Día marcado con entrenamiento / gym.",
    subDefault: "Selecciona un día en el calendario para ver o editar sus detalles.",
    live: "En vivo hoy",
    actual: "Bloque actual",
    siguiente: "Siguiente bloque",
    noCurrentBlock: "Sin bloque en curso",
    noNextBlock: "No hay más bloques hoy",
    blocksTitle: "📚 Bloques del día",
    notesTitle: "📝 Notas y tareas",
    alarmsTitle: "Alarmas (despertar, pendientes y recordatorios)",
    profileTitle: "Mi perfil, avatar/Bitmoji, foto y cumpleaños",
    communityTitle: "Comunidad compartida (QR, Enlace o en la App)",
    configTitle: "⚙️ Configuración del ciclo, feriados, Apps Script y respaldo",
    nav: ["Inicio", "Calendario", "Crear", "Alarmas", "Perfil"],
    steps: [
      { icono: "🎓", tag: "✦ Paso 1 · Rol y ciclo", titulo: "1. Tu rol y ciclo", cuerpo: "Elige si usas LOST como Estudiante o Maestro y cambia entre Ciclo A–F o semana Lun–Vie desde la portada." },
      { icono: "📅", tag: "✦ Paso 2 · En vivo y calendario", titulo: "2. En vivo, feriados y gym", cuerpo: "Consulta qué bloque toca ahora y cuál sigue, marca días libres/feriados o registra tus días de gym en el calendario." },
      { icono: "⏰", tag: "✦ Paso 3 · Alarmas y notas", titulo: "3. Alarmas y notas", cuerpo: "Crea alarmas para despertar, pendientes o recordatorios con tono elegido, y guarda tus tareas o exámenes por fecha." },
      { icono: "🤝", tag: "✦ Paso 4 · Perfil y comunidad", titulo: "4. Perfil, comunidad y respaldo", cuerpo: "Configura tu avatar/emoji/foto y cumpleaños, únete a tu comunidad por enlace o QR y exporta respaldos en JSON." }
    ]
  },
  en: {
    locale: "en-US",
    portadaBadge: "Cover",
    tagline: "“Just in case you’re lost and don’t even know what day it is after a good vacation.”",
    creatorCredit: "Created by Sofía Aguirre Rivera",
    welcomeDesc: "Streamline your student or faculty schedule, check active blocks in real time, and manage alarms, key dates, and community members in one place.",
    pills: ["🎓 Student / Teacher", "🔄 Cycle A–F or Mon–Fri", "⏰ Alarms & days off", "🤝 Community & QR"],
    startTutorial: "Start tutorial (4 steps)",
    goApp: "Go straight to LOST",
    prevStep: "◀ Back",
    nextStep: "Next ▶",
    finishTutorial: "Enter LOST ✨",
    skipTutorial: "Skip and enter LOST",
    tutorialBtn: "✨ Tutorial",
    roleStudent: "Student",
    roleTeacher: "Teacher",
    modeCycle: "Cycle A–F",
    modeWeekly: "Mon–Fri",
    cycleLabel: "School Cycle A–F",
    desc: "Schedule, academic calendar, alarms, birthdays & community",
    badgeMateria: "Active / daily subject",
    gymBtn: "🏋️ Gym this day",
    todayBtn: "Go to today",
    dayOff: "DAY OFF",
    weekend: "WEEKEND",
    subDayOff: "Marked as holiday or no classes.",
    subGym: "Marked as workout / gym day.",
    subDefault: "Pick a day on the calendar to view or edit details.",
    live: "Live today",
    actual: "Current block",
    siguiente: "Next block",
    noCurrentBlock: "No block in progress",
    noNextBlock: "No more blocks today",
    blocksTitle: "📚 Blocks for day",
    notesTitle: "📝 Notes & tasks",
    alarmsTitle: "Alarms (wake up, to-do & reminders)",
    profileTitle: "My profile, avatar/Bitmoji, photo & birthday",
    communityTitle: "Shared community (QR, Link or in-app)",
    configTitle: "⚙️ Cycle settings, days off, Apps Script & backup",
    nav: ["Home", "Calendar", "Create", "Alarms", "Profile"],
    steps: [
      { icono: "🎓", tag: "✦ Step 1 · Role & cycle", titulo: "1. Your role and cycle", cuerpo: "Choose whether you use LOST as a Student or Teacher and switch between Cycle A–F or a Mon–Fri schedule from the cover." },
      { icono: "📅", tag: "✦ Step 2 · Live & calendar", titulo: "2. Live view, days off & gym", cuerpo: "Check the current and upcoming block, mark days off or holidays, and track workout days directly on the calendar." },
      { icono: "⏰", tag: "✦ Step 3 · Alarms & notes", titulo: "3. Alarms & notes", cuerpo: "Create wake-up, task, or reminder alarms with your preferred tone, and keep assignments or exams organized by date." },
      { icono: "🤝", tag: "✦ Step 4 · Profile & community", titulo: "4. Profile, community & backup", cuerpo: "Customize your profile and birthday, join your community via link or QR code, and export JSON backups." }
    ]
  },
  fr: {
    locale: "fr-FR",
    portadaBadge: "Accueil",
    tagline: "“Au cas où tu serais perdu et ne saurais même plus quel jour on est après de bonnes vacances.”",
    creatorCredit: "Créé par Sofía Aguirre Rivera",
    welcomeDesc: "Organise ton emploi du temps étudiant ou enseignant, consulte les blocs en direct et gère alarmes, dates clés et communauté au même endroit.",
    pills: ["🎓 Élève / Professeur", "🔄 Cycle A–F ou Lun–Ven", "⏰ Alarmes et congés", "🤝 Communauté et QR"],
    startTutorial: "Démarrer le tuto (4 étapes)",
    goApp: "Aller direct à LOST",
    prevStep: "◀ Retour",
    nextStep: "Suivant ▶",
    finishTutorial: "Entrer dans LOST ✨",
    skipTutorial: "Passer et entrer dans LOST",
    tutorialBtn: "✨ Tuto",
    roleStudent: "Élève",
    roleTeacher: "Professeur",
    modeCycle: "Cycle A–F",
    modeWeekly: "Lun–Ven",
    cycleLabel: "Cycle Scolaire A–F",
    desc: "Emploi du temps, calendrier scolaire, alarmes, anniversaires et communauté",
    badgeMateria: "Matière active / du jour",
    gymBtn: "🏋️ Sport ce jour",
    todayBtn: "Aujourd'hui",
    dayOff: "JOUR LIBRE",
    weekend: "WEEK-END",
    subDayOff: "Jour marqué comme congé ou sans cours.",
    subGym: "Jour marqué avec entraînement / sport.",
    subDefault: "Choisis un jour sur le calendrier pour voir ou modifier les détails.",
    live: "En direct aujourd'hui",
    actual: "Bloc actuel",
    siguiente: "Bloc suivant",
    noCurrentBlock: "Aucun bloc en cours",
    noNextBlock: "Plus de blocs aujourd'hui",
    blocksTitle: "📚 Blocs du jour",
    notesTitle: "📝 Notes et tâches",
    alarmsTitle: "Alarmes (réveil, tâches et rappels)",
    profileTitle: "Mon profil, avatar/Bitmoji, photo et anniversaire",
    communityTitle: "Communauté partagée (QR, Lien ou dans l'appli)",
    configTitle: "⚙️ Paramètres du cycle, congés, Apps Script et sauvegarde",
    nav: ["Accueil", "Calendrier", "Créer", "Alarmes", "Profil"],
    steps: [
      { icono: "🎓", tag: "✦ Étape 1 · Rôle et cycle", titulo: "1. Ton rôle et ton cycle", corps: "Choisis le mode Élève ou Professeur et bascule entre Cycle A–F ou planning Lun–Ven depuis l'accueil." },
      { icono: "📅", tag: "✦ Étape 2 · Direct et calendrier", titulo: "2. Direct, congés et sport", corps: "Consulte le bloc en cours et le suivant, marque des jours libres ou fériés et suis tes séances sur le calendrier." },
      { icono: "⏰", tag: "✦ Étape 3 · Alarmes et notes", titulo: "3. Alarmes et notes", corps: "Programme des alarmes de réveil, tâches ou rappels avec la sonnerie choisie et classe tes devoirs ou examens par date." },
      { icono: "🤝", tag: "✦ Étape 4 · Profil et communauté", titulo: "4. Profil, communauté et sauvegarde", corps: "Configure ton profil et ton anniversaire, rejoins la communauté par lien ou QR et exporte des sauvegardes en JSON." }
    ]
  }
};

const PASOS_TUTORIAL_LOST = TRADUCCIONES.es.steps;

function obtenerTraduccion() { return TRADUCCIONES[estado.idioma] || TRADUCCIONES.es; }

function obtenerFechaLocalISO(dateObj = new Date()) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function crearEstadoInicial() {
  const hoyISO = obtenerFechaLocalISO();
  return {
    modo: "ciclo",
    rol: "estudiante",
    idioma: "es",
    fechaSeleccionada: hoyISO,
    mesCalendario: hoyISO.slice(0, 7),
    tabActiva: "A",
    letrasCiclo: ["A", "B", "C", "D", "E", "F"],
    fechaInicioCiclo: hoyISO,
    correoDestino: "",
    minutosAntelacion: 15,
    appsScriptUrl: "",
    feriados: [],
    diasGym: [],
    horarios: {
      estudiante: {
        ciclo: { A: [], B: [], C: [], D: [], E: [], F: [] },
        semanal: { Lun: [], Mar: [], Mié: [], Jue: [], Vie: [] }
      },
      maestro: {
        ciclo: { A: [], B: [], C: [], D: [], E: [], F: [] },
        semanal: { Lun: [], Mar: [], Mié: [], Jue: [], Vie: [] }
      }
    },
    notasPorFecha: {},
    alarmas: [],
    perfil: { nombre: "Mi Perfil", emoji: "🦊", cumple: "", tipoAvatar: "emoji", foto: "" },
    comunidad: []
  };
}

let estado = cargarEstado();
let modoFeriadosRapido = false;
let audioCtx = null;
let intervaloSonido = null;
let snoozeTimeout = null;
let ultimaDisparoMinuto = {};
let disparadasEsteMinuto = [];
let pasoTutorialActual = 0;

function cargarEstado() {
  const base = crearEstadoInicial();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    return {
      ...base,
      ...parsed,
      letrasCiclo: Array.isArray(parsed.letrasCiclo) && parsed.letrasCiclo.length ? parsed.letrasCiclo : base.letrasCiclo,
      feriados: Array.isArray(parsed.feriados) ? Array.from(new Set(parsed.feriados)).sort() : [],
      diasGym: Array.isArray(parsed.diasGym) ? Array.from(new Set(parsed.diasGym)) : [],
      notasPorFecha: parsed.notasPorFecha && typeof parsed.notasPorFecha === "object" ? parsed.notasPorFecha : {},
      alarmas: Array.isArray(parsed.alarmas) ? parsed.alarmas : [],
      perfil: { ...base.perfil, ...(parsed.perfil || {}) },
      comunidad: Array.isArray(parsed.comunidad) ? parsed.comunidad : [],
      horarios: {
        estudiante: {
          ciclo: { ...base.horarios.estudiante.ciclo, ...(parsed.horarios?.estudiante?.ciclo || {}) },
          semanal: { ...base.horarios.estudiante.semanal, ...(parsed.horarios?.estudiante?.semanal || {}) }
        },
        maestro: {
          ciclo: { ...base.horarios.maestro.ciclo, ...(parsed.horarios?.maestro?.ciclo || {}) },
          semanal: { ...base.horarios.maestro.semanal, ...(parsed.horarios?.maestro?.semanal || {}) }
        }
      }
    };
  } catch (e) {
    return base;
  }
}

function guardarEstado() {
  estado.feriados = Array.from(new Set(estado.feriados)).sort();
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(estado)); } catch (e) {}
  if (typeof window.guardarEnNubeLOST === "function") {
    window.guardarEnNubeLOST(estado);
  }
}

window.obtenerEstadoLOST = () => estado;

window.aplicarDatosNubeLOST = (datosNube) => {
  if (!datosNube || typeof datosNube !== "object") return;
  const base = crearEstadoInicial();
  estado = {
    ...base,
    ...datosNube,
    letrasCiclo: Array.isArray(datosNube.letrasCiclo) && datosNube.letrasCiclo.length ? datosNube.letrasCiclo : base.letrasCiclo,
    feriados: Array.isArray(datosNube.feriados) ? Array.from(new Set(datosNube.feriados)).sort() : [],
    diasGym: Array.isArray(datosNube.diasGym) ? Array.from(new Set(datosNube.diasGym)) : [],
    notasPorFecha: datosNube.notasPorFecha && typeof datosNube.notasPorFecha === "object" ? datosNube.notasPorFecha : {},
    alarmas: Array.isArray(datosNube.alarmas) ? datosNube.alarmas : [],
    perfil: { ...base.perfil, ...(datosNube.perfil || {}) },
    comunidad: Array.isArray(datosNube.comunidad) ? datosNube.comunidad : []
  };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(estado)); } catch (e) {}
  renderTodo();
};

function setMsg(id, txt, esError = false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = txt;
  el.classList.toggle("error", Boolean(esError));
}

function setTextById(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escaparHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setKawaiiIconById(id, emoji, animClass = "charm-bounce", extraClass = "") {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<span class="kawaii-charm ${animClass} ${extraClass}">${escaparHTML(emoji)}</span>`;
}

function embellecerCharmsEstaticos() {
  const mappings = [
    { id: "pill-rol", emoji: "🎓", anim: "charm-bounce" },
    { id: "pill-ciclo", emoji: "🔄", anim: "charm-sparkle" },
    { id: "pill-alarmas", emoji: "⏰", anim: "charm-wiggle" },
    { id: "pill-comunidad", emoji: "🤝", anim: "charm-float" },
    { id: "btn-ver-tutorial-app", emoji: "✨", anim: "charm-sparkle" },
    { id: "btn-toggle-gym", emoji: "🏋️", anim: "charm-bounce" },
    { id: "btn-probar-alarma", emoji: "🔊", anim: "charm-wiggle" },
    { id: "btn-permiso-notif", emoji: "🔔", anim: "charm-wiggle" },
    { id: "btn-link-mi-perfil", emoji: "🔗", anim: "charm-float" },
    { id: "btn-qr-mi-perfil", emoji: "📱", anim: "charm-bounce" },
    { id: "btn-fusionar-comunidad", emoji: "🤝", anim: "charm-float" },
    { id: "btn-link-comunidad", emoji: "🔗", anim: "charm-float" },
    { id: "btn-qr-comunidad", emoji: "📱", anim: "charm-bounce" },
    { id: "btn-toggle-feriado", emoji: "🏖️", anim: "charm-float" },
    { id: "btn-sync-calendar", emoji: "📅", anim: "charm-bounce" },
    { id: "btn-sync-correo", emoji: "✉️", anim: "charm-wiggle" },
    { id: "btn-copiar-json", emoji: "📋", anim: "charm-sparkle" }
  ];

  mappings.forEach(({ id, emoji, anim }) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.dataset.baseLabel) {
      el.dataset.baseLabel = el.textContent.replace(/^[^\s]+\s*/, "").trim();
    }
    el.innerHTML = `<span class="kawaii-charm ${anim}">${emoji}</span> <span>${escaparHTML(el.dataset.baseLabel)}</span>`;
  });
}

function parseISOFecha(isoStr) {
  const [y, m, d] = String(isoStr).split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

function esFinDeSemana(dateObj) {
  const day = dateObj.getDay();
  return day === 0 || day === 6;
}

function calcularLetraCiclo(fechaISO) {
  const fechaObj = parseISOFecha(fechaISO);
  if (esFinDeSemana(fechaObj) || estado.feriados.includes(fechaISO)) return null;
  const inicioObj = parseISOFecha(estado.fechaInicioCiclo);
  if (fechaObj < inicioObj) return null;

  let diasHabiles = 0;
  const cursor = new Date(inicioObj.getFullYear(), inicioObj.getMonth(), inicioObj.getDate());
  const objetivo = new Date(fechaObj.getFullYear(), fechaObj.getMonth(), fechaObj.getDate());

  while (cursor < objetivo) {
    if (!esFinDeSemana(cursor) && !estado.feriados.includes(obtenerFechaLocalISO(cursor))) {
      diasHabiles++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  const len = estado.letrasCiclo.length;
  return len ? estado.letrasCiclo[diasHabiles % len] : null;
}

function obtenerClaveDiaParaFecha(fechaISO) {
  const fechaObj = parseISOFecha(fechaISO);
  if (esFinDeSemana(fechaObj) || estado.feriados.includes(fechaISO)) return null;
  if (estado.modo === "semanal") {
    const mapa = { 1: "Lun", 2: "Mar", 3: "Mié", 4: "Jue", 5: "Vie" };
    return mapa[fechaObj.getDay()] || null;
  }
  return calcularLetraCiclo(fechaISO);
}

function alternarFeriadoFecha(fechaISO) {
  if (!fechaISO) return;
  if (estado.feriados.includes(fechaISO)) {
    estado.feriados = estado.feriados.filter((x) => x !== fechaISO);
  } else {
    estado.feriados.push(fechaISO);
  }
  estado.fechaSeleccionada = fechaISO;
  guardarEstado();
  renderTodo();
}

function extraerFeriadosDesdeTextoImagen(texto, anioReferencia) {
  const meses = {
    enero: "01", feb: "02", febrero: "02", mar: "03", marzo: "03",
    abr: "04", abril: "04", may: "05", mayo: "05", jun: "06", junio: "06",
    jul: "07", julio: "07", ago: "08", agosto: "08", sep: "09", sept: "09", septiembre: "09",
    oct: "10", octubre: "10", nov: "11", noviembre: "11", dic: "12", diciembre: "12",
    jan: "01", january: "01", february: "02", march: "03", april: "04",
    june: "06", july: "07", august: "08", september: "09", october: "10", november: "11", december: "12"
  };

  const encontrados = new Set();
  const lineas = String(texto || "").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  for (const linea of lineas) {
    if (!/feriado|receso|sin clases|libre|suspensi[oó]n|vacaciones|holiday|no school|break|day off/i.test(linea)) {
      continue;
    }

    const isoMatches = linea.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/g) || [];
    isoMatches.forEach((f) => encontrados.add(f));

    const patronMes = /\b(?:(\d{1,2})\s*(?:de\s*)?)?(enero|febrero|feb|marzo|mar|abril|abr|mayo|may|junio|jun|julio|jul|agosto|ago|septiembre|sept|sep|octubre|oct|noviembre|nov|diciembre|dic|january|jan|february|march|april|june|july|august|september|october|november|december)(?:\s*(?:del?\s*)?(\d{1,2}))?\b/gi;
    let match;
    while ((match = patronMes.exec(linea)) !== null) {
      const mesNum = meses[match[2].toLowerCase()];
      const diaRaw = match[1] || match[3];
      if (mesNum && diaRaw) {
        const diaNum = String(diaRaw).padStart(2, "0");
        encontrados.add(`${anioReferencia}-${mesNum}-${diaNum}`);
      }
    }
  }

  return Array.from(encontrados).sort();
}

async function procesarFotoCalendarioEscolar(event) {
  const archivo = event.target.files?.[0];
  if (!archivo) return;

  const estadoEl = document.getElementById("estado-feriados-foto");
  if (estadoEl) estadoEl.textContent = "📸 Leyendo foto del calendario escolar...";

  try {
    if (typeof window.Tesseract === "undefined") {
      throw new Error("El lector de imágenes aún está cargando. Intenta de nuevo en 2 segundos.");
    }
    const anioSel = Number(String(estado.mesCalendario || "").split("-")[0]) || new Date().getFullYear();
    const { data } = await window.Tesseract.recognize(archivo, "spa+eng");
    const fechasDetectadas = extraerFeriadosDesdeTextoImagen(data?.text || "", anioSel);

    if (!fechasDetectadas.length) {
      if (estadoEl) {
        estadoEl.textContent = "No detecté días feriados claros en la foto. Puedes activar 'Marcar feriados: ON' y tocar los días directo.";
      }
      event.target.value = "";
      return;
    }

    const ok = confirm(
      `Detecté estas fechas feriadas / sin clases:\n• ${fechasDetectadas.join("\n• ")}\n\n¿Marcarlas en tu calendario de LOST?`
    );

    if (ok) {
      estado.feriados = Array.from(new Set([...estado.feriados, ...fechasDetectadas])).sort();
      guardarEstado();
      renderTodo();
      if (estadoEl) estadoEl.textContent = `✅ Se marcaron ${fechasDetectadas.length} día(s) feriado(s).`;
    } else if (estadoEl) {
      estadoEl.textContent = "No se agregaron fechas de la foto.";
    }
  } catch (err) {
    if (estadoEl) estadoEl.textContent = err.message || "No se pudo leer la foto.";
  } finally {
    event.target.value = "";
  }
}

function obtenerBloquesDeClave(clave) {
  if (!clave) return [];
  const lista = estado.horarios?.[estado.rol]?.[estado.modo]?.[clave] || [];
  return [...lista].sort((a, b) => String(a.horaInicio).localeCompare(String(b.horaInicio)));
}

function minutosDesdeMedianoche(hhmm) {
  const [h, m] = String(hhmm || "00:00").split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
}

function coincideMesDia(fechaISO, objetivoISO) {
  if (!fechaISO || !objetivoISO) return false;
  const p1 = String(fechaISO).split("-");
  const p2 = String(objetivoISO).split("-");
  return p1.length === 3 && p2.length === 3 && p1[1] === p2[1] && p1[2] === p2[2];
}

function obtenerCumplesDelDia(fechaISO) {
  const lista = [];
  if (estado.perfil?.nombre && coincideMesDia(estado.perfil.cumple, fechaISO)) {
    lista.push({ nombre: estado.perfil.nombre, emoji: estado.perfil.emoji || "🦊", esPerfil: true });
  }
  estado.comunidad.forEach((m) => {
    if (coincideMesDia(m.cumple, fechaISO)) {
      lista.push({ nombre: m.nombre, emoji: m.emoji || "💜", esPerfil: false });
    }
  });
  return lista;
}

function sonarBeep(tono = "campanita") {
  try {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = tono === "pulso" ? "square" : tono === "arpegio" ? "triangle" : "sine";
    const baseFreq = tono === "pulso" ? 780 : tono === "arpegio" ? 1046 : 920;
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.14, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.36);
  } catch (e) {}
}

function dispararAlarma(titulo, subtitulo, tono = "campanita") {
  document.getElementById("alarma-banner-titulo").textContent = titulo || "⏰ Alarma activa";
  document.getElementById("alarma-banner-sub").textContent = subtitulo || "Recordatorio LOST";
  document.getElementById("alarma-banner").classList.add("activa");
  sonarBeep(tono);
  clearInterval(intervaloSonido);
  intervaloSonido = setInterval(() => sonarBeep(tono), 2000);

  if ("Notification" in window && Notification.permission === "granted") {
    try { new Notification(titulo || "Alarma LOST", { body: subtitulo || "" }); } catch (e) {}
  }
}

function detenerAlarma() {
  clearInterval(intervaloSonido);
  intervaloSonido = null;
  clearTimeout(snoozeTimeout);
  snoozeTimeout = null;
  document.getElementById("alarma-banner").classList.remove("activa");
}

function posponerAlarma5Min() {
  const titulo = document.getElementById("alarma-banner-titulo").textContent;
  const sub = document.getElementById("alarma-banner-sub").textContent;
  detenerAlarma();
  snoozeTimeout = setTimeout(() => {
    dispararAlarma(titulo, `${sub} · Pospuesta 5 min`, "campanita");
  }, 5 * 60 * 1000);
}

function revisarAlarmasPorMinuto() {
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, "0");
  const mm = String(ahora.getMinutes()).padStart(2, "0");
  const horaActual = `${hh}:${mm}`;
  const diaSemana = ahora.getDay();
  const claveMinuto = `${obtenerFechaLocalISO(ahora)}_${horaActual}`;

  let huboCambio = false;
  estado.alarmas.forEach((al) => {
    if (!al.activa || al.hora !== horaActual) return;
    if (al.repeticion === "lv" && (diaSemana === 0 || diaSemana === 6)) return;

    const llaveDisparo = `${al.id}_${claveMinuto}`;
    if (ultimaDisparoMinuto[llaveDisparo]) return;
    ultimaDisparoMinuto[llaveDisparo] = true;

    const tipoTxt = al.tipo === "despertar" ? "⏰ Despertar" : al.tipo === "pendiente" ? "📌 Pendiente" : "🔔 Recordatorio";
    dispararAlarma(`${tipoTxt} · ${al.etiqueta}`, `Hora: ${al.hora}`, al.tono || "campanita");

    if (al.repeticion === "una_vez") {
      al.activa = false;
      huboCambio = true;
    }
  });

  if (huboCambio) {
    guardarEstado();
    renderAlarmas();
  }
}

function verificarAlarmasCadaSegundo() {
  try {
    if (!Array.isArray(disparadasEsteMinuto)) disparadasEsteMinuto = [];
    const ahora = new Date();
    const hh = String(ahora.getHours()).padStart(2, "0");
    const mm = String(ahora.getMinutes()).padStart(2, "0");
    const claveMinuto = `${hh}:${mm}`;
    disparadasEsteMinuto = disparadasEsteMinuto.filter((item) => item.startsWith(`${claveMinuto}|`));
    revisarAlarmasPorMinuto();
  } catch (err) {}
}

function aplicarIdiomaEnInterfaz() {
  const t = obtenerTraduccion();
  setTextById("lost-welcome-tagline", t.tagline);
  setTextById("lost-creator-credit", t.creatorCredit);
  setTextById("lost-welcome-desc", t.welcomeDesc);
  setTextById("pill-rol", t.pills[0]);
  setTextById("pill-ciclo", t.pills[1]);
  setTextById("pill-alarmas", t.pills[2]);
  setTextById("pill-comunidad", t.pills[3]);
  setTextById("btn-iniciar-tutorial", t.startTutorial);
  setTextById("btn-saltar-todo", t.goApp);
  setTextById("btn-paso-anterior", t.prevStep);
  setTextById("btn-omitir-tutorial", t.skipTutorial);
  setTextById("btn-ver-tutorial-app", t.tutorialBtn);
  setTextById("btn-rol-estudiante", t.roleStudent);
  setTextById("btn-rol-maestro", t.roleTeacher);
  setTextById("btn-modo-ciclo", t.modeCycle);
  setTextById("btn-modo-semanal", t.modeWeekly);
  setTextById("portada-desc", t.desc);
  setTextById("badge-categoria-materia", t.badgeMateria);
  setTextById("btn-toggle-gym", t.gymBtn);
  setTextById("btn-ir-hoy", t.todayBtn);
  setTextById("titulo-en-vivo", t.live);
  setTextById("etiqueta-bloque-actual", t.actual);
  setTextById("etiqueta-siguiente-bloque", t.siguiente);
  setTextById("titulo-bloques-dia", `${t.blocksTitle} ${estado.tabActiva}`);
  setTextById("titulo-notas-dia", t.notesTitle);
  setTextById("titulo-alarmas", t.alarmsTitle);
  setTextById("titulo-perfil", t.profileTitle);
  setTextById("titulo-comunidad", t.communityTitle);
  setTextById("titulo-config", t.configTitle);
  setKawaiiIconById("welcome-muneco-box", "🗓️", "charm-float", "kawaii-charm-circle");
  embellecerCharmsEstaticos();
  if (Array.isArray(t.nav)) {
    setTextById("nav-lbl-inicio", t.nav[0]);
    setTextById("nav-lbl-calendario", t.nav[1]);
    setTextById("nav-lbl-crear", t.nav[2]);
    setTextById("nav-lbl-alarmas", t.nav[3]);
    setTextById("nav-lbl-perfil", t.nav[4]);
  }
}

function cambiarVistaApp(vista) {
  const vistaActiva = vista || "inicio";
  document.querySelectorAll(".vista-seccion").forEach((sec) => {
    sec.classList.toggle("oculta", sec.getAttribute("data-vista") !== vistaActiva);
  });
  document.querySelectorAll(".kawaii-tab-item").forEach((btn) => {
    btn.classList.toggle("activa", btn.getAttribute("data-target-vista") === vistaActiva);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirEntradaYFlujo(desdePortada = true) {
  const welcome = document.getElementById("lost-welcome");
  const landing = document.getElementById("lost-landing-view");
  const tutorial = document.getElementById("lost-tutorial-view");
  const counter = document.getElementById("lost-step-counter");
  const app = document.getElementById("lost-app");
  const t = obtenerTraduccion();

  aplicarIdiomaEnInterfaz();

  if (app) app.style.display = "none";
  if (welcome) welcome.style.display = "flex";

  if (desdePortada) {
    pasoTutorialActual = 0;
    if (landing) landing.style.display = "block";
    if (tutorial) tutorial.style.display = "none";
    if (counter) counter.textContent = t.portadaBadge;
  } else {
    mostrarPasoTutorial(0);
  }
}

function mostrarPasoTutorial(indice) {
  const landing = document.getElementById("lost-landing-view");
  const tutorial = document.getElementById("lost-tutorial-view");
  const counter = document.getElementById("lost-step-counter");
  const fill = document.getElementById("lost-progress-fill");
  const iconEl = document.getElementById("lost-step-icon");
  const tagEl = document.getElementById("lost-step-tag");
  const titleEl = document.getElementById("lost-step-title");
  const bodyEl = document.getElementById("lost-step-body");
  const prevBtn = document.getElementById("btn-paso-anterior");
  const nextBtn = document.getElementById("btn-paso-siguiente");
  const t = obtenerTraduccion();
  const pasos = t.steps || PASOS_TUTORIAL_LOST;

  pasoTutorialActual = Math.max(0, Math.min(indice, pasos.length - 1));
  const paso = pasos[pasoTutorialActual];

  if (landing) landing.style.display = "none";
  if (tutorial) tutorial.style.display = "block";

  if (counter) counter.textContent = `${pasoTutorialActual + 1} / ${pasos.length}`;
  if (fill) fill.style.width = `${((pasoTutorialActual + 1) / pasos.length) * 100}%`;
  if (iconEl) iconEl.innerHTML = `<span class="kawaii-charm kawaii-charm-circle charm-bounce">${escaparHTML(paso.icono)}</span>`;
  if (tagEl) tagEl.textContent = paso.tag || "✦ Tip kawaii";
  if (titleEl) titleEl.textContent = paso.titulo;
  if (bodyEl) bodyEl.textContent = paso.cuerpo;

  if (prevBtn) prevBtn.style.visibility = pasoTutorialActual === 0 ? "hidden" : "visible";
  if (nextBtn) {
    nextBtn.textContent = pasoTutorialActual === pasos.length - 1 ? t.finishTutorial : t.nextStep;
  }
}

function entrarALaAppPrincipal() {
  const welcome = document.getElementById("lost-welcome");
  const app = document.getElementById("lost-app");
  if (welcome) welcome.style.display = "none";
  if (app) app.style.display = "block";
  cambiarVistaApp("inicio");
  renderTodo();
}

function codificarBase64Url(obj) {
  const jsonStr = JSON.stringify(obj);
  const bytes = new TextEncoder().encode(jsonStr);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodificarBase64Url(b64) {
  const norm = String(b64 || "").replace(/-/g, "+").replace(/_/g, "/");
  const pad = norm.length % 4 ? "=".repeat(4 - (norm.length % 4)) : "";
  const bin = atob(norm + pad);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

async function compartirEnlaceOClipboard(titulo, enlace, mensajeExito) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: titulo,
        text: `${titulo} en LOST:`,
        url: enlace
      });
      return true;
    } catch (e) {}
  }
  try {
    await navigator.clipboard.writeText(enlace);
  } catch (e) {
    const temp = document.createElement("textarea");
    temp.value = enlace;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  }
  setMsg("msg-respaldo", mensajeExito);
  return false;
}

function fusionarComunidad(datos) {
  let agregados = 0;
  const listaEntrante = Array.isArray(datos)
    ? datos
    : Array.isArray(datos?.comunidad)
      ? datos.comunidad
      : datos?.nombre
        ? [datos]
        : [];

  listaEntrante.forEach((item) => {
    if (!item || !item.nombre) return;
    const nombreLimpio = String(item.nombre).trim();
    if (!nombreLimpio) return;
    if (estado.perfil?.nombre && estado.perfil.nombre.toLowerCase() === nombreLimpio.toLowerCase()) return;

    const idx = estado.comunidad.findIndex((m) => String(m.nombre).toLowerCase() === nombreLimpio.toLowerCase());
    const nuevoMiembro = { nombre: nombreLimpio, emoji: item.emoji || "💜", cumple: item.cumple || "" };
    if (idx === -1) {
      estado.comunidad.push(nuevoMiembro);
      agregados++;
    } else {
      estado.comunidad[idx] = { ...estado.comunidad[idx], ...nuevoMiembro };
      agregados++;
    }
  });

  if (Array.isArray(datos?.feriados)) {
    estado.feriados = Array.from(new Set([...estado.feriados, ...datos.feriados])).sort();
  }

  guardarEstado();
  return agregados;
}

function procesarTextoOEnlaceComunidad(texto) {
  const raw = String(texto || "").trim();
  if (!raw) throw new Error("Pega un enlace o código JSON primero.");

  if (raw.includes("#perfil=")) {
    const part = raw.split("#perfil=")[1].split("&")[0];
    return fusionarComunidad(decodificarBase64Url(part));
  }
  if (raw.includes("#comunidad=")) {
    const part = raw.split("#comunidad=")[1].split("&")[0];
    return fusionarComunidad(decodificarBase64Url(part));
  }
  if (raw.startsWith("perfil:")) return fusionarComunidad(decodificarBase64Url(raw.slice(7)));
  if (raw.startsWith("comunidad:")) return fusionarComunidad(decodificarBase64Url(raw.slice(10)));

  return fusionarComunidad(JSON.parse(raw));
}

function mostrarQR(titulo, subtitulo, urlTexto) {
  const panel = document.getElementById("panel-qr-compartir");
  const titleEl = document.getElementById("titulo-qr-panel");
  const subEl = document.getElementById("subtitulo-qr-panel");
  const box = document.getElementById("contenedor-qr");

  if (titleEl) titleEl.textContent = titulo;
  if (subEl) subEl.textContent = subtitulo;
  if (box) {
    box.innerHTML = "";
    if (typeof window.QRCode === "function") {
      new window.QRCode(box, { text: String(urlTexto).slice(0, 900), width: 170, height: 170 });
    } else {
      box.textContent = urlTexto;
    }
  }
  if (panel) panel.classList.add("visible");
}

function obtenerClavesDisponibles() {
  if (estado.modo === "semanal") return DIAS_SEMANA_CORTO;
  return estado.letrasCiclo.length ? estado.letrasCiclo : ["A", "B", "C", "D", "E", "F"];
}

function renderPortadaYPerfil() {
  const t = obtenerTraduccion();
  const rolLabel = estado.rol === "maestro" ? t.roleTeacher : t.roleStudent;
  const modoLabel = estado.modo === "semanal" ? t.modeWeekly : t.cycleLabel;

  document.getElementById("portada-sub-tag").textContent = `${rolLabel} · ${modoLabel}`;
  aplicarIdiomaEnInterfaz();

  document.getElementById("btn-rol-estudiante").classList.toggle("activo", estado.rol === "estudiante");
  document.getElementById("btn-rol-maestro").classList.toggle("activo", estado.rol === "maestro");
  document.getElementById("btn-modo-ciclo").classList.toggle("activo", estado.modo === "ciclo");
  document.getElementById("btn-modo-semanal").classList.toggle("activo", estado.modo === "semanal");

  document.querySelectorAll('[id^="btn-idioma-"]').forEach((btn) => {
    btn.classList.toggle("activo", btn.id === `btn-idioma-${estado.idioma}`);
  });

  const emojiWrap = document.getElementById("chip-perfil-emoji");
  if (estado.perfil.tipoAvatar === "foto" && estado.perfil.foto) {
    emojiWrap.innerHTML = `<img src="${escaparHTML(estado.perfil.foto)}" alt="Avatar" class="avatar-mini-img" />`;
  } else if (estado.perfil.tipoAvatar === "bitmoji") {
    emojiWrap.innerHTML = `<span class="kawaii-charm kawaii-charm-circle charm-bounce">${escaparHTML(estado.perfil.emoji || "🦊")}</span>`;
  } else {
    emojiWrap.innerHTML = `<span class="kawaii-charm kawaii-charm-circle charm-wiggle">${escaparHTML(estado.perfil.emoji || "🦊")}</span>`;
  }

  document.getElementById("chip-perfil-nombre").textContent = estado.perfil.nombre || "Mi Perfil";
  document.getElementById("chip-perfil-cake").innerHTML = estado.perfil.cumple
    ? `<span class="kawaii-charm charm-sparkle">🎂</span> <span>${escaparHTML(estado.perfil.cumple.slice(5))}</span>`
    : "";

  document.getElementById("input-nombre-perfil").value = estado.perfil.nombre || "";
  document.getElementById("select-tipo-avatar").value = estado.perfil.tipoAvatar || "emoji";
  document.getElementById("input-emoji-perfil").value = estado.perfil.emoji || "🦊";
  document.getElementById("input-cumple-perfil").value = estado.perfil.cumple || "";

  const picker = document.getElementById("selector-emojis-rapidos");
  picker.innerHTML = "";
  EMOJIS_RAPIDOS.forEach((em) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `emoji-chip ${estado.perfil.emoji === em ? "activo" : ""}`;
    b.textContent = em;
    b.addEventListener("click", () => {
      estado.perfil.emoji = em;
      estado.perfil.tipoAvatar = "emoji";
      document.getElementById("input-emoji-perfil").value = em;
      document.getElementById("select-tipo-avatar").value = "emoji";
      guardarEstado();
      renderPortadaYPerfil();
    });
    picker.appendChild(b);
  });

  const bmPicker = document.getElementById("selector-bitmoji-fotos");
  bmPicker.innerHTML = "";
  BITMOJI_PRESETS.forEach((bm) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `emoji-chip ${estado.perfil.tipoAvatar === "bitmoji" && estado.perfil.emoji === bm.emoji ? "activo" : ""}`;
    b.textContent = `${bm.emoji} ${bm.label}`;
    b.addEventListener("click", () => {
      estado.perfil.emoji = bm.emoji;
      estado.perfil.tipoAvatar = "bitmoji";
      document.getElementById("input-emoji-perfil").value = bm.emoji;
      document.getElementById("select-tipo-avatar").value = "bitmoji";
      guardarEstado();
      renderPortadaYPerfil();
    });
    bmPicker.appendChild(b);
  });
}

function renderHeroYEnVivo() {
  const t = obtenerTraduccion();
  const fechaObj = parseISOFecha(estado.fechaSeleccionada);
  const esFeriado = estado.feriados.includes(estado.fechaSeleccionada);
  const esGym = estado.diasGym.includes(estado.fechaSeleccionada);
  const claveDia = obtenerClaveDiaParaFecha(estado.fechaSeleccionada);

  setTextById("texto-fecha-seleccionada", fechaObj.toLocaleDateString(t.locale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }));

  const letraEl = document.getElementById("letra-seleccionada");
  if (letraEl) {
    if (esFeriado) {
      letraEl.textContent = t.dayOff;
      letraEl.classList.add("libre");
    } else if (claveDia) {
      letraEl.textContent = claveDia;
      letraEl.classList.remove("libre");
    } else {
      letraEl.textContent = esFinDeSemana(fechaObj) ? t.weekend : t.dayOff;
      letraEl.classList.add("libre");
    }
  }

  setTextById("subtitulo-dia", esFeriado ? t.subDayOff : esGym ? t.subGym : t.subDefault);

  const gymBtn = document.getElementById("btn-toggle-gym");
  if (gymBtn) {
    gymBtn.classList.toggle("activo-gym", esGym);
    gymBtn.innerHTML = `<span class="kawaii-charm charm-bounce">🏋️</span> <span>${escaparHTML(t.gymBtn.replace(/^🏋️\s*/, ""))}</span>`;
  }

  const cumples = obtenerCumplesDelDia(estado.fechaSeleccionada);
  const cumpleEl = document.getElementById("cumple-aviso-dia");
  if (cumpleEl) {
    if (cumples.length) {
      cumpleEl.style.display = "inline-block";
      cumpleEl.innerHTML = `<span class="kawaii-charm charm-sparkle">🎂</span> <span>${escaparHTML(cumples.map((c) => `${c.emoji} ${c.nombre}`).join(", "))}</span>`;
    } else {
      cumpleEl.style.display = "none";
    }
  }

  const ahora = new Date();
  setTextById("reloj-en-vivo", ahora.toLocaleTimeString(t.locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" }));

  const hoyISO = obtenerFechaLocalISO(ahora);
  const claveHoy = obtenerClaveDiaParaFecha(hoyISO);
  const bloquesHoy = obtenerBloquesDeClave(claveHoy);
  const minsAhora = ahora.getHours() * 60 + ahora.getMinutes();

  let actual = null;
  let siguiente = null;

  bloquesHoy.forEach((b) => {
    const ini = minutosDesdeMedianoche(b.horaInicio);
    const fin = minutosDesdeMedianoche(b.horaFin);
    if (!actual && minsAhora >= ini && minsAhora < fin) {
      actual = b;
    } else if (!siguiente && minsAhora < ini) {
      siguiente = b;
    }
  });

  setTextById("live-bloque-actual", actual ? actual.materia : t.noCurrentBlock);
  setTextById("live-detalle-actual", actual ? `${actual.horaInicio} – ${actual.horaFin}${actual.salon ? ` · ${actual.salon}` : ""}` : (claveHoy ? `Día ${claveHoy}` : t.dayOff));

  setTextById("live-siguiente-bloque", siguiente ? siguiente.materia : t.noNextBlock);
  setTextById("live-detalle-siguiente", siguiente ? `${siguiente.horaInicio} – ${siguiente.horaFin}${siguiente.salon ? ` · ${siguiente.salon}` : ""}` : "");

  const bloquesDiaSel = obtenerBloquesDeClave(claveDia);
  const materiaDestacada = actual || siguiente || bloquesDiaSel[0] || null;
  setTextById("titulo-materia-muneco", materiaDestacada ? materiaDestacada.materia : (claveDia ? `Día ${claveDia}` : t.dayOff));
  setTextById("desc-materia-muneco", materiaDestacada ? `${materiaDestacada.horaInicio} – ${materiaDestacada.horaFin}${materiaDestacada.salon ? ` · ${materiaDestacada.salon}` : ""}` : t.subDefault);

  const munecoBox = document.getElementById("muneco-materia-box");
  if (munecoBox) {
    munecoBox.textContent = estado.perfil.tipoAvatar === "foto" && estado.perfil.foto ? "🦊" : (estado.perfil.emoji || "🦊");
  }
}

function renderCalendario() {
  const t = obtenerTraduccion();
  const [yStr, mStr] = String(estado.mesCalendario).split("-");
  const anio = Number(yStr);
  const mesIdx = Number(mStr) - 1;
  const primerDia = new Date(anio, mesIdx, 1);
  const ultimoDia = new Date(anio, mesIdx + 1, 0);
  const hoyISO = obtenerFechaLocalISO();

  setTextById("titulo-mes", primerDia.toLocaleDateString(t.locale, { month: "long", year: "numeric" }));

  const btnModoFeriados = document.getElementById("btn-modo-feriados-rapido");
  if (btnModoFeriados) {
    btnModoFeriados.classList.toggle("activo-gym", modoFeriadosRapido);
    btnModoFeriados.textContent = modoFeriadosRapido
      ? "🗓️ Marcar feriados: ON (toca días)"
      : "🗓️ Marcar feriados: OFF";
  }

  const grid = document.getElementById("cuadricula-calendario");
  if (!grid) return;
  grid.innerHTML = "";

  for (let i = 0; i < primerDia.getDay(); i++) {
    const vacio = document.createElement("div");
    vacio.className = "cal-dia vacio";
    grid.appendChild(vacio);
  }

  for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
    const fechaISO = `${anio}-${String(mesIdx + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cal-dia";

    if (fechaISO === hoyISO) btn.classList.add("hoy");
    if (fechaISO === estado.fechaSeleccionada) btn.classList.add("seleccionado");
    if (estado.feriados.includes(fechaISO)) btn.classList.add("feriado");
    if (obtenerCumplesDelDia(fechaISO).length) btn.classList.add("cumple");
    if (estado.diasGym.includes(fechaISO)) btn.classList.add("gym");

    const clave = obtenerClaveDiaParaFecha(fechaISO);
    const notasDia = estado.notasPorFecha[fechaISO] || [];
    const tieneCumple = obtenerCumplesDelDia(fechaISO).length > 0;
    const tieneGym = estado.diasGym.includes(fechaISO);

    let dotEmoji = "";
    if (tieneCumple) dotEmoji = "🎂";
    else if (tieneGym) dotEmoji = "🏋️";
    else if (notasDia.length) dotEmoji = "📌";

    btn.innerHTML = `
      <span class="cal-num">${dia}</span>
      <span class="cal-letra">${escaparHTML(clave || (estado.feriados.includes(fechaISO) ? "🏖️" : "·"))}</span>
      <span class="cal-dot">${dotEmoji}</span>
    `;

    btn.addEventListener("click", () => {
      if (modoFeriadosRapido) {
        alternarFeriadoFecha(fechaISO);
        return;
      }
      estado.fechaSeleccionada = fechaISO;
      document.getElementById("input-fecha-nota").value = fechaISO;
      document.getElementById("input-fecha-feriado").value = fechaISO;
      if (clave) estado.tabActiva = clave;
      guardarEstado();
      renderTodo();
    });

    grid.appendChild(btn);
  }
}

function renderTabsYBloques() {
  const t = obtenerTraduccion();
  const claves = obtenerClavesDisponibles();
  if (!claves.includes(estado.tabActiva)) estado.tabActiva = claves[0];

  setTextById("titulo-bloques-dia", `${t.blocksTitle} ${estado.tabActiva}`);

  const tabsEl = document.getElementById("tabs-dias");
  tabsEl.innerHTML = "";
  claves.forEach((clave) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `tab-btn ${estado.tabActiva === clave ? "activa" : ""}`;
    b.textContent = clave;
    b.addEventListener("click", () => {
      estado.tabActiva = clave;
      renderTabsYBloques();
    });
    tabsEl.appendChild(b);
  });

  const ul = document.getElementById("lista-clases");
  ul.innerHTML = "";
  const bloques = obtenerBloquesDeClave(estado.tabActiva);

  if (!bloques.length) {
    ul.innerHTML = `<li class="item-vacio">No hay bloques registrados para ${escaparHTML(estado.tabActiva)}.</li>`;
    return;
  }

  bloques.forEach((bl) => {
    const li = document.createElement("li");
    li.className = "clase-item";
    li.innerHTML = `
      <div>
        <strong>${escaparHTML(bl.materia)}</strong>
        <div class="clase-meta">${escaparHTML(bl.horaInicio)} – ${escaparHTML(bl.horaFin)}${bl.salon ? ` · ${escaparHTML(bl.salon)}` : ""}</div>
      </div>
      <button type="button" class="btn-eliminar" title="Eliminar">✕</button>
    `;
    li.querySelector(".btn-eliminar").addEventListener("click", () => {
      const arr = estado.horarios[estado.rol][estado.modo][estado.tabActiva] || [];
      estado.horarios[estado.rol][estado.modo][estado.tabActiva] = arr.filter((x) => x.id !== bl.id);
      guardarEstado();
      renderTodo();
    });
    ul.appendChild(li);
  });
}

function renderNotas() {
  const ul = document.getElementById("lista-notas");
  ul.innerHTML = "";
  const notas = estado.notasPorFecha[estado.fechaSeleccionada] || [];

  if (!notas.length) {
    ul.innerHTML = `<li class="item-vacio">Sin notas para ${escaparHTML(estado.fechaSeleccionada)}.</li>`;
    return;
  }

  notas.forEach((n) => {
    const li = document.createElement("li");
    li.className = "clase-item";
    li.innerHTML = `
      <div>
        <strong>${escaparHTML(n.texto)}</strong>
        <span class="badge-tipo">${escaparHTML(n.tipo || "Tarea")}</span>
        <div class="clase-meta">${escaparHTML(estado.fechaSeleccionada)}</div>
      </div>
      <button type="button" class="btn-eliminar" title="Eliminar">✕</button>
    `;
    li.querySelector(".btn-eliminar").addEventListener("click", () => {
      estado.notasPorFecha[estado.fechaSeleccionada] = (estado.notasPorFecha[estado.fechaSeleccionada] || []).filter((x) => x.id !== n.id);
      guardarEstado();
      renderTodo();
    });
    ul.appendChild(li);
  });
}

function renderAlarmas() {
  const ul = document.getElementById("lista-alarmas");
  ul.innerHTML = "";

  if (!estado.alarmas.length) {
    ul.innerHTML = `<li class="item-vacio">No tienes alarmas programadas.</li>`;
    return;
  }

  estado.alarmas.forEach((al) => {
    const li = document.createElement("li");
    li.className = "clase-item";
    li.innerHTML = `
      <div>
        <strong>${escaparHTML(al.hora)} · ${escaparHTML(al.etiqueta)}</strong>
        <div class="clase-meta">${escaparHTML(al.tipo)} · ${escaparHTML(al.repeticion)} · ${al.activa ? "Activa" : "Pausada"}</div>
      </div>
      <div style="display:flex;gap:0.4rem;align-items:center;">
        <button type="button" class="btn-sec">${al.activa ? "Pausar" : "Activar"}</button>
        <button type="button" class="btn-eliminar" title="Eliminar">✕</button>
      </div>
    `;
    li.querySelector(".btn-sec").addEventListener("click", () => {
      al.activa = !al.activa;
      guardarEstado();
      renderAlarmas();
    });
    li.querySelector(".btn-eliminar").addEventListener("click", () => {
      estado.alarmas = estado.alarmas.filter((x) => x.id !== al.id);
      guardarEstado();
      renderAlarmas();
    });
    ul.appendChild(li);
  });
}

function renderComunidad() {
  const ul = document.getElementById("lista-comunidad");
  ul.innerHTML = "";

  if (!estado.comunidad.length) {
    ul.innerHTML = `<li class="item-vacio">Aún no hay miembros en la comunidad.</li>`;
    return;
  }

  estado.comunidad.forEach((m) => {
    const li = document.createElement("li");
    li.className = "clase-item";
    li.innerHTML = `
      <div>
        <strong>${escaparHTML(m.emoji || "💜")} ${escaparHTML(m.nombre)}</strong>
        <div class="clase-meta">${m.cumple ? `🎂 ${escaparHTML(m.cumple.slice(5))}` : "Sin cumpleaños"}</div>
      </div>
      <button type="button" class="btn-eliminar" title="Eliminar">✕</button>
    `;
    li.querySelector(".btn-eliminar").addEventListener("click", () => {
      estado.comunidad = estado.comunidad.filter((x) => x.nombre !== m.nombre);
      guardarEstado();
      renderTodo();
    });
    ul.appendChild(li);
  });
}

function renderConfigYRespaldo() {
  setTextById("stat-inicio-ciclo", estado.fechaInicioCiclo || "--");
  setTextById("stat-letras-ciclo", estado.letrasCiclo.join(" · "));
  setTextById("stat-total-feriados", String(estado.feriados.length));

  document.getElementById("input-fecha-inicio-ciclo").value = estado.fechaInicioCiclo || "";
  document.getElementById("input-letras-ciclo").value = estado.letrasCiclo.join(", ");
  document.getElementById("input-correo-destino").value = estado.correoDestino || "";
  document.getElementById("input-minutos-antelacion").value = estado.minutosAntelacion ?? 15;
  document.getElementById("input-apps-script-url").value = estado.appsScriptUrl || "";
  document.getElementById("input-fecha-nota").value = estado.fechaSeleccionada;
  document.getElementById("input-fecha-feriado").value = estado.fechaSeleccionada;

  const ulF = document.getElementById("lista-feriados");
  ulF.innerHTML = "";
  if (!estado.feriados.length) {
    ulF.innerHTML = `<li class="item-vacio">No hay feriados marcados.</li>`;
  } else {
    estado.feriados.forEach((f) => {
      const li = document.createElement("li");
      li.className = "clase-item";
      li.innerHTML = `
        <strong>🏖️ ${escaparHTML(f)}</strong>
        <button type="button" class="btn-eliminar" title="Quitar">✕</button>
      `;
      li.querySelector(".btn-eliminar").addEventListener("click", () => {
        estado.feriados = estado.feriados.filter((x) => x !== f);
        guardarEstado();
        renderTodo();
      });
      ulF.appendChild(li);
    });
  }

  document.getElementById("area-json-respaldo").value = JSON.stringify(estado, null, 2);
}

function renderTodo() {
  renderPortadaYPerfil();
  renderHeroYEnVivo();
  renderCalendario();
  renderTabsYBloques();
  renderNotas();
  renderAlarmas();
  renderComunidad();
  renderConfigYRespaldo();
}

function vincularEventos() {
  document.querySelectorAll('[id^="btn-idioma-"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      estado.idioma = btn.id.replace("btn-idioma-", "");
      guardarEstado();
      renderTodo();
    });
  });

  document.getElementById("btn-modo-feriados-rapido").addEventListener("click", () => {
    modoFeriadosRapido = !modoFeriadosRapido;
    const estadoFoto = document.getElementById("estado-feriados-foto");
    if (estadoFoto) {
      estadoFoto.textContent = modoFeriadosRapido
        ? "Modo feriados activado: toca cualquier día en el calendario para marcarlo o quitarlo."
        : "";
    }
    renderCalendario();
  });

  document.getElementById("input-foto-calendario").addEventListener("change", procesarFotoCalendarioEscolar);

  document.getElementById("btn-iniciar-tutorial").addEventListener("click", () => mostrarPasoTutorial(0));
  document.getElementById("btn-saltar-todo").addEventListener("click", entrarALaAppPrincipal);
  document.getElementById("btn-paso-anterior").addEventListener("click", () => mostrarPasoTutorial(pasoTutorialActual - 1));
  document.getElementById("btn-paso-siguiente").addEventListener("click", () => {
    const pasos = (obtenerTraduccion().steps || PASOS_TUTORIAL_LOST);
    if (pasoTutorialActual < pasos.length - 1) mostrarPasoTutorial(pasoTutorialActual + 1);
    else entrarALaAppPrincipal();
  });
  document.getElementById("btn-omitir-tutorial").addEventListener("click", entrarALaAppPrincipal);
  document.getElementById("btn-ver-tutorial-app").addEventListener("click", () => abrirEntradaYFlujo(false));

  document.getElementById("btn-rol-estudiante").addEventListener("click", () => { estado.rol = "estudiante"; guardarEstado(); renderTodo(); });
  document.getElementById("btn-rol-maestro").addEventListener("click", () => { estado.rol = "maestro"; guardarEstado(); renderTodo(); });
  document.getElementById("btn-modo-ciclo").addEventListener("click", () => { estado.modo = "ciclo"; guardarEstado(); renderTodo(); });
  document.getElementById("btn-modo-semanal").addEventListener("click", () => { estado.modo = "semanal"; guardarEstado(); renderTodo(); });

  document.getElementById("btn-ir-hoy").addEventListener("click", () => {
    const hoy = obtenerFechaLocalISO();
    estado.fechaSeleccionada = hoy;
    estado.mesCalendario = hoy.slice(0, 7);
    guardarEstado();
    renderTodo();
  });

  document.getElementById("btn-toggle-gym").addEventListener("click", () => {
    const f = estado.fechaSeleccionada;
    if (estado.diasGym.includes(f)) estado.diasGym = estado.diasGym.filter((x) => x !== f);
    else estado.diasGym.push(f);
    guardarEstado();
    renderTodo();
  });

  document.getElementById("mes-anterior").addEventListener("click", () => {
    const [y, m] = estado.mesCalendario.split("-").map(Number);
    const d = new Date(y, m - 2, 1);
    estado.mesCalendario = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    renderCalendario();
  });

  document.getElementById("mes-siguiente").addEventListener("click", () => {
    const [y, m] = estado.mesCalendario.split("-").map(Number);
    const d = new Date(y, m, 1);
    estado.mesCalendario = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    renderCalendario();
  });

  document.getElementById("form-clase").addEventListener("submit", (e) => {
    e.preventDefault();
    const materia = document.getElementById("input-materia").value.trim();
    const salon = document.getElementById("input-salon").value.trim();
    const horaInicio = document.getElementById("input-hora-inicio").value;
    const horaFin = document.getElementById("input-hora-fin").value;
    if (!materia || !horaInicio || !horaFin) return;

    const lista = estado.horarios[estado.rol][estado.modo][estado.tabActiva] || [];
    lista.push({ id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, materia, salon, horaInicio, horaFin });
    estado.horarios[estado.rol][estado.modo][estado.tabActiva] = lista;
    document.getElementById("input-materia").value = "";
    document.getElementById("input-salon").value = "";
    guardarEstado();
    renderTodo();
  });

  document.getElementById("form-nota").addEventListener("submit", (e) => {
    e.preventDefault();
    const fecha = document.getElementById("input-fecha-nota").value || estado.fechaSeleccionada;
    const tipo = document.getElementById("select-tipo-nota").value;
    const texto = document.getElementById("input-texto-nota").value.trim();
    if (!texto) return;

    if (!Array.isArray(estado.notasPorFecha[fecha])) estado.notasPorFecha[fecha] = [];
    estado.notasPorFecha[fecha].push({ id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, tipo, texto });
    document.getElementById("input-texto-nota").value = "";
    guardarEstado();
    renderTodo();
  });

  document.getElementById("form-alarma").addEventListener("submit", (e) => {
    e.preventDefault();
    const hora = document.getElementById("input-hora-alarma").value;
    const tipo = document.getElementById("select-tipo-alarma").value;
    const repeticion = document.getElementById("select-repeticion-alarma").value;
    const tono = document.getElementById("select-tono-alarma").value;
    const etiqueta = document.getElementById("input-etiqueta-alarma").value.trim();
    if (!hora || !etiqueta) return;

    estado.alarmas.push({ id: `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, hora, tipo, repeticion, tono, etiqueta, activa: true });
    document.getElementById("input-etiqueta-alarma").value = "";
    guardarEstado();
    renderAlarmas();
  });

  document.getElementById("btn-probar-alarma").addEventListener("click", () => {
    dispararAlarma("🔊 Prueba de alarma", "Sonido de prueba LOST", document.getElementById("select-tono-alarma").value);
  });

  document.getElementById("btn-permiso-notif").addEventListener("click", async () => {
    if (!("Notification" in window)) return;
    await Notification.requestPermission();
  });

  document.getElementById("btn-posponer-alarma").addEventListener("click", posponerAlarma5Min);
  document.getElementById("btn-detener-alarma").addEventListener("click", detenerAlarma);

  document.getElementById("input-foto-perfil").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      estado.perfil.foto = String(reader.result || "");
      estado.perfil.tipoAvatar = "foto";
      document.getElementById("select-tipo-avatar").value = "foto";
      guardarEstado();
      renderPortadaYPerfil();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("form-perfil").addEventListener("submit", (e) => {
    e.preventDefault();
    estado.perfil.nombre = document.getElementById("input-nombre-perfil").value.trim() || "Mi Perfil";
    estado.perfil.tipoAvatar = document.getElementById("select-tipo-avatar").value;
    estado.perfil.emoji = document.getElementById("input-emoji-perfil").value.trim() || "🦊";
    estado.perfil.cumple = document.getElementById("input-cumple-perfil").value;
    guardarEstado();
    renderTodo();
    setMsg("msg-perfil", "Perfil guardado.");
  });

  document.getElementById("btn-link-mi-perfil").addEventListener("click", async () => {
    const encoded = codificarBase64Url({ nombre: estado.perfil.nombre, emoji: estado.perfil.emoji, cumple: estado.perfil.cumple });
    const link = `${window.location.href.split("#")[0]}#perfil=${encoded}`;
    await compartirEnlaceOClipboard("Mi perfil", link, "Enlace de perfil copiado.");
    setMsg("msg-perfil", "Enlace de perfil listo para compartir.");
  });

  document.getElementById("btn-qr-mi-perfil").addEventListener("click", () => {
    const encoded = codificarBase64Url({ nombre: estado.perfil.nombre, emoji: estado.perfil.emoji, cumple: estado.perfil.cumple });
    const link = `${window.location.href.split("#")[0]}#perfil=${encoded}`;
    mostrarQR("QR de mi perfil", estado.perfil.nombre, link);
  });

  document.getElementById("form-comunidad").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("input-nombre-amigo").value.trim();
    const emoji = document.getElementById("input-emoji-amigo").value.trim() || "💜";
    const cumple = document.getElementById("input-cumple-amigo").value;
    if (!nombre) return;
    fusionarComunidad({ nombre, emoji, cumple });
    document.getElementById("input-nombre-amigo").value = "";
    document.getElementById("input-cumple-amigo").value = "";
    renderTodo();
  });

  document.getElementById("btn-fusionar-comunidad").addEventListener("click", () => {
    try {
      const txt = document.getElementById("input-enlace-comunidad").value;
      const n = procesarTextoOEnlaceComunidad(txt);
      renderTodo();
      setMsg("msg-respaldo", `Comunidad actualizada (${n} registro(s)).`);
    } catch (err) {
      setMsg("msg-respaldo", err.message || "No se pudo procesar el enlace o JSON.", true);
    }
  });

  document.getElementById("btn-link-comunidad").addEventListener("click", async () => {
    const encoded = codificarBase64Url({ comunidad: estado.comunidad, feriados: estado.feriados });
    const link = `${window.location.href.split("#")[0]}#comunidad=${encoded}`;
    await compartirEnlaceOClipboard("Comunidad LOST", link, "Enlace de comunidad copiado.");
  });

  document.getElementById("btn-qr-comunidad").addEventListener("click", () => {
    const encoded = codificarBase64Url({ comunidad: estado.comunidad, feriados: estado.feriados });
    const link = `${window.location.href.split("#")[0]}#comunidad=${encoded}`;
    mostrarQR("QR de comunidad", `${estado.comunidad.length} miembro(s)`, link);
  });

  document.getElementById("btn-cerrar-qr").addEventListener("click", () => {
    document.getElementById("panel-qr-compartir").classList.remove("visible");
  });

  document.getElementById("form-config-ciclo").addEventListener("submit", (e) => {
    e.preventDefault();
    estado.fechaInicioCiclo = document.getElementById("input-fecha-inicio-ciclo").value || obtenerFechaLocalISO();
    const letras = document.getElementById("input-letras-ciclo").value.split(",").map((s) => s.trim()).filter(Boolean);
    if (letras.length) estado.letrasCiclo = letras;
    estado.correoDestino = document.getElementById("input-correo-destino").value.trim();
    estado.minutosAntelacion = Number(document.getElementById("input-minutos-antelacion").value || 15);
    estado.appsScriptUrl = document.getElementById("input-apps-script-url").value.trim();
    guardarEstado();
    renderTodo();
    setMsg("msg-respaldo", "Configuración guardada.");
  });

  document.getElementById("btn-toggle-feriado").addEventListener("click", () => {
    const f = document.getElementById("input-fecha-feriado").value || estado.fechaSeleccionada;
    alternarFeriadoFecha(f);
  });

  document.getElementById("btn-copiar-json").addEventListener("click", async () => {
    const jsonTxt = JSON.stringify(estado, null, 2);
    document.getElementById("area-json-respaldo").value = jsonTxt;
    try { await navigator.clipboard.writeText(jsonTxt); } catch (e) {}
    setMsg("msg-respaldo", "Respaldo JSON copiado.");
  });

  document.getElementById("btn-importar-json").addEventListener("click", () => {
    try {
      const parsed = JSON.parse(document.getElementById("area-json-respaldo").value);
      estado = { ...crearEstadoInicial(), ...parsed };
      guardarEstado();
      renderTodo();
      setMsg("msg-respaldo", "Respaldo JSON importado.");
    } catch (err) {
      setMsg("msg-respaldo", "JSON inválido.", true);
    }
  });

  document.getElementById("btn-sync-calendar").addEventListener("click", async () => {
    if (!estado.appsScriptUrl) return setMsg("msg-respaldo", "Configura primero la URL de Google Apps Script.", true);
    try {
      await fetch(estado.appsScriptUrl, { method: "POST", mode: "no-cors", body: JSON.stringify({ accion: "sync_calendar", estado }) });
      setMsg("msg-respaldo", "Solicitud enviada a Google Apps Script.");
    } catch (err) {
      setMsg("msg-respaldo", "Error al enviar a Apps Script.", true);
    }
  });

  document.getElementById("btn-sync-correo").addEventListener("click", async () => {
    if (!estado.appsScriptUrl) return setMsg("msg-respaldo", "Configura primero la URL de Google Apps Script.", true);
    try {
      await fetch(estado.appsScriptUrl, { method: "POST", mode: "no-cors", body: JSON.stringify({ accion: "enviar_correo", correo: estado.correoDestino, estado }) });
      setMsg("msg-respaldo", "Solicitud de correo enviada.");
    } catch (err) {
      setMsg("msg-respaldo", "Error al enviar correo.", true);
    }
  });

  document.querySelectorAll(".kawaii-tab-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      cambiarVistaApp(btn.getAttribute("data-target-vista"));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  vincularEventos();
  abrirEntradaYFlujo(true);
  renderTodo();

  if (window.location.hash) {
    try {
      const agregados = procesarTextoOEnlaceComunidad(window.location.hash);
      if (agregados > 0) {
        entrarALaAppPrincipal();
        renderTodo();
        setMsg("msg-respaldo", `Se importaron ${agregados} contacto(s) desde el enlace.`);
      }
    } catch (e) {}
  }

  setInterval(() => {
    renderHeroYEnVivo();
    verificarAlarmasCadaSegundo();
  }, 1000);
});