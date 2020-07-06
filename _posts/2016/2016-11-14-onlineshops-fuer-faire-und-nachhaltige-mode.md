---
uid: "0011"
title: "Alle Onlineshops für faire und nachhaltige Mode"
subtitle: "Fair, nachhaltig, vegan"
date: 2016-11-14
categories: [Fair Fashion]
description: "Faire und nachhaltige Mode gibt es immer häufiger zu kaufen. Hier findest du eine Liste von Shops, bei denen du unbedingt mal vorbei schauen solltest."
keywords: [nachhaltige Mode, faire Mode]
related-posts: ["0086", "0082", "0042", "0089", "0043", "0059"]
---
Faire und nachhaltige Mode ist ein wichtiger Aspekt, wenn man nachhaltiger Leben und seinen ökologischen Fußabdruck klein halten möchte. Zudem kannst du damit für faire Arbeitsbedingungen und Lohn für die Arbeiter eintreten und unterstützt die Verwendung von recycelten oder natürlichen und biologisch abbaubaren Rohstoffen.

Es gibt auch Labels, die sich auf vegane Kleidungsstücke spezialisiert haben. Für die Herstellung ihrer Produkte wird meist recyceltes Plastik oder Bioplastik verwendet. Du hast also die freie Auswahl, egal worauf du bei der Wahl deiner Kleidungsstücke den Schwerpunkt legen möchtest. In dieser Liste habe ich dir allerlei Onlineshops zusammengetragen, die nachhaltig und fair produzierte Mode verkaufen. Man glaubt gar nicht, dass Öko Mode so schick sein kann :D.

Nun stellt sich aber immer die Frage: Wieso genau handelt es sich um nachhaltige Mode? Welche Kriterien müssen dafür erfüllt sein? Was muss sichergestellt werden, um eine faire Produktion zu gewährleisten? Hier mal ein kleiner Überblick.

## GOTS Zertifizierung
Der Global Organic Textile Standard (GOTS) ist eine Zertifizierung für natürlich hergestellte Textilie. Diese müssen zu mindestens 70% aus natürlichen Fasern hergestellt sein, wobei diese auch biologisch erzeugt sein müssen. Das bezieht sich allerdings nicht auf Felle oder Leder.

Außerdem müssen alle Zusatzstoffe bekannt und getestet sein. Dabei ist es wichtig, dass auch diese Stoffe biologisch abbaubar sind. Das finde ich wirklich sehr wichtig, denn abgesehen von den eigentlichen Rohstoffen, sind ja wesentlich mehr Chemikalien und Stoffe an der Verarbeitung beteiligt, von denen man als Verbraucher meistens keine Ahnung hat. Überhaupt gelten sehr strenge Richtlinien was den Einsatz von Chemikalien und Bleichmitteln angeht.

Außerdem sind die Unternehmen verpflichtet, sich um die Minimierung von Abwasser und Abfall zu kümmern. Für Verpackungen von GOTS zertifizierten Textilien gilt: kein PVC. Pappe oder Papier müssen FSC oder PEFC zertifiziert sein.

Des Weiteren wird bei der Verarbeitung und Herstellung auf soziale Kriterien geachtet. Dazu gehören: keine Zwangsarbeit, Mindestlohn, keine Kinderarbeit, sichere und hygienische Arbeitsbedingungen, Begrenzung der Arbeitszeit und geregelte Beschäftigung.

Also kannst allein durch den Kauf von GOTS zertifizierten Kleidungsstücken schon ein großes Statement für faire Arbeitsbedingungen und nachhaltige Mode setzen! Probiers doch mal aus, wenn du dir das nächste mal etwas neues zulegen willst.

## Fairtrade
Oft achten solche Onlineshops auch auf Fairtrade. Grundsätzlich soll Fairtrade gerechte Arbeitsbedingungen und Lohnverhältnisse sicherstellen. Das Fairtrade Siegel gibt es in vielen unterschiedlichen Ausführungen beispielsweise für Textilien. Hier stellt es sicher, dass bei allen Arbeitsschritten in der gesamten Lieferkette Fairtrade-Standards erfüllt sind. Richtig, vom aussähen der ersten Baumwollpflanze bis zum fertigen Kleidungsstück!

Dieses Siegel gibt es allerdings erst seit dem 1.1.2016 und somit kann es noch dauern bis die gesamten Lieferketten umgestellt sind. Aber es ist ein sehr gut Schritt!

Fairtrade setzt sich nicht nur für faire Arbeitsbedingungen, gerechtere Löhne und die Stärkung der Rechte der Arbeitnehmer ein, sondern unterstützt auch Unternehmen in der Umsetzung dieses Standards.

## Shops für faire und nachhaltige Mode
Nun also endlich zu den Shops, die ich so kenne und gefunden habe. Bei einigen wenigen habe ich auch schon etwas gekauft. Ich denke ich werde in Zukunft auch noch ein paar Shops davon einzeln vorstellen, weil es einige gibt, die mir wirklich sehr sehr gut gefallen. Ach ja, und natürlich haben alle diese Onlineshops ganz unterschiedliche Zertifizierungen für ihre Textilien. Das könnt ihr auf den Websites aber immer nachlesen. Falls du nach Boutiquen in deiner Nähe suchst, die ebenfalls auf faire und nachhaltig produzierte Mode setzen, guck dir mal [getchanged.net](https://www.getchanged.net/) an. Oder informiere dich unter [vero-selvie.de](https://www.vero-selvie.de/).

Letzten habe ich außerdem eine App gefunden, die über nachhaltige Mode informiert und Labels und Shops listet, die nachhaltig produzieren - [Good On You – Ethical Fashion App](https://play.google.com/store/apps/details?id=au.org.goodonyou.goodonyou).

**Kennst du Onlineshops die sich besonders durch nachhaltig, vegan und/oder fair produzierte Kleidung auszeichnen? Schreib mir einfach eine Mail an [info@minimalwaste.de](mailto:info@minimalwaste.de) und ich werde sie in die Liste mit aufnehmen.**

<table>
  <thead>
    <tr>
      <th>URL</th>
      <th>Produkte</th>
      <th>vegan?</th>
      <th>fair?</th>
      <th>Sitz in</th>
    </tr>
  </thead>
  <tbody>
    {% for shop in site.data.onlineshops-nachhaltige-mode %}
      <tr>
        <td data-label="URL"><a href="{{ shop.url }}">{{ shop.name }}</a></td>
        <td data-label="Produkte">{{ shop.products }}</td>
        <td data-label="vegan?">{{ shop.vegan }}</td>
        <td data-label="fair?">{{ shop.fair }}</td>
        <td data-label="Sitz in">{{ shop.located }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

Bis zum nächsten Mal,

\- Sarah
