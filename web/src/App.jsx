import { useState } from "react";
import { Avatar } from "./components/Avatar";
import { Tweet } from "./components/Tweet";

export const App = () => {
  const [text, setText] = useState("");
  const MAX_TWEET_LENGTH = 250;

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="border-b border-brand-silver p-4 space-y-6">
        <header className="flex items-center space-x-5">
          <Avatar
            image={"https://github.com/renanloureiroo.png"}
            size="small"
          />
          <h1 className="font-bold text-xl">Página inicial</h1>
        </header>

        <form className="flex flex-col text-lg ">
          <textarea
            name="text"
            value={text}
            className="bg-transparent outline-none resize-none px-12 focus:ring-2 focus:ring-brand-blue focus:p-2 rounded-sm transition-all duration-200"
            placeholder="O que está acontecendo?"
            onChange={handleText}
          />

          <div className="flex justify-end items-center space-x-4">
            <span>
              {text.length}/{" "}
              <span className="text-brand-blue">{MAX_TWEET_LENGTH}</span>
            </span>
            <button
              disabled={text.length > { MAX_TWEET_LENGTH }}
              className="bg-brand-blue rounded-full py-2 px-5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
      <div>
        <Tweet
          name="Elon Musk"
          username="elonmusk"
          children="Começando o fullstack challenger"
          verify
        />
        <Tweet
          name="Renan Loureiro"
          username="renanloureiro"
          children="Já estava ansioso para o fullstack challenger"
          avatar="https://github.com/renanloureiroo.png"
        />
      </div>
    </>
  );
};
