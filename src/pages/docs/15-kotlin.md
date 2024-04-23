---
layout: ../../layouts/DocumentLayout.astro
---

# Kotlin

```kotlin
// klasa abstrakcyjna (ma konkretną implementację metody "fuel" i schemat metody drive)
abstract class Vehicle(val name: String, var fuel: Float = 1.0F) {
    // blok kodu wykonujący się przy inicjalizacji (konstrukcji) klasy
    init {
        println("Created vehicle $name")
    }
    fun fuel() {
        println("$name fuel: ${fuel*100}%")
    }
    abstract fun drive()
}

class Car: Vehicle {
    constructor(name: String): super(name) // wyraźny konstruktor, pozwalający na zdefniowanie "name" przy inicjalizacji
    
    // definicja funkcji z pomocą schematu funkcji "fuel" z klasy abstrakcyjnej
    override fun drive() {
        fuel -= .1F
    }
}

class Truck: Vehicle("Truck") { 
    override fun drive() {
        fuel -= .2F
    }
}

fun main() {
	val car = Car("Mercedes")
    car.drive()
    car.fuel()
    
    val truck = Truck()
    truck.drive()
    truck.fuel()
}
```