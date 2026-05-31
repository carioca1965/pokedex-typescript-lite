import { buscarPokemon }
from "./services/PokeApiService.js";

import { CatalogoPokemon }
from "./models/Pokemon.js";

async function main() {

const catalogo =
new CatalogoPokemon();

const pikachu =
await buscarPokemon("pikachu");

if (pikachu) {
catalogo.adicionar(pikachu);
}

const charmander =
await buscarPokemon("charmander");

if (charmander) {
catalogo.adicionar(charmander);
}

const duplicado =
await buscarPokemon("pikachu");

if (duplicado) {
catalogo.adicionar(duplicado);
}

await buscarPokemon(
"pokemon-inexistente"
);

console.log("\nCATÁLOGO:");

catalogo.listar();

catalogo.remover(25);

console.log(
"\nCATÁLOGO APÓS REMOÇÃO:"
);

catalogo.listar();
}

main();
