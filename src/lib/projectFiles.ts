import JSZip from "jszip";
import type { AppState } from "./types";

/* Código fuente real del proyecto, incrustado tal como está en disco */
import pkgJson from "../../package.json?raw";
import indexHtml from "../../index.html?raw";
import viteConfig from "../../vite.config.js?raw";
import tsconfigJson from "../../tsconfig.json?raw";
import mainTsx from "../main.tsx?raw";
import appTsx from "../App.tsx?raw";
import indexCss from "../index.css?raw";
import viteEnv from "../vite-env.d.ts?raw";
import typesTs from "./types.ts?raw";
import utilTs from "./util.ts?raw";
import seedTs from "./seed.ts?raw";
import storeTsx from "./store.tsx?raw";
import selfTs from "./projectFiles.ts?raw";
import uiTsx from "../components/ui.tsx?raw";
import chartsTsx from "../components/charts.tsx?raw";
import imgTsx from "../components/Img.tsx?raw";
import shellTsx from "../components/Shell.tsx?raw";
import vDashboard from "../views/Dashboard.tsx?raw";
import vProductos from "../views/Productos.tsx?raw";
import vOperaciones from "../views/Operaciones.tsx?raw";
import vTerceros from "../views/Terceros.tsx?raw";
import vTaller from "../views/Taller.tsx?raw";
import vMateriales from "../views/Materiales.tsx?raw";
import vLogistica from "../views/Logistica.tsx?raw";
import vCobros from "../views/Cobros.tsx?raw";
import vDam from "../views/Dam.tsx?raw";
import vContabilidad from "../views/Contabilidad.tsx?raw";
import vAccesos from "../views/Accesos.tsx?raw";
import vSeguridad from "../views/Seguridad.tsx?raw";
import vAjustes from "../views/Ajustes.tsx?raw";

const README = `# TALLER UNO — Suite de gestión para mueblería (Ecuador)

ERP · CRM · PIM · OMS · MES · DAM · Contabilidad · Cobros PayPhone · Facturación SRI
Puerto del ERP BLETIA (upgrade.bletia.ec / github.com/cadaidea/blthm → bletia/):
máquina de 15 estados con vista del cliente, validación de pagos por el dueño,
specs de personalización con fotos, guías de remisión SRI y BOM + MRP.

## Stack (100% open source)
- React 18 + Vite + Tailwind CSS 4 (este panel)
- Node 20 + NestJS (API REST + workers) — capa a conectar en producción
- PostgreSQL 16 · Redis 7 · Nginx + Certbot · Docker Compose

## Correr en desarrollo
    npm install
    npm run dev        # http://localhost:3000

## Compilar para producción
    npm run build      # genera ./dist

## Despliegue en VPS (File Manager + SSH)
    Ver deploy/comandos-ssh.txt — paso a paso exacto.

## ¿Dónde está la base de datos?
- El ZIP NO contiene base de datos (correcto: la base vive en el servidor).
- La demo persiste en el navegador (localStorage).
- En el VPS, 'docker compose up -d' crea PostgreSQL con volumen persistente
  ('datos_pg'): actualizar el código NUNCA borra los datos.

## Licencias
MIT (React, Vite, NestJS) · BSD (Redis, Nginx) · PostgreSQL License · Apache-2.0 (Docker, Tailwind)
`;

const COMPOSE = `# TALLER UNO · orquestación del VPS
# La base vive en el volumen 'datos_pg' — actualizar código no toca los datos.
services:
  web:
    image: nginx:1.27-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./dist:/usr/share/nginx/html:ro
      - ./deploy/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    restart: unless-stopped
    environment:
      POSTGRES_USER: taller
      POSTGRES_PASSWORD: \${DB_PASSWORD:-cambiar-antes-de-produccion}
      POSTGRES_DB: taller_uno
    volumes:
      - datos_pg:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    command: redis-server --appendonly yes
    volumes:
      - datos_redis:/data

volumes:
  datos_pg:
  datos_redis:
`;

const NGINX = `server {
    listen 80;
    server_name erp.tudominio.ec;   # ← cambia a tu dominio

    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
`;

const GUIA_SSH = `══════════════════════════════════════════════════════════════
 TALLER UNO · GUÍA DE DESPLIEGUE — File Manager + SSH (VPS OVH)
══════════════════════════════════════════════════════════════

1) EN EL FILE MANAGER DEL VPS
   ─ Sube taller-uno.zip a /var/www

2) POR SSH — PRIMERA INSTALACIÓN (solo una vez)
   cd /var/www
   sudo apt update && sudo apt install -y unzip docker.io docker-compose-plugin
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   unzip -o taller-uno.zip -d taller-uno && cd taller-uno
   npm install
   npm run build
   docker compose up -d

3) ACTUALIZACIÓN SIN PERDER DATOS (tu rutina habitual)
   cd /var/www/taller-uno
   unzip -o ../taller-uno.zip -d .
   npm install && npm run build
   docker compose restart web
   → La base NUNCA se toca: vive en el volumen 'datos_pg'.

4) RESPALDO DIARIO (cron)
   0 3 * * * cd /var/www/taller-uno && docker compose exec -T db pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\%F).sql.gz

5) FLUJO GITHUB (recomendado)
   git init && git add -A && git commit -m "v2.1 suite mueblera"
   git remote add origin git@github.com:TU-USUARIO/taller-uno.git && git push -u origin main
   En el VPS: git clone y para actualizar: git pull && npm i && npm run build

¿Y LA BASE DE DATOS?
   ─ El ZIP NO la incluye (correcto: vive en el servidor, no viaja).
   ─ La demo guardó tus datos en deploy/datos-demo.json.
   ─ PostgreSQL se crea sola con 'docker compose up -d' (volumen datos_pg).
`;

const GITIGNORE = `node_modules/
dist/
.env
*.zip
/respaldos/
.DS_Store
`;

const SOURCE_FILES: [string, string][] = [
  ["package.json", pkgJson],
  ["index.html", indexHtml],
  ["vite.config.js", viteConfig],
  ["tsconfig.json", tsconfigJson],
  [".gitignore", GITIGNORE],
  ["src/main.tsx", mainTsx],
  ["src/App.tsx", appTsx],
  ["src/index.css", indexCss],
  ["src/vite-env.d.ts", viteEnv],
  ["src/lib/types.ts", typesTs],
  ["src/lib/util.ts", utilTs],
  ["src/lib/seed.ts", seedTs],
  ["src/lib/store.tsx", storeTsx],
  ["src/lib/projectFiles.ts", selfTs],
  ["src/components/ui.tsx", uiTsx],
  ["src/components/charts.tsx", chartsTsx],
  ["src/components/Img.tsx", imgTsx],
  ["src/components/Shell.tsx", shellTsx],
  ["src/views/Dashboard.tsx", vDashboard],
  ["src/views/Productos.tsx", vProductos],
  ["src/views/Operaciones.tsx", vOperaciones],
  ["src/views/Terceros.tsx", vTerceros],
  ["src/views/Taller.tsx", vTaller],
  ["src/views/Materiales.tsx", vMateriales],
  ["src/views/Logistica.tsx", vLogistica],
  ["src/views/Cobros.tsx", vCobros],
  ["src/views/Dam.tsx", vDam],
  ["src/views/Contabilidad.tsx", vContabilidad],
  ["src/views/Accesos.tsx", vAccesos],
  ["src/views/Seguridad.tsx", vSeguridad],
  ["src/views/Ajustes.tsx", vAjustes],
];

const download = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
};

export const exportProjectZip = async (state: AppState) => {
  const zip = new JSZip();
  const root = zip.folder("taller-uno")!;
  root.file("README.md", README);
  root.file("docker-compose.yml", COMPOSE);
  root.folder("deploy")!.file("nginx.conf", NGINX);
  root.folder("deploy")!.file("comandos-ssh.txt", GUIA_SSH);
  root.folder("deploy")!.file("datos-demo.json", JSON.stringify(state, null, 2));
  for (const [path, content] of SOURCE_FILES) root.file(path, content);
  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE", compressionOptions: { level: 8 } });
  const date = new Date().toISOString().slice(0, 10);
  download(blob, `taller-uno-${date}.zip`);
};

export const exportDataJson = (state: AppState) => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  download(blob, `taller-uno-datos-${new Date().toISOString().slice(0, 10)}.json`);
};
