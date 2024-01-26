import { Pred } from "./components/Pred";
import Predik from "./components/Predik";
import * as react from "react";

function App() {
  const [genderType, setGenderType] = react.useState("");
  const [usia, setUsia] = react.useState("");
  const [nama, setNama] = react.useState("")
  return (
    <>
      <div className="grid max-w-[50%] mx-auto w-full text-center">
        <h1 className="text-2xl font-bold text-center">Prakiraan Tahun 2024</h1>
        <Pred
          genderType={genderType}
          setGenderType={setGenderType}
          usia={usia}
          setUsia={setUsia}
          nama={nama}
          setNama={setNama}
        />
        <div className="flex justify-center flex-row flex-wrap lg:items-stretch my-5 max-w-xs mx-auto ">
          <Predik 
          genderType={genderType} 
          usia={usia} 
          key={undefined}
          nama={nama}/>
        </div>
      </div>
    </>
  );
}

export default App;
