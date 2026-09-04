@echo off
echo ========================================
echo   Iniciando Bletia Home (ERP Mueblería)
echo ========================================
echo.
echo Abriendo navegador en http://localhost:5174/
echo Presiona Ctrl+C para detener el servidor
echo.

docker run --rm -it -p 5174:5174 -v "%CD%":/app -w /app node:20-alpine sh -c "npm install && npm run dev -- --host 0.0.0.0 --port 5174"

pause
