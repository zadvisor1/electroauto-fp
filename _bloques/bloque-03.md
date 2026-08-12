---
numero: 3
title: "Diagnosis y mantenimiento por arquitectura"
subtitulo: "El núcleo técnico más extenso del curso"
horas: 110
presentacion: /presentaciones/bloque-03.html
crosswalk:
  - modulo: "5077"
    ra: "RA3, RA4, RA5"
    detalle: "Íntegros"
---

Retomamos las arquitecturas del Bloque 0, pero ahora con las herramientas de diagnosis en la mano y la seguridad del Bloque 2 ya asumida como base de trabajo.

## 1. Diagnosis y mantenimiento en BEV (eléctrico puro)

### Componentes a revisar
- **Motor-generador eléctrico**: convierte energía eléctrica en movimiento y viceversa (frenada regenerativa).
- **Módulo electrónico de potencia**: incluye el inversor (CC→CA para el motor) y, en muchos casos, el convertidor DC/DC.
- **Cables de alto voltaje**: siempre de color naranja, aislados de la carrocería.
- **Batería de alto voltaje**: la desarrollaremos en profundidad en el Bloque 5.
- **Cargador embarcado**: gestiona la recarga desde una fuente externa (detalle completo en el Bloque 6).

### Tipos de motor eléctrico
- **Motor asíncrono trifásico**: robusto y económico, rotor de jaula de ardilla o de anillos rozantes.
- **Motor síncrono de imanes permanentes (BRUSHLESS)**: mayor eficiencia, muy extendido en automoción.
- **Motor de reluctancia conmutada**: sin imanes permanentes, interesante por coste de materiales.
- **Motor de flujo axial**: más compacto, usado en aplicaciones de alta densidad de potencia.

### Configuraciones de tracción
Motor en eje delantero, trasero, tracción total con dos motores, o motores individuales en cada rueda (motor en cubo).

### Flujo de trabajo de diagnosis
1. Recepción y prediagnóstico: identificar el tipo de arquitectura y síntoma.
2. Conexión del equipo de diagnosis: lectura de códigos de fallo, verificación de comunicación entre unidades de control.
3. Localización del componente implicado según el código y la sintomatología.
4. Sustitución o reparación según especificaciones del fabricante.
5. Verificación de que las unidades de control tienen la última versión de software — actualizar (flashear) si procede.
6. Prueba de funcionamiento final antes de la entrega.

## 2. Diagnosis y mantenimiento en HEV puro (híbrido no enchufable)

### Componentes añadidos frente al BEV
- **Motor térmico** (gasolina, diésel o GLP/GNC), con sus propios sistemas de diagnosis convencionales.
- **Convertidores e inversores** que gestionan el reparto de potencia entre motor térmico y eléctrico.
- **Interruptor de servicio**: elemento de seguridad que aísla el circuito de alta tensión durante el mantenimiento.

### El reto real del diagnóstico en HEV
No basta con saber diagnosticar el motor térmico por un lado y el eléctrico por otro: la dificultad está en **determinar cuál de los dos sistemas** está causando el síntoma cuando ambos trabajan de forma coordinada.

### Ciclos de combustión en motores híbridos
Algunos motores térmicos de vehículos híbridos usan el **ciclo Atkinson** en lugar del ciclo Otto convencional, priorizando la eficiencia sobre la potencia máxima.

## 3. Diagnosis y mantenimiento en PHEV (híbrido enchufable)

Todo lo anterior, más:

- **Baterías de mayor capacidad** que en un HEV puro, con su propia gestión térmica reforzada.
- **Sistema de recarga externa completo** (desarrollado en detalle en el Bloque 6).
- **Cálculo de cargas eléctricas**: verificar que la instalación de recarga del cliente soporta la potencia solicitada por el vehículo.

### Diferenciación de conectores
Fundamental distinguir en todo momento los conectores de baja tensión (negativo a masa) de los de alta tensión (color naranja, aislados de la carrocería, circuitos flotantes).

## 4. Diagnosis y mantenimiento en pila de combustible (FCBEV)

*(Tratamiento más breve: tecnología minoritaria en el mercado español.)*

- Sistema FCBEV: pila de combustible + depósito de hidrógeno a alta presión + batería tampón + máquina eléctrica.
- Los equipos de diagnosis para este sistema son específicos del fabricante y poco extendidos en talleres generalistas.
- Los procesos de mantenimiento se centran en la integridad del depósito de hidrógeno y en el estado de la pila de combustible.

## 5. Elementos comunes a todas las arquitecturas

- Se **interpreta la documentación técnica del fabricante** antes de empezar.
- Se **seleccionan materiales, equipos, útiles y herramientas** adecuados a la intervención concreta.
- Se **verifica la última versión de software** de las unidades de control implicadas.
- Se **documenta** el proceso realizado.
- Se aplican, sin excepción, los protocolos de seguridad del Bloque 2.

## 6. Ideas clave para retener

- El tipo de motor eléctrico condiciona el procedimiento de diagnosis y las herramientas necesarias.
- En un HEV, el reto no es diagnosticar cada sistema por separado, sino determinar cuál de los dos está fallando cuando trabajan coordinados.
- El PHEV suma la complejidad del HEV combinado más la de un sistema de recarga completo.
- La pila de combustible se trata con menor profundidad relativa por su escasa implantación real en España.
