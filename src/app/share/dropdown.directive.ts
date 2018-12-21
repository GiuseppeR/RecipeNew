import { Directive, HostListener, HostBinding, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) {
    }

    @HostBinding('class.show') isOpen = false;

    parentEl: ElementRef;

    ngOnInit() {
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        this.parentEl = this.elementRef.nativeElement.querySelector('.dropdown-menu');
        if (this.isOpen) {
            this.renderer.addClass(this.parentEl, 'show');
        } else {
            this.renderer.removeClass(this.parentEl, 'show');
        }
    }
}
