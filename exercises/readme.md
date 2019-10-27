# Testy

## Przykładowe popularne frameworki do testowania

- Mocha
- Jasmine
- Jest
- QUnit
- Tape.

## Funkcjonalności:

- asercja (asssertion - porównanie wyniku z rezultatem)
- uruchamianie testów
- prezentacja wyników działania testów
- raportowanie ilości kodu pokrytego testami - coverage report (w połączeniu z innymi narzędziami)
- wskazywanie konkretnych linii kodu, które nie są przetestowane!

## Prymitywne typy w JavaScripcie, które można sprawdzać za pomocą 'operatora ==='

- boolean
- string
- number
- null
- undefined
- symbol

## Pomocne dla porównywania tablic / obiektów są tzw.

**biblioteki do asercji (assertion libraries)**

Przykłady popularnych bibliotek:

- ChaiJS
- ShouldJS
- ExpectJS
- moduł Assert (część NODE.JS)

## Szpiedzy (spy)

Funkcje zastępcze, np. dla callbacków onClick, które zostały przekazane z innego komponentu przez propsy
Do sprawdzania czy callback / inna funkcja się wykonał

## Udawacze (mock)

Służą do podmiany modułów np. które ładują dane z serwera,
aby od razu zwracały dane, żeby można było testować kod

Można skorzystać z bibliotek typu **Sinon**,

_wiele frameworków posiada wbudowane mocks i spies_
