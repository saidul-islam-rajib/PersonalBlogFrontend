import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  ngOnInit() { 
     
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