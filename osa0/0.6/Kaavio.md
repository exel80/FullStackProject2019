```
title Single page app Send POST

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

Client-->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
note over Client:
XMLHTTP Req: {"content":"Hei maailma!","date":"2019-05-09T12:38:12.488Z"}

selain alkaa suorittaa js-koodia
joka puskee ja päivittää notes class:n ilman näkyvää sivun päivitystä
end note
```

https://www.websequencediagrams.com/?lz=dGl0bGUgU2luZ2xlIHBhZ2UgYXBwIFNlbmQgUE9TVAoKQ2xpZW50LT5TZXJ2ZXI6IEhUVFAgR0VUIGh0dHBzOi8vZnVsbHN0YWNrLWV4YW1wbGVhcHAuaGVyb2t1YXBwLmNvbS9zcGEKADoGLS0-AEsGOiBIVE1MLWtvb2RpAB9FbWFpbi5jc3MAVxIAEQkAgQRHLmoAUhMAEQcKbm90ZSBvdmVyIACBYQcKc2VsYWluIGFsa2FhIHN1b3JpdHRhYSBqcwCBdwZhCmpva2EgcHl5dMOkw6QgSlNPTi1kYXRhbiBwYWx2ZWxpbWVsdGEKZW5kIG5vdGUAgkxGZGF0YS5qc29uAIMGElt7IGNvbnQAgx8FIkhlaSBtYWFpbG1hISIsIGRhdGU6ICIyMDE5LTA1LTA5IiB9LCAuLi5dAIFfGwCBagp0YXBhaHR1bWFua8Okc2l0dGVsaWrDpG4AgX0GcmVuZGVyw7ZpIG11aXN0aWlucGFub3QgbsOkeXTDtmxsZQCBcxIAhQkPUE9TAIRsLW5ld19ub3RlX3NwYQCDKBNYTUwAhWoFUmVxOiB7IgCCEAciOgCCCA8iZGF0ZSI6AIIMC1QxMjozODoxMi40ODhaIn0KAINeKHVza2VlIGphIHDDpGl2aXQAhA4Gbm90ZXMgY2xhc3M6biBpbG1hbiBuw6RreXYAhC4Fc2l2dW4AKgh5c3TDpACEIws&s=napkin