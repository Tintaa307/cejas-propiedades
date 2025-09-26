# Arquitectura de Capas - Cejas Propiedades

Este proyecto ha sido refactorizado para seguir una arquitectura de capas que separa las responsabilidades y mejora la mantenibilidad del código.

## Estructura de Capas

### 1. Repositories (Repositorios)
**Ubicación:** `src/repository/`

Los repositorios son responsables de:
- Interactuar directamente con la base de datos (Supabase)
- Ejecutar consultas SQL
- Manejar la validación de datos de entrada
- Lanzar excepciones específicas del dominio

**Archivos:**
- `properties-repository.ts` - Operaciones CRUD para propiedades
- `contact-repository.ts` - Envío de emails usando Resend

### 2. Services (Servicios)
**Ubicación:** `src/services/`

Los servicios actúan como intermediarios entre:
- Los controladores (server actions)
- Los repositorios
- Implementan la lógica de negocio
- No manejan directamente la base de datos

**Archivos:**
- `properties-service.ts` - Lógica de negocio para propiedades
- `contact-service.ts` - Lógica de negocio para contacto

### 3. Controllers (Controladores)
**Ubicación:** `src/controllers/`

Los controladores son server actions que:
- Reciben requests del cliente
- Validan datos de entrada
- Llaman a los servicios apropiados
- Manejan errores y respuestas
- Usan la cláusula "use server"

**Archivos:**
- `properties-controller.ts` - Server actions para propiedades
- `contact-controller.ts` - Server actions para contacto

## Flujo de Datos

```
Cliente → Server Action → Service → Repository → Base de Datos
   ↑                                                        ↓
   ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←
```

## Manejo de Errores

### Excepciones Base
- `BaseException` - Excepción base con código de estado HTTP
- `ValidationException` - Para errores de validación con errores de campo
- `DatabaseException` - Para errores de base de datos
- `InternalServerException` - Para errores internos del servidor

### Excepciones Específicas
**Propiedades:**
- `PropertyNotFoundException`
- `PropertyCreationException`
- `PropertyUpdateException`
- `PropertyFetchException`
- `PropertyImageFetchException`

**Contacto:**
- `ContactMessageCreationException`
- `ContactMessageInvalidFieldsException`
- `EmailSendException`

## Validación

### Esquemas Zod
- `PropertySchema` - Validación para propiedades
- `ContactSchema` - Validación para mensajes de contacto
- `SellContactSchema` - Validación para mensajes de venta

## Handlers

### Action Handler
- `actionHandler` - Maneja errores en server actions
- `actionErrorHandler` - Convierte errores en excepciones para el cliente

## Beneficios de esta Arquitectura

1. **Separación de Responsabilidades** - Cada capa tiene una responsabilidad específica
2. **Testabilidad** - Fácil de testear cada capa independientemente
3. **Mantenibilidad** - Cambios en una capa no afectan otras
4. **Reutilización** - Los servicios pueden ser reutilizados por diferentes controladores
5. **Escalabilidad** - Fácil agregar nuevas funcionalidades siguiendo el patrón
6. **Manejo de Errores Consistente** - Todas las excepciones siguen el mismo patrón

## Ejemplo de Uso

```typescript
// En un server action
export const getPropertyById = async (id: string) => {
  return await actionHandler(async () => {
    const property = await propertiesService.getPropertyById(id)
    return property
  })
}

// En un componente
const property = await actionErrorHandler(async () => {
  return await getPropertyById(id)
})
```

## Migración de Código Existente

Para migrar código existente a esta arquitectura:

1. **Identificar operaciones de base de datos**
2. **Crear métodos en el repositorio correspondiente**
3. **Crear métodos en el servicio correspondiente**
4. **Crear server actions en el controlador**
5. **Actualizar componentes para usar los nuevos server actions**
6. **Eliminar código directo de Supabase**

Esta arquitectura proporciona una base sólida para el crecimiento y mantenimiento del proyecto.
