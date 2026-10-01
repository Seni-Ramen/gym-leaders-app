import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderInfo } from './leader-info';

describe('LeaderInfo', () => {
  let component: LeaderInfo;
  let fixture: ComponentFixture<LeaderInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaderInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaderInfo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('leader', {
      name: 'Brock',
      age: 15,
      badge: 'Boulder Badge',
      location: 'Pewter City',
      specialty: 'Rock',
      teamImages: [],
      themeColor: '#8A8881',
      pokemonTeam: 'Geodude, Onix',
      motto: 'Rock-hard willpower!',
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows a trainer portrait when the leader has one', async () => {
    fixture.componentRef.setInput('leader', {
      name: 'Brock',
      trainerImage: 'https://example.com/brock.gif',
      age: 15,
      badge: 'Boulder Badge',
      location: 'Pewter City',
      specialty: 'Rock',
      teamImages: [],
      themeColor: '#8A8881',
      pokemonTeam: 'Geodude, Onix',
      motto: 'Rock-hard willpower!',
    });
    await fixture.whenStable();

    const portrait = fixture.nativeElement.querySelector('.trainer-icon') as HTMLImageElement;
    expect(portrait.alt).toBe('Brock trainer portrait');
    expect(portrait.src).toBe('https://example.com/brock.gif');
  });
});
