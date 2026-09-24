import { Injectable, Service, signal } from '@angular/core';

@Service()
export class TrainerService {
    private registry = signal([
        {
            name: 'Roxanne',
            badge: 'Stone Badge',
            pokemonTeam: 'Geodude, Nosepass',
            town: 'Rustboro City',
            specialty: 'Rock-type Pokémon 🪨'
        },
        {
            name: 'Brawly',
            badge: 'Knuckle Badge',
            pokemonTeam: 'Machop, Meditite',
            town: 'Dewford Town',
            specialty: 'Fighting-type Pokémon 🥊'
        },
        {
            name: 'Wattson',
            badge: 'Dynamo Badge',
            pokemonTeam: 'Voltorb, Electrike, Manectric',
            town: 'Mauville City',
            specialty: 'Electric-type Pokémon ⚡'
        },
        {
            name: 'Flannery',
            badge: 'Heat Badge',
            pokemonTeam: 'Slugma, Numel, Camerupt',
            town: 'Lavaridge Town',
            specialty: 'Fire-type Pokémon 🔥'
        },
        {
            name: 'Norman',
            badge: 'Balance Badge',
            pokemonTeam: 'Spinda, Vigoroth, Slaking',
            town: 'Petalburg City',
            specialty: 'Normal-type Pokémon ⭐'
        },
        {
            name: 'Winona',
            badge: 'Feather Badge',
            pokemonTeam: 'Swellow, Pelipper, Skarmory, Altaria',
            town: 'Fortree City',
            specialty: 'Flying-type Pokémon 🪽'
        },
        {
            name: 'Tate & Liza',
            badge: 'Mind Badge',
            pokemonTeam: 'Lunatone, Solrock',
            town: 'Mossdeep City',
            specialty: 'Psychic-type Pokémon 🔮'
        },
        {
            name: 'Wallace',
            badge: 'Rain Badge',
            pokemonTeam: 'Luvdisc, Whiscash, Milotic',
            town: 'Sootopolis City',
            specialty: 'Water-type Pokémon 💧'
        }
    ])

    trainers = this.registry.asReadonly();
}
