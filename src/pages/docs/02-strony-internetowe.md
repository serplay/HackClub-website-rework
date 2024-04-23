---
title: Strony internetowe
layout: ../../layouts/DocumentLayout.astro
---

# Strony internetowe

Pierwsze strony internetowe zawierały jednynie informacje do odczytu i prawie niczym różniły się od zwykłego dokumentu tekstowego. Z biegiem czasu do stron dodane zostały w kolejności takie funkcje jak styl oraz interaktywność. To właśnie 3 główne elementy stron internetowych do których odnosimy się jako:
- HTML - hypertext markup language - treść
- CSS - cascading style sheets - styl
- JS - JavaScript - dodatkowa interaktywność

## Strony statyczne

Strony statyczne charakteryzują się tym, że ich zawartość jest jak nazwa wskazuje *statyczna*, co oznacza, że każdy użytkownik widzi taką samą zawartość, a jej interaktywność ogranicza się do korzystania z treści umiesznonej na stronie, bez zewnętrznego serwera.

Przykładem strony statycznej jest blog. Użytkownik może wejść na stronę i zobaczyć wszystkie artykuły jednak nie wchodzi w interakcję, która wpływa na zawartość strony. Jedynie właściciel takiej strony może zmienić jej zawartość, modyfikując kod źródłowy, czy dodając nowy artykuł.

Innym przykładem jest przeglądarkowy kalkulator, który pozwala nam na wykonywanie obliczeń wewnątrz przeglądarki.

## Strony dynamiczne

Strony dynamiczne używają dodatkowych technologii serwerowych, takich jak: bazy danych, usługi autoryzacji,

### Oprogramowanie

Aby stworzyć podstawową stronę statyczną wystarczy niewiele. Możemy to zrobić nawet za pomocą jednego pliku. Jednak oznacza to, że musimy panaować nad wszystkimi zachodzącymi procesami *samodzielnie*, co nie jest dobrym rozwiązaniem.

#### Framework

Framework jest oprogramowaniem znajdującym się w naszym kodzie, tworzącym szkielet do budowania kodu. Dzięki niemu możemy skorzystać z bardziej zaawansowanych i wyspecjalizowanych funkcji w prosty sposób. Narzuca on nam pewne sposoby i instrukcje, w jaki sposób powinniśmy robić dane rzeczy. Dzięki temu trzymając się *frameworku*, możeby być pewni, że nie napotkamy się na problemy natury technicznej. W skrócie - nie musimy wiedzieć co dzieje się pod spodem, ale wiemy, że dzieje się tam dobrze, i że pomaga nam to w kodowaniu.

## Hosting

Aby strona była dostępna publicznie na całym świecie należy *hostować* ją na serwerze. Jednym z rozwiązań jest ustawienie takiego serwera na własnym urządzeniu lecz ze względów bezpieczeństwa i wiążących się z tym dodatkowych trudności, lepiej skorzystać z hostingu w chmurze. Istnieje wiele typów *hostingów*, które skupiają się bardziej na różnych aspektach *wdrażania* naszego kodu.

### Hosting statycznych stron

Do hostowania statycznych stron internetowych najlepszymi darmowymi platformami będą:
- Netlify
- GitHub Pages
- Cloudflare Pages
- FireBase

#### Netlify

Umieszczenie strony na [Netlify](https://www.netlify.com/) wymaga kilku kroków. 

##### Wdrażanie manulane

Jeżeli chcesz zrobić to manualnie, prześlij katalog ze zbudowaną stroną - musisz to robić za każdym razem, kiedy chcesz wprowadzić zmianę.


##### Wdrażanie automatyczne

Jeżeli chcesz zautomatyzować proces, musisz umieścić swój kod w repozytorium na *GitHubie*. Dzięki temu po każdej wprowadzonej zmianie, strona automatycznie zbuduje twój kod i podmieni starą wersję tą nowszą.
