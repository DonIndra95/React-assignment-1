function Radio({ currentRadioValue, setCurrentRadioValue }) {
  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };

  return (
    <>
      <div>
        <input
          id="radio-item-1"
          name="radio-item-1"
          type="radio"
          value="Male"
          onChange={handleRadioChange}
          checked={currentRadioValue === "Male"}
        />
        <label htmlFor="radio-item-1">Male</label>
      </div>
      <div>
        <input
          id="radio-item-2"
          name="radio-item-2"
          type="radio"
          value="Female"
          onChange={handleRadioChange}
          checked={currentRadioValue === "Female"}
        />
        <label htmlFor="radio-item-2">Female</label>
      </div>
    </>
  );
}
export default Radio;
