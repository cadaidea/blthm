# TALLER UNO — Suite de gestión para mueblería (Ecuador)

ERP · CRM · PIM · OMS · MES · DAM · Contabilidad · Cobros PayPhone · Facturación SRI

Suite web a la medida para una mueblería con domicilio fiscal en Ecuador, construida con
stack 100% open source y diseñada para procesar +1.000 eventos simultáneos mediante un bus
de eventos (Redis Streams + workers en producción).

## Módulos

| Módulo | Qué hace |
|---|---|
| **Panel de control** | KPIs en vivo, curva de ventas, bus de eventos y prueba de carga de 1.200 eventos |
| **Pedidos · OMS** | Máquina de estados BLETIA: pendiente → por aprobar → aprobado → fabricación → en bodega → listo despacho → despachado → entregado (+ anulado/cancelado). Dos rutas: **venta de stock** y **pedido bajo specs** (tapiz, lacado, cojines, fotos por campo), más pedidos online. Recibos, saldos y link único de confirmación con fotos |
| **Logística** | Despachos con transportista/placa/conductor, **guías de remisión SRI** (XML + autorización de 49 dígitos), etiquetas de bulto con barcode, red de transportistas y locales/bodegas |
| **Taller · MES** | Órdenes de fabricación con lista de materiales y stepper de 6 etapas; al cerrar, el stock entra a bodega |
| **BOM & materiales** | Inventario de materia prima, lista de materiales por producto con roll-up de costos, MRP (faltantes por órdenes activas) |
| **CRM/SRM** | Clientes por segmento con crédito e historial; proveedores de muebles, insumos y transporte |
| **Cobros PayPhone** | Links de un solo uso, checkout sandbox (tarjeta y QR); al pagarse emite factura SRI, asiento contable y marca el pedido como pagado |
| **PIM** | Fichas técnicas, SKU, materiales, márgenes, stock tri-bodega (showroom/bodega/taller) |
| **DAM** | Fototeca con fotos de producto, planos y renders vinculados al PIM |
| **Contabilidad** | Libro diario en partida doble, facturas con autorización SRI, IVA 15%, notas de crédito |
| **Accesos de un solo uso** | Links con rol, vigencia y consumo atómico para trabajadores, auditores y clientes |
| **Seguridad & cumplimiento** | Postura de 23 controles, mapa de porting Laravel → suite, LOPDP/SRI, auditoría |

## Stack (open source)

- **Frontend:** React 18 + Vite + Tailwind CSS 4
- **API (producción):** Node.js 20 + NestJS
- **Datos:** PostgreSQL 16 · **Bus/tokens:** Redis 7
- **Servidor:** Nginx + Certbot · Docker Compose en VPS OVH

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # genera ./dist
```

## Despliegue (File Manager + SSH)

Desde **Ajustes & despliegue** se descarga el ZIP de entrega con `docker-compose.yml`,
`deploy/nginx.conf` y `deploy/comandos-ssh.txt` (guía paso a paso): subir el .zip al VPS,
`npm install && npm run build`, `docker compose up -d`.
La base de datos vive en el volumen `datos_pg` — actualizar el código nunca toca los datos.

## Licencias

MIT (React, Vite, NestJS) · BSD (Redis, Nginx) · PostgreSQL License · Apache-2.0 (Docker, Tailwind)
