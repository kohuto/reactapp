function FifthChapter() {
  return (
    <>
      <article>
        <h1>POSTAV SÍŤ</h1>
        <p>
          V rámci této kapitoly se žáci nenaučí žádné nové téma, jedná se pouze
          o sérii čtyř úloh, které propojují doposud získané znalosti dohromady.
          Žák by měl před zahájením těchto čtyř úkolů znát základní prvky, ze
          kterých se skládá síť (server, klient, cesta, křižovatka), měl by znát
          princip komunikace mezi serverem a klientem, měl by znát základní typy
          připojení k internetu (Wi-Fi či mobilní signál) a měl by znát základní
          vlastnosti, které by měla splňovat síť (př. všechny prvky jsou
          vzájemně propojené nebo že síť neobsahuje mosty a artikulace). V každé
          úloze musí žák postavit síť na základě požadavků. Nové zařízení se
          přidá kliknutí do menu v pravé části obrazovky. S každým zařízeními se
          může v mapě volně pohybovat. Novou cestu žák vytvoří tak, že klikne na
          jedno zařízení a přetáhne cestu na druhé zařízení. Při ověření
          správnosti řešení se ověří i obecné vlastnosti sítě. Síť nesmí
          obsahovat mosty a artikulace, všechny uzly kromě klientů jsou
          propojené (klient je v dosahu Wi-fi nebo BTS), cesta může spojovat
          pouze dvě křižovatky, nebo křižovatku s některým z koncových uzlů
          (server, BTS věž, Wi-Fi router). Mezi jinou dvojící zařízení nesmí
          cesta vést (nesmí být tedy například spojen server s Wi-Fi routerem).
          Můžete žákům také klást doplňující podmínky, nebo diskutovat nad
          různými otázkami např. „Jaký nejmenší počet křižovatek je potřeba
          přidat, aby síť splňovala zadání“, nebo „Umístěte do mapy alespoň 5
          křižovatek“, či „Vytvořte síť tak, aby paket musel po cestě mezi
          klientem a serverem navštívit minimálně šest zařízení“. Topologie,
          které žáci v rámci úkolů vytvoří, samozřejmě nebudou odpovídat
          realitě. Je ale možné s nimi vždy danou situaci probrat za využití
          jiných nástrojů. Lze využít například mapy, které vizualizují reálné
          umístění serverů, BTS věží atd. Pro zjištění počtu křižovatek na cestě
          mezi dvěma místy je možné využít příkaz tracert spuštěný v příkazové
          řádce apod.
        </p>
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
        <div class="image ukol-1"></div>
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
        <div class="image ukol-2"></div>
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
        <div class="image ukol-3"></div>
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
