export const stockData = [
  {
    content:
      "Určitě jsi někdy viděl video na YouTube nebo sis prohlížel fotky na instagramu. Přemýšlel jsi ale nad tím, kde jsou tyto fotky a videa uložené? Nebo kde jsou uloženy webové stránky včetně této aplikace? \n Všechny informace, které najdeme na internetu, jsou uloženy v zařízeních, kterým říkáme SERVERY. SERVERY jsou většinou drahé výkonné počítače v budovách firem, které nemívají obrazovku a typicky běží nonstop. Například společnost Seznam má ve své budově SERVER, na kterém je uložená stránka www.seznam.cz. Nahrávání dat na SERVER říkáme UPLOAD.\n Po zavření okna najdeš v pravém dolním rohu první úkol.",
    type: "whatIsServer",
  },
  {
    content:
      "KLIENT je zařízení (počítač, telefon, tablet), nebo přesněji program (appka), který požaduje po serveru službu. Představ si to jako návštěvníka restaurace, který si objedná jídlo. Restaurace je server, který poskytuje služby (nabízí jídlo), a návštěvník je klient, který požaduje služby (objednává si jídlo). Klient v počítačové síti si může od serveru vyžádat třeba přístup k webové stráce nebo poslání videa.\n Přejdi na aktivitu KOMUNIKACE KLIENT-SERVER.",
    type: "info",
  },
  {
    content:
      "Už víš, že se informace ukládají na serverech (př. webovky na web servery, historie chatu na chat servery, stav hry na game servery). \n Jak se ale dostane třeba webovka na tvůj počítač? \n Klient (webový prohlížeč) pošle na server, kde je webová stránka uložená, balíček dat. Balíček obsahuje informaci, co má server udělat. V našem případě chceme, aby server poslal webovou stránku. Server pošle webovou stránku zpátky klientovi a klient stránku zobrazí na tvém počítači. \n Zavři okno a podívej se, jak komunikace vypadá.",
    type: "client-server-communication",
  },
  {
    content:
      "Kudy se dostanou požadavky, které jsi viděl v minulém úkolu, na server? \n Požadavek je doručen na server podobně jako dopis poštou tvému kamarádovi. Dopis (požadavek) je naložen do poštovního auta (balíčku dat), které jede po silnicích až ke kamarádovi (do serveru). Po cestě navíc auto většinou projede mnoho křižovatek. CESTY a KŘIŽOVATKY najdeš i v internetové síti. Více se o nich dozvíš později. \n Po zavření okna uvidíš, jak by mohla vypadat internetová síť plná křižovatek, cest, serverů a klientů. Ve skutečné internetové síti je ale daleko více zařízení! Se sítí lze pohybovat, nebo ji přiblížit.",
    type: "whatIsPath",
  },
  {
    content:
      "Aby se data dostala z jednoho zařízení do druhého, putují po CESTÁCH. CESTY mohou být bezdrátové (WiFi, satelity), většinou ale mají podobu kabelů (kovových nebo optických), které jsou nejčastěji zakopané pod zemí a pod mořem.",
    type: "info",
  },
  {
    content:
      "KŘIŽOVATKY propojují cesty pro informace. Když do KŘIŽOVATKY přijede po cestě balíček informací, tak ho pošle směrem k jeho cíli. Balíček neurčí směr další cesty sám, směr určí chytrá KŘIŽOVATKA. Pokud nějaká cesta nefunguje, chytrá KŘIŽOVATKA najde objížďku. \n Jsou dva hlavní typy křižovatek: ROUTER a SWITCH. Rozdíl ale pro nás není příliš důležitý.",
    type: "info",
  },
  {
    content:
      "Internet je síť složená ze zařízení, která si posílají balíčky dat. Co jsou ale ty balíčky zač? \n Každá tvoje zpráva, video či fotka je před odesláním rozdělena na části - PAKETY. PAKETY jsou malé balíčky dat obsahující část původní zprávy. Jsou posílány po cestách mezi klienty a servery. Poté, co se zpráva rozloží, putují PAKETY do cíle nezávisle na sobě. \n Zavři okno a podívej se, jak by to vypadalo, kdyby chtěl Xavier odepsat Jeronýmovi. Objeví se okno messengeru, kam napiš nějakou zprávu a odešli ji.",
    type: "dataIntoPackets",
  },
  {
    content:
      "Zpráva je před odesláním rozložena na PAKETY. Jak se ale pozná, kam má být paket doručen? A kam má být paket vrácen v případě nějakých problémů? \n Je to podobné, jako posílání dopisu. Na obálku napíšeš adresu odesílatele a příjemce. V paketu jsou uloženy tzv. IP adresy. \n Pakety putují nezávisle na sobě, proto mohou dorazit v jiném pořadí. Aby se správně seřadily, je v paketu uloženo pořadí. \n Po internetu je posíláno obrovské množství zpráv. Aby se od sebe zprávy odlišily, obsahují pakety identifikační číslo (ID). Pakety, které tvoří jednu zprávu, mají stejné ID.",
    type: "info",
  },
  {
    content:
      "Každý paket v sobě nese část odeslané zprávy. Je v něm uložená adresa zařízení, do kterého paket míří, a také adresa zařízení, ze kterého byl paket odeslán. Navíc obsahuje pořadí a ID pro zpětné sestavení zprávy. \n Karin poslala Xavierovi přes messenger zprávu: AHOJ XAVI, JAK SE MÁŠ? Zavři okno a vyplň obsah tří paketů, na které se zpráva rozložila",
    type: "createPacket",
  },
  {
    content:
      "Kiara, Annika a Eustác brouzdají na internetu. Každý z nich nedávno navštívil nějaký server. Napiš ke každému jménu adresu serveru, který osoba navštívila. Jak poznáš, kdo navštívil který server?",
    type: "findServer",
  },
  {
    content:
      "Odeslaná data se před odesláním rozloží na pakety. \n Po kliknutí na tlačítko SOUBORY se otevře složka se čtyřmi soubory. Pro každý soubor nastav na posuvníku hodnotu, na kolik paketů by se před odesláním soubor rozložil. Do jednoho paketu se vleze 1KB dat",
    type: "sortFileSize",
  },
  {
    content:
      "Největší množství cest v internetu je tvořeno právě kabely. Máme dva hlavní druhy kabelů - metalické (kovové) a optické. Data v metalických kabelech jsou přenášena pomocí elektrických signálů, zatímco v optických kabelech jsou data přenášena pomocí světelných signálů. \n V roce 2019 se poslalo za jedinou hodinu skoro stejné množství dat, jako za celý rok 2000. Řešením tohoto obrovského nárůstu jsou právě optické kabely, které přenáší data až 10000x větší rychlostí na daleko větší vzdálenosti. \n Zavři okno a koukni se, jak je rozdíl v rychlosti přenosu dat pomocí kovových kabelů a pomocí optických kabelů.",
    type: "whatIsCabel",
  },
  {
    content:
      "Už víš, že pakety mohou putovat do jiných zařízení skrz kabely. Určitě ale víš, že data mohou být přenášena i bezdrátově, tedy bez použití kabelů. Příkladem bezdrátového připojení je WiFi. Jako WiFi označujeme signál, který vysílá tzv. WiFi router. Router je krabička, kterou máš pravděpodobně doma. Z routeru vede kabel, kterým je router připojen k chytré křižovatce. Router vysílá WiFi signál k zařízením (počítač, tablet, telefon), která jsou v jeho blízkosti a zařízení posílají data pomocí WiFi signálu zpět k routeru. Router data zpracuje a pošle je kabelem do chytré křižovatky, ke které je tímto kabelem připojen. \n Zavři okno a vyzkoušej si, jak se doma zapojuje wifi router.",
    type: "whatIsWiFi",
  },
  {
    content:
      "Dalším bezdrátovým způsobem připojení je mobilní signál. Tento signál vysílají tzv. BTS věže. Princip je tedy podobný jako u WiFi signálu a WiFi routeru, nejedná se však o stejné signály. \n BTS věže jsou většinou na kopcích nebo na vyšších domech a vede z nich kabel, kterým jsou BTS věže připojeny k chytré křižovatce. Signál, který BTS věže vysílají, může využít pro přenos dat (dokonce i telefonních hovorů) zařízení se SIM kartou (většiou jsou to naše chytré telefony). \n Zařízení se SIM kartou se tedy připojí k BTS věži a začne směrem k BTS věži posílat data. BTS věž data, která k ní díky mobilnímu signálu dorazí, pošle kabelem do chytré křižovatky. \n Rozlišujeme věže typu 4G a 5G, které se liší jak v dosahu signálu, tak v rychlosti přenosu dat. \n Zavři okno a podívej se, jak by to vypadalo, kdyby chtěl klient pomocí mobilních dat poslat požadavek na server.",
    type: "whatIsBTS",
  },
  {
    content:
      "Satelity jsou zařízení vyrobená lidmi, která jsou umístěna na oběžné dráze kolem Země. \n Satelitní připojení je nejméně používané, používá se na obtížně přístupných místech. Satelit jenom přeposílá data zpátky na zem - když někdo pošle signál ze Země k satelitu, antény na satelitu přijmou tento signál a přenesou ho zpět na Zemi. \n Satelity komunikují z oběžné dráhy. \n Zavři okno a podívej se, jak by to vypadalo, kdyby chtěl klient na lodi uprostřed moře poslat požadavek na server.",
    type: "whatIsSatelit",
  },
  {
    content:
      "Pravděpodobně už sis někdy řekl: “Proč je ten internet takový pomalý?”. Pojďme si nyní říct, co vlastně znamená, že je internet rychlý nebo pomalý. \n Rychlost internetu má dva aspekty - dobu odezvy a šířku pásma. Doba odezvy nám říká, jak dlouho trvá paketu, než dorazí od odesílatele k příjemci. Čím vyšší je doba odezvy, tím déle trvá, než je paket doručen do cíle. Doba může být ovlivněna třeba tím, že některé chytré křižovatky jsou zrovna přetížené, nebo že jsou pakety odeslány přes satelit. \n Malou dobu odezvy potřebuješ např. při hraní her, nebo při online hovoru. Pokud hraješ online hru a doba odezvy je velká, může to způsobit, že se hra bude zasekávat. U hovoru velká doba odezvy způsobí, že tě člověk na druhém konci slyší až s několika sekundovým zpožděním. \n Zavři okno a vyzkoušej si, s jakou odezvou zvládneš posílat data. naklikej cestu od klienta až po server a pak zase zpátky ke klientovi za co nejkratší čas.",
    type: "raceAroundWorld",
  },
  {
    content:
      "Pojďme se zaměřit na druhý aspekt  rychlosti internetu - tzv. šířku pásma. \n Představ si posílání dat po internetu jako vodu, která teče potrubím. Doba odezvy by v takovém případě znamenala, jak rychle voda potrubím protéká (za jak dlouho se voda potrubím dostane na jiné místo). \n Šířka pásma ale určuje šířku potrubí. Čím širší je potrubí (čím větší je šířka pásma), tím více vody může najednou potrubím protékat (tím více dat můžeme najednou posílat). \n Velkou šířku pásma potřebuješ např. při stahování videa, protože je potřeba přenést velké množství dat. \n Šířka pásma se měří v Mb/s, tedy kolik Mb dat můžeš po cestě přenést za jednu sekundu. \n Pojď si to nyní vyzkoušet. Klikni na START a začni přepisovat text níže. Kolik Mb textu zvládneš za 10 sekund přepsat?",
    type: "typingChallenge",
  },
  {
    content:
      "Je potřeba připojit všechny klienty v mapě k internetu. K dispozici máš 2 WiFi routery, 2 BTS věže. Vyber vždy jedno zařízení kliknutím na jeho ikonu vpravo dole. Kliknutím do mapy dané zařízení umístíš. Cílem je, aby po umístění posledního zařízení byl každý klient v dosahu alespoň jednoho zařízení. Dosah každého zařízení znázorňuje průhledné kolečko okolo daného zařízení. Zařízení tedy musíš umístit tak, aby všichni klienti byli v dosahu alespoň jednoho zařízení.",
    type: "connectClientsWireless",
  },
  {
    content:
      "Pojďme se ještě nyní zamyslet nad tím, jestli máme vždy možnost využít libovolný typ připojení k internetu. Níže vidíme čtyři situace z běžného života. Zaškrtni v každém sloupečku typ připojení, který je v dané situaci vhodný. V jednom sloupečku může být i více možností.",
    type: "howToConnect",
  },
  {
    content:
      "Před tím, než vyšleme paket na cestu, musíme mu říct, kam má dojet. Je to stejné, jako když posíláte dopis a musíte na něj napsat adresu, kam má být doručen. Takovým adresám říkáme v internetové komunikaci IP adresy. \n Pokud např. chcete otevřít webovou stránku, váš počítač potřebuje znát IP adresu serveru, kde je stránka uložená, aby věděl, kam poslat požadavek. \n Existují dvě hlavní verze IP adres - IPv4 a IPv6. IPv4 se skládá ze čtyř čísel oddělených tečkami (př. 192.168.0.1.). IPv6 se skládá z osmi čísel (př. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Dokázal bys vymyslet, proč potřebujeme novější verzi IPv6? Pokud tě nic nenapadá, tak počkej na další úkol. Nyní zkus zjistit, jakou IP adresu má tvůj počítač a napiš ji do textového pole níže.",
    type: "IPadress",
  },
  {
    content:
      "V předchozím úkolu jsme zmínili, že existují dvě verze IP adres. Proč ale potřebujeme novější verzi IPv6? Odpověď je jednoduchá. V dnešní době máme již tolik počítačů, že je IPv4 adres prostě málo. Proto byla vytvořena nová verze IPv6, díky které můžeme vytvořit daleko více unikátních adres. Dokonce jich je tolik, že se nemusíme bát, že by IPv6 adresy v budoucnosti došly. Máme totiž 340 282 366 920 938 463 374 607 431 768 211 456 různých IPv6 adres, což je dost adres na to, abychom na každý mm2 po celé zemi mohli umístit více než 650 000 000 000 000 000 adres. Zkus nyní níže pro každou IP adresu určit, jestli se jedná o IPv4, IPv6 nebo jestli se vůbec nejedná o IP adresu.",
    type: "sortIPAdresses",
  },
  {
    content: "",
    type: "setPath",
  },
  {
    content:
      "Už víš, že paket putuje po cestách od odesílatele k příjemci po cestách. Cestu si ale paket nevybírá sám. Ve skutečnosti tuto trasu určuje chytrá křižovatka, která vždy vybere nejrychlejší cestu, po které paket pošle. Nejrychlejší cesta ale není vždycky ta nejkratší, závisí to i na vytíženosti jednotlivých cest. Můžeš si to představit jako jízdu autem, občas je rychlejší udělat objížďku, protože na nejkratší cestě je zrovna zácpa.\n Když zavřeš okno, tak se v mapě u každé cesty objeví číslo, které udává, jak dlouho po dané cestě paket pojede. Napiš do textového pole, jak dlouhá je nejkratší cesta od Logana do serveru Messengeru.",
    type: "shortestPath",
  },
  {
    content:
      "Už víš, že chytrá křižovatka pošle paket vždy nejrychlejší cestou. Zkus nyní spočítat, kolik různých cest mezi dvěma místy existuje.\n Zavři okno spočítej, po kolika různých cestách by mohl putovat paket od Elisabeth do Messenger serveru. Paket nesmí projet vícekrát stejnou chytrou křižovatkou. Počet různých cest napiš do textového pole. Zvládl bys přijít na to, proč je dobré, aby cest bylo více? Pokud tě nic nenapadá, počkej na další úkol.",
    type: "countOfPaths",
  },
  {
    content:
      "V předchozím úkolu bylo zmíněno, že je dobré, aby mezi dvěma místy vedlo více různých cest. Zavři okno a sleduj paket, který byl poslán do messenger serveru, kam ale vede pouze jedna cesta.",
    type: "problemWithPath",
  },
  {
    content:
      "Konečně jsme na konci naší cesty. Všechny pakety úspěšně dorazily až k příjemci. Pakety ovšem dorazily do cíle nezávisle na sobě, proto je potřeba je nyní setřídit. Poslal jsi kamarádovi fotku, fotka dorazila do cíle přeházená. Zkus nyní fotku poskládat zpět do původní podoby.",
    type: "puzzle",
  },
  {
    content:
      "Vytvoř síť, aby měl uživatel přístup z domova k webové stránce uložené na serveru v cizí zemi",
    type: "build-network-1",
  },
  {
    content:
      "Vytvoř takovou síť, aby se uživatel mohl připojit přes data a vyhledat si nějakou webovou stránku",
    type: "build-network-2",
  },
  {
    content:
      "Vytvoř síť routerů mezi 3 klienty a 3 servery, která bude odolná vůči výpadkům a zahlcením.",
    type: "build-network-3",
  },
  {
    content: "",
    type: "build-network-4",
  },
];
