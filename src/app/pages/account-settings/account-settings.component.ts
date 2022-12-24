import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css'],
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingService: SettingsService){}


  ngOnInit(): void {
this.settingService.checkCurrentTime();
  }

  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
  }


}
