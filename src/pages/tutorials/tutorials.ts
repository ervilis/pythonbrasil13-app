import {
    Component
} from '@angular/core';

import {
    Platform
} from 'ionic-angular';

import { DataService } from '../../app/data.service';

@Component({
    templateUrl: 'tutorials.html'
})
export class TutorialsPage {
    tab: string = "segunda";
    schedule: object = {};

    constructor(platform: Platform, private dataService:DataService) {
        this.schedule = this.dataService.getSchedule();
    }
}