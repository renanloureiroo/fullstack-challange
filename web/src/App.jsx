import { Tweet } from "./components/Tweet";

export const App = () => {
  return (
    <>
      <Tweet
        name="Elon Musk"
        username="elonmusk"
        tweet="Começando o fullstack challenger"
      />
      <Tweet
        name="Renan Loureiro"
        username="renanloureiro"
        tweet="Já estava ansioso para o fullstack challenger"
        avatar="https://github.com/renanloureiroo.png"
      />
    </>
  );
};
