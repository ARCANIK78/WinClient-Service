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
```

# PostgreSQL en Windows – Pasos aplicados con Django

## 4. Pasos para crear la base de datos en PostgreSQL

1. Abrir **psql** como usuario administrador:

```bat
psql -U postgres
```

2. Listar bases de datos existentes:

```sql
\l
```

3. Listar tablas de la base actual:

```sql
\dt
```

4. Listar usuarios:

```sql
\du
```

5. Conectarse a una base específica (si existe):

```sql
\c nombre_base
```

6. Crear la base de datos para Django:

```sql
CREATE DATABASE dbtaller;
```

7. (Opcional) Crear un usuario específico para Django y darle permisos:

```sql
CREATE USER dbtaller_user WITH PASSWORD 'TU_PASSWORD';
GRANT ALL PRIVILEGES ON DATABASE dbtaller TO dbtaller_user;
```

---

## 5. Configuración en Django (`settings.py`)

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'dbtaller',
        'USER': 'postgres',        # o el usuario creado
        'PASSWORD': 'TU_PASSWORD',
        'HOST': '127.0.0.1',       # mejor que 'localhost' en Windows
        'PORT': '5432',
    }
}
```

---

## 6. Instalar driver PostgreSQL en tu entorno virtual

```bat
pip install psycopg[binary]
```

---

## 7. Aplicar migraciones de Django

1. Activar tu entorno virtual (si no está activo):

```bat
C:\ruta\a\tu\env\Scripts\activate
```

2. Crear migraciones (si corresponde):

```bat
python manage.py makemigrations
```

3. Aplicar migraciones en PostgreSQL:

```bat
python manage.py migrate
```

---

## 8. Verificar conexión y tablas

1. Conectarse a la base de datos en `psql`:

```sql
\c dbtaller
\dt
```

* Debes ver las tablas de Django: `auth_user`, `django_migrations`, `serviceApp_...`

---

