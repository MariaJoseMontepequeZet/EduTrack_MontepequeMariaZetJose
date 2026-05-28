# EduTrack — Panel de Gestión Educativa

EduTrack es una plataforma Single Page Application (SPA) orientada a la gestión, administración y monitoreo analítico de estudiantes. Construida completamente sin frameworks (Vanilla JavaScript y CSS Puro), la aplicación destaca por su rendimiento, modularidad y un estricto control sobre la calidad e integridad de los datos.

>Hecho por Maria Jose Montepeque Zet
---

## 🚀 Características Principales

* **Arquitectura SPA Integrada:** Navegación fluida entre la Landing Page, el Login y el Dashboard interactivo sin recargas de página, gestionada a través de un enrutador ligero personalizado.
* **Dashboard Analítico:** Visualización de KPIs en tiempo real (ingresos, retención, progreso general) y gráficos dinámicos interactivos soportados por Chart.js.
* **Gestión de Estudiantes (CRUD):** * Interfaz en formato *grid* para visualizar perfiles.
  * Búsqueda y filtrado multicriterio (nombre, ciudad, plan, estado).
  * Paginación integrada.
  * Formularios modales para agregar, editar y eliminar registros (con persistencia en `localStorage`).
* **Sistema de Notificaciones Inteligente:** Panel flotante que evalúa el estado del dataset en tiempo real para generar alertas (ej. riesgo de abandono, cursos completados, resúmenes financieros).
* **Sidebar Responsivo y Accesible:** Menú lateral colapsable con animaciones fluidas, gestión de foco (focus trap) para accesibilidad y adaptación automática en dispositivos móviles.
* **Motor de Meta-Validación:** Un script robusto e independiente que audita el dataset bajo 20 reglas de negocio estrictas antes de su renderizado.

---

## 🛠️ Tecnologías Utilizadas

* **Estructura y Estilos:** HTML5 Semántico, CSS Puro (Custom Properties, Flexbox, CSS Grid).
* **Lógica y Funcionalidad:** JavaScript Vanilla (ES5/ES6, Patrón de Módulos IIFE).
* **Visualización de Datos:** Chart.js (v4.4.0).
* **Fuentes:** Google Fonts (Syne, DM Sans).

---

## 📁 Estructura del Proyecto

La arquitectura del proyecto separa estrictamente la estructura, los estilos y la lógica de negocio.

| Archivo / Directorio | Descripción |
| :--- | :--- |
| `index.html` | Archivo raíz. Contiene la estructura de todas las vistas (Landing, Login, Dashboard, Modales). |
| `style.css` | Hoja de estilos global. Define variables (tokens), tipografía, utilidades (botones, badges, toasts) y la Landing Page. |
| `Dashboard.css` | Estilos estructurales del panel administrativo, Sidebar, Topbar, KPIs y tablas. |
| `Estudiantes.css` | Estilos específicos para la vista de gestión (Grid de cards, filtros, paginación, formularios modales). |
| `App.js` | Lógica principal (Router SPA, inicialización de componentes, CRUD de estudiantes, lógica de notificaciones y renderizado). |
| `Sidebar.js` | Controlador independiente del menú lateral colapsable (gestión de eventos de UI, accesibilidad y resize). |
| `Validacion.js` | Motor de meta-validación que expone una API para verificar la integridad del dataset contra reglas de negocio. |
| `Datos.json` | Dataset inicial estático con 35 registros de muestra. |
| `informe-calidad-datos.md` | Auditoría de datos generada por el sistema de validación. |

---

## ⚙️ Instalación y Uso

Dado que el proyecto no requiere procesos de compilación ni dependencias de Node.js (NPM), la instalación es inmediata:

1. **Clonar el repositorio** o descargar los archivos.
2. **Estructurar los directorios** asegurando que las rutas de los assets en `index.html` coincidan (por defecto asume carpetas `/css/` y `/js/`).
3. **Ejecutar el proyecto:**
   * **Opción A (Recomendada):** Usa un servidor local ligero como la extensión *Live Server* en VSCode para evitar restricciones de CORS con módulos o Web Storage.
   * **Opción B:** Abre directamente el archivo `index.html` en cualquier navegador moderno.

> **Nota sobre los datos:** EduTrack inicializa una base de datos de prueba en el `localStorage` del navegador la primera vez que se carga. Puedes restablecer estos datos desde la vista "Configuración" en el Dashboard.

---

## 🧠 Arquitectura de JavaScript

El proyecto utiliza el patrón de Módulos (IIFE - *Immediately Invoked Function Expression*) para aislar el *scope* y evitar la contaminación del objeto global `window`, exponiendo únicamente los métodos necesarios a través de `window.EduTrack`.

* **Estado Centralizado:** `App.js` maneja un objeto `state` que controla la vista actual, los datos de los estudiantes, filtros y las instancias de los gráficos.
* **Manejo del DOM:** En lugar de frameworks reactivos, el sistema re-renderiza componentes específicos (como el Grid de estudiantes o los gráficos) únicamente cuando ocurren mutaciones en el estado, utilizando *Template Literals*.

---

## 🛡️ Sistema de Meta-Validación (`Validacion.js`)

El proyecto incluye un motor de auditoría de datos riguroso que evalúa el dataset antes de permitir su uso en producción. El validador clasifica los problemas en tres niveles:

1. **ERROR (🔴):** Bloquean el registro (ej. ID duplicado, formato de fecha inválido, monto incoherente con el plan).
2. **WARNING (🟡):** Incoherencias de negocio, el registro se renderiza pero requiere revisión (ej. progreso del 100% pero marcado como activo).
3. **INFO (🔵):** Observaciones generales (ej. saltos en la secuencia de IDs).

**Uso de la API de validación:**
```javascript
// Ejecutar validación completa sobre un array de datos
const resultado = EduTrack.validar.dataset(estudiantesArray);

console.log(resultado.reporte); // Imprime un reporte detallado en consola
const datosSeguros = resultado.registrosValidos; // Array purgado de errores