import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";


function App() {
  const [input, setInput] = useState("");
  const [translated, setTranslate] = useState("");

  const options = {
    method: "GET",
    url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
    params: {
      langpair: "en|tr",
      q: input,
      mt: "1",
      onlyprivate: "0",
      de: "a@b.c",
    },
    headers: {
      "X-RapidAPI-Host":
        "translated-mymemory---translation-memory.p.rapidapi.com",
      "X-RapidAPI-Key": "ed40c2da34msh0bc7231943c2f02p1aca41jsn756f93460fa2",
    },
  };

  const getApi = async () => {
    try {
      const response = await axios(options);
      setTranslate(response?.data?.matches[1]?.translation);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTranslate = () => {
    getApi();
  };

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div className="App">
      <div>
        <h1 style={{ color: "white" }}>Welcome to my Translate Page</h1>
      </div>

      <div className="translatepage">
        <textarea
          name="input"
          id=""
          cols="30"
          rows="10"
          placeholder="Please enter your message here!"
          className="textarea"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleTranslate} className="translatebutton">
          Translate
        </button>
        <textarea
          name="input"
          id=""
          cols="30"
          rows="10"
          className="textarea"
          value={translated}
        />
      </div>

      <div>
        <h1 style={{color: "white"}}>Translate English to Turkish</h1>
      </div>

      <Footer />

      
    </div>
  );
}

export default App;
