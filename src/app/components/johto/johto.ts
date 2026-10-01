import { Component } from '@angular/core';
import { GymLeader } from '../../gym-leader.model';
import { CommonModule } from '@angular/common';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [CommonModule, LeaderInfo],
  selector: 'app-johto',
  standalone: true,
  styleUrl: './johto.css',
  templateUrl: './johto.html',
})
export class Johto {
  selectedMonologue = '';

  johtoLeaders: GymLeader[] = [
    { name: 'Falkner',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/falkner.png',
      age: 18,
      badge: 'Zephyr Badge',
      location: 'Violet City',
      specialty: 'Flying-type Pokémon 🪽',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif'
      ],
      pokemonTeam: 'Pidgey, Pidegeotto, Pidgeot',
      themeColor: '#5C6BC0',
      motto: 'I show you the true power of the magnificent bird Pokemon! 🦅'
    },
    { name: 'Bugsy',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/bugsy.png',
      age: 12,
      badge: 'Hive Badge',
      location: 'Azalea Town',
      specialty: 'Bug-type Pokémon 🐛',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif'
      ],
      pokemonTeam: 'Metapod, Kakuna, Scyther',
      themeColor: '#689F38',
      motto: 'I never lose when it comes to Bug-type Pokemon 🐞'
    },
    { name: 'Whitney',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/whitney.png',
      age: 16,
      badge: 'Plain Badge',
      location: 'Goldenrod City',
      specialty: 'Normal-type Pokémon ⭐',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/241.gif'
      ],
      pokemonTeam: 'Clefairy, Miltank',
      themeColor: '#EC407A',
      motto: 'Everyone was into Pokemon, so I got into it too! They are super cute 💕'
    },
    { name: 'Morty',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/morty.png',
      age: 25,
      badge: 'Fog Badge',
      location: 'Ecruteak City',
      specialty: 'Ghost-type Pokémon 👻',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif'
      ],
      pokemonTeam: 'Gastly, Haunter, Gengar',
      themeColor: '#512DA8',
      motto: 'I have had training alongside ghost Pokemon all my life! 👻🔮',
    },
    { name: 'Chuck',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/chuck.png',
      age: 36,
      badge: 'Storm Badge',
      location: 'Cianwood City',
      specialty: 'Fighting-type Pokémon 🥊',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif'
      ],
      pokemonTeam: 'Primeape, Poliwrath',
      themeColor: '#D32F2F',
      motto: 'We pound our bodies with fierce waterfalls every day to grow tough 💪🌊'
    },
    { name: 'Jasmine',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/jasmine.png',
      age: 17,
      badge: 'Mineral Badge',
      location: 'Olivine City',
      specialty: 'Steel-type Pokémon ⚙️',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/208.gif'
      ],
      pokemonTeam: 'Magnemite, Steelix',
      themeColor: '#78909C',
      motto: 'Steel-type Pokemon are brand new, clad in cold steel armor! 🛡️⚙️',
    },
    { name: 'Pryce',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/pryce.png',
      age: 65,
      badge: 'Glacier Badge',
      location: 'Mahogany Town',
      specialty: 'Ice-type Pokémon ❄️',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/221.gif'
      ],
      pokemonTeam: 'Seel, Dewgong, Piloswine',
      themeColor: '#00ACC1',
      motto: 'To endure bitter winter winds, one must train alongside solid ice! ❄️⛄'
    },
    { name: 'Clair',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/clair.png',
      age: 22,
      badge: 'Rising Badge',
      location: 'Blackthorn City',
      specialty: 'Dragon-type Pokémon 🐉',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/230.gif'
      ],
      pokemonTeam: 'Dragonair, Kingdra',
      themeColor: '#1E88E5',
      motto: 'I am the ultimate master of Dragon Pokemon, and I never concede defeat! 🐉👑'
    }
  ];

  handleMonologue(motto: string) {
    this.selectedMonologue = motto
  }
}
