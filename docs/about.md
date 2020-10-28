---
title: Hintergrundinfos zum Projekt
date: 2020-04-13
slug: about

---
Räume haben einen positiven oder negativen Einfluss auf uns – sie verhalten sich nie neutral. Das Kooperationsprojekt «Streetwise» der Metropolitankonferenz Zürich verwendet neue Ansätze. Es untersucht die alltägliche Bewertung von Orten durch die Bevölkerung und macht sie sichtbar. Streetwise misst die menschliche Wahrnehmung von räumlichen Situationen und verwendet hierfür die Methode des Crowdsourcing: Einer grossen Zahl von Personen werden Bildpaare des öffentlichen Raumes online angezeigt.

Durch Anklicken eines Bildes geben diese jeweils eine Bewertung ab, womit ein Algorithmus trainiert wird. Durch eine sehr grosse Anzahl von Klicks lernt das System, Bilder selbstständig zu bewerten. So können schliesslich beliebige räumliche Situationen automatisch bewertet werden. Es entsteht die erste Karte der räumlichen Qualität in der Schweiz.

In unserem Projekt fragen wir zunächst nach der Einschätzung von räumlichen Situationen bezüglich deren Sicherheit.

📋 [**One Pager** herunterladen](docs/Onepager_Streetwise.pdf) (PDF)

### Kernideen

**Es gibt keine neutralen Räume**: Entweder sie helfen oder sie schaden uns. So klar bringt die Architekturkritikerin und Autorin [Sara Williams Goldhagen](http://sarahwilliamsgoldhagen.com/) auf den Punkt, welche Bedeutung räumliche Qualitäten für unser Zusammenleben haben. Für das Wohlbefinden oder für die Wahrnehmung von Sicherheit. Die [Broken-Windows Theorie](https://de.wikipedia.org/wiki/Broken-Windows-Theorie) lehrt uns, dass ein direkter Zusammenhang zwischen der Atmosphäre – etwa gemessen am baulichen Zustand von Stadtgebieten –und Kriminalität besteht. Und Kevin Lynch belegt in seinem epochalen Buch “[The Image of the City](http://architectureandurbanism.blogspot.com/2010/09/kevin-lynch-image-of-city-1960.html)”, dass es kollektive Bilder der Stadt gibt, dass ein öffentliches oder allgemeines “Image” von Orten besteht. Und dass wir dieses erfassen können.

**Die Zusammenhänge zwischen Raumwahrnehmung und Verhaltensweisen sind zentral für den Erfolg** der politisch beschlossenen Siedlungsentwicklung nach innen (-> [Akzeptanz von Nachverdichtung](https://are.zh.ch/internet/baudirektion/are/de/raumplanung/strategien-konzepte/langfristige-raumentwicklungsstrategie/studien8_14/_jcr_content/contentPar/downloadlist_1/downloaditems/359_1422373887343.spooler.download.1422968786586.pdf/Akzeptanz_Dichte_2014.pdf)) oder für die Sicherheit (->Intervention und Prävention) – aber auch für jede weitere Politik- und Verwaltungsdomäne, die eine räumliche Komponente aufweist. Hierzu gehören Bereiche wie Gesundheit, Alter genauso wie die Freiraumplanung.

**Früher: Ein Ressourcenproblem. Teuer, kompliziert, aufwändig und ortsgebunden.** Gleichzeitig liegen nur punktuelle Daten über die Wahrnehmung von Räumen durch die Bevölkerung vor. Grund hierfür ist, dass die Erhebung entsprechender Informationen bislang mit unverhältnismässig grossem Aufwand in Form von Befragungen zu spezifischen Themen und spezifischen Orten verbunden war. **Folge** hiervon ist, dass etwa in der Siedlungsentwicklung Fragen der räumlichen Qualität vorschnell als “Geschmackssache” abgetan und die bedeutende **Ortswahrnehmung der Bevölkerung kaum beachtet** wurde. Die Effizienz- und Wohlstandsverluste lassen sich schwer abschätzen, sie dürften aber erheblich sein.

**Heute ist es anders.** Maschinenlernen erlaubt es seit einigen Jahren, komplexe Probleme wie beispielsweise der Filmgeschmack von Millionen von Netflix Nutzern oder die Konsumpräferenzen von Amazon Kunden zu lösen - oder eben die [Raumwahrnehmung quantitativ zu untersuchen](https://medium.com/mit-media-lab/streetscore-1b8f846ff13d). Der springende Punkt ist hierbei: Während **es sehr schwierig ist,  “Sicherheit” oder “Wohlbefinden” im Raum _allgemein und abstrakt_ zu definieren, fällt es den Leuten sehr leicht, eine _bestimmte und konkrete_ Situation mit Blick auf  ihr Sicherheitsgefühl oder ihre Aufenthaltsqualität zu beurteilen**, oder jeweils zwei Situationen zu beurteilen.

**Streetwise macht sich dies zu Nutze, indem Algorithmen durch den Vergleich von vielen Bildpaaren die Einschätzung von Raumqualitäten erlernen**. Ziel von Streetwise ist es, die Strassenweisheit, also das Wissen und die Betroffenheit der Bevölkerung, für Entscheidungen von Politik, Verwaltung und Zivilgesellschaft systematisch nutzbar zu machen. Die vorgeschlagene Methode ist erprobt und bewährt, ein erläuterndes Video vonseiten MIT Media Lab aus Boston findet sich [hier](https://www.media.mit.edu/projects/place-pulse-new/overview/).

### Maschinelles Lernen

Im Crowdsourcing Streetwise arbeiten wir mit maschinellem Lernen. Das heisst, wir versuchen, Computer so zu trainieren, dass diese – gleich wie wir – räumliche Situationen in Bezug auf eine bestimmte Fragestellung bewerten können. Vorerst fokussieren wir uns bei Streetwise auf die Fragestellung generellen Sicherheitsempfindens und später auch in Bezug auf die Aufenthaltsqualität im öffentlichen Raum. Die Basis für den Lernprozess der Computer setzen wir Menschen: Vorgenommene Bilderbewertungen von einer hohen Anzahl und unterschiedlichen Bewohner*innen der Schweiz  («Crowd» = Masse) stellen die wertvolle Referenz für den Computer-Algorithmus dar, damit dieser überhaupt «weiss», wie er bestimmte Bilder bewerten soll.

Der Ansatz des maschinellen Lernens (künstliche Intelligenz) begründet sich in zwei Phasen: das «Lernen» und die sogenannte «Klassifizierung».

**Lernen:**

* Sammlung von Bilddaten des öffentlichen Raumes (Quelle: [Mapillary](https://www.mapillary.com/)) aus der Metropolitanregion Zürich (Kantone Zürich, Aargau, Thurgau, Schaffhausen, Schwyz, St. Gallen, Zug und Luzern)
* Ein angepasstes siamesisches neuronales Netz (Algorithmus) wird darauf trainiert, abschätzen zu können, welches von zwei gegenübergestellten Bildern als sicherer empfunden wird.
* Ein Modell für die automatische Klassifizierung wird erstellt.

**Klassifizierung:**

* Sammlung weiterer Bilddaten des öffentlichen Raumes aus der Schweiz
* Vorhersage der Sicherheitsbewertung unter Anwendung des Klassifizierungsmodells
* Visualisierung der Ergebnisse auf einer interaktiven Karte (diese wird voraussichtlich Ende 2020 verfügbar sein)