```
title Single page app

Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
Server-->Client: HTML-koodi
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Client: main.css
Client->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
Server-->Client: spa.js

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

https://www.websequencediagrams.com/?lz=dGl0bGUgU2luZ2xlIHBhZ2UgYXBwCgpDbGllbnQtPlNlcnZlcjogSFRUUCBHRVQgaHR0cHM6Ly9mdWxsc3RhY2stZXhhbXBsZWFwcC5oZXJva3VhcHAuY29tL3NwYQoAOgYtLT4ASwY6IEhUTUwta29vZGkAH0VtYWluLmNzcwBXEgARCQCBBEcuagBSEwARBwpub3RlIG92ZXIgAIFhBwpzZWxhaW4gYWxrYWEgc3Vvcml0dGFhIGpzAIF3BmEKam9rYSBweXl0w6TDpCBKU09OLWRhdGFuIHBhbHZlbGltZWx0YQplbmQgbm90ZQCCTEZkYXRhLmpzb24AgwYSW3sgY29udACDHwUiSGVpIG1hYWlsbWEhIiwgZGF0ZTogIjIwMTktMDUtMDkiIH0sIC4uLl0AgV8bAIFqCnRhcGFodHVtYW5rw6RzaXR0ZWxpasOkbgCBfQZyZW5kZXLDtmkgbXVpc3RpaW5wYW5vdCBuw6R5dMO2bGxlAIF6Cw&s=napkin