import Button from "@mui/material/Button";
function AboutApp({ setIsDocumentationMode }) {
  return (
    <div className="about-app">
      <p>
        Aplikace vznikla jako bakalářská práce Ondřeje Kohuta pod vedením Anny
        Yaghobové na MFF UK. Aplikace vizualizuje fungování internetu a díky aktivitám umožňuje lepší pochopení klíčových konceptů
        problematiky. Aplikaci může používat i ten, kdo neví o fungování internetu nic. 
      </p>
      <p>
        Aktivity jsou rozděleny do pěti kapitol. První čtyři rozebírají různá
        témata, poslední (POSTAV SÍŤ) pouze ověřuje pochopení problematiky.
      </p>
      <p>
        Kliknutím na tlačítko níže přejdete k rozboru všech úloh.
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
