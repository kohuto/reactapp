export const stockData = [
  {
    content:
      "Jistě jste někdy viděli video na YouTube nebo jste si prohlíželi fotky na Instagramu. Přemýšleli jste ale nad tím, kde jsou tyto fotky a videa uložené? Nebo kde jsou uložené webové stránky včetně této aplikace? \n Všechny informace, které najdeme na internetu, jsou uloženy v zařízeních, kterým říkáme SERVERY. SERVERY jsou většinou drahé výkonné počítače v budovách firem, které nemívají obrazovku a typicky běží nonstop. Například společnost Seznam má ve své budově SERVER, na kterém je uložená stránka www.seznam.cz. Proces nahrávání dat na SERVER označujeme jako UPLOAD.",
    type: "whatIsServer",
    hint: "Uploadněte všechny tři soubory na správný server. Upload provedete přetažením souboru na jeden ze čtyř serverů.",
    header: "SERVER",
    navigation: "INTERNET Z DÁLKY > SERVER"
  },
  {
    content:
      "KLIENT je zařízení (počítač, telefon, tablet), nebo přesněji program (appka), který požaduje po serveru službu. KLIENT v počítačové síti si může od serveru vyžádat třeba přístup k webové stráce nebo poslání videa.",
    type: "whatIsClient",
    hint: "",
    header: "KLIENT",
    navigation: "INTERNET Z DÁLKY > KLIENT"
  },
  {
    content:
      "Informace se ukládají na serverech (webovky na web servery, historie chatu na chat servery, stav hry na game servery). \n Jak se ale dostane např. webovka na váš počítač? Klient (webový prohlížeč) pošle na server, kde je webová stránka uložená, balíček dat s informací, co má server udělat. My chceme, aby server poslal webovou stránku. Server ji pošle zpátky klientovi a klient stránku zobrazí na vašem počítači.",
    type: "client-server-communication",
    hint: "Sledujte animaci, která znázorňuje komunikaci klienta a serveru. Klient posílá požadavek v balíčku dat, server pošle nazpět v jiném balíčku dat požadovanou webovou stránku. Až budete chtít, přejděte na další aktivitu pomocí šipky níže.",
    header: "KOMUNIKACE KLIENT-SERVER",
    navigation: "INTERNET Z DÁLKY > KOMUNIKACE KLIENT-SERVER"
  },
  {
    content:
      "Kudy se požadavky z minulého úkolu dostanou na server? \n Požadavek je uložen do balíčku dat, který putuje po cestách do serveru. Balíček dat projede mnoho křižovatek. Tyto CESTY a KŘIŽOVATKY jsou základními prvky internetové sítě.",
    type: "whereDataTravel",
    hint: "Takto by mohla vypadat internetová síť plná křižovatek, cest, serverů a klientů. Ve skutečné internetové síti je ale daleko více zařízení! \n Síť můžete přibližovat pomocí tlačítek +- v pravém rohu nebo kolečkem myši. Tažením můžete síť posouvat do všech stran. Až budete chtít, přejděte na další aktivitu.",
    header: "PUTOVÁNÍ INFORMACÍ",
    navigation: "INTERNET Z DÁLKY > PUTOVÁNÍ INFORMACÍ"
  },
  {
    content:
      "Aby se data dostala z jednoho zařízení do druhého, putují po CESTÁCH. CESTY mohou být bezdrátové (WiFi, satelity), většinou ale mají podobu kabelů (kovových nebo optických), které jsou nejčastěji zakopané pod zemí a pod mořem.",
    type: "whatIsPath",
    hint: "Mapa na této webové stránce zobrazuje, kudy vedou pod mořem kabely. Až budete chtít, přejděte na další aktivitu.",
    header: "CESTA",
    navigation: "INTERNET Z DÁLKY > CESTA"
  },
  {
    content:
      "KŘIŽOVATKY propojují cesty. Když do KŘIŽOVATKY přijede po cestě balíček dat, tak ho pošle směrem k jeho cíli. Balíček neurčí směr další cesty sám, směr určí chytrá KŘIŽOVATKA. Pokud nějaká cesta nefunguje, chytrá KŘIŽOVATKA najde objížďku. \n Jsou dva hlavní typy křižovatek: ROUTER a SWITCH. Rozdíl ale pro nás není důležitý.",
    type: "whatIsGateway",
    hint: "Tady zatím není žádný úkol.",
    header: "CHYTRÁ KŘIŽOVATKA",
    navigation: "INTERNET Z DÁLKY > CHYTRÁ KŘIŽOVATKA"
  },
  {
    content:
      "Internet je síť složená ze zařízení, která si posílají balíčky dat. Co jsou ale ty balíčky zač? \n Každá zpráva, video či fotka je před odesláním rozdělena na části - PAKETY. PAKETY jsou malé balíčky dat obsahující část původní zprávy. Jsou posílány po cestách mezi klienty a servery. Poté, co se zpráva rozloží, putují PAKETY do cíle nezávisle na sobě.",
    type: "dataIntoPackets",
    hint: "Co se stane se Xavierovou odpovědí po odeslání? Napište libovolnou zprávu, odešlete ji a sledujte, co se se zprávou bude dít. Zpráva musí mít minimálně 9 a maximálně 24 znaků",
    header: "POSÍLÁNÍ DAT",
    navigation: "KLIENTI A PAKETY > POSÍLÁNÍ DAT"
  },
  {
    content:
      "Zpráva je před odesláním rozložena na PAKETY. Jak se ale pozná, kam má být paket doručen? A kam má být paket vrácen v případě nějakých problémů? \n Je to podobné, jako posílání dopisu. Na obálku se napíše adresa odesílatele a příjemce. V paketu jsou uloženy tzv. IP adresy. \n Pakety putují nezávisle na sobě, proto mohou dorazit v jiném pořadí. Aby se správně seřadily, je v paketu uloženo pořadí. \n Po internetu je posíláno obrovské množství zpráv. Aby se od sebe zprávy odlišily, obsahují pakety identifikační číslo (ID). Pakety, které tvoří jednu zprávu, mají stejné ID.",
    type: "whatIsPacket",
    hint: "",
    header: "PAKET",
    navigation: "KLIENTI A PAKETY > PAKET"
  },
  {
    content:
      "Každý paket v sobě nese část odeslané zprávy. Je v něm uložená adresa zařízení, do kterého paket míří, a také adresa zařízení, ze kterého byl paket odeslán. Pakety jsou očíslované, aby mohly být v cíli správně seřazeny.",
    type: "createPacket",
    hint: "Karin (214.17.55.99) poslala Xavierovi (15.103.46.12) přes messenger zprávu: AHOJ XAVI, JAK SE MÁŠ? \n Vyplňte obsah tří paketů, na které se zpráva po odeslání rozložila. Do jednoho paketu se vejde 8 znaků z původní zprávy.",
    header: "VYTVOŘ PAKET",
    navigation: "KLIENTI A PAKETY > VYTVOŘ PAKET"
  },
  {
    content:
      "Kiara, Annika a Eustác brouzdají na internetu. Každý z nich nedávno navštívil nějaký server. Napište ke každému jménu adresu serveru, který osoba navštívila. Jak poznáš, kdo navštívil jaký server?",
    type: "findServer",
    hint: "Napište ke každému jménu adresu serveru, který osoba navštívila.",
    header: "NAJDI PAKET",
    navigation: "KLIENTI A PAKETY > NAJDI PAKET"
  },
  {
    content:
      "Data se před odesláním rozloží na pakety. Napište, na kolik paketů se rozloží každý ze 4 souborů, když se do jednoho paketu vejde 1KB dat.",
    type: "sortFileSize",
    hint: "Napište, na kolik paketů se rozloží každý ze 4 souborů (video, text, obrázek, hudba), když se do jednoho paketu vejde 1KB dat.",
    header: "JAK VELKÁ BUDE ZPRÁVA",
    navigation: "KLIENTI A PAKETY > JAK VELKÁ BUDE ZPRÁVA"
  },
  {
    content:
      "Nejvíce cest je tvořeno KABELY. Ty mohou být metalické (kovové) nebo optické. V metalických jsou data přenášena pomocí elektrických signálů, zatímco v optických pomocí světelných signálů. \n Množství posílaných dat neustále roste. V roce 2019 se poslalo za hodinu stejné množství dat, jako za celý rok 2000. Řešením jsou optické KABELY, jelikož přenáší data až 10000x větší rychlostí i na daleko větší vzdálenosti.",
    type: "whatIsCabel",
    hint: "Sledujte animaci, která znázorňuje srovnání rychlosti přenosu v optickém a metalickém kabelu. Je patrné, že data jsou optickými kabely přenášeny daleko větší rychlostí. Až budete chtít, přejděte na další aktivitu.",
    header: "KABELY",
    navigation: "TYPY PŘIPOJENÍ > KABELY"
  },
  {
    content:
      "Data mohou být přenášena i bezdrátově, tedy bez použití kabelů. Příkladem bezdrátového připojení je WIFI, což je označení pro signál, který je vysílán z WIFI ROUTERU. \n ROUTER je krabička, která je ve většině domácností. Vede z něj kabel, kterým je připojen k chytré křižovatce. Vysílá WIFI SIGNÁL k zařízením (počítače, telefony), která posílají data pomocí WIFI SIGNÁLU zpět k ROUTERU. Ten data pošle kabelem do chytré křižovatky. \n Po zavření okna zapojte WIFI ROUTER.",
    type: "whatIsWiFi",
    hint: "Zapojte wifi router. První je potřeba router přetažením zapojit do zásuvky. Následně je potřeba ho zapnout. Poté zbývá router přetažením propojit s chytrou křižovatkou a připojit ho tak ke zbytku internetu.",
    header: "WIFI",
    navigation: "TYPY PŘIPOJENÍ > WIFI"
  },
  {
    content:
      "Bezdrátovým připojením je také MOBILNÍ SIGNÁL vysílaný BTS VĚŽEMI. Princip je podobný jako u WIFI, jsou to však různé signály. \n BTS VĚŽE jsou většinou na kopcích nebo vyšších domech a kabelem jsou připojeny k chytré křižovatce. Vysílají signál, který mohou využít pro přenos dat (či telefonních hovorů) zařízení se SIM kartou (většinou mobily). VĚŽ vyšle signál, pomocí kterého pošle zařízení data zpět k BTS VĚŽI. VĚŽ pošle data kabelem do chytré křižovatky. \n Rozlišujeme věže typu 4G a 5G, které se liší jak v dosahu signálu, tak v rychlosti přenosu dat.",
    type: "whatIsBTS",
    hint: "Sledujte animaci, která znázorňuje, jak jsou přenášena data pomocí BTS věže. Až budete chtít, přejděte na další aktivitu.",
    header: "MOBILNÍ DATA",
    navigation: "TYPY PŘIPOJENÍ > MOBILNÍ DATA"
  },
  {
    content:
      "Satelity jsou zařízení umístěna na oběžné dráze okolo Země. \n Satelitní připojení je nejméně používané, používají ho zařízení na obtížně přístupných místech. Když někdo pošle signál ze Země k satelitu, antény na satelitu signál zachytí a odrazí ho zpět na Zemi.",
    type: "whatIsSatelit",
    hint: "Sledujte animaci, která znázorňuje, jak jsou přenášena data pomocí satelitu. Až budete chtít, přejděte na další aktivitu.",
    header: "SATELIT",
    navigation: "TYPY PŘIPOJENÍ > SATELIT"
  },
  {
    content:
      "Co znamená, že je internet rychlý nebo pomalý? \n Rychlost internetu má dva aspekty - DOBU ODEZVY a ŠÍŘKU PÁSMA. DOBA ODEZVY nám říká, jak dlouho trvá paketu, než dorazí od odesílatele k příjemci. Čím je vyšší, tím déle trvá, než je paket doručen. To může být ovlivněno třeba přetížením křižovatek, nebo posíláním přes satelit. \n Malá DOBA ODEZVY je potřeba při hraní her, nebo při online hovoru. Velká doba odezvy totiž způsobí zasekávání online hry. U hovoru způsobí, že člověk na druhém konci slyší s několika sekundovým zpožděním.",
    type: "raceAroundWorld",
    hint: "Naklikejte co nejrychleji cestu od klienta až do serveru. Kliknutím na klienta se spustí stopky, poté postupně klikejte na všechny chytré křižovatky po cestě. Kliknutím na server se stopky zastaví.",
    header: "DOBA ODEZVY",
    navigation: "TYPY PŘIPOJENÍ > DOBA ODEZVY"
  },
  {
    content:
      "Druhý aspekt rychlosti je ŠÍŘKA PÁSMA. \n Posílání dat si lze představit jako vodu, která teče potrubím. Pak by rychlost vody v potrubí byla DOBA ODEZVY. \n Šířka potrubí (kolik vody najednou může protéct) by byla ŠÍŘKA PÁSMA. ŠÍŘKA PÁSMA udává, kolik dat lze po cestě najednou poslat. \n Například při stahování videa je potřeba větší šířka pásma, protože se přenáší velké množství dat najednou. \n Šířka pásma se měří v Mb/s (kolik Mb dat přeneseš za sekundu).",
    type: "typingChallenge",
    hint: "Klikněte na START. Poté klikněte do textového pole a za 10 sekund opište co nejvíce znaků z šedého obdélníku. Při přepisování však nesmíte udělat žádnou chybu.",
    header: "ŠÍŘKA PÁSMA",
    navigation: "TYPY PŘIPOJENÍ > ŠÍŘKA PÁSMA"
  },
  {
    content:
      "Připojte všechny klienty k internetu pomocí dvou WiFi routerů a dvou BTS věží. Zařízení přidejte kliknutím na jeho ikonu v nabídce, poté jej můžete libovolně přemisťovat. Každý klient musí být v dosahu alespoň jednoho zařízení. Klient je v dosahu zařízení, když má nad sebou ikonu wifi.",
    type: "connectClientsWireless",
    hint: "Připojte všechny klienty k internetu pomocí dvou WiFi routerů a dvou BTS věží. Zařízení přidejte kliknutím na jeho ikonu v nabídce, poté jej můžete libovolně přemisťovat. Každý klient musí být v dosahu alespoň jednoho zařízení. Klient je v dosahu zařízení, když má nad sebou ikonu wifi.",
    header: "OMEZENÁ VZDÁLENOST",
    navigation: "TYPY PŘIPOJENÍ > OMEZENÁ VZDÁLENOST"
  },
  {
    content:
      "Ne vždy lze použít libovolný typ připojení. Zaškrtněte pro každou ze čtyř situací, jaký typ připojení je vhodný. V jednom sloupečku může být i více možností.",
    type: "howToConnect",
    hint: "Zaškrtněte pro každou ze čtyř situací, jaký typ připojení je vhodný. V jednom sloupečku může být i více možností.",
    header: "JAK SE PŘIPOJIT",
    navigation: "TYPY PŘIPOJENÍ > JAK SE PŘIPOJIT"
  },
  {
    content:
      "Stejně jako při posílání dopisu i v paketu musí být uložená cílová adresa. Těmto adresám říkáme IP ADRESY. \n Před otevřením webové stránky, musí počítač zjistit IP ADRESU serveru, kde je stránka uložená, aby věděl, kam poslat požadavek. \n Existují dvě hlavní verze IP ADRES - IPv4 a IPv6. IPv4 se skládá ze čtyř čísel v rozsahu 0-255 oddělených tečkou (př. 192.168.0.255). IPv6 se skládá z osmi čísel (př. 2001:0db8:85a3:0000:0000:8a2e:0370:7334).",
    type: "IPadress",
    hint: "Napište do textového pole, jakou IP adresu má váš počítač. Tuto informaci lze najít třeba na internetu.",
    header: "IPV4, IPV6",
    navigation: "SERVERY A KŘIŽOVATKY > IPV4, IPV6"
  },
  {
    content:
      "Novější IPv6 adresy vznikly, protože IPv4 adres začal být nedostatek. Existuje 340 282 366 920 938 463 374 607 431 768 211 456 různých IPv6 adres, což je dost na to, abychom na každý mm2 po celé zemi mohli umístit více než 650 000 000 000 000 000 adres.",
    type: "sortIPAdresses",
    hint: "Pro každou z adres určete, jestli se jedná o IPv4, IPv6 nebo o neplatnou IP adresu.",
    header: "IP ADRESA",
    navigation: "SERVERY A KŘIŽOVATKY > IP ADRESA"
  },
  {
    content:
    "Paket cestu od odesílatele k příjemci nevybírá sám. Trasu určí chytrá křižovatka, která vybere nejrychlejší cestu, po které paket pošle. Nejrychlejší cesta ale není vždycky ta nejkratší, závisí to i na vytíženosti jednotlivých cest. Při jízdě autem je také občas rychlejší udělat objížďku, protože na nejkratší cestě je zrovna zácpa.",
    type: "shortestPath",
    hint: "Číslo u cesty udává, jak dlouho po dané cestě paket pojede. Do textového pole napište, jak dlouho pojede paket nejrychlejší cestou od klienta do serveru.",
    header: "NEJRYCHLEJŠÍ CESTA",
    navigation: "SERVERY A KŘIŽOVATKY > NEJRYCHLEJŠÍ CESTA"
  },
  {
    content:
      "Je dobré, aby mezi dvěma místy vedlo velké množství různých cest. Kdyby se některá z křižovatek nebo cest poškodila, paket může do cíle dorazit náhradní cestou",
    type: "countOfPaths",
    hint: "Spočítejte, po kolika různých cestách může putovat paket od klienta do serveru. Paket nesmí projet dvakrát stejnou chytrou křižovatkou.",
    header: "POČET CEST",
    navigation: "SERVERY A KŘIŽOVATKY > POČET CEST"
  },
  {
    content:
      "Když mezi dvěma místy existuje pouze jedna trasa, tak nám hrozí, že když se některá z cest či zařízení poškodí, pakety se nebudou mít kudy dostat do cíle. Proto je dobré, aby mezi dvěma místy vedlo několik různých tras.",
    type: "problemWithPath",
    hint: "Kabel spojující křižovatky 10.5.112.134 a 174.175.243.159 byl poškozen, což vedlo k rozpadu internetové sítě na dvě části. Kolik dalších spojení bychom museli nyní minimálně přidat do sítě, abychom předešli tomu, že by se síť znovu rozpadla na dvě části po odstranění jedné libovolné cesty nebo křižovatky?",
    header: "PROBLÉM NA CESTĚ",
    navigation: "SERVERY A KŘIŽOVATKY > PROBLÉM NA CESTĚ"
  },
  {
    content:
      "Když zpráva dorazí do cíle je potřeba ji sestavit zpět do původní podoby. Před odesláním je totiž rozložena na několik paketů, které pak do cíle putují nezávisle na sobě. Ke zpětnému sestavení slouží čísla na paketech, která udávají původní pořadí.",
    type: "puzzle",
    hint: "Klientovi přišla v paketech fotka. Poskládejte fotku zpět do původní podoby. Pomůžou vám čísla, která udávají pořadí paketů.",
    header: "SESTAVENÍ ZPRÁVY",
    navigation: "SERVERY A KŘIŽOVATKY > SESTAVENÍ ZPRÁVY"
  },
  {
    content:
      "Vytvořte síť, aby měl uživatel přístup z domova k webové stránce uložené na serveru v cizí zemi.",
    type: "build-network-1",
    hint: "Vytvořte síť, aby měl uživatel přístup z domova k webové stránce uložené na serveru v cizí zemi.",
  },
  {
    content:
      "Vytvořte takovou síť, aby se uživatel mohl připojit přes data a vyhledat si nějakou webovou stránku. ",
    type: "build-network-2",
    hint: "Vytvořte takovou síť, aby se uživatel mohl připojit přes data a vyhledat si nějakou webovou stránku.",
  },
  {
    content:
      "Vytvořte síť routerů mezi 3 klienty a 3 servery, která bude odolná vůči výpadkům a zahlcením.",
    type: "build-network-3",
    hint: "Vytvořte síť routerů mezi 3 klienty a 3 servery, která bude odolná vůči výpadkům a zahlcením.",
  },
  /*{
    content: "Postavte si jakoukoliv síť bez omezení.",
    type: "build-own-network",
    hint: "Pro přidání zařízení do sítě klikněte na jeho ikonu v pravé části obrazovky. Jakmile je zařízení přidáno, můžete ho v rámci sítě přesouvat. Chcete-li vytvořit spojení mezi zařízeními, klikněte na jedno zařízení a táhněte kurzorem k druhému zařízení. Pokud potřebujete nějaké zařízení nebo cestu mezi zařízeními odstranit, klikněte na ikonu koše v dolní části obrazovky a následně klikněte na zařízení nebo cestu, kterou chcete odstranit. Vlevo dole pošlete paket. Vyberte IP adresu odesílatele a příjemce a odešlete. Odesílatel je klient, který je v dosahu WiFi nebo BTS věže - má nad sebou ikonu WiFi.",
  },*/
];
