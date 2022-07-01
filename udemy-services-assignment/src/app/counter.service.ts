import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeUserActions: number = 0;
    inactiveUserActions: number = 0;

    countToActiveUser() {
        this.activeUserActions++;
    }

    countToInactiveUser() {
        this.inactiveUserActions++;
    }
}