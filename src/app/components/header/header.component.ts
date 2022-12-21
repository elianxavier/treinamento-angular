import { Component } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
import { PagesService } from "src/app/services/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  settings: any;
  pages: any;
  constructor(
    private settingsService: SettingsService,
    private pagesService: PagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSettings();
    this.getPages();
  }

  getSettings() {
    this.settingsService.getSettings().subscribe(
      (response: any) => {
        this.settings = response.data;
        console.log(this.settings);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getPages() {
    this.pagesService.getPages().subscribe(
      (response: any) => {
        this.pages = response.data;
        console.log(this.pages);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  navigateSection(page: any) {
    this.router.navigate(["/cnn", { page: page }]).then(() => {
      location.reload();
    });
  }
}
