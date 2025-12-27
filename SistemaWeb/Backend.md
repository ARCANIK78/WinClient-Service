### ⚙️ Configuración del Backend (Django)

Pasos para registrar el servidor de Django como servicio de Windows. En este caso, utilizamos un archivo `.bat` para gestionar el arranque y **Waitress** como servidor de producción.

**1. Preparación:**
Asegúrese de tener instalada la versión de Python incluida en el instalador del proyecto y la librería `waitress`:
```bash
pip install waitress

```

**2. Registro del servicio con NSSM:**
Abra el CMD como administrador y ejecute:

```bash
nssm install DjangoServices

```

**3. Parámetros de configuración en la interfaz:**

| Campo | Valor |
| --- | --- |
| **Path** | `C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\start_django_waitress.bat` |
| **Startup directory** | `C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\BackEnd\myServicioDjango` |
| **Arguments** | `-3.11 -m waitress --listen=*:8000 myServicioDjango.wsgi:application` |

---

### 📄 Contenido del archivo .bat (Referencia)

Asegúrese de que su archivo `start_django_waitress.bat` tenga la ruta correcta al entorno virtual o al ejecutable de Python para evitar errores de dependencias.

