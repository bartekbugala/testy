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

## Test Suite

Zbiór testów pogrupowanych ze względu na konkretny moduł, albo funkcjonalności

```
describe('formatDate', () => {
  describe('seconds', () => {
    ...
  });

  describe('minutes', () => {
    ...
  });

  describe('hours', () => {
    ...
  });
});
```

## Przykład funkcji testującej i asercji

Funkcja przyjmuje 2 parametry:

1. nazwa testu, który się czyta razem z it
2. callback z właściwym testem, który powinien się kończyć **assert**

deklarowane są dwie zmienne:

1. actual (czasem recieved) - czyli rzeczywisty wynik
2. expected - czyli to czego się spodziewamy

```
it('should return seconds', () => {
  const actual = formatDate(23);

  const expected = '23s';

  assert.equal(actual, expected);
});
```

### Zmiany

Jeśli chcemy się skoncentrować na jakimś konkretnym teście albo test suite,
możemy zamienić `describe` lub `it` na `describe.only` lub `it.only`:

Możemy też wyłączyć test lub test suite używając skip:

```
it.skip('should work for one digit minutes and seconds', () => {
  ...
```
