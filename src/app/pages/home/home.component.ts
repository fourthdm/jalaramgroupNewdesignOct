import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  scrollToSection(sectionId: string) {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // @ViewChild('counterSection') counterSections!: QueryList<ElementRef>;
  @ViewChildren('counterSection')  counterSections!: QueryList<ElementRef>;
  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;

  hasStarted = false;

  ngAfterViewInit(): void {

    setTimeout(() => {

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach(entry => {

            if (entry.isIntersecting && !this.hasStarted) {

              this.hasStarted = true;

              this.startCounter(35, 'count1', 1);
              this.startCounter(40, 'count2', 10);
              this.startCounter(750, 'count3', 5);
              this.startCounter(5000, 'count4', 1);

              observer.unobserve(entry.target);

            }

          });

        },
        {
          threshold: 0.2
        }
      );

      // SAFE CHECK
      if (this.counterSections) {

        this.counterSections.forEach(section => {

          if (section?.nativeElement) {
            observer.observe(section.nativeElement);
          }

        });

      }

    }, 300);

  }

  startCounter(
    target: number,
    variable: 'count1' | 'count2' | 'count3' | 'count4',
    speed: number
  ) {

    let interval = setInterval(() => {

      if (this[variable] < target) {
        this[variable]++;
      } else {
        clearInterval(interval);
      }

    }, speed);

  }
}
