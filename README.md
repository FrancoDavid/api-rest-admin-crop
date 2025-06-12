# 🌱 api-rest-admin-crop

API REST para gestionar el control de plagas en cultivos y monitorear condiciones climáticas, construida con **Node.js**, **Express** y base de datos (MongoDB/MySQL). Ideal para practicar endpoints CRUD, validación, lógica de negocio y estructuras limpias.

---

## 📋 Tabla de contenidos

* [🚀 Características](#-características)
* [⚙️ Requisitos](#-requisitos)
* [📦 Instalación & Configuración](#-instalación--configuración)
* [🚀 Ejecución](#-ejecución)
* [🔧 Endpoints principales](#-endpoints-principales)
* [🏛️ Arquitectura & estilo](#-arquitectura--estilo)
* [🔧 Mejoras sugeridas](#-mejoras-sugeridas)
* [🤝 Contribuciones](#-contribuciones)
* [⚖️ Licencia](#-licencia)

---

## 🚀 Características

* CRUD para **plagas**, **cultivos** y **condiciones climáticas**.
* Manejo de datos con **Express** y acceso a base de datos (MongoDB o MySQL).
* Middleware para validación de entradas, autenticación básica y control de errores.
* Implementación de patrones REST en rutas y lógica — inspirado en guías populares de Node.js/Express ([dev.to][1]).

---

## ⚙️ Requisitos

* Node.js ≥ 14
* npm o yarn
* Una base de datos corriendo (MongoDB o MySQL) y configurada

---

## 📦 Instalación & Configuración

```bash
git clone https://github.com/FrancoDavid/api-rest-admin-crop.git
cd api-rest-admin-crop
npm install
```

Luego, define tus variables en `.env`:

```dotenv
DB_URI=<tu cadena de conexión>
PORT=3000
AUTH_TOKEN=<token opcional para protección básica>
```

---

## 🚀 Ejecución

```bash
npm start       # o npm run dev si usas nodemon
```

La API estará disponible en `http://localhost:3000/api/...`

---

## 🔧 Endpoints principales

* `GET /api/pests` – Listar plagas
* `POST /api/pests` – Crear nueva plaga
* `PUT /api/pests/:id` – Actualizar plaga
* `DELETE /api/pests/:id` – Eliminar plaga
* `GET /api/crops` – Listar cultivos
* `GET /api/weather` – Obtener condiciones climáticas actuales
* `POST /api/weather` – Registrar lecturas climáticas

*(Ajusta nombres según tu implementación)*

---

## 🏛️ Arquitectura & estilo

* **Rutas** bien definidas bajo `/api/...` con verbs HTTP apropiados (GET, POST, PUT, DELETE) — prácticas recomendadas de REST ([iris.unito.it][2], [toptal.com][3]).
* **Controladores**: abstraen lógica de rutas y llaman a servicios.
* **Servicios**: gestionan negocio, lectura y escritura en la base.
* **Modelos**: esquemas para MongoDB (Mongoose) o Entity/ORM para SQL.
* **Middleware**: autenticación básica, validación y manejo de errores como responde Postman/Toptal ([toptal.com][3]).

---

## 🔧 Mejoras sugeridas

* Autenticación robusta (JWT, OAuth2).
* Documentación OpenAPI/Swagger.
* Logs estructurados con Winston/Morgan.
* Pruebas unitarias (`Mocha`, `Jest`) y de integración (`Supertest`).
* Contenerización con Docker + docker-compose.
* Programación de tareas gaussianas cron para monitoreo climático.

---

## 🤝 Contribuciones

¡Tus ideas son bienvenidas!

1. Haz un fork del repositorio
2. Crea una rama: `feature/tu-mejora`
3. Agrega tu aporte con commits descriptivos
4. Envía un Pull Request explicando tu mejora

---

## ⚖️ Licencia

Distribuido bajo **MIT**. Consulta `LICENSE` para más detalles.

