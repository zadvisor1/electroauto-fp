---
numero: 1
title: "Fundamentos eléctricos comunes"
subtitulo: "El lenguaje que necesitas dominar antes de entrar en seguridad, propulsión, baterías o recarga"
horas: 20
presentacion: /hibridos-electricos/bloque-01/presentacion.html
crosswalk:
  - modulo: "5077"
    ra: "RA1"
    detalle: "a), b), f)"
  - modulo: "5078"
    ra: "RA1"
    detalle: "a), b)"
---

## 1. Por qué necesitamos este bloque antes de seguir

Todos los sistemas que vamos a ver a partir de aquí —propulsión, baterías, recarga, frenos regenerativos— se explican con el mismo lenguaje eléctrico y electrónico de base. Dominarlo aquí, una sola vez, evita tener que "reaprenderlo" en cada bloque técnico posterior.

Este bloque no trata todavía sobre el alto voltaje en sí (eso es el Bloque 2), sino sobre **los conceptos y el lenguaje** que necesitas para entender cualquier esquema, cualquier magnitud y cualquier mensaje de un equipo de diagnosis.

## 2. Magnitudes eléctricas básicas

- **Tensión (V)**: la "fuerza" que empuja a los electrones. En VHE hablamos de baja tensión (12V, batería de servicio) y alta tensión (decenas a cientos de voltios, batería de tracción).
- **Intensidad (A)**: la cantidad de electrones que circulan por segundo. Determina la capacidad de un cable y de un conector.
- **Resistencia (Ω)**: la oposición al paso de la corriente. Es clave para entender por qué un mal contacto genera calor (y por qué eso es peligroso en alto voltaje).
- **Potencia (W / kW)**: el producto de tensión por intensidad. Es la magnitud que determina cuánta energía puede entregar o absorber un motor, un cargador o una batería en cada instante.

### Ley de Ohm
La relación fundamental que conecta las tres primeras magnitudes: **V = I × R**. Se usa constantemente para interpretar mediciones con el multímetro y para razonar por qué una caída de tensión indica una resistencia anómala en un circuito (por ejemplo, un conector deteriorado).

## 3. Corriente continua (CC) y corriente alterna (CA)

- **Corriente continua (CC/DC)**: fluye siempre en el mismo sentido. Es la que almacena la batería de alto voltaje.
- **Corriente alterna (CA/AC)**: cambia de sentido periódicamente. Es la que necesita el motor eléctrico para girar (en la mayoría de los casos) y la que llega de la red doméstica o industrial para la recarga.

Esta diferencia explica por qué son necesarios los **conversores**: la batería entrega CC, pero el motor necesita CA (de ahí el inversor); y la red eléctrica entrega CA, pero la batería se recarga en CC (de ahí el cargador/rectificador).

## 4. Diagramas de potencia

Un diagrama de potencia representa, de forma gráfica, cómo fluye la energía entre los distintos componentes de un sistema de propulsión en un instante dado (por ejemplo, en aceleración, en crucero o en frenada regenerativa).

Saber leer estos diagramas te permite, sin necesidad de medir nada todavía, anticipar qué componente debería estar activo y cuál no en cada fase de conducción — una primera herramienta de diagnóstico "a ojo".

## 5. Simbología de esquemas eléctricos y electrónicos

En la documentación técnica de cualquier fabricante encontrarás una simbología estandarizada para representar:

- Baterías (de servicio y de alto voltaje), con distinción visual clara entre ambas.
- Motores y generadores eléctricos.
- Inversores y convertidores.
- Relés, fusibles y elementos de protección.
- Conectores de alto voltaje (habitualmente marcados de forma diferenciada del resto del circuito).

Aprender a "leer" un esquema es tan importante como reconocer el componente físico: en un diagnóstico real, normalmente empiezas por el esquema, no por el coche.

## 6. Redes de comunicación: CAN y LIN

- **Red CAN (Controller Area Network)**: red de alta velocidad, robusta frente a interferencias, utilizada para la comunicación entre unidades de control críticas (motor, transmisión, gestión de batería, frenos).
- **Red LIN (Local Interconnect Network)**: red más simple y económica, utilizada para componentes menos críticos en tiempo real (elevalunas, climatización, iluminación).

### Por qué esto importa en VHE
La gestión de un sistema de propulsión híbrido o eléctrico depende de una comunicación constante y fiable entre la unidad de control del motor, la de la batería, la del inversor y la del sistema de frenos regenerativos. Un fallo de comunicación en la red CAN puede generar síntomas que, a primera vista, parecen una avería mecánica o eléctrica, cuando en realidad es un problema de datos.

## 7. Ideas clave para retener

- La Ley de Ohm (V = I × R) es la herramienta de razonamiento más usada en cualquier diagnóstico eléctrico.
- CC y CA no son intercambiables sin conversión: de ahí la existencia de inversores, convertidores y cargadores en todo sistema VHE.
- Leer un esquema antes de tocar el vehículo ahorra tiempo y evita errores de diagnóstico.
- Muchos síntomas "eléctricos" en un VHE moderno son en realidad fallos de comunicación en la red CAN, no fallos de un componente físico.
