---
title: Konfiguracja
layout: ../../layouts/DocumentLayout.astro
---

# Środowisko dewoloperskie

Obecnie dostępnych jest wiele narzędzi które ułatwiają pracę z kodem. Skupimy się na kilku z nich które są niezbędne do pracy programisty.

## Menadżer pakietów

To oprogramowanie podobne do *sklepu* (zupełnie jak Google Play Store czy Apple App Store), jednak zwykle występuje pod postacią polecenia konsolowego.

### Windows

Na systemie Windows będziemy używać menadżera *Chocolatey*. Aby go zainstalować, należy otworzyć aplikację Windows Power Shell jako administrator i wkleić następujący kod.

Najpierw wykonaj polecenie
```shell
Get-ExecutionPolicy
```
jeżeli zwróci wartość `Restricted`, należy wykonać jeszcze polecenie
```shell
Set-ExecutionPolicy AllSigned
```
bądź
```shell
Set-ExecutionPolicy Bypass -Scope Process
```
Teraz wykonaj polecenie installacji *Chocolatey* i poczekaj kilka sekund.

```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Jeżeli podczas instalacji nie pojawi się żaden błąd, to po wykonaniu polecenia `choco` w konsoli powinny ukazać się instrukcje. W dalszej części będziemy używać tego polecenia do szybszej oraz łatwiejszej instalacji innych narzędzi i programów.

### MacOS

Wystarczy wykonać te polecenie w terminalu i kliknąć klawisz *enter*.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Edytory kodu

Istnieje wiele edytorów kodu, jednak najlepszym a zarazem najprostszym rozwiązaniem, który zmienia się wraz z potrzebami użytkownika jest *Visual Studio Code*, do którego później będziemy odnosić się w skrócie jako *VSCode*.

### Visual Studio Code

Jest to lekki edytor tekstu, który działa na każdym systemie operacyjnym. Można go dostosować do własnych potrzeb.

#### Instalacja

##### Choco

Jeżeli masz już *Chocolatey* użyj polecenia:
```shell
choco install vscode
```
Tak, to takie proste! Nie musisz używać przeglądarki, aby zainstalować program!

##### Manualna

[Pobierz Visual Studio Code ➚](https://code.visualstudio.com/)


### Dostosowanie programu

Po udanej instalacji warto dostosować program zmieniając część ustawień, dodając rozszerzenia, czcionki.

#### Rozszerzenia

Rozszerzenia umożliwiają pracę z różnymi językami programowania jak również zmieniają wygląd programu czy rozszerzają funkcjonalność.



##### One Dark Pro

Najpopularniejszy styl edytora, zmieniający tło oraz programu oraz kolor czionek.

[Pobierz](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

##### Material Theme Icons

Najpopularniejszy styl ikonek. Ikonki same zmieniają wygląd przy zmianie nazwy pliku czy folderu.

[Pobierz](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

##### Better Comments

Ulepszone komentarze w kodzie. Pozwala zmieniać nudy, szary kolor komentarzy na dowolny kolor - na przykład kolor czerwony do ostrzeżeń czy niebieski do informacji.

[Pobierz](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

##### Error Lens

Wyświetla treść błędów bezpośrednio w linii, w której wystąpił błąd. Dzięki temu nie musisz najeżdżać myszką na *czerwoną falkę* aby zobaczyć treść błędu.

#### Czcionka

Ważne aby czionka była czytelna i prosta. Do programowania polecam czionkę *Fira Code*.

Jeżeli używasz `choco`, wystarczy wykonać polecenie:
```shell
choco install firacode
``` 

Aby zmienić czionkę w edytorze ustawień: w sekcji "Commonly Used" rozwiń ustawienia "Text Editor", a następnie kliknij "Font". W polu "Font Family" wpisz *Fira Code*, zastępując całą poprzedznią treść. Zaznacz pole "Enables/Disables font ligatures" w sekcji "Font Ligatures", aby włączyć specjalne ligatury, czyli kombinacje znaków które w ustawieniu obok siebie zmieniają wygląd.

[Tutaj](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions) znajduje się pełna instrukcja instalacji oraz włączenia cznionki w programie VSCode.

## Kontrola wersji plików

Zastanawialiście się może jak pracować w ogromie plików tekstowych z jakim zmagają się programiści? Może wydawać się, że jest to nie lada wyzwanie zapisywać co raz to nowsze wersje napisanego kodu, współpracując w tym samym czasie z innymi ludźmi. 

Na szczęście istnieje kilka świetnych rozwiązań które ułatwiają tak zwane *wersjonowanie kodu*. 

### Wersjonowanie

Inaczej mówiąc wersjonowanie, to śledzenie zmian następujących w kodzie i zapisywanie różnic jakie następują na przestrzeni *rekordów*, czyli poszczególnych punktów zapisu. Na razie do wprowadzanej zmiany (rekordu), będziemy odnosić się po jego bardziej spopularyzowanej i anglojęzycznej nazwie - *commit*. Commit jest zapisem wszystkiego co dotychczas zrobiliśmy od ostatniego *commitu*, dlatego jeżeli często wykonujemy *commity* (commitujemy), to łatwiej jest wrócić do wersji kodu, która działała, czy zobaczyć co takiego usunęło się 2 *commity* temu.

Czyli co, prawie jak *ctrl+z*?

Tak, przy czym mamy nad tym pełną kontrolę. Robimy *commit* z czym chcemy i kiedy chcemy!

### Git

Jednym z najpopularniejszym narzędzi do wersjonowania plików jest *Git*. Nie jest on powiązany z *GitHubem*, który jak nazwa wskasuje jest po prostu hubem na *gity* czyli tak zwane *repozytoria*, w których trzymamy kod.

#### Instalacja

Jeżeli używasz Linuxa bądź MacOS, to `git` jest już na nich zainstalowany.

##### Choco

Aby pobrać `git` na Windowsa wystarczy wykonać polecenie:
```shell
choco install git
```

##### Manualna

[Pobierz git ➚](https://git-scm.com/downloads)

Podczas instalacji zostaw domyślne opcje oraz wybierz *Visual Studio Code* z listy jako domyślny program do otwierania *repozytoriów*.

### GitHub

GitHub jest miejscem na którym będziemy przechowywać wszystkie nasze pliki. Umożliwi nam to bezproblemowe dzielenie się kodem i ułatwi współpracę. Aby przesłać coś na GitHuba należy stworzyć *repozytorium*, w którym będziemy zapisywać *commity*. Warto zaznaczyć, że *commity*, można przechowywać lokalnie, ale nie jest to rekomendowany sposób.

Git i GitHub są narzędziami, które będą przydatne w pracy niezwykle często, dlatego warto się z nimi oswoić. Podczas tworzenia konta na GitHubie trzeba koniecznie wpisać maila, którego używacie na co dzień.

Po założeniu konta zostaniecie zaproszeni do naszej organizacji na GitHubie. Tam znajdą się zarówno zasoby do skorzystania w trakcie programowania, jak i miejsce na tworzenie własnych i grupowych projektów.

![Markdown render schema](/github-repo.png)
Tak wygląda *repozytorium* na GitHubie. Żeby zabrać się do pisania kodu trzeba wcisnąć zielony przycisk *Code*.

![Markdown render schema](/github-template.png)
W szablonach (*templates*) zamiast przycisku *Code* jest *Use this template*, który pozwala na stworzenie nowego *repozytorium* w oparciu o szablon.

### GitHub Desktop

GitHub Desktop to narzędzie stworzone przez GitHub, ułatwiające pracę ze zdalnymi *repozytoriami*. Dzięki niemu bez problemu *sklonujecie* (pobierzecie) repozytorium (po wejściu przez przycisk *Code* na GitHubie), zsynchornizujecie zmiany, zapiszecie wprowadzone zmiany, czy przejrzycie zmiany wprowadzone przez innych.

#### Instalacja

##### Choco

```shell
choco install github-desktop
```

##### Manualna

[Pobierz GitHub Desktop ➚](https://desktop.github.com/)

## Mendadżer instalacji Node

Aby uniknąć problemów związanych z instalacją środowiska uruchomieniowego Node, służącego do korzystania z języka JavaScript bez przeglądarki skorzystamy z programu `nvm` - Node version manager.

### Nvm

#### Instalacja

##### Choco

```shell
choco install nvm
```