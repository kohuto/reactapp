import BasicModal from "../../../DialogWindow/basicModal";
function WhatIsPathComponent({ info, setGame }) {
  const containerStyle = {
    width: '100%', // Šířka kontejneru je 100% rodiče
    height: '100vh', // Výška kontejneru je 100% výšky viewportu
    display: 'flex', // Použití flexboxu pro centrování
    alignItems: 'center', // Vertikální centrování
    justifyContent: 'center' // Horizontální centrování
  };

  const iframeStyle = {
    zIndex: 20
  };

  return (
    <>
      <BasicModal content={info.content} header={info.header}/>
      <div style={containerStyle}>
        <iframe 
          src="https://www.fiberatlantic.com" 
          width="600"
          height="600"
          style={iframeStyle}
          title="Embedded Webpage"
          
        >
          Omlouváme se, ale mapu nelze ve vašem prohlížeči vykreslit. Prohlédněte si mapu na tomto <a href='https://www.fiberatlantic.com'> odkazu</a>
        </iframe>
      </div>
    </>
  );
}

export default WhatIsPathComponent;