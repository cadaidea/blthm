# 🇪🇨 Consulta de Clientes por Cédula/RUC - Bletia Home ERP

## Descripción
Implementación profesional similar a **Perseo, Azur y Acuafact** para consulta automática de datos de clientes al ingresar cédula o RUC en el módulo de Operaciones (ventas/pedidos).

## Características Principales

### 1. Validación Local Estricta (Módulo 10)
- **Cédulas (10 dígitos)**: Valida algoritmo Módulo 10 del Registro Civil
  - Verifica códigos de provincia válidos (1-24 + 30 para extranjeros)
  - Calcula dígito verificador automáticamente
  
- **RUCs (13 dígitos)**: Valida especificación completa del SRI
  - Valida cédula base (primeros 10 dígitos)
  - Verifica tercer dígito (tipo: natural vs jurídica)
  - Valida código de establecimiento (dígitos 11-12)
  - Calcula dígito verificador con Módulo 11

### 2. Detección Automática de Tipo de Documento
El sistema identifica automáticamente si es:
- **Cédula** → 10 dígitos → Persona Natural
- **RUC** → 13 dígitos → Natural o Jurídica (según tercer dígito)

### 3. Consulta a API Pública del Estado
- **Endpoint**: `https://api.ecuador.pro/sri/{persona|empresa}/{documento}`
- API gratuita que consulta datos públicos del SRI
- No requiere autenticación ni API key
- Timeout de 8 segundos para evitar bloqueos

### 4. Estrategia de Fallback Profesional
Si la API falla o no encuentra el documento:
- ✅ **NO bloquea al usuario**
- ✅ Permite ingreso manual de datos
- ✅ Mantiene validación local del documento
- ✅ Similar a como funcionan Perseo, Azur y Acuafact

### 5. Caché Local Inteligente
- **TTL**: 5 minutos por documento
- Evita consultas repetidas en la misma sesión
- Mejora performance y reduce carga en API
- Botón para limpiar caché manualmente

## Flujo de Uso

### Para el Usuario Final:

1. **Abrir modal** "Nueva venta de stock" o "Nuevo pedido bajo specs"

2. **Ingresar documento** en el campo "Número de documento":
   - Solo números (el sistema filtra automáticamente)
   - 10 dígitos para cédula
   - 13 dígitos para RUC

3. **Presionar Enter** o clic en "Consultar"

4. **Resultados posibles**:
   
   #### ✅ Cliente encontrado en SRI
   - Muestra toast: "✅ Datos obtenidos del SRI: [Nombre]"
   - Campos pre-llenados automáticamente:
     - Nombre/Razón Social
     - Teléfono
     - Email (si disponible)
     - Ciudad/Provincia
     - Dirección
   
   #### ℹ️ Cédula válida pero no registrada (cliente nuevo)
   - Muestra toast: "ℹ️ Cédula válida · complete nombre del cliente"
   - Formulario editable para completar:
     - Nombre (obligatorio)
     - Teléfono (opcional)
     - Email (opcional)
     - Ciudad (por defecto: Guayaquil)
     - Dirección (opcional)
   - Botón "Crear cliente y continuar"

   #### ⚠️ API offline
   - Muestra toast: "⚠️ API offline · ingrese datos manualmente"
   - Permite ingreso manual completo
   - Valida que el documento sea matemáticamente válido

   #### ❌ Documento inválido
   - Muestra error específico:
     - "Documento inválido. Debe tener 10 dígitos (Cédula) o 13 dígitos (RUC)"
     - "El número de cédula/RUC no es válido según el algoritmo..."

## Archivos Modificados

### `/workspace/src/utils/sriService.ts`
Servicio principal con:
- Funciones de validación (`validateCedula`, `validateRuc`)
- Detección automática de tipo (`getDocumentType`)
- Consulta a API con fallback (`searchCustomer`)
- Caché en memoria (`cache`, `clearCache`, `getCacheStats`)

### `/workspace/src/views/Operaciones.tsx`
Interfaz de usuario con:
- Campo de búsqueda por documento
- Indicador de carga (spinner)
- Mensajes de error/toast diferenciados
- Formulario para completar datos de cliente nuevo
- Botón para limpiar caché

## Ejemplos de Uso

### Válidos:
```
Cédula: 0912345678  (Guayas, válida Módulo 10)
RUC:    0912345678001 (misma cédula + establecimiento 01 + DV)
```

### Inválidos:
```
Cédula: 091234567   (solo 9 dígitos)
Cédula: 09123456789 (11 dígitos)
RUC:    0912345678000 (código establecimiento 00 inválido)
Provincia: 25xxxxxxx (provincia 25 no existe)
```

## Consideraciones Técnicas

### Limitaciones de APIs Públicas
- **No existe API oficial del Registro Civil** para consulta de cédulas
- Las APIs del SRI solo retornan datos de quienes tienen RUC activo
- Personas naturales sin RUC no aparecen en consultas
- Por eso el sistema permite ingreso manual con validación local

### Por qué este enfoque es profesional:
1. **Validación local primero**: Detecta errores de tipeo inmediatamente
2. **No dependiente 100% de APIs**: Funciona aunque Internet falle
3. **Experiencia de usuario fluida**: Mensajes claros, no bloquea
4. **Performance**: Caché evita consultas repetidas
5. **Cumplimiento legal**: Valida documentos según especificaciones oficiales

## Testing Manual

### Probar con:
1. **RUC conocido**: 0991234567001 (debería encontrar datos si existe)
2. **Cédula válida nueva**: Generar una cédula válida Módulo 10 (ingreso manual)
3. **Documento inválido**: 123456789 (debe rechazar)
4. **API offline**: Desconectar Internet (debe permitir manual)

## Mantenimiento

### Limpiar caché:
```typescript
import { clearCache } from './utils/sriService';
clearCache();
```

### Ver estado del caché:
```typescript
import { getCacheStats } from './utils/sriService';
console.log(getCacheStats()); // { size: 5, keys: ['0912345678', ...] }
```

### Cambiar TTL del caché:
Editar línea 31 en `sriService.ts`:
```typescript
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos en vez de 5
```

---

**Implementado en**: Bletia Home ERP - Módulo Operaciones  
**Fecha**: 2025  
**Stack**: React 18 + TypeScript + Tailwind CSS 4  
**Inspiración**: Perseo, Azur, Acuafact (sistemas contables ecuatorianos)
