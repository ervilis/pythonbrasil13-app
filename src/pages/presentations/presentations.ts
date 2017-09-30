import {
    Component
} from '@angular/core';

import {
    Platform
} from 'ionic-angular';

import { DataService } from '../../app/data.service';

@Component({
    templateUrl: 'presentations.html'
})
export class PresentationsPage {
    tab: string = "sexta";
    schedule: object = {};

    constructor(platform: Platform, private dataService:DataService) {
        this.schedule = this.dataService.getSchedule();
    }
}