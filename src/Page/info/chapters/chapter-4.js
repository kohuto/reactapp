function FourthChapter() {
  return (
    <>
      <h1>SERVERY A KŘIŽOVATKY</h1>
      <article>
        Servery a křižovatky je poslední ze čtyř témat, která aplikace
        zpracovává. Nejprve je rozebrána identifikace zařízení pomocí IP adres.
        Poté se kapitola věnuje struktuře sítě a jaký vliv má struktura na
        přenos dat. Žák by měl před zahájením aktivit v této kapitole znát
        základní prvky, ze kterých se skládá počítačová síť (klient, server,
        chytrá křižovatka a cesta pro informace) a měl by vědět, že data jsou
        přenášena v paketech po cestách určených pro přenos informací.
      </article>
      <article>
        <h1>IP adresa</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl pochopit, co je IP adresa a k čemu potřebujeme IP adresu
            při komunikaci.
          </li>
          <li>Žák by měl zjistit, jaký je rozdíl mezi IPv4 a IPv6.</li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák je nejdříve seznámen s pojmem IP adresa. Poté má za úkol zjistit,
          jakou IP adresu má přiřazeno jeho zařízení a adresu napsat do
          textového pole.
        </p>
        <h2>Řešení</h2>
        <p>
          Žák musí nejdříve libovolným způsobem zjistit svou IP adresu. To lze
          vyřešit např. tak, že do vyhledávače napíše „What is my IP“ a rovnou
          na něj vyskočí IP adresa. Druhou možností je použít libovolnou
          aplikaci určenou k tomuto účelu. Pokročilejší žáci mohou využít i
          terminál (příkaz ipconfig /all). IP adresu je poté potřeba napsat do
          textového pole. Jako správné řešení je uznána jakákoliv validní IP
          adresa (IPv4 i IPv6).
        </p>
        <div class="image ip-adresa"></div>
        <h2>Poznámky</h2>
        <p>
          Tuto aktivitu je možné zařadit už dříve. Tematicky by bylo možné téma
          probrat již na začátku kapitoly Klienti a pakety. Není to však
          potřeba.
        </p>
        <p>
          V rámci aktivity je nastíněna otázka, proč bylo potřeba zavést IPv6
          adresy. Pokud žáci sami nevymyslí odpověď, můžete je navést tím, že
          jim řeknete, že celkový počet adres je 4 294 967 296 a třeba toto
          číslo porovnat s počtem lidí na planetě 8 . Poté se zamyslete nad tím,
          kolik zařízení je součástí internetové sítě a jaký asi bude vývoj do
          budoucna. Tyto úvahy žáky mohly navést k tomu, že hrozí riziko
          nedostatku IP adres.
        </p>
      </article>
      <article>
        <h1>IPv4 a IPv6</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>Žák zjistí, proč máme více verzí IP adres.</li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Na začátku je vysvětleno, proč bylo potřeba zavést IPv6 adresy. V
          rámci jednoduchého výpočtu je ukázáno, proč nám tato verze zajistí
          dostatek IP adres v podstatě navždy. Následně má žák u několika
          konkrétních IP adres rozhodnout, zda se jedná o IPv4 nebo IPv6,
          případně jestli se nejedná o IP adresu.
        </p>
        <h2>Řešení</h2>
        <p>
          Správné řešení je znázorněno na obrázku níže. Druhá adresa je
          neplatná, protože IPv6 je tvořeno 8 čísly (pomineme-li zkratku dvojicí
          dvojteček), zde jich je pouze 5. Třetí adresa je neplatná, protože
          první číslo je 297, zatímco IPv4 tvoří čísla z intervalu 0–255.
        </p>
        <div class="image ipv4-ipv6"></div>
      </article>
      <article>
        <h1>Nejrychlejší cesta</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl pochopit, jakým způsobem se vybírá cesta, po které paket
            putuje mezi klientem a serverem.
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          V úvodu je připomenuta klíčová myšlenka, kterou by žáci měli znát z
          předchozích aktivit, tedy že cestu, kudy paket putuje, nevybírá
          samotný paket, ale je to úkol chytré křižovatky. Poté jsou zmíněné
          různé faktory, které hrají vliv ve výpočtu nejrychlejší cesty. V rámci
          úkolu má pak žák najít délku nejkratší cesty mezi klientem a serverem.
          U každé spojnice dvou zařízení je zobrazeno číslo, které nám říká, jak
          dlouho trvá danou spojnici projet.
        </p>
        <h2>Řešení</h2>
        <p>
          Nejrychlejší cesta má délku 9. Správné řešení je vyznačeno na obrázku
          níže. Výsledek demonstruje to, že nejrychlejší cesta nemusí být nutně
          ta nejkratší.
        </p>
        <div class="image nejrychlejsi-cesta"></div>
        <h2>Poznámky</h2>
        <p>
          Úloha odpovídá úloze o hledání nejkratší cesty v ohodnoceném
          neorientovaném grafu. Téma grafy je rovněž součástí nového RVP (spadá
          do kategorie data a modelování). Zde se jedná o konkrétní využití v
          praxi, je tedy možné žáky na tento fakt upozornit, či témata vzájemně
          provázat. Tato aktivita se dá rovněž propojit s algoritmizací, jelikož
          úlohu lze vyřešit pomocí Dijkstrova algoritmu.
        </p>
      </article>
      <article>
        <h1>Počet cest</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by si měl uvědomit, že mezi dvěma zařízeními může vést velké
            množství různých cest.
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák má za úkol spočítat, kolik různých cest vede klientem a serverem.
          V rámci jedné cesty nesmí žák projít dvakrát stejnou křižovatkou.
        </p>
        <h2>Řešení</h2>
        <p>
          Existuje sedm různých cest, na kterých neprojdeme dvakrát stejnou
          chytrou křižovatkou. Na obrázku níže jsou všechny cesty znázorněny 7
          různými barvami.
        </p>
        <div class="image pocet-cest"></div>
      </article>
      <article>
        <h1>Problém na cestě</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl získat představu o tom, jaké vlastnosti by měla být síť,
            aby byla odolná vůči výpadkům
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák má spočítat, jaký je minimální počet hran (kabelů), které je
          potřeba do sítě přidat, aby se síť nerozpadla při odebrání libovolné
          jedné cesty nebo zařízení (odborně řečeno: síť nesmí obsahovat mosty a
          artikulace).
        </p>
        <h2>Řešení</h2>
        <p>
          Je potřeba přidat minimálně čtyři hrany, aby síť neobsahovala mosty
          ani artikulace. Níže je vyznačeno možné řešení.
        </p>
        <div class="image problem-na-ceste"></div>
        <h2>Poznámky</h2>
        <p>
          Tuto úlohu lze propojit s tematickým celkem grafy. Rovněž doporučujeme
          zmínit libovolnou ukázku, kdy síť požadované vlastnosti neměla a jaké
          to mělo{" "}
          <a
            target="_blank"
            href="https://www.theguardian.com/world/2011/apr/06/georgian-woman-cuts-web-access"
          >
            následky
          </a>{" "}
          . Pořadí je rovněž možné prohodit, první zmínit problém a následně
          zkusit přijít na to, co mohlo být příčinou problému.
        </p>
      </article>
      <article>
        <h1>Sestavení zprávy</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by si měl uvědomit, že stejně jako text, i obrázky jsou
            rozdělené na malé části
          </li>
          <li>
            Žák by si měl připomenout, že pro zpětné sestavení zprávy je v
            paketu uvedeno pořadí
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák má za úkol sestavit zprávu (obrázek), která přišla rozkouskovaná.
          K dispozici má čísla, udávající pořadí daného kousku v původní zprávě
          (číslování je zprava doleva a shora dolů).
        </p>
        <h2>Řešení</h2>
        <p>Takto vypadá poskládaný obrázek.</p>
        <div class="image sestaveni-zpravy"></div>
        <h2>Poznámky</h2>
        <p>
          Úkol lze zařadit rovněž do kapitoly Klienti a pakety. Zde je úkol
          proto, že se jedná o ukončení celé cesty paketu.
        </p>
      </article>
    </>
  );
}

export default FourthChapter;
