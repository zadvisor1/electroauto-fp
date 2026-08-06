---
numero: 6
title: "Recarga externa"
subtitulo: "Cómo un BEV o PHEV recibe energía desde una fuente externa"
horas: 35
presentacion: /presentaciones/bloque-06.html
crosswalk:
  - modulo: "5078"
    ra: "RA5"
    detalle: "Íntegro"
---

Damos por adquirida la seguridad del Bloque 2 y los circuitos de alto voltaje del Bloque 4.

## 1. Elementos del sistema de recarga

- **Cargador embarcado**: convierte la corriente alterna (CA) de la red en corriente continua (CC) para la batería, en la recarga en CA.
- **Convertidor de carga AC/DC**: parte central del cargador embarcado.
- **Módulo de control de carga**: gestiona el proceso completo, negociando parámetros con la estación de recarga.
- **Toma de carga**: el conector físico instalado en el vehículo.
- **Conector de la estación**: el que porta el cable de recarga externo.

## 2. Tipos de conector

- **Mennekes (Tipo 2)**: el estándar europeo para carga en corriente alterna. Es el que encontrarás en la inmensa mayoría de puntos de recarga públicos y domésticos en España y el resto de Europa.
- **CHAdeMO**: estándar de origen japonés para carga rápida en corriente continua. Cada vez menos frecuente en modelos nuevos.
- **Tesla / CCS Combo 2**: en el mercado europeo, los Tesla actuales incorporan el estándar CCS Combo 2, compatible con la red pública.
- **CCS Combo 2**: en la práctica, el estándar dominante en Europa para carga rápida en CC.

## 3. Tipos de recarga

- **Recarga normal (CA)**: potencias típicas de 3,7 kW a 22 kW. El cargador embarcado del vehículo convierte la CA en CC.
- **Recarga rápida (CC)**: potencias desde 50 kW hasta varios cientos de kW. La conversión CA→CC se hace en la propia estación, no en el vehículo.

### Por qué importa esta diferencia para el diagnóstico
Un fallo de carga en CA y un fallo de carga en CC pueden tener causas completamente distintas: en CA, el problema suele estar en el cargador embarcado o en el módulo de control; en CC, la comunicación entre el vehículo y la estación es un punto de fallo habitual.

## 4. Comunicación vehículo-estación

Durante la recarga, el vehículo y la estación negocian constantemente parámetros: potencia disponible, estado de carga, temperatura, tiempo estimado. Esta comunicación es la responsable de fenómenos como la reducción de velocidad de carga a medida que la batería se acerca al 100%.

### Códigos de colores y luces del estado de carga
La mayoría de vehículos y estaciones usan indicadores luminosos normalizados: en espera, cargando, carga completa, y error.

## 5. Protección de la instalación de recarga

- **Interruptores magnetotérmicos**: protegen la instalación frente a sobrecargas e intensidades excesivas.
- **Interruptores diferenciales**: protegen frente a fugas de corriente hacia tierra.

Estos elementos no forman parte del vehículo, sino de la instalación del cliente — pero un técnico de taller debe saber identificarlos.

## 6. Diagnosis de fallos de carga

1. Identificar si el fallo ocurre en CA, en CC, o en ambos.
2. Comprobar la instalación externa antes de asumir que el fallo está en el vehículo.
3. Interpretar la documentación técnica y conectar el equipo de diagnosis.
4. Verificar el estado del cargador embarcado, del módulo de control de carga y de la toma de carga.
5. Comprobar la última versión de software de las unidades de control implicadas.
6. Aplicar la normativa de seguridad y protección ambiental en cualquier desmontaje.

## 7. Ideas clave para retener

- Mennekes (CA) y CCS Combo 2 (CC) son, hoy, los conectores dominantes en el mercado europeo.
- La conversión CA→CC ocurre en el vehículo (carga normal) o en la estación (carga rápida).
- Antes de asumir una avería del vehículo, siempre se descarta primero la instalación externa del cliente.
- La reducción de velocidad de carga cerca del 100% es normal, no una avería.
