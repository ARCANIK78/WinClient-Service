@echo off
cd "C:\Users\DELL\Documents\Tareas de trabajos y cursos\project\SistemaWeb-Taller-YAMAHA\BackEnd\myServicioDjango"
C:\Windows\py.exe -3.11 -m waitress --listen=*:8000 myServicioDjango.wsgi:application
