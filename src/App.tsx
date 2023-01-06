import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";

function App() {
  const [question, setQestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  //Combien est payé un développeur frontend avec 3ans d'experience au Canada ?

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!question) return null;
    setIsLoading(true);
    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GPT_SECRET_KEY}`,
      },
      body: JSON.stringify({
        prompt: question,
        max_tokens: 2000,
        model: "text-davinci-003",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data?.choices[0]?.text);
        setQestion("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setQestion(event.target.value);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="headings">
            <h1>Lawler Chat</h1>
            <p>
              This Chatbot is based ofChatGPT. Hope this bot will help on answering day to day questions so that we can spend quality time with our teachers in class.)
            </p>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="headings">
          <h2> type your question ?</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              onChange={(event) => handleChange(event)}
              placeholder="What are different ancient civilizations? and how old is India's civilization?"
            />
            <button
              disabled={!question || isLoading ? true : false}
              aria-busy={isLoading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {error && (
        <div className="container">
          <div className="container alert-error">{error}</div>
        </div>
      )}

      {response && (
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: response }}
        />
      )}
    </>
  );
}

export default App;
