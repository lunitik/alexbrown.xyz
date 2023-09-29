/**
 * Scrollers
 */
export class Scrollers {

    init() {
        const scrollers = document.querySelectorAll(".scroller");
        
        if(!window.matchMedia("prefers-reduced-motion: reduces").matches) {
            addAnimation();
        }
        
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
        
                const scrollerInner = scroller.querySelector(".scroller__inner");
    
                if (scrollerInner != null) {
                    const scrollerContent = Array.from(scrollerInner.children);
            
                    scrollerContent.forEach(item => {
                        const duplicatedItem = item.cloneNode(true);
                        (<Element>duplicatedItem).setAttribute("aria-hidden", "true");
                        scrollerInner.appendChild(duplicatedItem);
                    });
                }
            })
        }
    }
}