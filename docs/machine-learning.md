---
title: Machine Learning
date: 
slug: machine-learning

---
## Maschinelles Lernen

Um eine Karte zu generieren, die Bewertungen der wahrgenommenen Sicherheit und Atmosphäre an verschiedenen Orten in einer Stadt/Gemeinde darstellt, haben wir zwei “Convolutional Neural Networks” trainiert. Das eine lernte anhand der aus dem Crowdsourcing gesammelten Daten einzuschätzen, welches von zwei Bildern den als sicherer empfundenen Raum repräsentiert. Dies erfolgte mit einer Genauigkeit von 69,3% im Vergleich zu den Crowdsourcing-Daten. Das andere lernte zu erkennen, in welchem von zwei Bildern des öffentlichen Raumes man sich lieber aufhalten würde. Dies erfolgte mit einer Genauigkeit von 68,9% im Vergleich zu den Crowdsourcing-Daten.

Bilder aus verschiedenen Städten und Gemeinden werden also gesammelt. Jedes Bild wird mit mindestens 30 anderen Bildern aus derselben Stadt oder Gemeinde mit diesen neuronalen Netzwerken verglichen. Bei jedem Vergleich steigt die Punktzahl des "Gewinner"-Bildes (das als sicherer bzw. mit besserer Atmosphäre wahrgenommen wird), während die Punktzahl des anderen Bildes sinkt (unter Verwendung des Trueskill-Score-Algorithmus).

Wenn der Vergleich aller Bilder einer Stadt bzw. einer Gemeinde abgeschlossen ist, wird eine Liste der Orte mit ihrer entsprechenden Sicherheits- bzw. Atmosphärebewertung erstellt. Indem jedes Bild und die entsprechende Punktzahl mit den Koordinaten verknüpft wird, an denen das Bild aufgenommen wurde, können dann die Sicherheits- und Atmosphären-Einschätzungen auf einer Karte visualisiert werden.

![](/bild1.png)