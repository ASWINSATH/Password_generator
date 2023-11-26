import React, { useState } from 'react'
import Slider from './Slider'
import {
  numberss,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Characters";
function Settings() {


  const [passleng, setPassleng] = useState();
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const handleGeneratePassword = (e) => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("You must Select atleast one option");
    }
    // console.log("helo");
    let characterList = "";
    if (passleng < 8) {
      alert("Minimum passwordlength must be 8");
    } else if (passleng > 40) {
      alert("Maximun passwordlength must be 40");
    } else {
      if (lowercase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (uppercase) {
        characterList = characterList + upperCaseLetters;
      }
      if (numbers) {
        characterList = characterList + numberss;
      }
      if (symbols) {
        characterList = characterList + specialCharacters;
      }

      setPassword(createPassword(characterList));
    }
  };

  const createPassword = (characterList) => {
    let password = "";
    const characterListLen = characterList.length;

    for (let i = 0; i < passleng; i++) {
      const characterIndex = Math.round(Math.random() * characterListLen);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const handleCopyPassword = (e) => {
    // Get the text field
    var copyText = document.getElementById("resultpass");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile device
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    alert("Copied successful : " + copyText.value);
  };

  return (
    <>
    <div className="container">
      <div className="flex">
        <div className=" items-center py-4">
          <svg
            className="icon-sm w-12 h-12 "
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
          >
            <line
              className="stroke-primary stroke-1-5"
              x1="27.3"
              y1="35"
              x2="24.6"
              y2="36.6"
            ></line>
            <line
              className="stroke-primary stroke-1-5"
              x1="32.4"
              y1="32.1"
              x2="29.3"
              y2="33.9"
            ></line>
            <line
              className="stroke-primary stroke-1-5"
              x1="37.4"
              y1="29.2"
              x2="34.3"
              y2="31"
            ></line>
            <polygon
              className="fill-blue-200 stroke-slate-400"
              points="6.5,41 12.5,37.7 12.5,17.4 31.5,7 31.5,0.5 6.5,14.4"
            ></polygon>
            <polygon
              className="fill-blue-500 stroke-blue-500"
              points="12.5,44 18.1,40.5 18.3,20.9 36.5,10.3 36.5,3.6 12.5,17.5"
            ></polygon>
            <polygon
              className="stroke-black fill-white"
              points="18.5,47.5 30.9,40 31.3,39.8 42.5,33.5 42.5,7 18.5,20.9"
            ></polygon>
            <path
              className="fill-blue-500 stroke-blue-500 "
              d="M30.2,23.6c-0.3-1.6-1.6-2.1-3.2-1.2c-1.9,1.2-3.1,3.3-3.3,5.6c0,2.1,1.5,2.9,3.3,1.9c1.6-1,2.7-2.7,3.1-4.6l4.7-2.7v1.9l1.7-1v-1.9l1.3-0.8v-1.7L30.2,23.6z M27,28.1c-0.9,0.5-1.7,0.1-1.7-1c0.1-1.2,0.7-2.2,1.7-2.9c0.9-0.5,1.7-0.1,1.7,1C28.6,26.4,28,27.5,27,28.1z"
            ></path>
          </svg>
        </div>

        <div className="pl-4">
          <h1 className="text-[#142149] font-bold text-4xl">
            Password Generator
          </h1>
          <p className="text-[#A1A5B2] pt-5">
            Generate randomized, strong, secure passwords.
          </p>
        </div>
      </div>
      <div className="result grid lg:grid-cols-7 gap-4 bg-gradient-to-r from-[#f27a8a] to-[#48091a] p-9 mt-10 rounded">
        <div className="lg:col-span-6 border bg-white rounded relative">
          <textarea
            className=" py-4 pl-6  pr-auto rounded-md  text-lg text-[#525666] outline-none lg:w-full"
            id="resultpass"
            rows="1"
            readOnly
            defaultValue={password}
          ></textarea>
          <button
            onClick={handleCopyPassword}
            className="absolute inset-y-3 right-4"
          >
            <svg
              className="icon-ui icon-ui--24  icon-ui--primary w-7 h-7 inline "
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-[#48091a]"
                d="M20.1,21.9l-14,0C5.4,22,5,21.6,5,20.9V5c0-0.7,0.4-1,1-1h14c0.5,0,1,0.6,1,1.1V21C21,21.5,20.7,21.9,20.1,21.9z M7,20h12l0-14L7,6V20z M3,19c-0.5,0-1-0.4-1-1C2,17.9,2,1.7,2,1.7C2,1.3,2.4,1,2.8,1c0,0,0,0,0,0H17c0.5,0,1,0.5,1,1c0,0.5-0.5,1-1,1L4,3v15C4,18.5,3.6,19,3,19C3.1,19,3.1,19,3,19z"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" bg-[#d5294d] hover:bg-[#961b3c] text-white  rounded flex  justify-center h-10 lg:h-16">
          {" "}
          <button
            onClick={handleGeneratePassword}
            className="font-semibold  "
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>

    <div className="container mt-10">
      <h1 className="text-[#142149] text-xl font-bold pb-4">
        Password Settings
      </h1>
      <div className="bg-[#F2F3F7] px-9 py-10  rounded-md">
        <h1 className="text-[#142149] text-lg font-bold pb-3">
          Character Set
        </h1>
        <div className="grid lg:grid-cols-3">
          <div>
            <input
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
              type="checkbox"
              id="lower"
              name="lower"
              className="w-4 h-4"
            />
            &nbsp;&nbsp;{" "}
            <span className="font-medium text-[#525666]">
              Lowercase Letters
            </span>
          </div>
          <div>
            <input
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              type="checkbox"
              id="upper"
              name="upper"
              className="w-4 h-4"
            />
            &nbsp;&nbsp;{" "}
            <span className="font-medium text-[#525666]">
              Uppercase Letters
            </span>
          </div>
          <div>
            <input
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              type="checkbox"
              id="number"
              name="number "
              className="w-4 h-4"
            />
            &nbsp;&nbsp;{" "}
            <span className="font-medium text-[#525666]">Numbers</span>
          </div>
          <div>
            <input
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              type="checkbox"
              id="symbol"
              name="symbol"
              className="w-4 h-4 lg:mt-4 "
            />
            &nbsp;&nbsp;{" "}
            <span className="font-medium text-[#525666]">Symbols</span>
          </div>
        </div>

        <h1 className="text-[#142149] text-lg font-bold pt-6 pb-3">
          Password length
        </h1>
        {/* add from Settings slider */}

        <div className="flex">
          <input
            className="py-4 px-3  w-36 text-[#525666] border border-slate-300 rounded "
            defaultValue={passleng}
            onChange={(e) => setPassleng(e.target.value)}
            
            type="number"
            id="passlength"
            name="passlength"
            min="8"
            max="40"
          />
          {/* input field onChange={(e) => setPassleng(e.target.value)} */}
          <div className=" arrow-border ml-9 rounded py-1">
            <Slider currentPassleng={passleng} updatePass={setPassleng} /> 
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Settings