---
layout: default
title: "Temario propio · Mantenimiento de VHE"
---

<h1>Mantenimiento de Vehículos Híbridos y Eléctricos</h1>
<p>Temario propio de ElectroAuto FP — 11 bloques, 630h, sin contenidos repetidos.</p>

<div class="temario-grid">
{% assign bloques = site.bloques | sort: "numero" %}
{% for b in bloques %}
  <a href="{{ b.url | relative_url }}" class="temario-card">
    <span class="temario-num">{{ b.numero }}</span>
    <h3>{{ b.title }}</h3>
    <span class="temario-horas">{{ b.horas }}h</span>
  </a>
{% endfor %}
</div>
