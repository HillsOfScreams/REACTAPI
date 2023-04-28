import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

const RandomCountry = () => {
  const [message, setMessage] = useState("");
  const [saveInput, setSaveInput] = useState("");

  const [data, setData] = useState([]);

  const fetchApi = async () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    if (data.length === 0) {
      fetchApi();
    }
  }, [data]);
  console.log(data);

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);
  };

  const InputField = ({ label, onSubmit }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(value);
    };

    const handleInputChange = (event) => {
      setValue(event.target.value);
    };
    const keepScore = () => {
      const highScore = 0;
      const score = 0;
      const rightAwnser = false;
    };
    return (
      <div id="inputSearchCheck">
        test
        <form onSubmit={handleSubmit}>
          <label>{label}</label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <button onClick={() => getRandomCountry()}>
            Pick a random country
          </button>
        </div>
      </div>
    );
  };
  //idee: API geeft country terug. Coords van land worden opgehaald, land word andere kleur op kaart. (met coords kan je andere color geven). je moet de hoofdstad van dit land raden.
  // als je het goed hebt, gaat er een streak met 1 omhoog. als je er 1 fout hebt, reset de counter. de hoogste score word ook bijgehouden.
  //probleem: de return word niet gedisplayed, en ik heb geen idee waarom.
};
export default RandomCountry;
