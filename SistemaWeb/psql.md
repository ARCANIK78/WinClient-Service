### Configuración de Base de Datos (PostgreSQL)

PostgreSQL funciona como un servicio nativo de Windows, por lo que no requiere configuración adicional en NSSM. Solo asegúrese de cumplir con lo siguiente:

**1. Estado del Servicio:**
Verifique que el servicio de PostgreSQL esté en ejecución:
* Presione `Win + R`, escriba `services.msc` y busque `postgresql-x64-16` (o su versión). Debe decir **En ejecución**.

**2. Credenciales de Conexión:**
Asegúrese de que el archivo de configuración de su Backend (Django `.env` o `settings.py`) coincida con los datos del servidor local:

| Parámetro | Valor Sugerido |
| :--- | :--- |
| **Host** | `localhost` o `127.0.0.1` |
| **Port** | `5432` |
| **User** | `postgres` |
| **DB Name** | `nombre_de_tu_bd` |

**3. Prueba de Conexión:**
Antes de iniciar el servicio en NSSM, pruebe la conexión manualmente ejecutando:
```bash
python manage.py check