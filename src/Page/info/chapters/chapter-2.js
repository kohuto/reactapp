function SecondChapter() {
  return (
    <>
      <article>
        <h1>KLIENTI A PAKETY</h1>
        <p>
          Klienti a pakety je druhé ze čtyř témat, která aplikace zpracovává. V
          předchozí kapitole jsme mnohokrát zmínili balíčky dat, ve kterých
          putují informace mezi odesílatelem a příjemcem. Pro balíčky zavedeme v
          úvodu kapitoly označení pakety. V navazujících aktivitách se budeme
          věnovat informacím, které v sobě pakety nesou a zaměříme se na důvody,
          proč jsou právě tyto informace v paketu obsaženy. Žák by měl před
          zahájením aktivit v této kapitole znát základní prvky, ze kterých se
          skládá počítačová síť (klient, server, chytrá křižovatka a cesta pro
          informace) a měl by znát chápat důvod, proč spolu zařízení komunikují.
        </p>
      </article>
      <article>
        <h1>Posílání dat</h1>
        <h2>Typ aktivity</h2>
        <p>Vizualizace</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>Žák se v rámci aktivity seznámí s pojmem paket.</li>
          <li>
            Žák by měl získat konkrétní představu o tom, jak paket vznikne a jak
            vypadá jeho cesta od odesílatele k příjemci.
          </li>
        </ul>
        <h2>Popis vizualizace</h2>
        <p>
          Vizualizace znázorňuje kompletní cestu, kterou absolvuje zpráva, než
          doputuje od jednoho uživatele k jinému. Žákovi se zobrazí okno chatu,
          kde do tradičního input boxu napíše, kterou následně odešle pomocí
          tlačítka pro odeslání. Poté je seznámen s tím, že zpráva nemůže být
          poslaná v celku a musí být nejdříve rozložena na pakety. Následuje
          animace, ve které jsou pakety doručeny do serveru. Až poté, co dorazí
          do serveru, jsou pakety doručeny k příjemci zprávy.
        </p>
        <h2>Poznámky</h2>
        <p>
          Před zahájením aktivity je doporučeno připomenout dřívější vizualizaci
          Komunikace klient-server. Žáci si tak propojí to, co již umí, a bude
          jim jasné, proč je zpráva nejdříve doručena na server. Následně je
          možné nastínit následující otázky: Proč se zpráva nepošle přímo
          příjemci? Kolik zpráv, videí či fotek si pošlete s kamarády? Zvládlo
          by se vše uložit do telefonu? Kde jsou tedy data uložená?
        </p>
      </article>
      <article>
        <h1>Vytvoř paket</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl v rámci aktivity pochopit, jaké informace musí být
            obsaženy v paketu.
          </li>
          <li>
            Žák by měl pochopit, proč jsou zrovna tyto informace důležité.
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák je seznámen s tím, jaké informace musí být uloženy v paketu.
          Následně je vyzván k tomu, aby vytvořil tři pakety, ve kterých bude
          odeslána zpráva "AHOJ XAVI, JAK SE MÁŠ?".
        </p>
        <h2>Řešení</h2>
        <p>
          Správně vyplněný obsah všech paketů je znázorněn níže. V aplikaci se
          držíme konvence, že obsah jednoho paketu (vyjma posledního) je 8 znaků
          z původní zprávy. Příjemce i odesílatel jsou zařízení, která mají
          přiřazenou konkrétní IP adresu. Při vyplňování těchto polí je proto
          potřeba uvést IP adresy. Pakety jsou očíslované, proto je potřeba do
          PAKET 1 umístit první část zprávy atd.
        </p>
        <div class="image vytvor-paket"></div>
      </article>
      <article>
        <h1>Najdi paket</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl v rámci aktivity aplikovat získané znalosti ohledně
            informací obsažených v paketu při řešení konkrétního problému.
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žákovi se zobrazí tři textová pole se třemi jmény. Žák má za úkol ke
          každému jménu napsat IP adresu serveru, který daná osoba v nedávné
          době navštívila. V mapě se také objevili pohybující se pakety, které
          již žák zná z předchozích aktivit. Obsah paketů může žák, stejně jako
          dříve, zobrazit tak, že na daný paket klikne.
        </p>
        <h2>Řešení</h2>
        <p>
          Správně vyplněná textová pole jsou znázorněna na obrázku níže. Žák si
          při řešení musí uvědomit několik věcí. Nejprve si musí propojit
          myšlenku ze zadání s dřívějšími znalostmi, konkrétně s tím, že
          návštěva serveru znamená, že klient musel se serverem komunikovat,
          tudíž musel poslat na server požadavek v podobě paketu. Když dojde k
          tomuto závěru, musí prozkoumat obsahy jednotlivých paketů a najít ten,
          který v sobě obsahuje IP adresu jednoho z klientů ze zadání. Druhá IP
          adresa uložená v paketu bude hledaná adresa serveru. Pozor, klient
          může být jak odesílatelem, tak příjemcem (příjemce je ve chvíli, kdy
          dostává od serveru odpověď, odesílatelem je naopak ve chvíli, kdy
          posílá na server požadavek).
        </p>
        <div class="image najdi-paket"></div>
        <h2>Poznámky</h2>
        <p>
          V případě, že žáci nevědí, jak úlohu vyřešit, doporučujeme připomenout
          předchozí aktivitu Posílání dat a Komunikace klient-server. Můžete
          žákům klást návodné otázky jako „V jaké podobě jsou na server posílané
          požadavky?“ nebo „Jak poznáme, do jakého serveru paket míří?“.
        </p>
      </article>
      <article>
        <h1>Jak velká bude zpráva</h1>
        <h2>Typ aktivity</h2>
        <p>Úkol</p>
        <h2>Co se žák naučí</h2>
        <ul>
          <li>
            Žák by měl v rámci aktivity získat konkrétní představu o tom, kolik
            paketů je potřeba pro odeslání jedné zprávy
          </li>
          <li>
            Žák by měl vědět na čem závisí počet paketů potřebných pro odeslání
            zprávy.
          </li>
        </ul>
        <h2>Zadání</h2>
        <p>
          Žák vidí čtyři soubory včetně jejich názvu a velikosti. Má za úkol
          spočítat, kolik paketů je přibližně potřeba na přenesení jednotlivých
          souborů. Žák počet zapíše do čtyř textových polí.
        </p>
        <h2>Řešení</h2>
        <p>
          Očekávané hodnoty u jednotlivých souborů jsou znázorněny na obrázku
          níže. U každého řešení jak nastavená přiměřená tolerance, není proto
          potřeba dosáhnout přesně hodnoty uvedené v řešení.
        </p>
        <div class="image jak-velka-bude-zprava"></div>
        <h2>Poznámky</h2>
        <p>
          V rámci výpočtu je dobré navázat na předchozí aktivity, ze kterých
          žáci vědí, že obsah paketu nejsou pouze užitečná data (text rozložené
          zprávy), ale také doplňující informace (ID, pořadí…). Počet paketů v
          ukázkovém řešení výše je ale spočítán pouze pro užitečná data. Reálný
          počet paketů bude vyšší. Kdyby si žák tento fakt uvědomil, bude mu
          odpověď stále uznána, jelikož je pro každou odpověď nastavená
          tolerance 50 paketů.
        </p>
      </article>
    </>
  );
}

export default SecondChapter;
