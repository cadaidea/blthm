# TALLER UNO — Suite ERP para mueblería (Ecuador)

Suite de gestión a medida para mueblerías: **ERP · CRM · PIM · OMS · MES · DAM · Contabilidad**,
con cobros **PayPhone** vía links de un solo uso y facturación electrónica **SRI** (IVA 15%).
Portada del ERP BLETIA (`upgrade.bletia.ec` / `github.com/cadaidea/blthm` → carpeta `bletia/`),
validada contra el código fuente real: máquina de 15 estados con vista del cliente,
validación de pagos por el dueño, specs de personalización con fotos, guías de remisión y BOM + MRP.

## Módulos (13)

1. **Panel de control** — KPIs en vivo, bus de eventos (+1.000 ev concurrentes), prueba de carga
2. **Pedidos · OMS** — Venta de stock vs Pedido bajo specs, 15 estados BLETIA, traza, recibos con validación
3. **Logística** — despachos, guías de remisión SRI (XML + autorización 49 dígitos), etiquetas de bulto
4. **Taller · MES** — órdenes de fabricación con lista de materiales y stepper de etapas
5. **BOM & materiales** — listas de materiales, roll-up de costos, MRP con faltantes
6. **Clientes & proveedores · CRM/SRM** — segmentos, crédito, transportistas
7. **Cobros PayPhone** — links de un solo uso, checkout sandbox, recibo auto-validado + factura
8. **Productos · PIM** — fichas técnicas, stock multi-bodega, márgenes
9. **Fototeca · DAM** — activos vinculados a fichas y catálogo
10. **Contabilidad & SRI** — diario en partida doble, facturas, notas de crédito, Form. 104
11. **Accesos de un solo uso** — links con rol, vigencia y consumo atómico
12. **Seguridad & porting** — postura por capas, tracker del porting Laravel, LOPDP
13. **Ajustes & despliegue** — datos fiscales, credenciales, ZIP de entrega, guía SSH OVH

## Stack (100% open source)

React 18 + Vite + Tailwind CSS 4 · NestJS (API, a conectar) · PostgreSQL 16 · Redis 7 · Nginx + Certbot · Docker Compose

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # ./dist
```

## Despliegue (VPS OVH, File Manager + SSH)

Ver `deploy/comandos-ssh.txt` dentro del ZIP de entrega (Ajustes → "Descargar taller-uno.zip").
Los datos viven en el volumen `datos_pg` de PostgreSQL: actualizar el código nunca los toca.
