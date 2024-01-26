/* eslint-disable react/prop-types */
import * as react from "react";

export const Pred = ({ usia, setUsia, genderType, setGenderType, nama, setNama }) => {
  const [genderList, setGenderList] = react.useState([{ text: "" }]);
  react.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/gender");
      const newData = await response.json();
      setGenderList(newData);
      // console.log(newData);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setGenderType(event.target.value);
  };
  return (
    <div className="grid" key={undefined}>
      <label className="text-center">Gender:</label>
      <select
        className="select select-bordered w-full max-w-xs items-center mx-auto m-5 text-center"
        value={genderType}
        onChange={handleChange}
      >
        <option value={""}>Pilih Gender</option>
        {genderList.map((gender) => (
          <option key={gender.text}>{gender.text}</option>
        ))}
      </select>
      <label>Usia:</label>
      <input
        type="number"
        placeholder="Type your age"
        className="input input-bordered m-5 max-w-xs w-full text-center mx-auto"
        value={usia}
        onChange={(e) => setUsia(e.target.value)}
      />
      <label>Nama:</label>
      <input
        type="text"
        placeholder="Type your name"
        className="input input-bordered m-5 max-w-xs w-full text-center mx-auto capitalize"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
    </div>
  );
};
