import FlowWithProvider from "../BuildNetwork/buildNetwork";
import { useState} from "react";
import AlertDialog
 from "../../../DialogWindow/Templates/dialogWindow";
 import tutorial3 from "../../../../images/video/tutorial10.mp4"
 import tutorial1 from "../../../../images/video/tutorial11.mp4"
 import tutorial4 from "../../../../images/video/tutorial12.mp4"
 import tutorial2 from "../../../../images/video/tutorial13.mp4"

function BuildNetwork3({ info, setGame }) {
  const [introTutorial1Open, setIntroTutorial1Open] = useState(true);
  const [introTutorial2Open, setIntroTutorial2Open] = useState(false);
  const [introTutorial3Open, setIntroTutorial3Open] = useState(false);
  const [introTutorial4Open, setIntroTutorial4Open] = useState(false);

  return (<>
  {
    introTutorial1Open && (
      <AlertDialog
      content={
        <>
      <video width="320" height="240" autoPlay muted loop>
     <source src={tutorial1} type="video/mp4" />
    </video>
   <div>
    Kliknutím přidáte prvek do sítě.
   </div>
     </>
}
      closeAction={() => {setIntroTutorial1Open(false); setIntroTutorial2Open(true)}}
    />
    )
  }
  {
    introTutorial2Open && (
      <AlertDialog
      content={
        <>
      <video width="320" height="240" autoPlay muted loop>
     <source src={tutorial2} type="video/mp4" />
    </video>
   <div>
    Prvky lze přesouvat.
   </div>
     </>
}
      closeAction={() => {setIntroTutorial2Open(false); setIntroTutorial3Open(true)}}
    />
    )
  }
  {
    introTutorial3Open && (
      <AlertDialog
      content={
        <>
      <video width="320" height="240" autoPlay muted loop>
     <source src={tutorial3} type="video/mp4" />
    </video>
   <div>
    Kliknutím a přetažením vytvoříte cestu.
   </div>
     </>
}
      closeAction={() => {setIntroTutorial3Open(false); setIntroTutorial4Open(true)}}
    />
    )
  }
  {
    introTutorial4Open && (
      <AlertDialog
      content={
        <>
      <video width="320" height="240" autoPlay muted loop>
     <source src={tutorial4} type="video/mp4" />
    </video>
   <div>
    Pro smazaní klikněte na ikonu koše. <br></br> 
    Následně klikněte na prvek nebo cestu.
   </div>
     </>
}
      closeAction={() => setIntroTutorial4Open(false)}
    />
    )
  }
  <FlowWithProvider info={info} setGame={setGame} />;
  </>);
  

}

export default BuildNetwork3;
