```
title Client send POST notes to the server

Client->+Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
note over Client:
Form Data: note=Hei maailma!
end note

Server-->-Client: HTTP REDIRECT https://fullstack-exampleapp.herokuapp.com/notes
note over Server:
Serveri tallentaa POST datan /data.json tiedostoon,
jonka jälkeen palauttaa Client:n takaisin /Note sivulle.
end note


Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
Server-->Client: HTML-koodi
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Client: main.css
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
Server-->Client: main.js

note over Client:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
Server-->Client: [{ content: "Hei maailma!", date: "2019-05-09" }, ...]

note over Client:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```

https://www.websequencediagrams.com/?lz=dGl0bGUgQ2xpZW50IHNlbmQgUE9TVCBub3RlcyB0byB0aGUgc2VydmVyCgoAIAYtPitTAAwFOiBIVFRQACoGaHR0cHM6Ly9mdWxsc3RhY2stZXhhbXBsZWFwcC5oZXJva3VhcHAuY29tL25ld19ub3RlCm5vdGUgb3ZlcgB4BzoKRm9ybSBEYXRhOgB8BT1IZWkgbWFhaWxtYSEKZW5kAIESBQoKAHkGLS0-LQAyBwCBAwZSRURJUkVDAF8ub3RlcwCAfwsAgVMHAFwHaSB0YWxsZW50YWEAghEGZGF0YW4gL2RhdGEuanNvbiB0aWVkb3N0b29uLApqb25rYSBqw6Rsa2VlbiBwYWxhdXR0YWEAgVcIbiB0YWthaXNpbiAvTm90ZSBzaXZ1bGxlLgCBUAsAglsJAIJWDUdFAIEiMwCCHQkAghsKTUwta29vZGkAIUVtYWluLmNzAFYTABEJAB5JagBOGGpzCgCENRNzZWxhaW4gYWxrYWEgc3VvcmkAgwMFanMAgXkGYQpqb2thIHB5eXTDpMOkIEpTT04tAINVBnBhbHZlbGltZWx0YQCEZwsAglJEAIQsCQCDCBJbeyBjb250AIVGBSIAhWkMIiwgZGF0ZTogIjIwMTktMDUtMDkiIH0sIC4uLl0AgV8bAIFqCnRhcGFodHVtYW5rw6RzaXR0ZWxpasOkbgCBfQZyZW5kZXLDtmkgbXVpc3RpaW5wYW5vdCBuw6R5dMO2bGxlAIZsCw&s=napkin