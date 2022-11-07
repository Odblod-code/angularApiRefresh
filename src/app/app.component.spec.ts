import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { by, element } from 'protractor';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularApiRefresh'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularApiRefresh');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angularApiRefresh app is running!');
  });

  const heroNames = ['Dr. IQ', 'Magneta', 'Bombasto'];
  const masterName = 'Master';

  it('should pass properties to children properly', async () => {
    const parent = element(by.tagName('app-hero-parent'));
    const heroes = parent.all(by.tagName('app-hero-child'));

    for (let i = 0; i < heroNames.length; i++) {
      const childTitle = await heroes.get(i).element(by.tagName('h3')).getText();
      const childDetail = await heroes.get(i).element(by.tagName('p')).getText();
      
      expect(childTitle).toEqual(heroNames[i] + 'says:')
      expect(childDetail).toContain(masterName);
    }
  })
});
