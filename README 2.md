# Front-End con Datos Locales – Simulación Enfermeros


## Descripción del proyecto

Esta aplicación web permite:

- Registrar enfermeros
- Iniciar sesión (login) con datos simulados
- Listar enfermeros con imagen de perfil
- Buscar enfermeros por distintos criterios

Toda la información se gestiona de forma local mediante **services**, sin conexión real a un backend.

---

## Tecnologías utilizadas

- **Angular**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Routing**
- **ngModel**
- **Services**
- **Directivas Angular**

---

##  Estructura y arquitectura

- Uso de **Services** para centralizar los datos
- Modelado de la información mediante **Clases**
- Enlace de formularios con **ngModel**
- Validación de formularios con **Angular Forms**
- Manipulación de la vista mediante **directivas**, evitando el acceso directo al DOM
- Navegación entre pantallas mediante **Routing**

---

## Pantallas implementadas

- **Home**
- **Registro de enfermero**
- **Login de enfermero**
- **Listado de enfermeros** con imagen de perfil
- **Búsqueda de enfermeros** por criterio

---

## Flujo de navegación
    Home
    └── Registro
    └── Login
    ├── Búsqueda de enfermeros
    └── Listado de todos los enfermeros
