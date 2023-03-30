export const stockData = [
  {
    content:
      "Určitě už jsi někdy viděl video na YouTube, nebo jsi projížděl fotky na instagramu. Přemýšlel jsi ale nad tím, kde jsou tyto fotky a videa uložené? Nebo kde jsou uloženy webové stránky včetně této aplikace? \n Všechny informace, které najdeme na internetu, jsou uloženy v zařízeních, kterým říkáme SERVERY. Jsou to speciálně upravené počítače, které nemívají obrazovku a typicky běží nonstop. Kdokoliv může do internetu připojit vlastní server. Většinou jsou to ale drahé výkonné počítače v budovách firem. Například společnost Seznam má ve své budově server. Ten má na disku uloženou stránku www.seznam.cz. Nahrávání dat na server říkáme upload.\n Zavři okno a podívej se, jak se objeví servery. V pravém dolním rohu najdeš svůj první úkol.",
    type: "whatIsServer",
  },
  {
    content:
      "Klient je zařízení (počítač, telefon, tablet), nebo přesněji program (appka), který požaduje po serveru nějakou službu. Lze si to představit jako návštěvníka restaurace, který si objedná jídlo. Restaurace je server, který poskytuje služby (nabízí jídlo), a návštěvník je klient, který požaduje služby (objednává si jídlo). Klient v počítačové síti si může od serveru vyžádat třeba přístup k webovým stránkám, nebo může chtít poslat video, které si chce přehrát.\n Zavři okno a přejdi na další úkol, kde si o klientovi řekneme více",
    type: "info",
  },
  {
    content:
      "Už víš, že informace se ukládají na serverech. Jedná se např. o webovky uložené na web serverech, historii chatu uloženou na chat serveru, stav hry uložený na game serveru nebo emaily uložené na mail serveru. \n Co se tedy stane, když budeš chtít na svém počítači otevřít třeba nějakou webovou stránku? \n Klient (zde by to byl webový prohlížeč) pošle na server, kde je webová stránka uložená, balíček dat. Balíček obsahuje požadavek, který říká, co má server udělat. V našem případě žádáme server, aby nám poslal webovou stránku. Server pošle webovou stránku zpátky klientovi a klient stránku zobrazí na tvém počítači. \n Zavři okno a podívej se, jak by mohla komunikace vypadat.",
    type: "client-server-communication",
  },
  {
    content:
      "V minulém úkolu jsme se dozvěděli, že klienti posílají serverům balíčky dat s požadavky. Kudy se ale balíček dat dostane na server? \n Požadavek je doručen na server podobně, jako je třeba tvému kamarádovi doručen dopis poštou. Dopis (požadavek) je naložen do poštovního auta (balíčku dat), a to jede po silnicích tak dlouho, až se dostane ke kamarádovi (do serveru). Při jízdě autem se ti ale málokdy stane, že jedeš po jedné dlouhé cestě, většinou projedeš několik křižovatek. Cesty a křižovatky najdeš i v internetové síti. Jak fungují se dozvíš v dalších úkolech. \n Nyní zavři okno a podívej se, jak by mohla vypadat internetová síť plná křižovatek, cest, serverů a klientů. Ve skutečné internetové síti je jich ale daleko více! V mapě se můžeš pohybovat a můžeš si ji přibližovat a oddalovat.",
    type: "whatIsPath",
  },
  {
    content:
      "Zmínili jsme, že data internetem putují po cestách, aby se dostala z jednoho zařízení do druhého. Cesty mohou být bezdrátové jako WiFi nebo satelity, většinou jsou ale cesty kabely (kovové nebo optické), které jsou nejčastěji zakopané pod zemí a pod mořem.",
    type: "info",
  },
  {
    content:
      "Křižovatky propojují cesty pro informace. Když do křižovatky přijede po cestě balíček informací, tak ho křižovatka pošle směrem k jeho cíli. Balíček neurčí směr další cesty sám, tento směr je určen chytrou křižovatkou. Pokud nějaká cesta zrovna nefunguje, chytrá křižovatka umí najít objížďku. \n Nezapomeň, že cíl balíčku je vždy server nebo klient. \n Jsou dva hlavní typy křižovatek: ROUTER a SWITCH. Rozdíly mezi nimi ale pro nás nejsou příliš důležité.",
    type: "info",
  },
  {
    content:
      "Už víš, že Internet je síť složená ze zařízení, která si mezi sebou posílají balíčky dat (požadavky, soubory, informace...). Pojďme se nyní zaměřit právě na tyto balíčky dat. \n Každá tvoje zpráva, video či fotka, co se po internetu posílá, je před odesláním rozdělena na části. Těmto částem se říká pakety. Pakety jsou tedy malé balíčky dat obsahující část původní zprávy. Pakety jsou doručeny po cestách z klientů do serverů nebo ze serverů zpátky do klientů. Poté, co je zpráva rozložena na pakety, pakety putují do cílé nezávisle na sobě. \n Pojď se nyní podívat, jak by to vypadalo, kdyby chtěl Xavier odepsat Jeronýmovi na jeho zprávu. Poté, co zavřeš okno, se objeví okno messengeru. Napiš nějakou zprávu a odešli ji.",
    type: "dataIntoPackets",
  },
  {
    content:
      "Už víš, že zpráva neputuje vcelku, ale že se po odeslání rozdělí na malé balíčky dat - pakety. Jak se ale pozná, kam má být paket doručen? Případně kam má být paket vrácen v případě nějakých problémů? \n Je to podobné, jako když posíláš dopis poštou. Na obálku napíšeš svou adresu a také adresu kamaráda, kterému má být dopis doručen. V případě paketu je uvnitř uložena tzv. IP adresa. IP adresa každého zařízení musí být unikátní. \n Viděl jsi, že pakety putují každý po jiné trase a do cíle proto mohou dorazit v jiném pořadí. Aby je bylo možné v cíli správně seřadit, musíme do každého paketu uložit jeho pořadí. \n V každém momentě je po internetu posláno obrovské množství zpráv (paketů). Abychom od sebe zprávy (pakety) odlišily, uložíme do paketu ještě identifikační číslo -  zkráceně ID. Pakety, které tvoří jednu zprávu, mají stejné ID.",
    type: "info",
  },
  {
    content:
      "Už víš, že každý paket v sobě nese část odeslané zprávy. Musí v něm být uložena adresa zařízení, do kterého paket míří, a také adresa zařízení, ze kterého byl paket odeslán. Navíc v paketu musí být uloženo pořadí a ID, aby mohla být zpráva v cíli poskládaná zpět do původní podoby.\n Zkus nyní sám rozložit zprávu na pakety. Karin poslala Xavierovi přes messenger zprávu: AHOJ XAVI, JAK SE MÁŠ? Po odeslání se zpráva rozložila na tři pakety. Zkus vyplnit obsah všech paketů.",
    type: "createPacket",
  },
  {
    content:
      "Kiara, Annika a Eustác brouzdají na internetu. Každý z nich nedávno navštívil nějaký server. Napiš ke každému jménu adresu serveru, který osoba navštívila. Jak poznáš, kdo navštívil který server?",
    type: "findServer",
  },
  {
    content:
      "Už víš, že odeslaná data neputují vcelku, ale rozloží se na pakety. \n Klikni na tlačítko SOUBORY. Otevře se ti složka se 4 soubory, které prozkoumej. Pro každý soubor nastav na posuvníku hodnotu, která bude udávat přibližný počet paketů, na který se soubor před odesláním rozloží. Počítej s tím, že do jednoho paketu se vleze 1KB dat",
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
      "Pravděpodobně už sis někdy řekl: “Proč je ten internet takový pomalý?”. Pojďme si nyní říct, co vlastně znamená, když je internet rychlý nebo pomalý. \n Rychlost internetu má dva aspekty - tzv. rychlost odezvy a šířku pásma. V tomto úkolu se dozvíš, co znamená rychlost odezvy. \n Rychlost odezvy je doba, za jakou paket dorazí od odesílatele k příjemci. Rychlost odezvy může být ovlivněna mnoha faktory. Např. některé chytré křižovatky mohou být zrovna přetížené, pakety mohou být odeslány přes satelit atd. \n Když je rychlost odezvy malá, tak to znamená, že trvá velice krátkou dobu, než jsou data doručená. Malou rychlost odezvy potřebuješ třeba ve chvíli kdy hraješ hry nebo voláš přes internet přes internet. \n Pokud hraješ online hru a tvoje data mají velkou rychlost odezvy, může to způsobit, že hra bude kousat a nebude se plynule hrát. U hovoru potřebuješ, aby člověk na druhém konci slyšel to, co říkáš, skoro okamžitě, abys nemusel dlouho čekat na jeho odpověď.",
    type: "raceAroundWorld",
  },
  {
    content:
      "Už víme, že různé typy připojení mají různou rychlost přenosu dat. Rychlost se měří v Mb/s. Co si ale pod touto jednotkou máme představit? Pojďme si zahrát na posílání dat po internetu. Ty budeš zařízení, které má za úkol přeposlat text, který vidíš níže. Přepiš tento text co nejrychleji do vstupního pole. Samozřejmě při přepisování nesmíš udělat chybu, přece bychom nechtěli aby třeba WiFi poslala jinou zprávu, než jakou jsme napsali.",
    type: "typingChallenge",
  },
  {
    content:
      "Je potřeba připojit všechny klienty v mapě k internetu. K dispozici máš 3 WiFi routery, 2 BTS věže. Vyber vždy jedno zařízení kliknutím na jeho ikonu vpravo dole. Kliknutím do mapy dané zařízení umístíš. Cílem je, aby po umístění posledního zařízení byl každý klient v dosahu alespoň jednoho zařízení. Dosah každého zařízení znázorňuje průhledné kolečko okolo daného zařízení. Zařízení tedy musíš umístit tak, aby všichni klienti byli v dosahu alespoň jednoho zařízení.",
    type: "connectClientsWireless",
  },
  {
    content:
      "Pojďme se ještě nyní zamyslet nad tím, jestli máme vždy možnost využít libovolný typ připojení k internetu. Níže vidíme čtyři situace z běžného života. Přetáhni do každého sloupečku, typ připojení, který by byl pro danou situaci vhodný. V jednom sloupečku může být i více možností.",
    type: "howToConnect",
  },
  {
    content:
      "Před tím, než vyšleme paket na cestu, musíme mu říct, kam má dojet. Je to stejné, jako když posíláte dopis a musíte na něj napsat adresu, aby byl správně doručen. IP adresa jedinečná adresa pro každý počítač připojený k internetu. To znamená, že pokud chcete navštívit nějakou webovou stránku, váš počítač potřebuje znát IP adresu serveru, kde je stránka uložená, aby věděl, kam poslat požadavek. Tato čísla by se nám samozřejmě špatně pamatovala, proto se IP adresa překládá na lépe zapamatovatelné jméno. Existují dvě hlavní verze IP adres - IPv4 a IPv6. IPv4 se skládá ze čtyř čísel oddělených tečkami (př. 192.168.0.1.). IPv6 se skládá z osmi čísel (př. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Dokázal bys vymyslet, proč potřebujeme novější verzi IPv6? Pokud tě nic nenapadá, tak počkej na další úkol. Zkus nyní zjistit, jakou IP adresu má tvůj počítač, tuto IP adresu napiš do textového pole níže.",
    type: "IPadress",
  },
  {
    content:
      "V předchozím úkolu jsme zmínili, že existují dvě verze IP adres. Proč ale potřebujeme novější verzi IPv6? Odpověď je jednoduchá. V dnešní době máme již tolik počítačů, že je IPv4 adres prostě málo. Proto byla vytvořena nová verze IPv6, díky které můžeme vytvořit daleko více unikátních adres. Dokonce jich je tolik, že se nemusíme bát, že by IPv6 adresy v budoucnosti došly. Máme totiž 340 282 366 920 938 463 374 607 431 768 211 456 různých IPv6 adres, což je dost adres na to, abychom na každý mm2 po celé zemi mohli umístit více než 650 000 000 000 000 000 adres. Níže vidíš 3 sloupečky, v nich se nám pomíchaly IP adresy, zkus adresy roztřídit do správných sloupečků.",
    type: "sortIPAdresses",
  },
  {
    content:
      "Pakety už znají cílovou adresu, teď je potřeba vyřešit, kudy se do cíle dostanou. Již víme, že jedna zpráva se rozloží na více paketů. Pakety ale nejedou do cíle všechny po stejné cestě, většinou putují nezávisle na sobě. V reálném světě to má řadu výhod, které si ukážeme v dalších úkolech. Nyní klikni na START. Vlevo dole máš tři pakety, které poslal klient (je na tobě, kterého si vybereš). Popiš cestu pro každý paket.",
    type: "setPath",
  },
  {
    content:
      "V předchozím úkolu jsme vybrali pro každý paket nějakou trasu. Ve skutečnosti tuto trasu určuje chytrá křižovatka, která vždy vybere nejrychlejší cestu, po které paket pošle. Nejrychlejší cesta ale není vždycky ta nejkratší, závisí to i na vytíženosti jednotlivých cest. Můžete si to představit jako jízdu autem, občas je rychlejší udělat objížďku, protože na nejkratší cestě je zrovna zácpa.\n Klikni na START. V mapě se u každé cesty objeví číslo, které udává, jak dlouho po dané cestě paket pojede. Napiš do textového pole, jak dlouhá je nejkratší cesta od Logana do serveru Messengeru.",
    type: "shortestPath",
  },
  {
    content:
      "Už víš, že chytrá křižovatka pošle paket vždy nejrychlejší cestou. Zkus nyní spočítat, kolik různých cest mezi dvěma místy existuje.\n Klikni na tlačítko START a zkus spočítat, po kolika různých cestách by mohl putovat paket od Elisabeth do Messenger serveru. Paket nesmí projet vícekrát stejnou chytrou křižovatkou. Počet různých cest napiš do textového pole. Zvládl bys přijít na to, proč je dobré, aby cest bylo více?",
    type: "countOfPaths",
  },
  {
    content:
      "Klikni na tlačítko START. Objeví se okno chatu. Napiš zprávu a odešli ji. Už víme, že pakety zamíří do messenger serveru. Sleduj ale, co se po cestě stane.",
    type: "problemWithPath",
  },
  {
    content:
      "Konečně jsme na konci naší cesty. Všechny pakety úspěšně dorazili až k příjemci. Pakety ovšem dorazili do cíle nezávisle na sobě, proto je potřeba je nyní setřídit. Poslali jsme kamarádovi fotku, fotka dorazila do cíle přeházená. Zkus nyní fotku poskládat zpět do původní podoby.",
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
