function FifthChapter() {
  return (
    <>
      <h1>POSTAV SÍŤ</h1>
      <article>
        Jedná se o poslední kapitolu v této části aplikace. V rámci této
        kapitoly se žáci nenaučí žádné nové téma, jedná se pouze o sérii čtyř
        úloh, které propojují doposud získané znalosti dohromady. Proto v
        následujícím textu již nebudeme uvádět typy aktivit a jakou znalost si
        žák danou aktivitou osvojí. V každé úloze je před žáka předložen obecný
        problém a žák musí aplikovat informace, které se doposud naučil. Žák by
        měl před zahájením těchto čtyř úkolů znát základní prvky, ze kterých se
        skládá síť (server, klient, cesta, křižovatka), měl by znát princip
        komunikace mezi serverem a klientem, měl by znát základní typy připojení
        k internetu (Wi-Fi či mobilní signál) a měl by znát základní vlastnosti,
        které by měla splňovat síť (př. všechny prvky jsou vzájemně propojené
        atd.). V každé úloze musí žák postavit síť, zadání úloh se liší pouze v
        požadavcích, které musí síť splňovat. Všechny úlohy však mají společné
        následující chování. Žák má v pravé části obrazovky menu, ve kterém může
        kliknutím přidat nová zařízení do mapy. S každým zařízeními může poté v
        mapě volně pohybovat a umisťovat je na libovolnou pozici. Novou cestu
        žák vytvoří tak, že klikne na jedno zařízení a přetáhne cestu na druhé
        zařízení. V každém úkolu je žákem vytvořená síť testovaná i na obecné
        vlastnosti, které by internetová síť měla splňovat. Tyto vlastnosti
        nejsou uvedeny v zadání, jelikož se očekává, že je žák zná z předchozích
        aktivit a bude je schopen aplikovat i při řešení následujících úloh. V
        případě, že některá z vlastností není dodržena, je na to žák upozorněn
        po zmáčknutí vyhodnocovacího tlačítka v dialogovém okně. Konkrétně se
        jedná o následující vlastnosti. Všechny uzly musí být navzájem propojené
        (mezi libovolnými dvěma uzly musí vést alespoň jedna cesta). Výjimku
        tvoří pouze klienti, kteří však musí být v dosahu nějakého bezdrátového
        zařízení, cože se pozná tak, že mají nad hlavou ikonku Wi-Fi. Hrana mezi
        dvěma křižovatkami nesmí být most 68 (sekce 4.5.5) a uzel nesmí být
        artikulace (sekce 4.5.5). Cesta může spojovat pouze dvě křižovatky, nebo
        křižovatku s některým z koncových uzlů (server, BTS věž, Wi-Fi router).
        Mezi jinou dvojící zařízení nesmí cesta vést (nesmí být tedy například
        spojen server s Wi-Fi routerem). U každé ze čtyř úloh existuje velké
        množství správných řešení. Úlohy jsou navíc dostatečně otevřené na to,
        aby učiteli umožnili prostor pro vlastní rozšíření. Můžete tak žákům
        například klást doplňující podmínky, nebo diskutovat nad různými
        otázkami. Příkladem otázky může například být „Jaký nejmenší počet
        křižovatek je potřeba přidat, aby síť splňovala zadání“, nebo „Umístěte
        do mapy alespoň 5 křižovatek“, či „Vytvořte síť tak, aby paket musel po
        cestě mezi klientem a serverem navštívit minimálně tři zařízení“.
        Topologie, které žáci v rámci úkolů vytvoří, samozřejmě nebudou
        odpovídat realitě. Je ale možné s nimi vždy danou situaci probrat za
        využití jiných nástrojů. Lze využít například mapy, které vizualizují
        reálné umístění serverů, BTS věží atd. Pro zjištění počtu křižovatek na
        cestě mezi dvěma místy je možné využít příkaz tracert spuštěný v
        příkazové řádce apod. V následujících rozborech nebudeme tyto obecné
        poznámky, které jsou platné pro všechny úlohy, uvádět znovu. Bude vždy
        zmíněno zadání specifické pro konkrétní úlohu a komentář ke vzorovému
        řešení.
      </article>
      <article>
        <h1>Úkol 1</h1>
        <h2>Zadání</h2>
        <p>
          Žák má za úkol postavit síť, v rámci které bude mít uživatel přístup k
          webové stránce, která je uložená na serveru v zahraničí.
        </p>
        <h2>Řešení</h2>
        <p>
          Součástí sítě musí být alespoň jeden klient a server, to nám říká
          přímo zadání. Aby měl uživatel přístup k internetu, musí žák přidat
          alespoň jeden typ připojení (Wi-Fi router nebo BTS věž). V zadání je
          informace, že server je v jiné zemi, kvůli vzdálenosti je proto
          potřeba přidat alespoň tři křižovatky.
        </p>
      </article>
      <article>
        <h1>Úkol 2</h1>
        <h2>Zadání</h2>
        <p>
          Žák má za úkol vytvořit síť, v rámci které se bude moci uživatel
          připojit přes data a vyhledat si nějakou webovou stránku.
        </p>
        <h2>Řešení</h2>
        <p>
          Webové stránky jsou uložené na serverech, proto bude potřeba přidat
          alespoň jeden server. Přidání klienta je nutnost již ze zadání. V
          zadání je řečeno, že klient musí být připojen přes data, je tudíž
          potřeba přidat do mapy BTS věž. Aby bylo možné propojit BTS věž se
          serverem, je nutné přidat alespoň jednu chytrou křižovatku.
        </p>
      </article>
      <article>
        <h1>Úkol 3</h1>
        <h2>Zadání</h2>
        <p>
          Žák má za úkol vytvořit síť, jejíž součástí budou alespoň tři servery
          a tři klienti. Síť má být navíc odolná vůči výpadkům.
        </p>
        <h2>Řešení</h2>
        <p>
          Zde mohou být řešení skutečně velmi různá. Podle zadání však žák
          určitě musí přidat alespoň tři servery a tři klienty. Aby se klienti
          mohli připojit k internetu, je potřeba přidat alespoň jedno zařízení,
          ke kterému se klienti mohou připojit (BTS věž, nebo Wi-Fi router). Aby
          mohlo být vše propojeno, je potřeba přidat alespoň jednu chytrou
          křižovatku (byť je na pováženou, zda připojit tři servery k jedné
          křižovatce).
        </p>
      </article>
      <article>
        <h1>Samostatné stavění</h1>
        <p>
          Posledním aktivitou v této sérii úkolů je samostatné konstruování
          sítě. V této fázi již žákům nejsou dané žádné konkrétní požadavky,
          které by měla síť splňovat. Mají možnost vytvářet jakoukoliv síť bez
          jakýchkoliv omezení. Byly zde dokonce odstraněny všechny předchozí
          nutné podmínky, jako například to, že síť nesmí obsahovat mosty a že
          hrany mohou vést pouze mezi správnými dvojicemi zařízení. V důsledku
          tohoto zde není žádné hodnocení správnosti jako v předchozích úkolech.
          Na rozdíl od předchozích úkolů je zde k dispozici již částečně
          vytvořená síť, do které je možné přidávat nová zařízení. Nově je také
          možné odesílat vlastní pakety. Stačí vybrat odesílatele a příjemce ze
          seznamu dostupných a stisknout tlačítko pro odeslání. Pokud existuje
          cesta mezi vybranými zařízeními, paket bude touto cestou odeslán.
          Odesílat pakety může pouze klient připojený k internetu (zobrazena
          ikona Wi-Fi), příjemcem je server.
        </p>
      </article>
    </>
  );
}

export default FifthChapter;
