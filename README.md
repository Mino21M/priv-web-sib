# SIB - page

## Basic info
Page is written with the help of static page generator eleventy and bootstrap. If more modules are needed feel free to update package.json file.

## Usefull commands
Contains all necessery data to run eleventy commands:
* `npm run build` -> creates /assets/main.css and /assets/main.js files (bootstrap)
* `npx @11ty/eleventy --serve` -> creates simple server and updates _sites directory regularly as files are saved, mainly for development.
* `eleventy` -> creates files from [_main](./_main) directory

## Structure
```
├───events (contains nunjak templates for current and archived events)
├───_assets (mainly bootstrap)
│   ├───css
│   │   ├───base
│   │   └───vendor
│   └───js
├───_data (.json files for archived and current events)
└───_includes
    ├───layouts (default layout)
    └───parts (navbar and header includes)
```

## TODO
* Better frontend:
    * /
    * /about
    * /events/current
    * /events/archive
* Update currentEvents.json
* Update archivedEvents.json
* Add favicon and logo to navbar
* Pagination in archive not overflowing correctly

## DONE
* Basic structure of website
* Navbar (feel free to update)
* Data structure in .json files

## JSON data files
### date - archive and current
```json
"date": "19.03.2021, 17:00"
```
### title - archive and current
```json
"title": "Volumetrické DDoS"
```
### annotation - archive and current
```json
"annotation": "description"
```
### language - archive and current
```json
"language": "Slovensky"
"language": "English"
```
### style - archive and current
[Color palette](https://icolorpalette.com/6c0679_264001_f91002_032946_a10018)
* `primary` - blue team (blue - #0074d9)
* `danger` - red team (red - #ff4136)
* `success` - represents other topics that do not fall under red or blue team (for example audits,...). (indigo - #6610f2)
```json
"style": "primary"
```
### links - archive and current
Link for needed materials, servers used during lectures, ...
```json
"links": [
    {"url": "https://google.com", "text": "Sample text"}
],
```
### presenters - archive and current
```json
"presenters": [
    {"name": "Jozef Novak", "information": "Bio"}
],
```
### registration - current
```json
"registration": "https://forms.google.com/aaaa"
```
### recording - archive
```json
"recording": "https://youtube.com/aaaa"
```


## Examples
Examples contain all data that are currently displayed and showed on bootstrap cards on pages /events/current and /events/archive.
### Current event
```json
    [
        {
            "date": "19.03.2022, 17:00",
            "title": "Volumetrické DDoS",
            "presenters": [
                {"name": "Adrián Kocián", "information": "Po štúdiu na FEI STU v Bratislave v odbore Telekomunikácie pracoval na viacerých pozíciách v oblasti bezpečnosti informačných a komunikačných technológií (IKT). V súčasnosti pracuje ako konzultant bezpečnosti IKT pre telekomunikačného operátora pre riešenia ako ochrana pred DDoS útokmi, firewallové riešenia a zlepšenie bezpečnosti firemných zákazníkov."}
            ],
            "links": [{"url": "https://google.com", "text": "Sample text"}],
            "language": "Slovensky",
            "registration": "https://forms.gle/h61PaDZsgDNk7we98",
            "registration_till": "18.03.2022, 23:59",
            "annotation": "Kybernetická bezpečnosť je široká téma, ktorá zahŕňa aj bezpečnosť sietí a zabezpečenie dostupnosti služieb. DDoS útoky predstavujú hrozbu ktorou sa musia denne zaoberať poskytovatelia telekomunikačných služieb, aj mnohé firmy a inštitúcie (nielen) na Slovensku. Na seminári sa pozrieme na to ako a prečo volumetrické DDoS útoky vznikajú, aký býva cieľ a motivácia útočníkov a ako funguje ochrana pred takýmito útokmi v praxi.",
            "style": "primary"
        }
    ]
```
### Archived event

```json
    [
        {
            "date": "19.03.2022, 17:00",
            "title": "Volumetrické DDoS",
            "presenters": [
                {"name": "Adrián Kocián", "information": "Po štúdiu na FEI STU v Bratislave v odbore Telekomunikácie pracoval na viacerých pozíciách v oblasti bezpečnosti informačných a komunikačných technológií (IKT). V súčasnosti pracuje ako konzultant bezpečnosti IKT pre telekomunikačného operátora pre riešenia ako ochrana pred DDoS útokmi, firewallové riešenia a zlepšenie bezpečnosti firemných zákazníkov."}
            ],
            "links": [{"url": "https://google.com", "text": "Sample text"}],
            "recording": "https://forms.gle/h61PaDZsgDNk7we98",
            "annotation": "Kybernetická bezpečnosť je široká téma, ktorá zahŕňa aj bezpečnosť sietí a zabezpečenie dostupnosti služieb. DDoS útoky predstavujú hrozbu ktorou sa musia denne zaoberať poskytovatelia telekomunikačných služieb, aj mnohé firmy a inštitúcie (nielen) na Slovensku. Na seminári sa pozrieme na to ako a prečo volumetrické DDoS útoky vznikajú, aký býva cieľ a motivácia útočníkov a ako funguje ochrana pred takýmito útokmi v praxi.",
            "style": "primary"
        }
    ]
```