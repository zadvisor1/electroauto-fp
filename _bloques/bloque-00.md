---
numero: 0
title: "Arquitecturas de vehículos híbridos y eléctricos"
subtitulo: "Qué tipos existen, en qué se diferencian y por qué eso determina cómo se trabaja con ellos en el taller"
horas: 20
presentacion: presentacion: "https://www.canva.com/design/DAHR-LlMoo0/4jOTd4qdlw_qd6b-OI3b4w/view"
embed: "https://www.canva.com/design/DAHR-LlMoo0/4jOTd4qdlw_qd6b-OI3b4w/view?embed"
crosswalk:
  - modulo: "5077"
    ra: "RA1"
    detalle: "c), d), e) — funcionalidad y componentes de cada tipo de propulsión"
---

## 1. Por qué existen tantas arquitecturas

Un vehículo "electrificado" no es una sola cosa. El término engloba soluciones muy distintas entre sí, que comparten un rasgo común (incorporan al menos una máquina eléctrica en la propulsión) pero que se diferencian radicalmente en cómo combinan esa máquina eléctrica con el resto del sistema.

Esta variedad no es casualidad: responde a la transición energética y a la normativa europea de reducción de emisiones de CO₂, que impone fuertes sanciones a los fabricantes que no cumplan objetivos de emisiones medias de flota. Cada fabricante ha elegido una o varias arquitecturas según su estrategia, su mercado y su tecnología de partida.

Para un profesional de taller, distinguir la arquitectura **es el primer paso de cualquier intervención**: determina qué componentes existen, qué riesgos hay que gestionar y qué herramientas de diagnosis se necesitan.

## 2. BEV — Vehículo eléctrico puro (Battery Electric Vehicle)

### Definición
Vehículo propulsado exclusivamente por uno o varios motores eléctricos, alimentados por una batería de alto voltaje. No lleva motor de combustión.

### Componentes principales
- **Batería de alto voltaje**: almacena la energía; es el componente más caro y más determinante en autonomía.
- **Motor-generador eléctrico**: convierte energía eléctrica en movimiento (y viceversa, en frenada regenerativa).
- **Módulo electrónico de potencia (inversor)**: convierte la corriente continua de la batería en corriente alterna para el motor.
- **Cargador embarcado**: gestiona la recarga desde una fuente externa.
- **Reductor**: normalmente una única relación de marcha (los motores eléctricos entregan par desde 0 rpm, no necesitan caja de cambios convencional).

### Configuraciones de tracción
Un BEV puede llevar el motor eléctrico en el eje delantero, trasero, en ambos (tracción total), o incluso motores individuales en cada rueda (motor en cubo).

### Para el técnico de taller
Es la arquitectura **mecánicamente más simple** de mantener (menos piezas móviles, no hay motor térmico), pero exige el mayor respeto al alto voltaje porque **toda** la propulsión depende de él.

## 3. HEV — Vehículo híbrido puro (Hybrid Electric Vehicle)

Combina motor térmico (gasolina, diésel o gas) con uno o varios motores eléctricos, **sin posibilidad de enchufarse a una toma externa**. La batería se recarga únicamente mediante el motor térmico y la frenada regenerativa.

### 3.1 Híbrido en serie
El motor térmico **nunca mueve las ruedas directamente**: solo acciona un generador que produce electricidad, la cual alimenta al motor eléctrico que sí mueve las ruedas. Es, en esencia, un vehículo eléctrico con un "generador a bordo".

### 3.2 Híbrido en paralelo
Tanto el motor térmico como el motor eléctrico pueden mover las ruedas, **de forma simultánea o independiente**, normalmente combinados mediante un embrague o un tren epicicloidal.

### 3.3 Híbrido combinado (o serie-paralelo)
Combina ambos esquemas: puede funcionar en modo serie, en modo paralelo, o en una mezcla de ambos según las condiciones de conducción. Es el esquema más complejo mecánicamente, pero el más eficiente en ciudad y carretera combinadas. Es el más habitual entre los híbridos "autocargables" que se venden en España.

### Para el técnico de taller
El HEV añade a la complejidad del BEV **toda la mecánica y electrónica de un motor térmico convencional**, más el reto de diagnosticar cuál de los dos sistemas de propulsión está fallando cuando aparece un síntoma.

## 4. PHEV — Híbrido enchufable (Plug-in Hybrid Electric Vehicle)

Es un híbrido en paralelo o combinado, pero con una **batería de mayor capacidad** que sí puede recargarse desde una toma externa (igual que un BEV), permitiendo recorrer distancias cortas en modo 100% eléctrico antes de que entre en acción el motor térmico.

### Diferencia clave frente al HEV puro
El PHEV necesita todo el sistema de recarga externa (cargador embarcado, toma de carga, gestión de carga CA/CC) que un HEV puro no tiene.

### Para el técnico de taller
Combina la complejidad del HEV combinado **más** la del sistema de recarga de un BEV. Es probablemente la arquitectura que exige el abanico más amplio de conocimientos en un solo vehículo.

## 5. Vehículo eléctrico de autonomía extendida (RXBEV)

Variante poco habitual: es un BEV cuya propulsión es 100% eléctrica, pero que incorpora un pequeño motor térmico **exclusivamente como generador de emergencia** para recargar la batería cuando esta se agota, sin que el motor térmico llegue nunca a mover las ruedas. Conceptualmente está a medio camino entre un BEV y un híbrido en serie.

## 6. FCBEV — Vehículo de pila de combustible (Fuel Cell Battery Electric Vehicle)

### Definición
Vehículo de propulsión eléctrica cuya energía no procede de una batería recargada externamente, sino de una **pila de combustible de hidrógeno**, que genera electricidad mediante una reacción química entre el hidrógeno almacenado y el oxígeno del aire.

### Funcionamiento simplificado
El hidrógeno se almacena a alta presión en un depósito específico. En la pila de combustible, el hidrógeno reacciona en el ánodo, liberando electrones que generan una corriente eléctrica; en el cátodo se combina con oxígeno formando agua como único residuo. Esa electricidad alimenta el motor eléctrico y puede recargar una pequeña batería tampón.

### Para el técnico de taller
Es la arquitectura **menos extendida en España** — apenas hay red de hidrogeneras y son muy pocos los modelos comercializados. Aun así, forma parte del currículo oficial y conviene conocer sus fundamentos, aunque no sea prioritario dominarla en profundidad para el mercado actual.

## 7. Tabla comparativa

| Arquitectura | Motor térmico | Se enchufa | Autonomía eléctrica | Complejidad de mantenimiento |
|---|---|---|---|---|
| **BEV** | No | Sí | Alta (100% eléctrica) | Media (menos piezas, pero AT total) |
| **HEV en serie** | Sí (solo generador) | No | Baja | Alta |
| **HEV en paralelo** | Sí | No | Baja | Alta |
| **HEV combinado** | Sí | No | Baja-media | Muy alta |
| **PHEV** | Sí | Sí | Media (20-80 km típico) | Muy alta |
| **RXBEV** | Sí (solo emergencia) | Sí | Alta | Media-alta |
| **FCBEV** | No | No (repostaje de H₂) | Alta | Alta (tecnología específica) |

## 8. Relevancia de mercado en España

- **BEV y PHEV** concentran la inmensa mayoría de la demanda actual y del crecimiento previsto.
- **HEV combinado** (autocargable) sigue siendo muy popular, especialmente en gama media.
- **FCBEV** es marginal: escasa red de repostaje y pocos modelos disponibles — su tratamiento en el curso es necesariamente más breve.

Esta jerarquía de relevancia es la que justifica por qué, en el Bloque 3 (Diagnosis y mantenimiento por arquitectura), el tiempo dedicado a BEV/HEV/PHEV es mucho mayor que el dedicado a pila de combustible.

## 9. Ideas clave para retener

- Toda arquitectura combina, en mayor o menor medida, estos bloques: motor térmico (si lo hay), máquina eléctrica, batería de alto voltaje, electrónica de potencia.
- La diferencia entre serie, paralelo y combinado está en **cómo se conecta mecánicamente el motor térmico a las ruedas**, no en si hay o no motor eléctrico.
- "Enchufable" (PHEV) no es lo mismo que "híbrido" (HEV): la clave está en si la batería se recarga o no desde una toma externa.
- La pila de combustible **no es una batería**: genera electricidad mediante una reacción química continua con hidrógeno, no la almacena previamente cargada.
