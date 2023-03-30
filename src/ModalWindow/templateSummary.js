function SummaryTemplate({ data }) {
  const learningOutcomes = data.learningOutcomes;
  const prerequisites = data.prerequsities;
  const List = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  return (
    <>
      <div className="summary-content">
        <p>{data.chapterSummary}</p>
        <div className="summary-prerequisities">
          <div className="column">
            <h2>CO UŽ UMÍME</h2>
            <List items={prerequisites} />
          </div>
          <div className="column">
            <h2>CO SE NAUČÍME</h2>
            <List items={learningOutcomes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryTemplate;
