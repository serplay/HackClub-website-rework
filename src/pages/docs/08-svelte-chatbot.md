---
layout: ../../layouts/DocumentLayout.astro
---

# Svelte AI chatbot

Korzystając z jednego z modeli sztucznej inteligencji, stworzymy interfejs użytkownika (UI) z frameworkiem Svelte.

## Krok po kroku

### Repozytorium GitHub

Stwórz nowe repozytorium na [GitHubie](https://github.com)

Na pasku po lewej

![New repository button](/public/svelte-chatbot/new-repository-shortcut.png)

lub w prawym górnym rogu

![New repository button](/public/svelte-chatbot/new-repository.png)

![Repository description](/public/svelte-chatbot/create-repository.png)

### Edytor GitHub Codespaces

Otwórz projekt w *GitHub Codespaces*, czyli przeglądarkowym edytorze kodu VSCode.

![Open in codespace button](/public/svelte-chatbot/open-in-codespace.png)

![Create codespace button](/public/svelte-chatbot/create-codespace.png)

Po chwili pojawi się edytor z naszym repozytorium. Na razie nie znajdziesz tu żadnego kodu.

![Codespace](/public/svelte-chatbot/codespace.png)

### Nowy projekt - narzędzie Vite

Aby stworzyć nowy projekt użyjemy polecenia 'npm create vite'. Dzięki temu stworzenie nowego projektu z ulubionym *frameworkiem* będzie zdecydowanie prostsze.

```bash
npm create vite
```

Jako nazwę projektu wybieramy '.' - projekt przyjmie wtedy nazwę katalogu, w którym się znajduje. Następnie wybierz opcję *y*, aby usunąć zbędne pliki i utworzyć projekt.

![Npm create vite](/public/svelte-chatbot/current-dir-not-empty.png)

Wybieramy *framework* Svelte.

![Vite framework](/public/svelte-chatbot/vite-framework.png)

Następnie wybieramy język jakiego będziemy używać.
W tym projekcie skorzystamy z języka *TypeScript*, który w zasadzie jest językiem *JavaScript* z pewnymi ulepszeniami.

![Vite language](/public/svelte-chatbot/vite-language.png)

Dzięki skorzystaniu z narzędzia *Vite*, stworzyliśmy nowy projekt w kilka chwil!

![Vite scaffold](/public/svelte-chatbot/install-dependencies.png)

Po wygenerowaniu plików projektu, musimy jeszcze pobrać jego zależności, czyli kod, który tworzy *framework* *Svelte* i umożliwia nam łatwiejszą pracę nad kodem.

Zanim to zrobimy, dopiszemy jeszcze do zależności jedną bibliotekę, z której skorzystamy do obsługi modeli AI.

### Dodatkowe zależności - biblioteka HuggingFace

[Hugging Face Inference API NPM](https://www.npmjs.com/package/@huggingface/inference?activeTab=readme)

![HuggingFace inference NPM](/public/svelte-chatbot/huggingface-inference-npm.png)

```bash
npm install @huggingface/inference
```

> Dopisanie bibliotek do zależności nie instaluje ich, dlatego po każdorazowej zmianie wymagane jest ponowne uruchomienie polecenia 'npm install'

Aby pobrać zależności wykonaj w terminalu polecenie:

```bash
npm install
```

Pobierze to wszystkie zależności zapisane w pliku 'package.json'.

```json
{
"name": "svelte-chatbot", // nazwa projektu
"private": true,
"version": "0.0.0",
"type": "module",
"scripts": { // definicje poleceń do wykonania przez npm run dev/build/preview/check
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"check": "svelte-check --tsconfig ./tsconfig.json"
},
"devDependencies": { // zależności deweloperskie - narzędzia, które pomagają nam pisać kod
"@sveltejs/vite-plugin-svelte": "^2.4.2",
"@tsconfig/svelte": "^5.0.0",
"svelte": "^4.0.5",
"svelte-check": "^3.4.6",
"tslib": "^2.6.0",
"typescript": "^5.0.2",
"vite": "^4.4.5"
},
"dependencies": { // zależności aplikacji - znajdą się w finalnej wersji aplikacji
"@huggingface/inference": "^2.6.4"
}
}
```

### Podgląd strony

Aby włączyć aplikację, wykonaj polecenie:

```bash
npm run dev
```

![Port forwarding](/public/svelte-chatbot/port-forwarding.png)

Następnie przytrzymaj klawisz *Ctrl* i kliknij w link zaczynający się od słowa "localhost" lub po prostu kliknij zielony przycisk w prawym dolnym rogu. W nowym oknie powinna pojawić się szablonowa strona *Vite + Svelte*.

![Website preview](/public/svelte-chatbot/svelte-vite-template.png)

Uff, ustawiliśmy już projekt i możemy ruszać do kodu, ale...

### Klucz API HuggingFace

Zanim przejdziemy do kodu potrzebujemy klucza API, aby skorzystać z wytrenowanego modelu danych. Załóż konto w serwisie [HuggingFace](https://huggingface.co/) i aktywuj je na skrzynce mailowej. Po udanej aktywacji [utwórz swój prywatny klucz dostępu do API](https://huggingface.co/settings/tokens)

![Alt text](/public/svelte-chatbot/hugging-face-token.png)

![Alt text](/public/svelte-chatbot/hugging-face-new-token.png)

Skopiuj klucz i utwórz nową zmienną środowiskową w pliku '.env' w następujący sposób:

```bash
VITE_HUGGING_FACE_ACCESS_TOKEN="twój klucz dostępu"
```

Zmienne środowiskowe służą do przechowywania prywatnych danych, czy konfiguracji niektórych parametrów aplikacji.
W przypadku *Vite*, aby utworzyć zmienną, która będzie widoczna w aplikacji, należy poprzedzić nazwę naszej zmiennej (dodać prefix) 'VITE_'.


```svelte
<script lang="ts">
import { HfInference } from "@huggingface/inference" // importujemy potrzebne narzędzie z biblioteki HuggingFace

let userInput: string;
let promise: Promise<string>;
const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN) // konfigurujemy narzędzie z naszym kluczem dostępu

async function ask() {
    const blob = await hf.textToImage({ // interesujący nas sposób interakcji z danym modelem - w tym wypadku text zamieniany na obraz
    model: "stabilityai/stable-diffusion-xl-base-1.0", // konkretny model ze strony HuggingFace
    inputs: userInput // dane wejściowe użytkownika
    })
    return URL.createObjectURL(blob)
}

function handleKeyPress(e: KeyboardEvent) {
    if (e.key == "Enter") {
         generatePromise()
    }
}

function generatePromise() {
    promise = ask()
}
</script>

<main>
{#await promise}
    Loading
{:then image}
    {#if image}
         <img src={image} alt="Generated art">
    {:else}
        Text to image
    {/if}
{/await}

    <input type="text" bind:value={userInput} on:keypress={handleKeyPress}>
    <button on:click={generatePromise}>Send</button>
</main>
```

