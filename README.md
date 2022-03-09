# JavaScript Template

Här finns tre filer som ligger till grund för start av JavaScript-utveckling.
Det är en HTML-fil, som står för själva innehållet, en CSS-fil, som står för
formateringen samt en JavaScript-fil, där själva programmet ligger.

För att komma igång rekommenderas editorn VS Code och följande tillägg
(_extensions_):

- Live Server: den gör så att webbsidan man arbetar med uppdateras automatiskt
  i samband med att man sparar en ingående i VS Code.
- Prettier: det är en kodformaterare som gör att formateringen av koden blir
  enhelig och följer standard.

  En smidig detalj att konfigurera är också `AutoSave`, som ställs till `onFocusChange`.

## Uppgifter

### Alla uppgifter löses i JavaScript-filen

1. Testa att ändra ett par färger:

    a. Ändra bakgrundsfärgen på textutmatningsrutan. Olika namngivna färger finns på [denna sida](https://www.w3schools.com/tags/ref_colornames.asp).

    b. Ändra textfärgen på texten i textutmatningsrutan. För att ändra textfärgen används

    ```javascript
    document.getElementById(<id>).style.color = <color>;
    ```

2. Rubriken (själva texten) i dokumentet är kopplad till ett id som heter `header-text`. Skapa en variabel som heter `headerText` som är kopplad till detta. Ändra texten till "JavaScript Rocks!" genom att tilldela din variabel denna sträng. Pröva också att ändra färg på denna text.

3. I nuläget finns det ett antal namn på bilmärken i textutmatningsrutan, detta ska fungera som en referens för hur textutmatning kan gå till. I denna övning ska inte bilmärkena skrivas ut, men eftersom vi kommer att återkomma till bilmärkena en senare lektion ska de inte raderas!

    a. Skapa en `for`-loop som itererar från 36 t o m 360. Gör så programmet skriver ut alla tal som samtidigt är delbara med både 3 och 5.

    b. Utveckla programmet så att listans färg slumpas fram. En approach till lösning är att lägga in ett antal namn på färger i en lista och att i tur och ordning använda ett namn och tilldela detta till variabeln `outputContainer`. För att slumpa fram ett heltal fr o m 0 till (men inte inklusive) N kan funktionen `Math.floor(Math.random() * N)` användas.
