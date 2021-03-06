import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

    constructor() { this.visible = true; }

    private visible: boolean;

    hide(): void { this.visible = false; }

    show(): void { this.visible = true; }

    toggle(): void { this.visible = !this.visible; }

    isVisible(): boolean { return this.visible; }
}
