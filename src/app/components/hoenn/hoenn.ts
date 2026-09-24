import { Component,inject } from '@angular/core';
import { TrainerService } from '../../trainer-service';

@Component({
  imports: [],
  selector: 'app-hoenn',
  standalone: true,
  styleUrl: './hoenn.css',
  templateUrl: './hoenn.html',
})
export class Hoenn {
  trainerService = inject(TrainerService);
}
