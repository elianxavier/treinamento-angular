import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  settings: any;

  constructor(
    private settingsService: SettingsService
  ){}

  ngOnInit(){
    this.getSettings()
  }

  getSettings(){
    this.settingsService.getSettings().subscribe(
      (response: any) => {
        this.settings = response.data
        console.log(this.settings)
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

}
