---
numero: 4
title: "Circuitos y componentes de alto voltaje"
subtitulo: "Cómo está construido físicamente el circuito de AT y cómo se diagnostican sus averías"
horas: 55
presentacion: /presentaciones/bloque-04.html
crosswalk:
  - modulo: "5078"
    ra: "RA1, RA2"
    detalle: "Resto de CE no cubiertos en Bloque 1/Bloque 2"
---

Este bloque se centra en el "cableado" del sistema. Damos por adquirida toda la seguridad del Bloque 2: aquí no se repite el protocolo de desconexión, solo se aplica.

## 1. Cables, aislantes y conectores de alto voltaje

### Identificación visual
Los cables de alto voltaje son, en toda la industria, de **color naranja**. Es la primera comprobación visual antes de tocar cualquier circuito.

### Circuitos flotantes
A diferencia de un circuito convencional de 12V (donde el negativo va a masa), los circuitos de alto voltaje son **flotantes**: ni el positivo ni el negativo tienen conexión directa con la carrocería. Si un solo punto del circuito entra en contacto con la carrocería, no se produce automáticamente un cortocircuito peligroso, porque no hay masa de referencia. El sistema de control vigila constantemente el aislamiento entre el circuito y la carrocería.

### Tipos de cables, aislantes y conectores
Cada fabricante especifica materiales y secciones concretas según la intensidad máxima que debe soportar cada tramo del circuito. Los conectores de alto voltaje incluyen sistemas de bloqueo mecánico e interlocks eléctricos.

## 2. Elementos de los sistemas de carga

- Módulo de control de carga.
- Toma de carga (conector físico en el vehículo).
- Conectores CA y CC, con especificaciones eléctricas y mecánicas distintas.

## 3. Diagnosis de averías en circuitos de alto voltaje

### Causas más habituales
- Sobrecarga o sobredescarga de un tramo del circuito.
- Temperatura de funcionamiento fuera de rango.
- Fuga térmica (acumulación de calor sin disipación adecuada).
- Fallo de aislamiento respecto a carrocería.

### Herramientas de diagnóstico
- **Verificador de ausencia de tensión** (ya trabajado en el Bloque 2).
- **Comprobador de aislamiento**: mide la resistencia de aislamiento entre el circuito de alto voltaje y la carrocería.
- Equipo de diagnosis del vehículo: lectura de códigos, verificación de las líneas de comunicación entre unidades de control.

### Flujo de trabajo
1. Interpretar la documentación técnica según el código de avería.
2. Aplicar el protocolo de seguridad del Bloque 2.
3. Determinar los elementos a comprobar: conectores, terminales, cableado, componentes AT.
4. Desmontar, montar y conexionar según especificaciones del fabricante.
5. Reconectar y poner en servicio.
6. Verificar la restitución de la funcionalidad de los sistemas intervenidos.
7. Comprobar líneas de comunicación de las UCEs y actualizar software si procede.

## 4. Electrónica de potencia y compatibilidad electromagnética

Los circuitos de alto voltaje generan campos electromagnéticos que pueden interferir con otros sistemas electrónicos si no están correctamente blindados. Sustituir un tramo de cableado sin el blindaje adecuado puede generar interferencias que se manifiestan como fallos intermitentes difíciles de diagnosticar en otros sistemas del vehículo.

## 5. Relés, fusibles y conector de servicio

- **Relés de control de alta tensión**: gestionan la conexión/desconexión controlada del circuito.
- **Fusibles de alto voltaje**: protección específica, distinta de los fusibles convencionales de 12V.
- **Conector de servicio**: permite aislar manualmente el circuito de alta tensión durante el mantenimiento.

## 6. Ideas clave para retener

- Naranja = alto voltaje, siempre, sin excepción.
- Los circuitos de alto voltaje son flotantes: no hay masa de referencia en la carrocería.
- Un fallo de aislamiento se detecta midiendo la resistencia entre el circuito y la carrocería, no con un multímetro convencional.
- El blindaje electromagnético de los cables de alto voltaje no es opcional.
