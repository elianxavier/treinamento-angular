import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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
