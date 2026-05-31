"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PokeApiService_js_1 = require("./services/PokeApiService.js");
const Pokemon_js_1 = require("./models/Pokemon.js");
async function main() {
    const catalogo = new Pokemon_js_1.CatalogoPokemon();
    const pikachu = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (pikachu) {
        catalogo.adicionar(pikachu);
    }
    const charmander = await (0, PokeApiService_js_1.buscarPokemon)("charmander");
    if (charmander) {
        catalogo.adicionar(charmander);
    }
    const duplicado = await (0, PokeApiService_js_1.buscarPokemon)("pikachu");
    if (duplicado) {
        catalogo.adicionar(duplicado);
    }
    await (0, PokeApiService_js_1.buscarPokemon)("pokemon-inexistente");
    console.log("\nCATÁLOGO:");
    catalogo.listar();
    catalogo.remover(25);
    console.log("\nCATÁLOGO APÓS REMOÇÃO:");
    catalogo.listar();
}
main();
