export const stockData = [
  {
    header: "Co je SERVER",
    content:
      "Určitě už jsi někdy viděl video na YouTube, nebo jsi projížděl fotky na instagramu. Přemýšlel jsi ale nad tím, kde jsou tyto fotky a videa uložené? Nebo kde jsou uloženy webové stránky včetně této aplikace?\nVšechny informace, které najdeme na internetu, jsou uloženy v zařízeních, kterým říkáme SERVERY. Jsou to speciálně upravené počítače, které nemívají obrazovku a typicky běží nonstop. Kdokoliv může do internetu připojit vlastní server. Většinou jsou to ale drahé výkonné počítače v budovách firem. Například společnost Seznam má ve své budově server. Ten má na disku uloženou stránku www.seznam.cz. Nahrávání dat na server říkáme upload.\nKlikni na tlačítko START a podívej se, jak se objeví servery. V okně v pravém dolním rohu najdeš svůj první úkol.",
    type: "whatIsServer",
    question: "",
  },
  {
    header: "Co je KLIENT",
    content:
      "Klient je zařízení (počítač, telefon, tablet), nebo přesněji program (appka), který požaduje po serveru nějakou službu. Lze si to představit jako návštěvníka restaurace, který si objedná jídlo. Restaurace je server, který poskytuje služby (nabízí jídlo), a návštěvník je klient, který požaduje služby (objednává si jídlo). Klient v počítačové síti si může od serveru vyžádat třeba přístup k webovým stránkám, nebo může chtít poslat video, které si chce přehrát.\nKlikni na tlačítko START a podívej se, jak se objeví klienti. Stejně jako u serverů nezapomeň použít tlačítko plus a mínus, abys viděl, jak vypadá síť z větší dálky.",
    type: "whatIsClient",
    question: "",
  },
  {
    header: "Komunikace KLIENT-SERVER",
    content:
      "Už víš, že informace se ukládají na serverech. Jedná se např. o webovky uložené na web serverech, historii chatu uloženou na chat serveru, stav hry uložený na game serveru nebo emaily uložené na mail serveru. Co se tedy stane, když budeš chtít na svém počítači otevřít třeba nějakou webovou stránku?\nKlient (zde by to byl webový prohlížeč) pošle na server, kde je webová stránka uložená, balíček dat. Balíček obsahuje požadavek, který říká, co má server udělat. V našem případě žádáme server, aby nám poslal webovou stránku. Server pošle webovou stránku zpátky klientovi a klient stránku zobrazí na tvém počítači.\nObecně tedy platí, že klienti posílají na servery požadavky a servery posílají zpět klientům odpovědi.",
    type: "client-server-communication",
    question: "",
  },
  {
    header: "Putování informací",
    content:
      "V minulém úkolu jsme se dozvěděli, že klienti posílají serverům balíčky dat s požadavky. Jak vypadá putování požadavku do serveru?\nPožadavek je doručen na server podobně, jako je třeba tvému kamarádovi doručen dopis poštou. Dopis (požadavek) je naložen do poštovního auta (balíčku dat), a to jede po silnicích tak dlouho, až se dostane ke kamarádovi (do serveru). Při jízdě autem se ti ale málokdy stane, že jedeš po jedné dlouhé cestě, většinou projedeš několik křižovatek. Cesty a křižovatky najdeš i v internetové síti. Jak fungují se dozvíš v dalších úkolech.",
    type: "whatIsRoad",
    question: "",
  },
  {
    header: "Co je CESTA",
    content:
      "Zmínili jsme, že data internetem putují po cestách, aby se dostala z jednoho zařízení do druhého. Cesty mohou být bezdrátové jako WiFi nebo satelity, většinou jsou ale cesty kabely (kovové nebo optické), které jsou nejčastěji zakopané pod zemí a pod mořem.",
    type: "info",
    question: "",
  },
  {
    header: "Co je CHYTRÁ KŘIŽOVATKA",
    content:
      "Křižovatky propojují cesty pro informace. Když do křižovatky přijede po cestě balíček informací, tak ho křižovatka pošle směrem k jeho cíli. Balíček neurčí směr sám, směr určí opravdu křižovatka. Pokud nějaká cesta nefunguje, chytrá křižovatka umí najít objížďku. Nezapomeň, že cíl balíčku je vždy server nebo klient. Jsou dva hlavní typy křižovatek: ROUTER a SWITCH. Rozdíly mezi nimi ale pro nás nejsou příliš důležité.",
    type: "info",
    question: "",
  },
  {
    header: "Hezky po částech",
    content:
      "Už víme, že Internet je síť složená z routerů, serverů a nás klientů, kteří si mezi sebou posílají data (požadavky, soubory, informace...). Nyní si pojďme říct, v jaké formě se tato data přenášejí. Každá naše zpráva, fotka, či video, co se po internetu posílá, jsou před odesláním rozděleny na části. Těmto částem se říká pakety. Pakety jsou tedy malé balíčky dat obsahující část původní zprávy. Klienti posílají pakety do serverů a servery zpátky do klientů. Pakety jezdí po cestách pro informace. Poté, co je zpráva rozložena na pakety, pakety putují do cílé nezávisle na sobě. Pojďme si nyní ukázat, jak to vypadá, když bychom Aničce chtěli poslat zprávu na messenger. Klikni na tlačítko START, objeví se okno messengeru. Napiš nějakou zprávu a klikni na tlačítko odeslat.",
    type: "dataIntoPackets",
    question: "",
  },
  {
    header: "PAKET",
    content:
      "Už víme, že zpráva neputuje vcelku, ale že se po odeslání rozdělí na malé balíčky dat - pakety. Paket se vždycky naplní, co nejvíce to jde, proto je pouze poslední paket kratší, než ty ostatní . Jak ale pakety vědí, kam mají dojet? A jak vědí kam se vrátit v případě nějakých problémů? Je to podobné, jako když posíláme dopis poštou. Na obálku napíšeme naši adresu a také adresu toho, komu má být dopis doručen. V případě paketu je uvnitř uložena tzv. IP adresa. IP Adresa každého zařízení musí být unikátní. Viděli jsme, že pakety putují nezávisle na sobě. Aby bylo možné je v cíli správně seřadit, musíme do každého paketu napsat jeho pořadí. My jsme poslali pouze jednu zprávu. Po internetu se ale takových zpráv najednou posílá obrovské množství. Proto musíme zprávy (pakety) od sebe odlišit. Uložíme tedy do paketu nějaké číslo (ID). Všechny pakety, které tvoří jednu zprávu mají stejné ID.",
    type: "info",
    question: "",
  },
  {
    header: "VYTVOŘ PAKET",
    content:
      "Už víme, že každý paket v sobě nese část odeslané zprávy. Musí v něm být uložena adresa zařízení, do kterého paket míří a také adresa zařízení, ze kterého byl paket odeslán. Navíc v paketu musí být uloženo pořadí a ID, abychom v cíli zvládli zprávu poskládat do původní podoby. Pojďme si nyní zkusit rozložit zprávu na pakety. Anička poslala Honzovi přes messenger zprávu: AHOJ HONZO, JAK SE MÁŠ? Po kliknutí na tlačítko Odeslat se zpráva rozložila na tři pakety. Zkus vyplnit obsah všech tří paketů?",
    type: "createPacket",
    question: "",
  },
  {
    header: "NÁVŠTĚVA SERVERŮ",
    content:
      "Anička, Pepíček a Maruška zrovna brouzdají na internetu. Každý nedávno navštívil nějaký server. Napiš ke každému jménu adresu serveru, který osoba navštívila. Jak poznáš, kdo navštívil který server?",
    type: "findPacket",
    question: "",
  },
  {
    header: "JAK VELKÁ BUDE ZPRÁVA",
    content:
      "Už víme, že odeslaná data neputují vcelku, ale rozloží se na pakety. Klikni a tlačítko SOUBORY, otevře se ti složka s několika soubory. Poté zde v aplikaci seřaď soubory podle toho, na kolik paketů se rozloží, když je budeme chtít odeslat kamarádovi. Nahoře bude soubor který se rozloží na největší množství paketů, dole naopak soubor, který se rozloží na nejmenší množství paketů.",
    type: "sortFileSize",
    question: "",
  },
  {
    header: "KABELY",
    content: "toto jsou kabely",
    type: "whatIsCabel",
    question: "",
  },
  {
    header: "WIFI",
    content:
      "WiFi signál je běžný bezdrátový způsob přenosu dat, tedy způsob bez použití kabelu. WiFi je velmi užitečná pro zařízení jako jsou telefony a tablety, se kterými pořád chodíme sem a tam, a které proto nemohou být připojeny k internetu pomocí kabelu. Můžeme se proto připojit k internetu kdekoliv v dosahu wifi signálu. Domácí WiFi je obvykle napojena na kabel. Klikni nyní na tlačítko ZOBRAZIT WIFI.",
    type: "whatIsWiFi",
    question: "",
  },
  {
    header: "MOBILNÍ DATA",
    content:
      "Telefonní BTS věže jsou na kopcích a větších domech. Zařízení se SIM kartou se k nim můžou připojit. Rozlišujeme věže typu 4G a 5G, jejichž vlastnosti se liší jak v dosahu tak v rychlosti přenosu dat.",
    type: "whatIsBTS",
    question: "",
  },
  {
    header: "SATELIT",
    content:
      "Satelity jsou zařízení vyrobená lidmi, která jsou umístěna na oběžné dráze kolem Země. Satelitní připojení je nejméně používané, používá se na obtížně přístupných místech. Satelit jenom přeposílá data zpátky na zem - když někdo pošle signál ze Země k satelitu, antény na satelitu přijmou tento signál a přenesou ho zpět na Zemi. Satelity komunikují z oběžné dráhy.",
    type: "whatIsSatelit",
    question: "",
  },
  {
    header: "CESTA KOLEM SVĚTA",
    content:
      "Každý typ připojení má různou rychlost přenosu dat. Zvládneš přenášet data stejně rychle jako ony? Klikni na tlačítko START. Objeví se zeměkoule, okolo které se budou objevovat postupně kolečka. Tvým úkolem je na kolečka co nejrychleji klikat. Máš 20 sekund na to, abys kliknul na co největší množství koleček. Kolikrát tímto způsobem zvládneš oběhnout zeměkouli?",
    type: "raceAroundWorld",
    question: "",
  },
  {
    header: "JAK VELKÁ JE TO RYCHLOST?",
    content:
      "Už víme, že různé typy připojení mají různou rychlost přenosu dat. Rychlost se měří v Mb/s. Co si ale pod touto jednotkou máme představit? Pojďme si zahrát na posílání dat po internetu. Ty budeš zařízení, které má za úkol přeposlat text, který vidíš níže. Přepiš tento text co nejrychleji do vstupního pole. Samozřejmě při přepisování nesmíš udělat chybu, přece bychom nechtěli aby třeba WiFi poslala jinou zprávu, než jakou jsme napsali.",
    type: "typingChallenge",
    question: "",
  },
  {
    header: "OMEZENÁ VZDÁLENOST",
    content:
      "Je potřeba připojit všechny klienty v mapě k internetu. K dispozici máš 3 WiFi routery, 2 BTS věže. Vyber vždy jedno zařízení kliknutím na jeho ikonu vpravo dole. Kliknutím do mapy dané zařízení umístíš. Cílem je, aby po umístění posledního zařízení byl každý klient v dosahu alespoň jednoho zařízení. Dosah každého zařízení znázorňuje průhledné kolečko okolo daného zařízení. Zařízení tedy musíš umístit tak, aby všichni klienti byli v dosahu alespoň jednoho zařízení.",
    type: "connectClientsWireless",
    question: "",
  },
  {
    header: "JAK SE PŘIPOJIT",
    content:
      "Pojďme se ještě nyní zamyslet nad tím, jestli máme vždy možnost využít libovolný typ připojení k internetu. Níže vidíme čtyři situace z běžného života. Přetáhni do každého sloupečku, typ připojení, který by byl pro danou situaci vhodný. V jednom sloupečku může být i více možností.",
    type: "howToConnect",
    question: "",
  },
  {
    header: "IP ADRESA",
    content:
      "Před tím, než vyšleme paket na cestu, musíme mu říct, kam má dojet. Je to stejné, jako když posíláte dopis a musíte na něj napsat adresu, aby byl správně doručen. IP adresa je jako číslo, které tvoří jedinečnou adresu pro každý počítač připojený k internetu. To znamená, že pokud chcete navštívit nějakou webovou stránku, váš počítač potřebuje znát IP adresu místa, kde je stránka uložená, aby věděl, kam poslat požadavek. Tato čísla by se nám samozřejmě špatně pamatovala, proto se IP adresa překládá na lépe zapamatovatelné jméno. Existují dvě hlavní verze IP adres - IPv4 a IPv6. IPv4 se skládá ze čtyř čísel oddělených tečkami (př. 192.168.0.1.). IPv6 se skládá z osmi čísel (př. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Dokázal bys vymyslet, proč potřebujeme novější verzi IPv6? Zkus nyní zjistit, jakou IP adresu má tvůj počítač, tuto IP adresu napiš do textového pole níže.",
    type: "IPadress",
    question: "",
  },
  {
    header: "IPv4, IPv6",
    content:
      "V předchozím úkolu jsme zmínili, že existují dvě verze IP adres. Proč ale potřebujeme novější verzi IPv6? Odpověď je jednoduchá. V dnešní době máme již tolik počítačů, že je IPv4 adres prostě málo. Proto jsme vytvořili novou verzi IPv6, díky které můžeme vytvořit daleko více unikátních adres. Dokonce jich je tolik, že se nemusíme bát, že by IPv6 adresy v budoucnosti došly. Máme totiž 340 282 366 920 938 463 374 607 431 768 211 456 různých IPv6 adres, což je dost adres na to, abychom na každý mm2 po celé zemi mohli umístit více než 650 000 000 000 000 000 adres. Níže vidíš 3 sloupečky, v nich se nám pomíchaly IP adresy, zkus adresy roztřídit do správných sloupečků.",
    type: "sortIPAdresses",
    question: "",
  },
  {
    header: "NEZÁVISLÝ PAKET",
    content:
      "Pakety už znají cílovou adresu, teď je potřeba vyřešit, kudy se do cíle dostanou. Již víme, že jedna zpráva se rozloží na více paketů. Pakety ale nejedou do cíle všechny po stejné cestě, většinou putují nezávisle na sobě. V reálném světě to má řadu výhod, které si ukážeme v dalších úkolech. Nyní klikni na START. Vlevo dole máš tři pakety, které poslal klient (je na tobě, kterého si vybereš). Popiš cestu pro každý paket.",
    type: "setPathsOfPackets",
    question: "",
  },
  {
    header: "KUDY TUDY CESTIČKA",
    content:
      "V předchozím úkolu jsme určili pro každý paket jeho trasu. Trasa se ve skutečnosti nevybírá úplně náhodně, spočítá se nejrychlejší cesta a po této cestě se paket vydá Nejrychlejší cesta ale není vždycky ta nejkratší, závisí to i na vytíženosti jednotlivých cest. Můžete si to představit jako jízdu autem, občas je rychlejší udělat objížďku, protože na nejkratší cestě je zrovna zácpa. Klikni na START. V mapě se u každé cesty objeví číslo, které udává, jak dlouho po dané cestě paket pojede. Napiš do textového pole, jak dlouhá je nejkratší cesta od Aničky do serveru Messengeru.",
    type: "shortestPath",
    question: "",
  },
  {
    header: "VŠECHNY CESTY VEDOU DO ŘÍMA",
    content:
      "Už umíme spočítat délku nejkratší cesty mezi dvěma místy, zkusme nyní spočítat, kolik různých cest mezi dvěma místy existuje. Klikni na tlačítko START a zkus spočítat, kolik různých cest vede od Aničky do Messenger serveru. Počet cest napiš do textového pole. Zvládl bys přijít na to, proč je dobré, aby cest bylo více?",
    type: "countOfPaths",
    question: "",
  },
  {
    header: "PROBLÉM NA CESTĚ",
    content:
      "Klikni na tlačítko START. Objeví se okno chatu. Napiš zprávu a odešli ji. Už víme, že pakety zamíří do messenger serveru. Sleduj ale, co se po cestě stane.",
    type: "problemWithPath",
    question: "",
  },
  {
    header: "POSKLÁDÁNÍ ZPRÁVY",
    content:
      "Konečně jsme na konci naší cesty. Všechny pakety úspěšně dorazili až k příjemci. Pakety ovšem dorazili do cíle nezávisle na sobě, proto je potřeba je nyní setřídit. Poslali jsme kamarádovi fotku, fotka dorazila do cíle přeházená. Zkus nyní fotku poskládat zpět do původní podoby.",
    type: "puzzle",
    question: "Poskladej obrázek",
  },
];
