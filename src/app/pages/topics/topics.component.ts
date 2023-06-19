import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  ngOnInit() {
    /**
     * Add event listener on multiple elements
     */
  
    const addEventOnElements = function(elements: NodeListOf<Element>, eventType: string, callback: EventListenerOrEventListenerObject) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }
  
    /**
     * MOBILE NAVBAR TOGGLER
     */
  
    const navbar = document.querySelector("[data-navbar]") as HTMLElement;
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  
    const toggleNav = () => {
      navbar.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    }
  
    addEventOnElements(navTogglers, "click", toggleNav);
  
    /**
     * HEADER ANIMATION
     * When scrolled down to 100px header will be active
     */
  
    const header = document.querySelector("[data-header]") as HTMLElement;
    const backTopBtn = document.querySelector("[data-back-top-btn]") as HTMLElement;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    });
  
    /**
     * SLIDER
     */
  
    const slider = document.querySelector("[data-slider]") as HTMLElement;
    const sliderContainer = document.querySelector("[data-slider-container]") as HTMLElement;
    const sliderPrevBtn = document.querySelector("[data-slider-prev]") as HTMLElement;
    const sliderNextBtn = document.querySelector("[data-slider-next]") as HTMLElement;
  
    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
    let currentSlidePos = 0;
  
    const moveSliderItem = function () {
      const children = Array.from(sliderContainer.children) as HTMLElement[];
      sliderContainer.style.transform = `translateX(-${children[currentSlidePos].offsetLeft}px)`;
    }
  
    /**
     * NEXT SLIDE
     */
  
    const slideNext = function () {
      const slideEnd = currentSlidePos >= totalSlidableItems;
  
      if (slideEnd) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }
  
      moveSliderItem();
    }
  
    sliderNextBtn.addEventListener("click", slideNext);
  
    /**
     * PREVIOUS SLIDE
     */
  
    const slidePrev = function () {
      if (currentSlidePos <= 0) {
        currentSlidePos = totalSlidableItems;
      } else {
        currentSlidePos--;
      }
  
      moveSliderItem();
    }
  
    sliderPrevBtn.addEventListener("click", slidePrev);
  
    /**
     * RESPONSIVE
     */
    window.addEventListener("resize", function () {
      totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
      totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
      moveSliderItem();
    });
  }
}