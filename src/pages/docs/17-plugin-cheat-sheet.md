---
layout: ../../layouts/DocumentLayout.astro
title: Plugin Cheat-sheet
---

## Komendy Minecraft
Plik źródłowy:
```kotlin
class Plugin_template : JavaPlugin() {  
    override fun onEnable() {  
        getCommand("jump")?.setExecutor(JumpCommand())  
    }  
  
    override fun onDisable() { ... }  
}

class JumpCommand: CommandExecutor {  
    override fun onCommand(sender: CommandSender, cmd: Command, label: String, args: Array<out String>?): Boolean {  
        // zrób coś
  
        return true
    }
}
```

Plik `src/main/resources/plugin.yml`:
```yaml
name: plugin-template  
version: '${version}'  
main: com.hackclub.alopb.plugintemplate.Plugin_template  
api-version: '1.20'  
commands:  
  jump:  
    description: Launches the player
```

W funkcji `onCommand`:
- argumenty mogą mieć dowolne nazwy, tylko oczywiście używasz tych nazw argumentów dalej w funkcji,
- pierwszy argument typu `CommandSender` to byt, który wysyła komendę (może to być gracz `Player`, command block `BlockCommandSender` lub konsola serwera)
- drugi argument typu `Command` to komenda sama w sobie,
- trzeci argument typu `String` to alias, który został wpisany, by się ta komenda wykonała (np. istnieje komenda `teleport`, `tp` jest jej aliasem)
- czwarty argument typu `Array<out String>?` to zestaw argumentów wpisanych wraz z komendą.

> Typ `Array<out String>?` jest nieco tajemniczy. `Array` oznacza listę, która nie może zmieniać swojej wielkości. Dla nas oznacza po prostu listę. Znak zapytania przy typie oznacza, że w zmiennej tego typu może być wartość `null`. Co do `out`, na dole jest informacja dodatkowa. Nie jest to istotne.

## Eventy (zdarzenia)

Plik źródłowy:
```kotlin
class Plugin_template : JavaPlugin() {  
    override fun onEnable() {
	    server.pluginManager.registerEvents(AnimalDropsDiamond(), this)  
	}  
  
    override fun onDisable() { ... }  
}

class AnimalDropsDiamond: Listener {  
    @EventHandler  
    fun mobDeath(event: EntityDeathEvent) {  
         // zrób coś
    }  
}
```

Należy pamiętać o dwóch rzeczach:
- o zarejestrowaniu eventu (`server.pluginManager.registerEvents(.., this)`)
- o dostawieniu `@EventHandler` przed funkcją obsługującą event.
Inaczej event nie zadziała. Warto upewnić się, że zadbałeś o te dwie rzeczy.

Zarówno funkcja, jak i klasa obsługujące zdarzenie może przyjąć dowolną nazwę. Istotny jest jednak typ parametru funkcji (np. `EntityDeathEvent`), ponieważ mówi on o tym, jaki event jest obsłużony.

Eventy przychodzą z pewnymi własnościami umieszczonymi w nich, dzięki czemu obsługa eventów jest wygodna. W przypadku `EntityDeathEvent` mogą to być np. dropy z moba.

Większość eventów można anulować poprzez wstawienie `event.isCancelled = true` do funkcji obsługującej event. Anulowanie eventa oznacza usunięcie jego domyślnego zachowania.

## Receptury craftingu

### Bez ustalonego kształtu:
Plik źródłowy:
```kotlin
class Plugin_template : JavaPlugin() {  
    override fun onEnable() {
        val enderPortalFrame = ItemStack(Material.END_PORTAL_FRAME, 1)  
        val recipe = ShapelessRecipe(NamespacedKey(this, "frame"), enderPortalFrame)
        
        recipe.addIngredient(Material.COBBLESTONE_STAIRS)  
  
        Bukkit.addRecipe(recipe)  
    }  
  
    override fun onDisable() { .. }  
}
```
Przy dodawaniu receptury craftingu należy pamiętać o dodaniu jej do `Bukkit`a.

### Z ustalonym kształtem:
Plik źródłowy:
```kotlin
class Plugin_template : JavaPlugin() {  
    override fun onEnable() {
        val enderPortalFrame = ItemStack(Material.END_PORTAL_FRAME, 1)  
		val recipe = ShapedRecipe(NamespacedKey(this, "frame2"), enderPortalFrame)
		  
        recipe.shape("XYX", "YZY", "XYX")  
        recipe.setIngredient('X', Material.OBSIDIAN)  
		recipe.setIngredient('Y', Material.END_STONE)  
		recipe.setIngredient('Z', Material.ENDER_EYE)
		
        Bukkit.addRecipe(recipe)
    }  
  
    override fun onDisable() { .. }  
}
```
Kształt receptury jest tworzony następująco: `recipe.shape("   ", "   ", "   ")` jest funkcją przyjmującą 3 argumenty typu `String` odpowiadające za 3 rzędy w craftingu od góry do dołu. Każdy rząd jest opisany przez 3 znaki, które odpowiadają ustawionym przez Ciebie itemom. `recipe.setIngredient()` pozwala na zdefiniowanie itemu pod określonym znakiem. Należy zauważyć, że pierwszy argument do tej funkcji to argument typu `Char`, czyli pojedynczy znak otoczony pojedynczymi apostrofami.

Tutaj też należy pamiętać o dodaniu receptury do `Bukkit`a.
### Informacja dodatkowa - poza zakresem tworzenia pluginów:
Zmienna typu `Any` przechowuje cokolwiek. Zatem `Array<Any>` przechowuje listę dowolnych elementów.

Słowo kluczowe `out` w typie `Array<out Any>` występuje w parametrach funkcji i oznacza, że z `Array`'a można tylko czytać dane i nie można ich wprowadzać do niego. Jednocześnie pozwala to na przekazanie do tej funkcji argumentu, który w swoim parametrze ma typ bardziej szczegółowy.

Na przykładzie działa to tak:
```kotlin
fun test(arr: Array<Any>) {
	arr.get(0) // można czytać dane
	arr.set(0, "abc") // i można wpisać dane
}

fun main() {
	val arr: Array<String> = arrayOf()
	test(arr) // błąd kompilacji
}
```

```kotlin
fun test(arr: Array<out Any>) {
	arr.get(0) // można czytać dane
	arr.set(0, "abc") // błąd kompilacji - próba wpisania danych do czegoś, co ma parametr out
}

fun main() {
	val arr: Array<String> = arrayOf()
	// można przekazać Array<String> tam, gdzie jest spodziewany Array<out Any>
	test(arr)
}
```

Zjawisko pozwalające na przekazanie wartości o bardziej szczegółowym parametrze typu, niż powinien być, jest nazywane *kowariancją*.
Słowo kluczowe `in` działa w odwrotny sposób - można przekazać wartość o parametrze typu mniej szczegółowym, ale do danej struktury można tylko pisać. Takie zjawisko nazywa się *kontrawariancja*.

Temat nie jest wyczerpany, dlatego chętnych zapraszam do lektury: https://kotlinlang.org/docs/generics.html
