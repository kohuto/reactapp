import { stockData } from "./dataSummary";

function SummaryTemplate({ summaryID }) {
  const learningOutcomes = stockData[summaryID].learningOutcomes;
  const prerequisites = stockData[summaryID].prerequsities;
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
        <p>{stockData[summaryID].chapterSummary}</p>
        <div className="column">
          <h2>CO UŽ UMÍME</h2>
          <List items={prerequisites} />
        </div>
        <div className="column">
          <h2>CO SE NAUČÍME</h2>
          <List items={learningOutcomes} />
        </div>
      </div>
    </>
  );
}

export default SummaryTemplate;
