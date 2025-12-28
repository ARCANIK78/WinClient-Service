@echo off
REM --- Backup PostgreSQL (ultimo + anterior) ---

SET PGPASSWORD=arcani

if not exist C:\backups mkdir C:\backups

if exist C:\backups\dbtaller.backup (
  move /Y C:\backups\dbtaller.backup C:\backups\dbtaller_prev.backup
)

"C:\Program Files\PostgreSQL\18\bin\pg_dump.exe" ^
-U postgres -F c -b -v ^
-f "C:\backups\dbtaller.backup" ^
dbtaller

IF %ERRORLEVEL% NEQ 0 (
  echo ERROR al crear el backup
  SET PGPASSWORD=
  exit /b 1
)

SET PGPASSWORD=
echo Backup creado correctamente
