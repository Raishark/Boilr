# Git Flow Mastery: El Estándar Industrial 🛡️

Bienvenido al estándar de arquitectura de Git para **Boilr**. Este repositorio sigue una implementación estricta de **Git Flow** para garantizar que el historial de versiones sea auditable, legible y estéticamente profesional.

## 🏗️ Filosofía de Trabajo

En Boilr, tratamos el historial de Git como parte del producto. Una rama limpia significa un desarrollo sin fricciones.

> [!NOTE]
> Seguimos [Conventional Commits](https://www.conventionalcommits.org/) para que cada cambio sea auto-explicativo y automatizable.

## 📊 Estructura de Ramas

| Rama | Tipo | Propósito |
| :--- | :--- | :--- |
| `main` | Core | Código listo para producción. Cada commit es una versión estable. |
| `develop` | Core | Eje central de integración. Donde converge el desarrollo activo. |
| `feature/*` | Temporal | Nuevas funcionalidades. Nacen de `develop` y vuelven vía PR. |
| `release/*` | Temporal | Preparación de lanzamiento. Pulido final y "bumps" de versión. |
| `hotfix/*` | Temporal | Correcciones críticas inmediatas en producción. |

---

## 🛠️ Comandos Esenciales

### 1. Iniciar una Funcionalidad
```bash
git checkout develop
git checkout -b feature/nombre-de-la-mejora
```

### 2. Ciclo de Lanzamiento (Release)
El momento donde el código se convierte en producto:

```bash
# 1. Crear rama de preparación
git checkout -b release/v3.0.0 develop

# 2. Finalizar en Main (Producción)
git checkout main
git merge --no-ff release/v3.0.0
git tag -a v3.0.0 -m "Versión 3.0.0 - Edición Masterclass"

# 3. Sincronizar Desarrollo
git checkout develop
git merge --no-ff release/v3.0.0
```

---

## 💎 Estándares de Commit

Transformamos el historial en una obra de arte técnica:

- **`feat`**: Una nueva característica para el usuario.
- **`fix`**: Una corrección de bug.
- **`docs`**: Cambios solo en la documentación.
- **`style`**: Formato, espacios, puntos y comas (sin cambios en lógica).
- **`refactor`**: Mejora de código que no añade feature ni arregla bug.
- **`chore`**: Tareas de mantenimiento o configuración de herramientas.

> [!TIP]
> Un buen commit ahorra horas de debugging en el futuro. Sé descriptivo pero conciso.

---
*Boilr: Arquitectura invisible, resultados de élite.*
