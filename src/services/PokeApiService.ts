import {
PokemonApiResponse,
PokemonResumo
} from "../models/Pokemon.js";

export async function buscarPokemon(
nomeOuId: string
): Promise<PokemonResumo | null> {

try {


const resposta = await fetch(
  `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
);

if (!resposta.ok) {
  console.log(
    `[ERRO] Pokémon não encontrado: ${nomeOuId}`
  );
  return null;
}

const dados: PokemonApiResponse =
  await resposta.json();

return {
  id: dados.id,
  nome: dados.name,
  tipos: dados.types.map(
    (item) => item.type.name
  ),
  altura: dados.height,
  peso: dados.weight
};


} catch {
console.log(
"[ERRO] Não foi possível buscar o Pokémon."
);


return null;


}
}
