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

    b. Ändra textfärgen på texten i textutmatningsrutan (`outputContainer`). För att ändra textfärgen används

    ```javascript
    outputContainer.style.color = <color>;
    ```

2. Rubriken (själva texten) i dokumentet är kopplad till ett id som heter `header-text`. Skapa en variabel som heter `headerText` som är kopplad till detta. Ändra texten till "JavaScript Rocks!" genom att tilldela din variabel denna sträng. Pröva också att ändra färg på denna text.

4. Det finns en EventListener längst ned i JavaScript-filen, som håller koll på musklick i informationsrutan till vänster. Vid klick i denna ruta så anropas en funktion som slumpar fram en bil(d) med tillhörande bildtext. Lägg till ytterligare en valfri bil (bild och märke), och se till att den ingår i slumpurvalet.

5. Det finns en knapprad längst ned. Det är kopplat en variabel, `btn1` till den första knappen och det finns exempel på hur texten sätts på denna i JavaScript-filen. Komplettera programmet med att deklarera variabler för de övriga knapparna och sätt texten på motsvarande sätt som för den första knappen.

6. Koppla en EventListener till varje knapp. Vid tryck ska den anropa en funktion som skriver ut information om den valda bilen. Informationen ska skrivas ut i den vänstra rutan, och ersätta den befintliga texten där. Du får själv välja vilken information, riktig eller påhittad, som ska skrivas ut!

7. Utöka programmet så att det går att trycka även i den högra rutan (den med bilen). Vid tryck där ska det stå information om hur många gånger respektive bil har slumpats fram under en körning. Denna räkning ska alltså inte ha att göra med knapparna, utan enbart räkna det som är framslumpat vid tryck i den vänstra rutan.
