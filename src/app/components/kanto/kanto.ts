import { Component } from '@angular/core';
import { GymLeader } from '../../gym-leader.model';
import { LeaderInfo } from '../leader-info/leader-info';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, LeaderInfo],
  selector: 'app-kanto',
  standalone: true,
  styleUrl: './kanto.css',
  templateUrl: './kanto.html',
})
export class Kanto {
  selectedMonologue = '';

  kantoLeaders: GymLeader[] = [
    { name: 'Brock',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/brock.png',
      age: 15,
      badge: 'Boulder Badge',
      location: 'Pewter City',
      specialty: 'Rock-type Pokémon 🪨',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif'
      ],
      pokemonTeam: 'Geodude, Onix',
      themeColor: '#8A8881',
      motto: 'My rock-hard willpower will crush your offense! 🪨💪'
    },
    { name: 'Misty',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/misty.png',
      age: 12,
      badge: 'Cascade Badge',
      location: 'Cerulean City',
      specialty: 'Water-type Pokémon 💧',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif'
      ],
      pokemonTeam: 'Staryu, Starmie',
      themeColor: '#4A90E2',
      motto: 'My policy is an all-out offensive with Water-Type Pokemon! 💦🌊'
    },
    { name: 'Lt. Surge',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/ltsurge.png',
      age: 30,
      badge: 'Thunder Badge',
      location: 'Vermilion City',
      specialty: 'Electric-type Pokémon ⚡',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif'
      ],
      pokemonTeam: 'Voltorb, Pikachu, Raichu',
      themeColor: '#F5A623',
      motto: 'I tell you, kid, electric Pokemon saved me during the war! ⚡🪖'
    },
    { name: 'Erika',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/erika.png',
      age: 12,
      badge: 'Rainbow Badge',
      location: 'Celadon City',
      specialty: 'Grass-type Pokémon 🌿',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif'
      ],
      pokemonTeam: 'Victreebel, Tangela, Vileplume',
      themeColor: '#7ED321',
      motto: 'I am a student of flower arranging, my Pokemon are the Grass Type. 🌸🌿'
    },
    { name: 'Koga',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/koga.png',
      age: 38,
      badge: 'Soul Badge',
      location: 'Fuchsia City',
      specialty: 'Poison-type Pokémon ☠️',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif'
      ],
      pokemonTeam: 'Koffing, Muk, Weezing',
      themeColor: '#9013FE',
      motto: 'Despair to the creeping horror of Poison-type techniques! ☠️🧪'
    },
    { name: 'Sabrina',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/sabrina.png',
      age: 21,
      badge: 'Marsh Badge',
      location: 'Saffron City',
      specialty: 'Psychic-type Pokémon 🔮',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif'
      ],
      pokemonTeam: 'Kadabra, Mr. Mime, Venomoth, Alakazam',
      themeColor: '#D0021B',
      motto: 'I had a vision of your arrival, psychic power transcends all! 🔮✨'
    },
    { name: 'Blaine',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/blaine.png',
      age: 58,
      badge: 'Volcano Badge',
      location: 'Cinnabar Island',
      specialty: 'Fire-type Pokémon 🔥',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif'
      ],
      pokemonTeam: 'Growlithe, Ponyta, Rapidash, Arcanine',
      themeColor: '#E65100',
      motto: 'Hah! Better to have Burn Heal ready before challenging my fire! 🔥🌋'
    },
    { name: 'Giovanni',
      trainerImage: 'https://play.pokemonshowdown.com/sprites/trainers/giovanni.png',
      age: 42,
      badge: 'Earth Badge',
      location: 'Viridian City',
      specialty: 'Ground-type Pokémon 🌎',
      teamImages: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif'
      ],
      pokemonTeam: 'Rhyhorn, Dugtrio, Nidoqueen, Nidoking, Rhydon',
      themeColor: '#8D6E63',
      motto: 'Welcome to my hideout! You shall face the greatest Ground trainer! 🌎👊'
    }
  ];

  handleMonologue(motto :string){
    this.selectedMonologue = motto;
  }
}
