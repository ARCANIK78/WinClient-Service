##  Herramientas y Preparación

**Archivo requerido:** `nssm-2.24-103-gdee49fc.zip`

**¿Qué hacer? (Pasos):**

1. **Extraer:** Descomprime el archivo `.zip` en una carpeta permanente (ej. `C:\tools\nssm`).
2. **Localizar binario:** Entra a la carpeta `win64` (si tu sistema es de 64 bits).
3. **Permisos:** Haz clic derecho sobre `nssm.exe` -> Propiedades -> Ejecutar como administrador.
4. **Terminal:** Abre el CMD como administrador en esa ruta.

---

###  Comandos Básicos de Gestión

Una vez registrado el servicio (**ReactFrontend** o **DjangoBackend**), utiliza estos comandos en la terminal (CMD) para controlarlos:

| Acción | Comando |
| :--- | :--- |
| **Instalar** | `nssm install <NombreServicio>` |
| **Iniciar** | `nssm start <NombreServicio>` |
| **Detener** | `nssm stop <NombreServicio>` |
| **Reiniciar** | `nssm restart <NombreServicio>` |
| **Editar (GUI)** | `nssm edit <NombreServicio>` |
| **Eliminar** | `nssm remove <NombreServicio>` |
| **Estado** | `nssm status <NombreServicio>` |

> **Nota:** Reemplaza `<NombreServicio>` por el nombre que asignaste (ej. `ReactFrontend`).

---