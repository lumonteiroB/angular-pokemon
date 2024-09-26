import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEscapeMouse]'
})
export class FugitiveDivDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const div = this.elementRef.nativeElement as HTMLDivElement;
    const offset = 10; // Valor de deslocamento da div em pixels

    const divRect = div.getBoundingClientRect();
    const divCenterX = divRect.left + divRect.width / 2;
    const divCenterY = divRect.top + divRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;
    

    const deltaX = mouseX - divCenterX;
    const deltaY = mouseY - divCenterY;

    // Calcula a nova posição da div
    const newLeft = divRect.left - deltaX / offset;
    const newTop = divRect.top - deltaY / offset;

    // Define a nova posição da div
    this.renderer.setStyle(div, 'left', `${newLeft}px`);
    this.renderer.setStyle(div, 'top', `${newTop}px`);
  }
}