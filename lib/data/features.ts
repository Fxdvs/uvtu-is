export type Feature = {
  title: string;
  url: string;
  text: string;
  row: number;
  col: number;
};

export const features: Feature[] = [
  {
    title: "Centrálny Hub",
    url: "hub",
    text: `Centrálny hub je mozgom celého smart home ekosystému. Zabezpečuje koordináciu, správu a logiku všetkých prepojených zariadení a služieb, vďaka čomu fungujú ako jeden prepojený a inteligentný celok. 
          Hub zhromažďuje údaje zo senzorov, kamier, prepínačov či cloudových služieb a na ich základe vykonáva akcie – či už podľa definovaných scenárov, používateľských preferencií alebo udalostí v reálnom čase.
          Podporuje moderné komunikačné protokoly (MQTT, Zigbee, Z-Wave, Modbus, Wi-Fi, Bluetooth LE, Ethernet), čo umožňuje jednoduchú integráciu širokej škály zariadení od rôznych výrobcov. 
          Systém je navrhnutý tak, aby bol plne rozšíriteľný – umožňuje pridávať nové moduly, upravovať automatizácie a flexibilne rozširovať funkcionalitu bez zásahu do jadra. 
          Súčasťou je aj pokročilá správa používateľov s definovaním rolí a prístupových práv, ktorá zabezpečuje bezpečné používanie viacerými osobami.
          `,
    row: 1,
    col: 2,
  },
  {
    title: "AI asistent",
    url: "assistant",
    text: `AI asistent je inteligentná nadstavba nad centrálnym softvérom systému.
          Umožňuje prirodzenú a intuitívnu komunikáciu pomocou hlasu, textu alebo vizuálnych podnetov.
          Premieňa technicky komplexné operácie na jednoduché a používateľsky priateľské príkazy. Vďaka umelej inteligencii, NLP a strojovému učeniu dokáže pochopiť kontext a úmysel používateľa.
          Na základe toho vykonáva akcie, odporúča riešenia alebo poskytuje relevantné informácie.
        `,
    row: 3,
    col: 1,
  },
  {
    title: "Komunikačný systém",
    url: "communication",
    text: `Komunikačný systém je základná infraštruktúra, ktorá prepája všetky zariadenia, senzory a riadiace jednotky v inteligentnom prostredí. Zabezpečuje spoľahlivú, bezpečnú a efektívnu výmenu dát medzi komponentmi systému a centrálnym hubom.
          Funguje ako „nervová sieť“, ktorá umožňuje zariadeniam komunikovať bez ohľadu na technológiu, výrobcu alebo protokol.
          Bez komunikačného systému by zariadenia nedokázali zdieľať informácie, reagovať na udalosti ani vykonávať koordinované akcie v reálnom čase.
        `,
    row: 1,
    col: 1,
  },
  {
    title: "Automatizačné scény a pravidlá",
    url: "automation",
    text: `Automatizačné scény a pravidlá tvoria logickú vrstvu systému, ktorá rozhoduje o správaní jednotlivých zariadení.
          Používateľ môže vytvárať jednoduché pravidlá typu „ak → tak“ alebo komplexné scenáre s viacerými podmienkami.
          Tieto scenáre môžu napríklad pri západe slnka automaticky zatiahnuť žalúzie, zapnúť osvetlenie a aktivovať bezpečnostný režim.
          Modul zabezpečuje, aby sa dom správal proaktívne a prispôsoboval sa potrebám používateľov bez neustáleho manuálneho zásahu.     
        `,
    row: 2,
    col: 1,
  },
  {
    title: "Užívateľské rozhranie",
    url: "app",
    text: `Mobilná aplikácia predstavuje centrálny nástroj na ovládanie všetkých inteligentných zariadení v domácnosti.
          Ponúka intuitívne rozhranie, cez ktoré je možné riadiť osvetlenie, regulovať teplotu, ovládať tienenie a sledovať bezpečnostné prvky.
          Umožňuje efektívne spravovať chod celej domácnosti z jedného miesta.
          Cieľom aplikácie je poskytnúť používateľovi maximálny komfort, bezpečnosť a úsporu energií.
          Všetky funkcie sú dostupné priamo zo smartfónu alebo tabletu, nech sa používateľ nachádza kdekoľvek.
        `,
    row: 2,
    col: 1,
  },
  {
    title: "Senzory a akčné zariadenia",
    url: "devices",
    text: `Moderné inteligentné domácnosti sa spoliehajú na technológie, ktoré umožňujú pohodlné a efektívne ovládanie zariadení z jedného miesta.
          Najčastejšie sa používajú mobilné aplikácie alebo webové rozhrania, ktoré zjednodušujú správu celej domácnosti.
          Cieľom týchto riešení je uľahčiť život používateľom, zvýšiť bezpečnosť a znížiť spotrebu energie.
          Nižšie sú uvedené hlavné systémy a funkcie, ktoré sa bežne integrujú do smart home projektov.
        `,
    row: 1,
    col: 1,
  },
  {
    title: "Zálohovanie dát",
    url: "backup",
    text: `Bezpečné a spoľahlivé spravovanie všetkých informácií, ktoré systém počas prevádzky spracúva.
          Predstavuje dátový pilier systému a zabezpečuje integritu, dostupnosť a dlhodobé uchovávanie potrebných údajov.
          Spravuje technické dáta, ako konfigurácie, systémové záznamy a logy, aj používateľské nastavenia, automatizácie a históriu meraní zo senzorov.
          Vďaka tomuto modulu dokáže systém obnoviť svoj stav po výpadku, aktualizácii alebo migrácii na nové zariadenie.
        `,
    row: 2,
    col: 1,
  },
  {
    title: "Bezpečnosť a súkromie",
    url: "security",
    text: `Je základným pilierom dôveryhodnosti a spoľahlivosti systému UVTU.
          Zabezpečuje ochranu všetkých vrstiev systému – od fyzických zariadení cez sieťovú komunikáciu až po cloudové služby a používateľské dáta.
          Jeho hlavnou úlohou je zabrániť neoprávnenému prístupu, zneužitiu dát a narušeniu súkromia používateľov, pričom zároveň monitoruje a reaguje na bezpečnostné incidenty v reálnom čase.
          Systém je navrhnutý v súlade s modernými štandardmi kybernetickej bezpečnosti a ochrany osobných údajov (GDPR, ISO/IEC 27001), čím poskytuje vysokú úroveň ochrany pre všetky komponenty a používateľov.
        `,
    row: 1,
    col: 1,
  },
  {
    title: "Mozgové prepojenie so systémom",
    url: "neural-link",
    text: `Modul „Mozgové prepojenie so systémom“ predstavuje najpokročilejšiu formu interakcie medzi človekom a technológiou.
          Využíva neurónové rozhranie BCI, ktoré dokáže interpretovať mentálne príkazy používateľa a prevádzať ich na akcie v systéme UVTU.
          Umožňuje ovládať osvetlenie, spúšťať scény alebo aktivovať zariadenia iba pomocou myšlienky, bez dotyku, hlasu či aplikácie.
          Modul je úzko integrovaný s AI asistentom a centrálnym hubom, ktoré vyhodnocujú kontext príkazov a zaisťujú presnosť reakcií.
          Pre bezpečnosť sú použité ochranné vrstvy, ako biometrické overenie, šifrovanie EEG dát a režim „len čítanie“ počas testovania.
        `,
    row: 1,
    col: 1,
  },
];

export function getFeatures(): Feature[] {
  return features;
}

export function getFeatureByUrl(url: string): Feature | undefined {
  return features.find((f) => f.url === url);
}

export function generateFeatureParams() {
  return features.map((f) => ({ url: f.url }));
}
