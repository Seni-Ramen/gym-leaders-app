import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GymLeader } from '../../gym-leader.model';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-leader-info',
  standalone: true,
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})
export class LeaderInfo {
  @Input({ required: true }) leader!:GymLeader;
  @Output() selectMonologue = new EventEmitter<string>();

  showMonologue = false;

  toggleMonologue() {
    this.showMonologue = !this.showMonologue;
    this.selectMonologue.emit(this.leader.motto)
  }
}
