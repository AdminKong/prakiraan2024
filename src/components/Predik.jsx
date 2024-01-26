/* eslint-disable react/prop-types */
import * as react from "react";
import { Modal } from "./modal";

export default function Predik({ usia, genderType, nama }) {
  const [data, setData] = react.useState([]);
  react.useEffect(() => {
    fetch("http://localhost:3000/tahun")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {data.map((items) => (
        <Modal
          key={items.id}
          id={items.id}
          buttonLabel={items.id}
          usia={usia}
          genderType={genderType}
          nama={nama}
        >
          <p>{items.teks}</p>
        </Modal>
      ))}
    </>
  );
}
