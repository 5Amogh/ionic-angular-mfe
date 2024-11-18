import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, IonButton, IonToolbar, IonTitle, IonHeader, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'ionic-angular-mfe';
  constructor(private router: Router){
    (window as any).AngularRouter = router;
    (window as any).AngularState = {
      state:'Karnataka',
      district:'Bengaluru'
    }
    localStorage.setItem('Elevate','project')
  }
}
