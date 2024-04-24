---
layout: ../../layouts/DocumentLayout.astro
title: HTML
---

# HTML

HTML (HyperText Markup Language) to narzędzie do opisywania struktury strony. Złożony jest z *tagów*, które są otoczone nawiasami trójkątnymi *<>*.  
Tagi są rozróżniane na otwierające i zamykające, przy czym te drugie zawierają dodatkowy slash (np. `</h1>`). Niektóre tagi, zwane void tagami, nie zawierają niczego w ich wnętrzu, więc składają się z nawiasów trójkątnych i slasha na końcu (np. `<hr />`).  
Cała zawartość znajdująca się w tagu otrzymuje jego efekt, więc fragment HTML `<h1>Nagłówek</h1>` zostanie zinterpretowany jako duży nagłówek o treści `Nagłówek`.

## Podstawowe tagi HTML

Proste tagi HTML, które pojawiają się na stronie przykładowej:

| Tag         | Objaśnienie                                                  |
| :---------- | :----------------------------------------------------------- |
| `h1`...`h6` | Nagłówek o wielkości 1-6 (większy numer = mniejszy nagłówek) |
| `p`         | Akapit, zaczynający się od nowej linijki z odstępem          |
| `em`        | Kursywa                                                      |
| `strong`    | Pogrubienie tekstu                                           |
| `s`         | Skreślenie tekstu                                            |
| `ol`        | Lista uporządkowana                                          |
| `ul`        | Lista nieuporządkowana                                       |
| `li`        | Element listy                                                |
| `code`      | Zamiana tekstu wewnątrz na kod                               |
| `pre`       | Tekst jest ułożony tak, jak jest napisany w pliku HTML       |
| `br`        | Przejście na następną linię tekstu (void tag)                |
| `hr`        | Pozioma kreska, oddzielająca sekcje strony (void tag)        |

## Atrybuty

Atrybuty HTML to dodatkowe opcje wpływające na zachowanie danego tagu. Wypisujemy je po nazwie tagu.

`<a href=[x]>`  
Element a (anchor) oznacza po prostu link do dowolnej strony.  
- `[x]` - adres URL strony, do której link ma przenieść

`<img src=[s] alt=[a] width=[x] height=[y] />`  
Zdjęcie z dowolnego źródła (void tag).
- `[s]` - źródło zdjęcia (wymagane, może być to link do zdjęcia bądź ścieżka do pliku)
- `[a]` - tekst alternatywny, pojawiający się przy braku zdjęcia
- `[x], [y]` - odpowiednio szerokość i wysokość zdjęcia (w pixelach)

Przykładowe zastosowanie:

`<img src="https://koty.pl/słodki-kotek.png" alt="słodki kotek" width=250 height=100 />`  

## Pozycjonowanie elementów na stronie

Tagi służące do umieszczania elementów na stronie w odpowiednim miejscu:

`<table>`  
Tabela, która zawiera wiersze i kolumny. W niej są stosowane następujące tagi:
- `<tr>` - wiersz tabeli,
- `<td>` - komórka tabeli,
- `<th>` - nagłówek tabeli (zwykle w pierwszym wierszu).

`<div>`  
Div pozwala na dużo bardziej elastyczny układ elementów na stronie, lecz ujawnia swoją moc dopiero w momencie, gdy będziemy wpływać na styl tego elementu poprzez CSS.

`<span>`  
Span działa podobnie jak div, ale zalecane jest jego używanie do pojedynczych linijek tekstu zamiast do dużych bloków strony.

`<header>`  
Zawartość umieszczona na samej górze strony (nagłówek strony).

`<footer>`  
Zawartość umieszczona na samym dole strony (stopka strony).

## Interakcja użytkownika

Następujące tagi pozwalają na interakcję użytkownika ze stroną, ale nie będą dawać właściwego efektu bez użycia JavaScriptu.

`<input type=[t] />`  
Pole, które może być wypełnione przez użytkownika (void tag).

`[t]` oznacza typ wejścia, który determinuje jego wygląd i formę:

- `text` - pole tekstowe,
- `number` - pole liczbowe,
- `range` - suwak,
- `date` - wybór daty,
- `time` - wybór czasu,
- `button` - przycisk (zalecany jest tag `<button>`),
- `checkbox` - pole wyboru tak/nie,
- `radio` - zestaw pól, wśród których może być wybrane jedno.

`<select>`  
Pole wyboru z określonych przedmiotów. Zawiera elementy `<option>`, które reprezentują pojedynczą opcję.

---

Oczywiście, to nie jest pełny zestaw tagów HTML. [Wszystkie tagi można znaleźć tutaj.](https://developer.mozilla.org/en-US/docs/Web/HTML)
