import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailMenuComponent } from './cocktail-menu.component';

describe('CocktailMenuComponent', () => {
  let component: CocktailMenuComponent;
  let fixture: ComponentFixture<CocktailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
