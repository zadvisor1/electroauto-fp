---
numero: 7
title: "Transmisión y frenos regenerativos"
subtitulo: "Lo que más cambia mecánicamente frente a un vehículo convencional"
horas: 60
presentacion: /presentaciones/bloque-07.html
crosswalk:
  - modulo: "5079"
    ra: "RA2, RA3"
    detalle: "Íntegros"
---

Damos por adquirida la seguridad del Bloque 2.

## 1. Por qué la transmisión de un VHE es distinta

Un motor eléctrico entrega su par máximo desde 0 rpm y tiene un rango de revoluciones mucho más amplio que un motor térmico. Esto elimina, en muchos casos, la necesidad de una caja de cambios con varias relaciones: la mayoría de BEV llevan un **reductor de una sola marcha**.

## 2. Trenes epicicloidales y unidad mecatrónica

### Tren epicicloidal
Formado por una rueda solar central, varios satélites que giran a su alrededor y una corona exterior. Puede combinar o repartir el movimiento entre tres ejes distintos de forma continua, sin necesidad de embragues que conecten y desconecten marchas de forma discreta. Ideal para híbridos combinados.

### Grupo diferencial epicicloidal
Combina la función del tren epicicloidal con la función de diferencial (reparto de par entre las ruedas de un mismo eje).

### Unidad mecatrónica
Conjunto de electrónica y elementos hidráulicos/eléctricos que gestiona y controla el tren epicicloidal o el cambio automático.

## 3. Cambios automáticos de una marcha y de doble embrague

- **Transmisión epicíclica de una velocidad**: típica en BEV puros.
- **Cambio de doble embrague**: dos embragues gestionan de forma independiente las marchas o la conexión del motor térmico y del eléctrico.
- **Bloqueo de aparcamiento**: mecanismo que inmoviliza la transmisión en posición P.
- **Palanca selectora**: en muchos VHE es un mando electrónico (by-wire), sin conexión mecánica directa a la transmisión.

### Diagnóstico
Interpretar la documentación técnica → diagnosticar con el equipo específico → planificar la intervención → sustituir o reparar → verificar y ajustar parámetros de control → comprobar la última versión de software → realizar pruebas de funcionamiento.

## 4. Frenos regenerativos, electromagnéticos, ABS e hidráulicos

### El concepto de frenada regenerativa
Al frenar o al soltar el acelerador, el motor eléctrico puede funcionar como generador, convirtiendo la energía cinética en electricidad que se devuelve a la batería. El reto de ingeniería es **combinar la frenada regenerativa con el sistema de frenos hidráulico** de forma imperceptible para el conductor.

### Componentes
- **Servofreno electromecánico**: sustituye al servofreno de vacío convencional.
- **Sistema ABS integrado**: coordina la frenada regenerativa con el sistema antibloqueo.
- **Acumulador de presión**: complementa la asistencia del servofreno.
- **Motor-generador trifásico**: el mismo motor de tracción, funcionando en modo generador.

### Por qué es un sistema de seguridad activa crítico
Un error de diagnóstico o de reparación en el sistema de frenos tiene **consecuencias directas de seguridad vial**. La eficacia y la seguridad de la frenada se verifican siempre mediante pruebas estipuladas por el fabricante, sin excepciones.

## 5. Ideas clave para retener

- La mayoría de BEV no necesitan caja de cambios convencional.
- El tren epicicloidal permite repartir potencia entre motor térmico y eléctrico de forma continua.
- La palanca selectora "by-wire" no tiene conexión mecánica directa: un fallo puede ser electrónico, no mecánico.
- Los frenos son el único sistema de este bloque donde un error de diagnóstico tiene consecuencias directas de seguridad vial.
