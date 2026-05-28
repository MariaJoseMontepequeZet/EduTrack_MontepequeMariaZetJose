/**
 * EduTrack — app.js v2.2
 * Correcciones aplicadas:
 * - Landing Page por defecto.
 * - Login con datos demo integrados.
 * - Grid de estudiantes limitado a 12 cards por pantalla con paginación funcional.
 */
(function () {
    'use strict';

    /* ── Dataset inicial — 35 estudiantes colombianos ── */
    var DATASET_INICIAL = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'pjuan5058@gmail.com', ciudad: 'Bogotá', curso: 'Desarrollo Web', progreso: 75, fechaInscripcion: '2023-01-15', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 2, nombre: 'María', apellido: 'Gómez', email: 'maria.gomez91@gmail.com', ciudad: 'Medellín', curso: 'Diseño UX/UI', progreso: 60, fechaInscripcion: '2023-02-20', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 3, nombre: 'Carlos', apellido: 'López', email: 'carlos.lopezdev@gmail.com', ciudad: 'Cali', curso: 'Marketing Digital', progreso: 85, fechaInscripcion: '2023-03-10', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 4, nombre: 'Ana', apellido: 'Martínez', email: 'anamartinez14@gmail.com', ciudad: 'Bogotá', curso: 'Desarrollo Web', progreso: 90, fechaInscripcion: '2023-04-05', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 5, nombre: 'Luis', apellido: 'García', email: 'luisgarcia.tech@gmail.com', ciudad: 'Medellín', curso: 'Diseño UX/UI', progreso: 70, fechaInscripcion: '2023-05-10', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 6, nombre: 'Andrés', apellido: 'Rodríguez', email: 'andresrodriguez92@gmail.com', ciudad: 'Bogotá', curso: 'Python y Data Science', progreso: 45, fechaInscripcion: '2023-06-15', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 7, nombre: 'Valentina', apellido: 'Torres', email: 'valetorres.dev@gmail.com', ciudad: 'Medellín', curso: 'Full Stack Web', progreso: 80, fechaInscripcion: '2023-07-20', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 8, nombre: 'Felipe', apellido: 'González', email: 'felipegonzalez.co@gmail.com', ciudad: 'Bogotá', curso: 'Python y Data Science', progreso: 30, fechaInscripcion: '2023-08-10', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 9, nombre: 'Daniela', apellido: 'Vargas', email: 'danielavargas14@gmail.com', ciudad: 'Cali', curso: 'DevOps y Cloud', progreso: 100, fechaInscripcion: '2023-09-05', plan: 'Premium', montoUSD: 99.99, activo: false },
        { id: 10, nombre: 'Santiago', apellido: 'Herrera', email: 'santiagoherrera.med@gmail.com', ciudad: 'Medellín', curso: 'Desarrollo Web', progreso: 55, fechaInscripcion: '2023-10-12', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 11, nombre: 'Sofía', apellido: 'Jiménez', email: 'sofiajimenez.bog@gmail.com', ciudad: 'Bogotá', curso: 'Diseño UX/UI', progreso: 70, fechaInscripcion: '2023-11-18', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 12, nombre: 'Miguel', apellido: 'Castro', email: 'miguelcastro.bar@gmail.com', ciudad: 'Barranquilla', curso: 'SQL y Bases de Datos', progreso: 90, fechaInscripcion: '2024-01-08', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 13, nombre: 'Camila', apellido: 'Ruiz', email: 'camilaruiz2024@gmail.com', ciudad: 'Bogotá', curso: 'Marketing Digital', progreso: 40, fechaInscripcion: '2024-02-14', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 14, nombre: 'Diego', apellido: 'Mendoza', email: 'diegomendoza.tech@gmail.com', ciudad: 'Medellín', curso: 'React Native', progreso: 65, fechaInscripcion: '2024-03-20', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 15, nombre: 'Isabella', apellido: 'Suárez', email: 'isabellasuarez.col@gmail.com', ciudad: 'Bogotá', curso: 'Python y Data Science', progreso: 100, fechaInscripcion: '2024-04-10', plan: 'Premium', montoUSD: 99.99, activo: false },
        { id: 16, nombre: 'Nicolás', apellido: 'Reyes', email: 'nicolasreyes.crt@gmail.com', ciudad: 'Cartagena', curso: 'Desarrollo Web', progreso: 20, fechaInscripcion: '2024-05-05', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 17, nombre: 'Adriana', apellido: 'Molina', email: 'adrianamolina.dev@gmail.com', ciudad: 'Medellín', curso: 'Python y Data Science', progreso: 75, fechaInscripcion: '2024-06-15', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 18, nombre: 'Alejandro', apellido: 'Ortega', email: 'alejandroortega88@gmail.com', ciudad: 'Bogotá', curso: 'Full Stack Web', progreso: 85, fechaInscripcion: '2024-07-22', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 19, nombre: 'Paola', apellido: 'Silva', email: 'paolasilva.cali@gmail.com', ciudad: 'Cali', curso: 'Diseño UX/UI', progreso: 50, fechaInscripcion: '2024-08-18', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 20, nombre: 'Sebastián', apellido: 'Rojas', email: 'sebastianrojas.buc@gmail.com', ciudad: 'Bucaramanga', curso: 'DevOps y Cloud', progreso: 15, fechaInscripcion: '2024-09-10', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 21, nombre: 'Natalia', apellido: 'Vega', email: 'nataliavega.bog@gmail.com', ciudad: 'Bogotá', curso: 'SQL y Bases de Datos', progreso: 100, fechaInscripcion: '2024-10-05', plan: 'Premium', montoUSD: 99.99, activo: false },
        { id: 22, nombre: 'David', apellido: 'Navarro', email: 'davidnavarro.med@gmail.com', ciudad: 'Medellín', curso: 'React Native', progreso: 45, fechaInscripcion: '2024-11-12', plan: 'Básico', montoUSD: 29.99, activo: false },
        { id: 23, nombre: 'Camilo', apellido: 'Ramírez', email: 'camiloramirez.col@gmail.com', ciudad: 'Bogotá', curso: 'Marketing Digital', progreso: 60, fechaInscripcion: '2024-12-08', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 24, nombre: 'Laura', apellido: 'Moreno', email: 'lauramoreno.bar@gmail.com', ciudad: 'Barranquilla', curso: 'Full Stack Web', progreso: 80, fechaInscripcion: '2025-01-15', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 25, nombre: 'Roberto', apellido: 'Castillo', email: 'robertocastillo.dev@gmail.com', ciudad: 'Cali', curso: 'Desarrollo Web', progreso: 35, fechaInscripcion: '2025-02-10', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 26, nombre: 'Claudia', apellido: 'Patiño', email: 'claudiapatino.bog@gmail.com', ciudad: 'Bogotá', curso: 'DevOps y Cloud', progreso: 90, fechaInscripcion: '2025-03-05', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 27, nombre: 'Fernando', apellido: 'Ospina', email: 'fernandoospina.per@gmail.com', ciudad: 'Pereira', curso: 'Python y Data Science', progreso: 25, fechaInscripcion: '2025-04-01', plan: 'Básico', montoUSD: 29.99, activo: false },
        { id: 28, nombre: 'Marcela', apellido: 'Acosta', email: 'marcelaacosta.med@gmail.com', ciudad: 'Medellín', curso: 'Diseño UX/UI', progreso: 70, fechaInscripcion: '2025-04-15', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 29, nombre: 'Iván', apellido: 'Bermúdez', email: 'ivanbermudez.tech@gmail.com', ciudad: 'Bogotá', curso: 'React Native', progreso: 55, fechaInscripcion: '2025-04-20', plan: 'Premium', montoUSD: 99.99, activo: true },
        { id: 30, nombre: 'Sandra', apellido: 'Quintero', email: 'sandraquintero.bar@gmail.com', ciudad: 'Barranquilla', curso: 'SQL y Bases de Datos', progreso: 100, fechaInscripcion: '2024-01-20', plan: 'Premium', montoUSD: 99.99, activo: false },
        { id: 31, nombre: 'Gustavo', apellido: 'Londoño', email: 'gustavolondono.col@gmail.com', ciudad: 'Medellín', curso: 'Marketing Digital', progreso: 40, fechaInscripcion: '2024-02-28', plan: 'Básico', montoUSD: 29.99, activo: true },
        { id: 32, nombre: 'Juliana', apellido: 'Franco', email: 'julianafranco.bog@gmail.com', ciudad: 'Bogotá', curso: 'Full Stack Web', progreso: 65, fechaInscripcion: '2024-03-15', plan: 'Estándar', montoUSD: 59.99, activo: true },
        { id: 33, nombre: 'Mateo', apellido: 'Salcedo', email: 'mateosalcedo.crt@gmail.com', ciudad: 'Cartagena', curso: 'DevOps y Cloud', progreso: 100, fechaInscripcion: '2023-12-10', plan: 'Premium', montoUSD: 99.99, activo: false },
        { id: 34, nombre: 'Andrea', apellido: 'Prada', email: 'andreaprada.bog@gmail.com', ciudad: 'Bogotá', curso: 'Desarrollo Web', progreso: 50, fechaInscripcion: '2024-04-25', plan: 'Básico', montoUSD: 29.99, activo: false },
        { id: 35, nombre: 'Hernán', apellido: 'Zapata', email: 'hernanzapata.col@gmail.com', ciudad: 'Cali', curso: 'React Native', progreso: 75, fechaInscripcion: '2024-05-30', plan: 'Estándar', montoUSD: 59.99, activo: true }
    ];

    var STORAGE_KEY = 'edutrack_estudiantes';
    var PLANES_MONTO = { 'Básico': 29.99, 'Estándar': 59.99, 'Premium': 99.99 };

    var state = {
        estudiantes: [],
        listaFiltrada: [],
        editandoId: null,
        grafico: null,
        confirmCb: null,
        vistaActual: 'landing',
        paginaActual: 1,
        itemsPorPagina: 12
    };

    /* ════════════════════════════════════════════
       ROUTER — landing | login | dashboard
    ════════════════════════════════════════════ */
    function mostrarVista(nombre, datos) {
        var saliente = document.getElementById('view-' + state.vistaActual);
        var entrante = document.getElementById('view-' + nombre);
        if (!entrante || nombre === state.vistaActual) return;

        if (saliente) {
            saliente.classList.add('view--leaving');
            setTimeout(function () {
                saliente.classList.remove('view--active', 'view--leaving');
            }, 350);
        }

        setTimeout(function () {
            entrante.classList.add('view--active');
            state.vistaActual = nombre;
            window.scrollTo(0, 0);

            if (nombre === 'dashboard') {
                actualizarUsuarioDashboard(datos || {});
                actualizarFechaTopbar();
                cargarDatos();
                poblarSelectCiudades();
                filtrar(); // Fuerza la lógica de paginación
                actualizarKPIs();
                actualizarGrafico();
            }
            if (nombre === 'login' || nombre === 'landing') {
                window.EduTrack && window.EduTrack.closeSidebar && window.EduTrack.closeSidebar();
            }
        }, nombre === 'dashboard' ? 350 : 0);
    }

    function actualizarUsuarioDashboard(d) {
        var nombre = (d && d.nombre) ? d.nombre : 'Estudiante';
        var apellido = (d && d.apellido) ? d.apellido : '';
        var nombreCompleto = (nombre + ' ' + apellido).trim();
        var set = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
        set('greetingNombre', nombre);
        set('sidebarNombre', nombreCompleto);
        set('sidebarRol', 'Administrador');
        var av = document.getElementById('sidebarAvatar');
        if (av) av.textContent = nombre[0].toUpperCase();
    }

    function actualizarFechaTopbar() {
        var el = document.getElementById('topbarFecha');
        if (!el) return;
        var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        var hoy = new Date();
        el.textContent = dias[hoy.getDay()] + ', ' + hoy.getDate() + ' de ' + meses[hoy.getMonth()] + ' de ' + hoy.getFullYear();
    }

    /* ════════════════════════════════════════════
       NAVEGACIÓN DEL SIDEBAR
    ════════════════════════════════════════════ */
    function initNavSidebar() {
        var SECCIONES = {
            'dashboard': 'secDashboard',
            'estudiantes': 'secEstudiantes',
            'cursos': 'secCursos',
            'reportes': 'secReportes',
            'configuracion': 'secConfiguracion'
        };

        document.querySelectorAll('.db-sidebar__nav-link').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var seccion = this.getAttribute('data-section');
                if (!seccion) return;

                /* Actualizar link activo */
                document.querySelectorAll('.db-sidebar__nav-link').forEach(function (l) {
                    l.classList.remove('db-sidebar__nav-link--active');
                });
                this.classList.add('db-sidebar__nav-link--active');

                /* Mostrar la sección correspondiente */
                Object.keys(SECCIONES).forEach(function (k) {
                    var sec = document.getElementById(SECCIONES[k]);
                    if (sec) {
                        if (k === seccion) {
                            sec.classList.remove('db-section--hidden');
                            sec.style.display = 'block';
                        } else {
                            sec.classList.add('db-section--hidden');
                            sec.style.display = 'none';
                        }
                    }
                });

                /* Cerrar sidebar en mobile */
                if (window.innerWidth < 768) {
                    window.EduTrack && window.EduTrack.closeSidebar && window.EduTrack.closeSidebar();
                }
            });
        });
    }

    /* ════════════════════════════════════════════
       1. cargarDatos
    ════════════════════════════════════════════ */
    function cargarDatos() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var p = JSON.parse(raw);
                if (Array.isArray(p) && p.length) { state.estudiantes = p; return; }
            }
        } catch (e) { console.warn('localStorage error', e); }
        state.estudiantes = DATASET_INICIAL.slice();
        guardarDatos();
    }

    /* ════════════════════════════════════════════
       2. guardarDatos
    ════════════════════════════════════════════ */
    function guardarDatos() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.estudiantes)); }
        catch (e) { showToast('Error al guardar', 'error'); }
    }

    /* ════════════════════════════════════════════
       KPIs
    ════════════════════════════════════════════ */
    function actualizarKPIs() {
        var activos = state.estudiantes.filter(function (e) { return e.activo; }).length;
        var total = state.estudiantes.length;
        var avg = total
            ? Math.round(state.estudiantes.reduce(function (s, e) { return s + e.progreso; }, 0) / total)
            : 0;

        var set = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
        set('kpiCursos', activos);
        set('kpiProgreso', avg + '%');
        set('kpiTotal', total);

        var bar = document.getElementById('kpiProgresoBar');
        if (bar) bar.style.setProperty('--progress-value', avg + '%');
    }

    /* ════════════════════════════════════════════
       3. renderizarCards & Paginación
    ════════════════════════════════════════════ */
    function planSlug(p) {
        return (p || '').toLowerCase()
            .replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i')
            .replace(/ó/g, 'o').replace(/ú/g, 'u')
            .replace(/\s+/g, '');
    }
    function iniciales(n, a) { return ((n[0] || '') + (a[0] || '')).toUpperCase(); }
    function progresoClass(p) { return p >= 100 ? 'progress-fill--complete' : p < 40 ? 'progress-fill--low' : ''; }
    function formatFecha(d) { if (!d) return '—'; var p = d.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }

    function renderizarCards(lista) {
        var grid = document.getElementById('studentsGrid');
        if (!grid) return;

        if (!lista || !lista.length) {
            grid.innerHTML = '<div class="empty-state"><div class="empty-state__icon">🔍</div>' +
                '<p class="empty-state__title">Sin resultados</p>' +
                '<p>Ajusta los filtros o agrega un estudiante.</p></div>';
            actualizarContador(0);
            renderizarPaginacion(0);
            return;
        }

        /* LÓGICA DE PAGINACIÓN: Cortar la lista a 12 items */
        var inicio = (state.paginaActual - 1) * state.itemsPorPagina;
        var fin = inicio + state.itemsPorPagina;
        var paginaDatos = lista.slice(inicio, fin);

        grid.innerHTML = paginaDatos.map(function (e, i) {
            return '<article class="student-card' + (e.activo ? '' : ' student-card--inactive') + '" ' +
                'style="animation-delay:' + Math.min(i * 30, 300) + 'ms" data-id="' + e.id + '">' +
                '<div class="card-header">' +
                '<div class="card-avatar">' + iniciales(e.nombre, e.apellido) + '</div>' +
                '<div class="card-info">' +
                '<p class="card-name">' + e.nombre + ' ' + e.apellido + '</p>' +
                '<p class="card-email">' + e.email + '</p>' +
                '</div>' +
                '<span class="plan-badge plan-badge--' + planSlug(e.plan) + '">' + e.plan + '</span>' +
                '</div>' +
                '<div class="card-body">' +
                '<div class="card-detail"><span class="card-detail__icon">📍</span><span class="card-detail__text">' + e.ciudad + '</span></div>' +
                '<div class="card-detail"><span class="card-detail__icon">💻</span><span class="card-detail__text">' + e.curso + '</span></div>' +
                '<div class="card-detail"><span class="card-detail__icon">📅</span><span class="card-detail__text">' + formatFecha(e.fechaInscripcion) + '</span></div>' +
                '</div>' +
                '<div class="progress-wrap">' +
                '<div class="progress-label"><span>Progreso</span><strong>' + e.progreso + '%</strong></div>' +
                '<div class="progress-track"><div class="progress-fill ' + progresoClass(e.progreso) + '" style="width:' + e.progreso + '%"></div></div>' +
                '</div>' +
                '<div class="card-actions">' +
                '<button class="btn btn-secondary btn--sm" onclick="EduTrack.abrirModal(' + e.id + ')">✏️ Editar</button>' +
                '<button class="btn btn-danger    btn--sm" onclick="EduTrack.eliminarEstudiante(' + e.id + ')">🗑 Eliminar</button>' +
                '</div>' +
                '</article>';
        }).join('');

        actualizarContador(lista.length);
        renderizarPaginacion(lista.length);
    }

    function renderizarPaginacion(totalItems) {
        var container = document.getElementById('paginationContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'paginationContainer';
            container.className = 'pagination';
            var grid = document.getElementById('studentsGrid');
            grid.parentNode.insertBefore(container, grid.nextSibling);
        }

        var totalPaginas = Math.ceil(totalItems / state.itemsPorPagina);
        if (totalPaginas <= 1) {
            container.innerHTML = '';
            return;
        }

        var btnAnt = state.paginaActual === 1 ? 'disabled' : '';
        var btnSig = state.paginaActual === totalPaginas ? 'disabled' : '';

        var html = '<button class="btn btn-secondary btn--sm" onclick="EduTrack.cambiarPagina(' + (state.paginaActual - 1) + ')" ' + btnAnt + '>← Anterior</button>';
        html += '<span class="pagination__info">Página ' + state.paginaActual + ' de ' + totalPaginas + '</span>';
        html += '<button class="btn btn-secondary btn--sm" onclick="EduTrack.cambiarPagina(' + (state.paginaActual + 1) + ')" ' + btnSig + '>Siguiente →</button>';

        container.innerHTML = html;
    }

    function cambiarPagina(p) {
        var totalPaginas = Math.ceil(state.listaFiltrada.length / state.itemsPorPagina);
        if (p >= 1 && p <= totalPaginas) {
            state.paginaActual = p;
            renderizarCards(state.listaFiltrada);
            // Hacer scroll suave hacia arriba
            document.getElementById('secEstudiantes').scrollIntoView({ behavior: 'smooth' });
        }
    }

    function actualizarContador(n) {
        var el = document.getElementById('resultsCount');
        if (el) el.innerHTML = 'Mostrando <strong>' + n + '</strong> estudiantes en total';
    }

    /* ════════════════════════════════════════════
       4. filtrar
    ════════════════════════════════════════════ */
    function filtrar() {
        var q = ((document.getElementById('searchInput') || {}).value || '').toLowerCase().trim();
        var ciudad = ((document.getElementById('filterCiudad') || {}).value || '');
        var plan = ((document.getElementById('filterPlan') || {}).value || '');
        var estado = ((document.getElementById('filterEstado') || {}).value || '');

        var hay = q || ciudad || plan || estado;
        var btn = document.getElementById('btnResetFiltros');
        if (btn) btn.classList.toggle('visible', !!hay);

        state.listaFiltrada = state.estudiantes.filter(function (e) {
            return (!q || (e.nombre + ' ' + e.apellido).toLowerCase().includes(q) || e.email.toLowerCase().includes(q))
                && (!ciudad || e.ciudad === ciudad)
                && (!plan || e.plan === plan)
                && (!estado || (estado === 'activo' ? e.activo : !e.activo));
        });

        state.paginaActual = 1; // Volver a pág 1 al filtrar
        renderizarCards(state.listaFiltrada);
    }

    /* ════════════════════════════════════════════
       5. abrirModal
    ════════════════════════════════════════════ */
    function abrirModal(id) {
        state.editandoId = id || null;
        limpiarFormulario();
        if (id) {
            var e = state.estudiantes.find(function (x) { return x.id === id; });
            if (!e) return;
            document.getElementById('modalTitulo').textContent = 'Editar Estudiante';
            document.getElementById('fNombre').value = e.nombre;
            document.getElementById('fApellido').value = e.apellido;
            document.getElementById('fEmail').value = e.email;
            document.getElementById('fCiudad').value = e.ciudad;
            document.getElementById('fCurso').value = e.curso;
            document.getElementById('fPlan').value = e.plan;
            document.getElementById('fProgreso').value = e.progreso;
            document.getElementById('fProgresoVal').textContent = e.progreso + '%';
            document.getElementById('fFecha').value = e.fechaInscripcion;
            document.getElementById('fActivo').checked = e.activo;
            sincronizarMonto(e.plan);
        } else {
            document.getElementById('modalTitulo').textContent = 'Agregar Estudiante';
            document.getElementById('fProgreso').value = 0;
            document.getElementById('fProgresoVal').textContent = '0%';
            document.getElementById('fActivo').checked = true;
            document.getElementById('fFecha').value = new Date().toISOString().split('T')[0];
            sincronizarMonto('Básico');
        }
        document.getElementById('modalOverlay').classList.add('is-open');
        document.getElementById('fNombre').focus();
    }

    function cerrarModal() {
        document.getElementById('modalOverlay').classList.remove('is-open');
        state.editandoId = null;
    }

    function limpiarFormulario() {
        var f = document.getElementById('formEstudiante'); if (!f) return;
        f.reset();
        f.querySelectorAll('.is-error').forEach(function (el) { el.classList.remove('is-error'); });
        f.querySelectorAll('.form-group__error').forEach(function (el) { el.classList.remove('visible'); el.textContent = ''; });
    }

    /* ════════════════════════════════════════════
       6. guardarEstudiante
    ════════════════════════════════════════════ */
    function guardarEstudiante() {
        var g = function (id) { return document.getElementById(id); };
        var d = {
            nombre: g('fNombre').value.trim(),
            apellido: g('fApellido').value.trim(),
            email: g('fEmail').value.trim(),
            ciudad: g('fCiudad').value,
            curso: g('fCurso').value,
            plan: g('fPlan').value,
            progreso: parseInt(g('fProgreso').value, 10),
            fecha: g('fFecha').value,
            activo: g('fActivo').checked
        };
        if (validarCampos(d).length) return;
        var monto = PLANES_MONTO[d.plan] || 29.99;

        if (state.editandoId) {
            var idx = state.estudiantes.findIndex(function (e) { return e.id === state.editandoId; });
            if (idx > -1) Object.assign(state.estudiantes[idx], {
                nombre: d.nombre, apellido: d.apellido, email: d.email,
                ciudad: d.ciudad, curso: d.curso, plan: d.plan,
                progreso: d.progreso, fechaInscripcion: d.fecha, montoUSD: monto, activo: d.activo
            });
            showToast('Estudiante actualizado', 'success');
        } else {
            var nid = state.estudiantes.length
                ? Math.max.apply(null, state.estudiantes.map(function (e) { return e.id; })) + 1
                : 1;
            state.estudiantes.push({
                id: nid, nombre: d.nombre, apellido: d.apellido, email: d.email,
                ciudad: d.ciudad, curso: d.curso, plan: d.plan,
                progreso: d.progreso, fechaInscripcion: d.fecha, montoUSD: monto, activo: d.activo
            });
            showToast('Estudiante agregado', 'success');
        }

        guardarDatos(); cerrarModal(); poblarSelectCiudades(); filtrar(); actualizarKPIs(); actualizarGrafico();
    }

    function validarCampos(d) {
        var err = [];
        [['fNombre', d.nombre, 'Nombre requerido'], ['fApellido', d.apellido, 'Apellido requerido'],
        ['fCiudad', d.ciudad, 'Selecciona ciudad'], ['fCurso', d.curso, 'Selecciona curso'],
        ['fPlan', d.plan, 'Selecciona plan'], ['fFecha', d.fecha, 'Fecha requerida']
        ].forEach(function (r) {
            setFieldError(r[0], !r[1] ? r[2] : '');
            if (!r[1]) err.push(r[0]);
        });

        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!d.email || !re.test(d.email)) {
            setFieldError('fEmail', 'Email inválido'); err.push('fEmail');
        } else if (state.estudiantes.find(function (e) {
            return e.email.toLowerCase() === d.email.toLowerCase() && e.id !== state.editandoId;
        })) {
            setFieldError('fEmail', 'Email ya registrado'); err.push('fEmail');
        } else {
            setFieldError('fEmail', '');
        }

        if (isNaN(d.progreso) || d.progreso < 0 || d.progreso > 100) {
            setFieldError('fProgreso', 'Entre 0 y 100'); err.push('fProgreso');
        } else {
            setFieldError('fProgreso', '');
        }
        return err;
    }

    function setFieldError(id, msg) {
        var inp = document.getElementById(id); if (!inp) return;
        var errEl = inp.parentNode && inp.parentNode.querySelector('.form-group__error');
        if (msg) {
            inp.classList.add('is-error');
            if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
        } else {
            inp.classList.remove('is-error');
            if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
        }
    }

    /* ════════════════════════════════════════════
       7. eliminarEstudiante
    ════════════════════════════════════════════ */
    function eliminarEstudiante(id) {
        var e = state.estudiantes.find(function (x) { return x.id === id; }); if (!e) return;
        abrirConfirm(
            '¿Eliminar estudiante?',
            'Vas a eliminar a <strong>' + e.nombre + ' ' + e.apellido + '</strong>. Esta acción no se puede deshacer.',
            function () {
                state.estudiantes = state.estudiantes.filter(function (x) { return x.id !== id; });
                guardarDatos(); poblarSelectCiudades(); filtrar(); actualizarKPIs(); actualizarGrafico();
                showToast('Estudiante eliminado', 'info');
            }
        );
    }

    function abrirConfirm(t, m, cb) {
        document.getElementById('confirmTitulo').textContent = t;
        document.getElementById('confirmMsg').innerHTML = m;
        state.confirmCb = cb;
        document.getElementById('confirmOverlay').classList.add('is-open');
    }
    function cerrarConfirm() {
        document.getElementById('confirmOverlay').classList.remove('is-open');
        state.confirmCb = null;
    }
    function ejecutarConfirm() {
        if (typeof state.confirmCb === 'function') state.confirmCb();
        cerrarConfirm();
    }

    /* ════════════════════════════════════════════
       8. actualizarGrafico
    ════════════════════════════════════════════ */
    function actualizarGrafico() {
        var cnt = {};
        state.estudiantes.forEach(function (e) { cnt[e.ciudad] = (cnt[e.ciudad] || 0) + 1; });
        var cities = Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a]; });
        var vals = cities.map(function (c) { return cnt[c]; });
        var clrs = ['rgba(245,166,35,.85)', 'rgba(59,130,246,.85)', 'rgba(34,197,94,.85)',
            'rgba(139,92,246,.85)', 'rgba(249,115,22,.85)', 'rgba(236,72,153,.85)', 'rgba(20,184,166,.85)'];
        var bgColors = cities.map(function (_, i) { return clrs[i % clrs.length]; });

        if (state.grafico) {
            state.grafico.data.labels = cities;
            state.grafico.data.datasets[0].data = vals;
            state.grafico.data.datasets[0].backgroundColor = bgColors;
            state.grafico.update();
            return;
        }

        var ctx = document.getElementById('ciudadesChart');
        if (!ctx || typeof Chart === 'undefined') return;

        state.grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: cities, datasets: [{
                    label: 'Estudiantes', data: vals,
                    backgroundColor: bgColors, borderRadius: 6, borderSkipped: false
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#161B22', borderColor: 'rgba(255,255,255,.1)',
                        borderWidth: 1, titleColor: '#F0F6FC', bodyColor: '#8B949E',
                        callbacks: {
                            label: function (c) {
                                return ' ' + c.parsed.y + ' estudiante' + (c.parsed.y !== 1 ? 's' : '');
                            }
                        }
                    }
                },
                scales: {
                    x: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#8B949E', font: { family: "'DM Sans'", size: 11 } } },
                    y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#8B949E', stepSize: 1, font: { family: "'DM Sans'", size: 11 } } }
                }
            }
        });
    }

    /* ════════════════════════════════════════════
       HELPERS
    ════════════════════════════════════════════ */
    function sincronizarMonto(plan) {
        var el = document.getElementById('fMontoDisplay');
        if (el && PLANES_MONTO[plan]) el.textContent = 'USD $' + PLANES_MONTO[plan];
    }

    function poblarSelectCiudades() {
        var arr = [];
        state.estudiantes.forEach(function (e) { if (!arr.includes(e.ciudad)) arr.push(e.ciudad); });
        arr.sort();
        var sel = document.getElementById('filterCiudad'); if (!sel) return;
        var cur = sel.value;
        while (sel.options.length > 1) sel.remove(1);
        arr.forEach(function (c) {
            var o = document.createElement('option'); o.value = c; o.textContent = c;
            if (c === cur) o.selected = true;
            sel.appendChild(o);
        });
    }

    var _toastTimer;
    function showToast(msg, tipo) {
        var icons = { success: '✓', error: '✕', info: '★' };
        var t = document.getElementById('toast'); if (!t) return;
        t.className = 'toast toast--' + (tipo || 'success');
        t.innerHTML = '<span class="toast__icon">' + (icons[tipo] || '✓') + '</span> ' + msg;
        t.classList.add('is-visible');
        clearTimeout(_toastTimer);
        _toastTimer = setTimeout(function () { t.classList.remove('is-visible'); }, 3000);
    }

    /* ════════════════════════════════════════════
       INIT
    ════════════════════════════════════════════ */
    function init() {
        /* Activar la Página Principal (Landing) por defecto */
        var vLanding = document.getElementById('view-landing');
        if (vLanding) vLanding.classList.add('view--active');

        /* Formulario de login */
        var fLogin = document.getElementById('formLogin');
        if (fLogin) {
            fLogin.addEventListener('submit', function (e) {
                e.preventDefault();
                var nombre = (document.getElementById('loginNombre') || {}).value || '';
                var pass = (document.getElementById('loginPassword') || {}).value || '';

                /* Validación de campos */
                var errNombre = document.getElementById('loginNombreError');
                var errPass = document.getElementById('loginPasswordError');
                var ok = true;

                if (!nombre.trim()) {
                    if (errNombre) { errNombre.textContent = 'Ingresa tu usuario'; errNombre.classList.add('visible'); }
                    ok = false;
                } else {
                    if (errNombre) { errNombre.textContent = ''; errNombre.classList.remove('visible'); }
                }
                if (!pass.trim()) {
                    if (errPass) { errPass.textContent = 'Ingresa tu contraseña'; errPass.classList.add('visible'); }
                    ok = false;
                } else {
                    if (errPass) { errPass.textContent = ''; errPass.classList.remove('visible'); }
                }

                if (ok) mostrarVista('dashboard', { nombre: nombre });
            });
        }

        /* Botón de Notificaciones Funcional */
        var btnNotif = document.getElementById('btnNotificaciones');
        if (btnNotif) {
            btnNotif.addEventListener('click', function () {
                showToast('Tienes 3 notificaciones del progreso de los estudiantes.', 'info');
            });
        }

        /* Logout → vuelve al login */
        var btnLogout = document.getElementById('btnLogout');
        if (btnLogout) btnLogout.addEventListener('click', function () {
            mostrarVista('login');
        });

        /* Navegación del sidebar */
        initNavSidebar();

        /* Filtros de gestión */
        var si = document.getElementById('searchInput');
        if (si) si.addEventListener('input', filtrar);

        ['filterCiudad', 'filterPlan', 'filterEstado'].forEach(function (id) {
            var el = document.getElementById(id); if (el) el.addEventListener('change', filtrar);
        });

        var bReset = document.getElementById('btnResetFiltros');
        if (bReset) bReset.addEventListener('click', function () {
            ['searchInput', 'filterCiudad', 'filterPlan', 'filterEstado'].forEach(function (id) {
                var el = document.getElementById(id); if (el) el.value = '';
            });
            filtrar();
        });

        /* Slider de progreso */
        var sl = document.getElementById('fProgreso');
        var sv = document.getElementById('fProgresoVal');
        if (sl && sv) sl.addEventListener('input', function () { sv.textContent = this.value + '%'; });

        /* Sincronizar monto con plan */
        var fp = document.getElementById('fPlan');
        if (fp) fp.addEventListener('change', function () { sincronizarMonto(this.value); });

        /* Botón agregar estudiante */
        var ba = document.getElementById('btnAgregarEstudiante');
        if (ba) ba.addEventListener('click', function () { abrirModal(); });

        /* Cerrar modales con overlay o Escape */
        var mo = document.getElementById('modalOverlay');
        if (mo) mo.addEventListener('click', function (e) { if (e.target === mo) cerrarModal(); });

        var co = document.getElementById('confirmOverlay');
        if (co) co.addEventListener('click', function (e) { if (e.target === co) cerrarConfirm(); });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { cerrarModal(); cerrarConfirm(); }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* API pública */
    window.EduTrack = window.EduTrack || {};
    window.EduTrack.abrirModal = abrirModal;
    window.EduTrack.cerrarModal = cerrarModal;
    window.EduTrack.guardarEstudiante = guardarEstudiante;
    window.EduTrack.eliminarEstudiante = eliminarEstudiante;
    window.EduTrack.cerrarConfirm = cerrarConfirm;
    window.EduTrack.ejecutarConfirm = ejecutarConfirm;
    window.EduTrack.mostrarVista = mostrarVista;
    window.EduTrack.cambiarPagina = cambiarPagina;

})();