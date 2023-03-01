import { useState } from "react";

const CheckBoxes = () => {
  const [data, setData] = useState({
    items: [
      { id: 1, value: "Javascript", checked: false },
      { id: 2, value: "HTML", checked: false },
      { id: 3, value: "CSS", checked: false },
      { id: 4, value: "Java", checked: false },
    ],
    submitTime: new Date().toString(),
  });

  const submitForm = (e) => {
    e.preventDefault();
    const items = data.items.filter((obj) => obj.checked === true);
    if (items.length > 1) {
      /*window.open("https://www.google.com") 
      Using below  url as codesandbox doesnt 
      allow third party sites due to cross origin issue*/
      window.location = "https://codesandbox.io";
    } else {
      alert("Hey, select atleast two please...");
    }
  };

  const updateState = (id) => {
    const updatedItems = [...data.items];
    const itemId = updatedItems.findIndex((obj) => obj.id === id);
    updatedItems[itemId].checked = !updatedItems[itemId].checked;
    setData({
      ...data,
      items: updatedItems,
      submitTime: new Date().toString(),
    });
  };

  const { items, submitTime } = data;
  return (
    <div className="formContainer">
      <h4>Please select a Language </h4>
      <form className="ui form" onSubmit={submitForm}>
        {items.map((item, index) => (
          <div key={index}>
            <li>
              <label htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  value={item.value}
                  checked={item.checked}
                  onChange={() => updateState(item.id)}
                />{" "}
                {item.value} {item.checked}
              </label>
            </li>
          </div>
        ))}
        {/* Here I used this hidden element to send current time on each submit, we can also send any sensitive/unexposed data here. */}
        <input
          id="submitTime"
          name="submitTime"
          type="hidden"
          value={submitTime}
        />
        <input type="submit" value="Submit" className="ui button" />
      </form>
    </div>
  );
};
export default CheckBoxes;
