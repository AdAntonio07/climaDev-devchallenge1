import { useState, useEffect } from "react";

import InputComSugestao from "../form/inputComSugestão/InputComSugestao";

export default function PesquisarCidade(props) {
  const [pesquisarTexto, setPesquisarTexto] = useState("");
  const [sugestoes, setSugestoes] = useState([]);

  const buscaListaDeCidades = async () => {
    const LIMITE_CIDADES = 5;
    const resposta = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${pesquisarTexto}&limit=${LIMITE_CIDADES}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`
    );
    const json = await resposta.json();
    lidarComLista(json);
  };

  const lidarComLista = (list) => {
    const listaFormatada = list.map((obj) => ({
      text: `${obj.name}, ${obj.state}, ${obj.country}`,
      onClick: () => console.log(`LAT: ${obj.lat} LON: ${obj.lon}`),
    }));
    setSugestoes(listaFormatada);
  };

  useEffect(() => {
    if (pesquisarTexto.length >= 3) buscaListaDeCidades();
    else setSugestoes([]);
  }, [pesquisarTexto]);

  return (
    <InputComSugestao
      placeholder="Digite o nome da cidade"
      value={pesquisarTexto}
      onChange={(event) => setPesquisarTexto(event.target.value)}
      sugestoes={sugestoes}
    />
  );
}
