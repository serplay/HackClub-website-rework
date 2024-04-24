---
layout: ../../layouts/DocumentLayout.astro
title: Generator-zdjęć
---

# Omówienie generatora zdjęć AI

Przeanalizujemy ten kod, odpowiadający za wyświetlanie strony generującej zdjęcia przy użyciu zewnętrnego modelu AI.

```svelte
<script lang="ts">
  import { HfInference } from "@huggingface/inference";
  userInput: string;
  let imagePromise: Promise<string>;

  const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN);

  async function ask() {
    const blob = await hf.textToImage({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      inputs: userInput,
    });
    return URL.createObjectURL(blob);
  }

  function generateImage() {
    imagePromise = ask();
  }
</script>

<main>
    <input bind:value={userInput} />
    <button on:click={generateImage}>Generate</button>
    {#if imagePromise}
      {#await imagePromise}
        Loading...
      {:then result}
        <img width=320 height=320 src={result} alt="Ai generated image"/>
      {/await}
    {:else}
      No image generated
    {/if}
</main>
```

Na początku warto zwrócić uwagę na 2 główne elementy: `<script>` i `<main>`. Ten pierwszy odpowiada za skrypt napisany w JavaScript, jaki wykona się na tej stronie przy ładowaniu strony oraz przy reakcji na odpowiednie zdarzenia. Ta część sprawia, że strona jest interaktywna. Na dole mamy element `<main>`, który zawiera HTMLa określającego, jakie elementy znajdą się na stronie i jak będą ułożone. Gdyby nie było HTMLa, strona byłaby pusta.

## JavaScript

W skrypcie strony znajdziemy:
- zmienne służące do sterowania stanem i zawartością strony, jak `userInput` i `imagePromise`,
- importowanie `HfInference`, służącego do komunikacji z zewnętrznymi modelami AI opublikowanymi na platformie HuggingFace,
- konfigurację `HfInference` z zastosowaniem tzw. tokena dostępu zapisanym w pliku `.env`,
- funkcję `ask()`, zawierającą funkcjonalność związaną z komunikacją z modelem,
- funkcję `generateImage()`, odpowiadającą za przypisanie zmiennej `imagePromise` rezultatu zapytania do AI.

W momencie ładowania strony wykona się kod JavaScript znajdujący się poza funkcjami. Najpierw zostanie zaimportowany `HfInference`, co oznacza, że będzie go można używać wewnątrz bloku `<script>`.

Potem zostaną zdefiniowane zmienne `userInput` i `imagePromise`. Zwróćmy uwagę na typy tych zmiennych i za co one odpowiadają. `userInput` przechowywuje tekst wpisany przez użytkownika strony w typie `string`. Ma to sugerować, że do tej zmiennej przypisany będzie tekst (również pusty np. `""`, `''`). `imagePromise` jest już trudniejszy do zrozumienia.

### Typy w Typescript

**Najpierw należy zaznaczyć, że w standardowym JS typy zmiennych nie są podawane. My korzystamy z TypeScript (TS), żeby móc wiązać poszczególne zmienne z określonymi typami. Ten akapit nie stosuje się do zwykłego JS, tylko do TS.**

W TypeScript występuje 7 typów prymitywnych, czyli typów, które nie są złożone z innych, prostszych typów - trochę jak pierwiastki chemiczne, które nie składają się z prostszych substancji.

Są to:
- `number` jako typ liczbowy,
- `string` reprezentujący tekst,
- `boolean`, czyli prawda lub fałsz,
- `null` - brak wartości,
- `undefined`, czyli wartość niezdefiniowana,
- `bigint`,
- `symbol`.

Są też typy złożone: listy i obiekty.
Listę można zapisać stawiając kwadratowe nawiasy po nazwie typu jej elementów, np. `number[]` - lista liczb.

Oprócz tego w TypeScript możemy tworzyć zmienne o typach, w których występują trójkątne nawiasy, jak `Array<string>`. Więc za co odpowiadają te trójkątne nawiasy? Między nimi znajduje się parametr(y) typu, czyli dodatkowa informacja w postaci typu składowych elementów danej wartości.

Jednym z takich typów jest `Record<K, V>`, który jest odpowiednikiem Pythonowego słownika[^1]. Pierwszy jego parametr to typ klucza, a drugi - typ wartości.
Zatem `Record<string, number>` to jest słownik gdzie klucze są `string`ami, a wartości liczbami. Możemy taki słownik zainicjalizować tak:
```ts
const liczby: Record<string, number> = {
  nazwa: 15,
  "ALOPB Hack Club!": 73,
  pi: 3.1415926535879
}
```

> Klucz musi mieć jeden z typów prymitywnych, ale wartością może być cokolwiek - nawet inny typ złożony!
> `Record<number, boolean[]>` to jest słownik gdzie kluczami są liczby, a wartościami listy prawda/fałsz.



### Promise i programowanie asynchroniczne

Zmienna `imagePromise` jest typu `Promise<string>`. Oznacza to, że w `imagePromise` znajdzie się wartość `string`, ale jej przypisanie jest opóźnione. Zmienne typu `Promise<T>` zawierają wartość, której się spodziewamy w pewnym, późniejszym momencie. Jest to specjalny typ, zwracany przez funkcje asynchroniczne (`async function`). Faktycznie, funkcja `ask()` jest funkcją asynchroniczną, a w `generateImage` do `imagePromise` jest przypisana wartość, którą funkcja `ask()` zwraca. Gdyby funkcja `ask()` nie była asynchroniczna, to zwracałaby normalnie typ `string`, ale ponieważ jest asynchronicza, zwraca typ `Promise<string>`.

Zwróćmy uwagę, że funkcja `ask()` wykona się *w tle*. Oznacza to, że od momentu wysłania zapytania do serwera hostującego model AI, do chwili przed uzyskaniem od niego odpowiedzi, zmienna `imagePromise` o typie `Promise<string>` będzie miała stan nieukończony, a jej wartość nieznana. Kiedy dostaniemy odpowiedź od serwera, wykonywanie funkcji `ask()` będzie uznane za ukończone, a to spowoduje, że wartość `Promise<string>` otrzyma stan ukończony (ang. *resolved*). Dzięki temu będzie można odczytać wartość typu `string` z tej samej zmiennej - można powiedzieć, że wartość `string` jest już gotowa.


Oczywiście `Promise<string>` jest typem zawierającym parametr typu `string`. Zmienna typu `Promise<number>` będzie sygnalizować, że dana zmienna będzie oczekiwać wartości liczbowej zamiast tekstowej.

A zatem, `imagePromise` jest zmienną, w której oczekujemy pewnego tekstu, będącego rezultatem zapytania do zewnętrznego modelu AI.

> Używając słowa kluczowego `await` przed wywołaniem funkcji asynchronicznej, możemy poczekać na ukończenie `Promise`, co zagwarantuje nam odczytanie wartości w momencie, kiedy będzie już dostępna.

### Zmienne środowiskowe

Zmienne środowiskowe to zmienne, które sterują działanie całego programu. Między innymi są to zmienne znajdujące się w pliku `.env`, który musi zostać dodany do projektu, żeby zapytania do AI mogły działać. Plik ten ma strukturę mniej więcej taką:

```
STATUS=production
DEV_PORT=7000
PROD_PORT=8000
HOST=db.host
USER=root
PASSWORD=db.password
DB=db.name
DIALECT=mysql
```

To zestaw zmiennych środowiskowych, z których każda jest postaci `nazwa=wartość`. Wszystkie zmienne środowiskowe przechowują tekst. A teraz spójrzmy na linijkę:

```ts
const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN);
```

`import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN` zawiera wartość zmiennej środowiskowej o nazwie `VITE_HUGGING_FACE_ACCESS_TOKEN`, czyli token dostępu określony właśnie w pliku `.env`.

Plik `.env` służy głównie do przechowywania zmiennych których nie chcemy pokazywać żadnemu użytkownikowi.

## HTML

Analizujemy ten fragment kodu:

```svelte
<main>
    <input bind:value={userInput} />
    <button on:click={generateImage}>Generate</button>
    {#if imagePromise}
      {#await imagePromise}
        Loading...
      {:then result}
        <img width=320 height=320 src={result} alt="Ai generated image"/>
      {/await}
    {:else}
      No image generated
    {/if}
</main>
```

Po skrypcie w pliku mamy umieszczony kod HTML. Zawiera on elementy znane właśnie z HTML, jak `<main>`, `<input>` czy `<button>`. Jednak ponieważ korzystamy z frameworka Svelte, znajdą się tam również nawiasy klamrowe, w których znajdują się zmienne z JavaScriptu, jak `userInput` czy `imagePromise`.

Element `<main>` określany jest jako główna zawartość strony. Jest to pomocne szczególnie, gdy oprócz `<main>` mamy jeszcze `<header>`, `<footer>` czy `<nav>`, odpowiadające za nagłówek i stopkę. Umieszczanie innych elementów w `<main>` nie jest konieczne.

W śrokdu `<main>` mamy umieszczony `<input>`. Jest to element, z którym można wchodzić w interakcję, wprowadzając w jakiś sposób dane. W tym wypadku jest pole tekstowe. Zwróćmy uwagę na `bind:value={userInput}`. Jest to zabieg dostępny w Svelte, pozwalający na automatyczne przypisanie zmiennej `userInput` tekstu znajdującego się w tym polu tekstowym.

> `bind:value` przypisuje również wartość elementowi `<input>` w przypadku modyfikacji wartości powiązanej zmiennej w `<script>`.
> Oznacza to, że te powiązanie działa w dwie strony - zmieniając wartość `<input>` ustawiamy wartość zmiennej, a zmieniając wartość zmiennej ustawiamy wartość `<input>`.

Dodatkowo, mamy również zawarty element `<button>` czyli przycisk, po którego naciśnięciu wykona się funkcja `generateImage()`. Od momentu naciśnięcia przycisku w zmiennej `imagePromise` będzie siedzieć przez kilkanaście sekund nieukończony `Promise`.

Po tym mamy blok warunkowy Svelte, zaczynający się od `{#if imagePromise}`. Ten warunek sprawdza, czy do zmiennej `imagePromise` została przypisana jakaś wartość. Warto zaznaczyć, że w momencie ładowania strony do zmiennej `imagePromise` nie przypisaliśmy żadnej wartości, czyli siedzi tam wartość niezdefiniowana `undefined`. `undefined` w warunkach przyjmuje wartość `false`, dlatego jeśli do zmiennej `imagePromise` nic nie będzie przypisane, wykona się kod w środku `{:else}`, czyli tam, gdzie warunek nie jest spełniony.

Jeśli do zmiennej `imagePromise` będzie przypisana wartość, to wykona się blok `{#await}`, odpowiadający za czytanie z wartości `imagePromise`. Wiemy już, że `Promise` może być nieukończony bądź ukończony. Kod po `{#await imagePromise}` wykona się, jeśli w `imagePromise` znajdzie się `Promise` nieukończony. W tym wypadku na stronie pojawi się tekst "Loading...", kiedy zapytanie do modelu AI nie zostało jeszcze ukończone. Gdy rezultat zapytania będzie już gotowy, wykona się kod w bloku `{:then result}`. Wtedy do zmiennej `result` przypisana będzie odczytana wartość z gotowego `Promise` i tą wartością będzie można się posłużyć w środku bloku.

Rezultatem zapytania jest tekst będący linkiem do zdjęcia. Należy go zastosować jako źródło zdjęcia o wymiarach 320x320 pikseli. W ten sposób zdjęcie wygenerowane przez model AI zostaje wyświetlone.

## Podsumowanie

Strona działa zatem następująco:
- użytkownik wypełnia pole tekstowe - wtedy do zmiennej `userInput` przypisana jest wartość w polu tekstowym,
- gdy użytkownik wciska przycisk, wysyłane jest zapytanie do zewnętrznego modelu AI, z tokenem dostępu odczytanym ze zmiennej środowiskowej,
- w momencie gdy zapytanie się wykonuje, w zmiennej `imagePromise` siedzi nieukończony `Promise`. W tym momencie użytkownikowi wyświetla się tekst sugerujący ładowanie zdjęcia,
- gdy zapytanie będzie ukończone, ukończony będzie również `Promise` znajdujący się w zmiennej `imagePromise` Link do zdjęcia, będący rezultatem zapytania do modelu AI, jest odczytany, a wygenerowane zdjęcie wyświetlone użytkwonikowi.


---

[^1]: Teoretycznie `Record<K, V>` to typ obiektu, co sprawia że ma trochę dodatkowych limitacji co do tego co się da w nim przechować oraz można zdobyć jego wartości używając kropki, a nie tylko nawiasów kwadratowych.
  JavaScript ma typ `Map<K, V>` który naprawia te problemy, ale tutaj nie będziemy w niego wnikać.