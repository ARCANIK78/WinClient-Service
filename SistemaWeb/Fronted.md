### Configuraci車n del Frontend 

Pasos para registrar el Frontend como servicio de Windows: en mi caso mi frontend use (React) 

**1. Localizar la carpeta y preparar el entorno:**
Abra el **CMD** como administrador y navegue a la ruta del proyecto:
```bash
cd "C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\Frontend\principal-front"

```

**3. Registro del servicio con NSSM:**
Ejecute el siguiente comando para abrir la interfaz de configuraci車n:

```bash
nssm install ReactFrontend

```

### Par芍metros de Configuraci車n en la Interfaz (Frontend)

Dependiendo de c車mo prefieras ejecutar la aplicaci車n, utiliza una de las siguientes configuraciones en **NSSM**:

#### Opci車n A: Usando Servidor Est芍tico (Recomendado para Producci車n)
Ideal si ya realizaste `npm run build` y quieres servir la carpeta de distribuci車n.

| Campo | Valor |
| :--- | :--- |
| **Path** | `C:\Users\DELL\AppData\Roaming\npm\serve.cmd` |
| **Startup directory** | `C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\Frontend\principal-front` |
| **Arguments** | `-s dist -l 3000` |

#### Opci車n B: Usando Script de Inicio (Node.js)
Ideal si utilizas un archivo espec赤fico para levantar el servicio (en mi caso). 

| Campo | Valor |
| :--- | :--- |
| **Path** | `C:\Program Files\nodejs\node.exe` |
| **Startup directory** | `C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\Frontend\principal-front` |
| **Arguments** | `start-frontend.js` |

---

