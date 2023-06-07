export const stockData = [
  {
    content:
      "Určitě jsi někdy viděl video na YouTube nebo sis prohlížel fotky na instagramu. Přemýšlel jsi ale nad tím, kde jsou uložené? Nebo kde jsou uloženy webové stránky včetně této aplikace? \n Všechny informace, které najdeme na internetu, jsou uloženy v zařízeních, kterým říkáme SERVERY. SERVERY jsou většinou drahé výkonné počítače v budovách firem, které nemívají obrazovku a typicky běží nonstop. Například společnost Seznam má ve své budově SERVER, na kterém je uložená stránka www.seznam.cz. Nahrávání dat na SERVER říkáme UPLOAD.",
    type: "whatIsServer",
    hint: "Uploadni soubory do správného serveru. Upload provedeš přetažením souboru do serveru.",
  },
  {
    content:
      "KLIENT je zařízení (počítač, telefon, tablet), nebo přesněji program (appka), který požaduje po serveru službu. Představ si to jako návštěvníka restaurace, který si objedná jídlo. Restaurace je server, který poskytuje služby (nabízí jídlo), a návštěvník je klient, který požaduje služby (objednává si jídlo). Klient v počítačové síti si může od serveru vyžádat třeba přístup k webové stráce nebo poslání videa.",
    type: "whatIsClient",
    hint: "",
  },
  {
    content:
      "Už víš, že se informace ukládají na serverech (webovky na web servery, historie chatu na chat servery, stav hry na game servery). \n Jak se ale dostane třeba webovka na tvůj počítač? Klient (webový prohlížeč) pošle na server, kde je webová stránka uložená, balíček dat s informací, co má server udělat. My chceme, aby server poslal webovou stránku. Server ji pošle zpátky klientovi a klient stránku zobrazí na tvém počítači.",
    type: "client-server-communication",
    hint: "Animace znázorňuje komunikaci klienta a serveru.",
  },
  {
    content:
      "Kudy se dostanou požadavky, které jsi viděl v minulém úkolu, na server? \n Požadavek je doručen na server podobně jako dopis poštou tvému kamarádovi. Dopis (požadavek) je naložen do poštovního auta (balíčku dat), které jede po silnicích až ke kamarádovi (do serveru). Po cestě navíc auto většinou projede mnoho křižovatek. CESTY a KŘIŽOVATKY najdeš i v internetové síti. Více se o nich dozvíš později.",
    type: "whereDataTravel",
    hint: "Takto by mohla vypadat internetová síť plná křižovatek, cest, serverů a klientů. Ve skutečné internetové síti je ale daleko více zařízení! \n Vyzkoušej se sítí pohybovat a přiblížit ji.",
  },
  {
    content:
      "Aby se data dostala z jednoho zařízení do druhého, putují po CESTÁCH. CESTY mohou být bezdrátové (WiFi, satelity), většinou ale mají podobu kabelů (kovových nebo optických), které jsou nejčastěji zakopané pod zemí a pod mořem.",
    type: "whatIsPath",
    hint: "Tady zatím není žádný úkol.",
  },
  {
    content:
      "KŘIŽOVATKY propojují cesty pro informace. Když do KŘIŽOVATKY přijede po cestě balíček informací, tak ho pošle směrem k jeho cíli. Balíček neurčí směr další cesty sám, směr určí chytrá KŘIŽOVATKA. Pokud nějaká cesta nefunguje, chytrá KŘIŽOVATKA najde objížďku. \n Jsou dva hlavní typy křižovatek: ROUTER a SWITCH. Rozdíl ale pro nás není příliš důležitý.",
    type: "whatIsGateway",
    hint: "Tady zatím není žádný úkol.",
  },
  {
    content:
      "Internet je síť složená ze zařízení, která si posílají balíčky dat. Co jsou ale ty balíčky zač? \n Každá tvoje zpráva, video či fotka je před odesláním rozdělena na části - PAKETY. PAKETY jsou malé balíčky dat obsahující část původní zprávy. Jsou posílány po cestách mezi klienty a servery. Poté, co se zpráva rozloží, putují PAKETY do cíle nezávisle na sobě.",
    type: "dataIntoPackets",
    hint: "Jak by to vypadalo, kdyby chtěl Xavier odepsat Jeronýmovi? Napiš zprávu a odešli ji.",
  },
  {
    content:
      "Zpráva je před odesláním rozložena na PAKETY. Jak se ale pozná, kam má být paket doručen? A kam má být paket vrácen v případě nějakých problémů? \n Je to podobné, jako posílání dopisu. Na obálku napíšeš adresu odesílatele a příjemce. V paketu jsou uloženy tzv. IP adresy. \n Pakety putují nezávisle na sobě, proto mohou dorazit v jiném pořadí. Aby se správně seřadily, je v paketu uloženo pořadí. \n Po internetu je posíláno obrovské množství zpráv. Aby se od sebe zprávy odlišily, obsahují pakety identifikační číslo (ID). Pakety, které tvoří jednu zprávu, mají stejné ID.",
    type: "whatIsPacket",
    hint: "",
  },
  {
    content:
      "Každý paket v sobě nese část odeslané zprávy. Je v něm uložená adresa zařízení, do kterého paket míří, a také adresa zařízení, ze kterého byl paket odeslán. Navíc obsahuje pořadí a ID pro zpětné sestavení zprávy.",
    type: "createPacket",
    hint: "Karin (214.17.55.99) poslala Xavierovi (15.103.46.12) přes messenger zprávu: AHOJ XAVI, JAK SE MÁŠ? \n Vyplň obsah tří paketů, na které se zpráva rozložila. Do jednoho paketu se vleze 8 znaků z původní zprávy.",
  },
  {
    content:
      "Kiara, Annika a Eustác brouzdají na internetu. Každý z nich nedávno navštívil nějaký server. Napiš ke každému jménu adresu serveru, který osoba navštívila. Jak poznáš, kdo navštívil který server?",
    type: "findServer",
    hint: "Ke každému jménu napiš adresu serveru, který daný člověk navštívil.",
  },
  {
    content:
      "Odeslaná data se před odesláním rozloží na pakety. Napiš, na kolik paketů se rozloží každý ze 4 souborů, když se do jednoho paketu vleze 1KB dat",
    type: "sortFileSize",
    hint: "Napiš, na kolik paketů se rozloží každý ze 4 souborů, když se do jednoho paketu vleze 1KB dat",
  },
  {
    content:
      "Nejvíce cest je tvořeno KABELY. Ty mohou být metalické (kovové) nebo optické. V metalických jsou data přenášena pomocí elektrických signálů, zatímco v optických pomocí světelných signálů. \n Množství posílaných dat neustále roste. V roce 2019 se poslalo za hodinu stejné množství dat, jako za celý rok 2000. Řešením jsou optické KABELY, jelikož přenáší data až 10000x větší rychlostí i na daleko větší vzdálenosti.",
    type: "whatIsCabel",
    hint: "Animace znázorňuje srovnání rychlosti přenosu v optickém a metelickém kabelu.",
  },
  {
    content:
      "Data mohou být přenášena i bezdrátově, tedy bez použití kabelů. Příkladem bezdrátového připojení je WIFI, což je označení pro signál, který je vysílán z WIFI ROUTERU. \n ROUTER je krabička, kterou bys určitě našel doma. Vede z něj kabel, kterým je připojen k chytré křižovatce. Vysílá WIFI SIGNÁL k zařízením (počítače, telefony), která posílají data pomocí WIFI SIGNÁLU zpět k ROUTERU. Ten data pošle kabelem do chytré křižovatky. \n Po zavření okna si zkus zapojit WIFI ROUTER.",
    type: "whatIsWiFi",
    hint: "",
  },
  {
    content:
      "Bezdrátovým připojením je také MOBILNÍ SIGNÁL vysílaný BTS VĚŽEMI. Princip je podobný jako u WIFI, jsou to však různé signály. \n BTS VĚŽE jsou většinou na kopcích nebo vyšších domech a kabelem jsou připojeny k chytré křižovatce. Vysílají signál, který může využít pro přenos dat (či telefonních hovorů) zařízení se SIM kartou (většinou mobily). VĚŽ vyšle signál, pomocí kterého pošle zařízení data zpět k BTS VĚŽI. VĚŽ pošle data kabelem do chytré křižovatky. \n Rozlišujeme věže typu 4G a 5G, které se liší jak v dosahu signálu, tak v rychlosti přenosu dat.",
    type: "whatIsBTS",
    hint: "Animace znázorňuje, jak jsou přenášena data pomocí BTS věže.",
  },
  {
    content:
      "Satelity jsou zařízení umístěna na oběžné dráze okolo Země. \n Satelitní připojení je nejméně používané, používají ho zařízení na obtížně přístupných místech. Když někdo pošle signál ze Země k satelitu, antény na satelitu signál zachytí a odrazí ho zpět na Zemi.",
    type: "whatIsSatelit",
    hint: "Animace znázorňuje, jak jsou přenášena data pomocí satelitu.",
  },
  {
    content:
      "“Proč je ten internet takový pomalý?” Co vlastně znamená, že je internet rychlý nebo pomalý. \n Rychlost internetu má dva aspekty - DOBU ODEZVY a ŠÍŘKU PÁSMA. DOBA ODEZVY nám říká, jak dlouho trvá paketu, než dorazí od odesílatele k příjemci. Čím je vyšší, tím déle trvá, než je paket doručen. To může být ovlivněno třeba přetížením křižovatek, nebo posíláním přes satelit. \n Malou DOBU ODEZVY potřebuješ třeba při hraní her, nebo při online hovoru. Velká doba odezvy totiž způsobí zasekávání online hry. U hovoru způsobí, že člověk na druhém konci slyší i s několika sekundovým zpožděním.",
    type: "raceAroundWorld",
    hint: "Naklikej co nejrychleji cestu od klienta až do serveru.",
  },
  {
    content:
      "Druhý aspket rychlosti je ŠÍŘKA PÁSMA. \n Představ si posílání dat jako vodu, která teče potrubím. Pak by rychlost vody v potrubí byla DOBA ODEZVY. \n Šířka potrubí (kolik vody najednou může protéct) by byla ŠÍŘKA PÁSMA. ŠÍŘKA PÁSMA udává, kolik dat lze po cestě najednou poslat. \n Velkou šířku pásma potřebuješ třeba při stahování videa, protože je potřeba najednou přenést velké množství dat. \n Šířka pásma se měří v Mb/s (kolik Mb dat přeneseš za sekundu).",
    type: "typingChallenge",
    hint: "Klikni na START a zkus za 10 sekund opsat do textového pole co nejvíce textu.",
  },
  {
    content:
      "Připoj všechny klienty k internetu pomocí dvou WiFi routerů a dvou BTS věží. Zařízení přidáš kliknutím na jeho ikonu v nabídce, poté jej můžeš libovolně přemisťovat. Každý klient musí být v dosahu alespoň jednoho zařízení. Klient je v dosahu zařízení, když má nad hlavou ikonu wifi.",
    type: "connectClientsWireless",
    hint: "Připoj všechny klienty k internetu pomocí dvou WiFi routerů a dvou BTS věží. Zařízení přidáš kliknutím na jeho ikonu v nabídce, poté jej můžeš libovolně přemisťovat. Každý klient musí být v dosahu alespoň jednoho zařízení. Klient je v dosahu zařízení, když má nad hlavou ikonu wifi.",
  },
  {
    content:
      "Ne vždy lze použít libovolný typ připojení. Zaškrtni pro každou ze čtyř situací, jaký typ připojení je vhodný. V jednom sloupečku může být i více možností.",
    type: "howToConnect",
    hint: "Zaškrtni pro každou ze čtyř situací, jaký typ připojení je vhodný. V jednom sloupečku může být i více možností.",
  },
  {
    content:
      "Stejně jako při posílání dopisu i v paketu musí být uložená cílová adresa. Těmto adresám říkáme IP ADRESY. \n Pokud chceš třeba otevřít webovou stránku, musí počítač zjistit IP ADRESU serveru, kde je stránka uložená, aby věděl, kam poslat požadavek. \n Existují dvě hlavní verze IP ADRES - IPv4 a IPv6. IPv4 se skládá ze čtyř čísel v rozsahu 0-255 oddělených tečkou (př. 192.168.0.255). IPv6 se skládá z osmi čísel (př. 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
    type: "IPadress",
    hint: "Napiš do textového pole níže, jakou IP adresu má tvůj počítač.",
  },
  {
    content:
      "Novější IPv6 adresy vznikly, protože IPv4 adres začal být nedostatek. Existuje 340 282 366 920 938 463 374 607 431 768 211 456 různých IPv6 adres, což je dost na to, abychom na každý mm2 po celé zemi mohli umístit více než 650 000 000 000 000 000 adres.",
    type: "sortIPAdresses",
    hint: "Pro každou z adres urči, jestli se jedná o IPv4, IPv6 nebo o neplatnou IP adresu.",
  },
  {
    content:
      "Paket si cestu od odesílatele k příjemci nevybírá sám. Trasu určí chytrá křižovatka, která vybere nejrychlejší cestu, po které paket pošle. Nejrychlejší cesta ale není vždycky ta nejkratší, závisí to i na vytíženosti jednotlivých cest. Když jedeš autem, tak je také občas rychlejší udělat objížďku, protože na nejkratší cestě je zrovna zácpa.\n Po zavření okna se u každé cesty objeví číslo, které udává, jak dlouho po dané cestě paket pojede. Do textového pole napiš, jak dlouho pojede paket nejrychlejší cestou od klienta do serveru Messengeru.",
    type: "shortestPath",
    hint: "Do textového pole napiš, jak dlouho pojede paket nejrychlejší cestou od Logana do serveru Messengeru.",
  },
  {
    content:
      "Zkus spočítat, po kolika různých cestách by mohl putovat paket od Elisabeth do Messenger serveru. Paket nesmí projet dvakrát stejnou chytrou křižovatkou. Počet cest napiš do textového pole. V další aktivitě se dozvíš, proč je dobré, aby cest bylo více.",
    type: "countOfPaths",
    hint: "",
  },
  {
    content:
      /*"Proč je dobré, aby mezi dvěma místy vedlo více různých cest? Zavři okno a sleduj paket, který byl poslán do messenger serveru, kam vede pouze jedna cesta.",*/
      "Tento úkol není hotový",
    type: "problemWithPath",
    hint: "",
  },
  {
    content:
      "Klientovi přišla v paketech fotka. Pakety putují nezávisle na sobě, proto je potřeba je seřadit. Zkus fotku poskládat zpět do původní podoby. Pomohou ti čísla udávající pořadí paketu.",
    type: "puzzle",
    hint: "Poskládej obrázek zpět do původní podoby. Pomohou ti čísla udávající pořadí paketu.",
  },
  {
    content:
      "Vytvoř síť, aby měl uživatel přístup z domova k webové stránce uložené na serveru v cizí zemi",
    type: "build-network-1",
    hint: "",
  },
  {
    content:
      "Vytvoř takovou síť, aby se uživatel mohl připojit přes data a vyhledat si nějakou webovou stránku",
    type: "build-network-2",
    hint: "",
  },
  {
    content:
      "Vytvoř síť routerů mezi 3 klienty a 3 servery, která bude odolná vůči výpadkům a zahlcením.",
    type: "build-network-3",
    hint: "",
  },
  {
    content: "Tento úkol není hotový",
    type: "build-network-4",
    hint: "",
  },
];
