import Button from "@mui/material/Button";
function AboutApp({ setIsDocumentationMode }) {
  return (
    <div className="about-app">
      <p>
        Aplikace vznikla jako bakalářská práce Ondřeje Kohuta pod vedením Anny
        Yaghobové na MFF UK. Aplikace vizualizuje fungování internetu a formou
        interaktivních úkolů umožňuje lepší pochopení klíčových konceptů
        problematiky. Obsah aplikace je koncipován tak, aby šla použít jak ve
        výuce, tak při samostudiu.
      </p>
      <p>
        Aktivity jsou rozděleny do pěti kapitol. První čtyři rozebírají různá
        témata, poslední (POSTAV SÍŤ) pouze ověřuje pochopení problematiky. U
        každé aktivity najdete v levém horním rohu rozbalovací nabídku, ve které
        naleznete zadání daného úkolu, tlačítko pro přechod k další aktivitě a
        tlačítko pro návrat zpět do menu.
      </p>
      <p>
        Kliknutím na tlačítko níže přejdete k rozboru všech úloh, který krom
        řešení obsahuje rozšiřující poznámky jako témata pro další diskuzi,
        návrhy rozšiřujících aktivit apod.
      </p>
      <Button
        variant="outlined"
        onClick={() => {
          setIsDocumentationMode(true);
        }}
      >
        ROZBOR ÚLOH
      </Button>
    </div>
  );
}

export default AboutApp;
