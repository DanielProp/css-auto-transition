window.onload = function() {
    cssAutoTransition()
}

function cssAutoTransition(){
    const elements = document.querySelectorAll('[auto-transition]')
    
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const transitionParts = element.getAttribute('auto-transition').split(' ')
        const triggerElementSelector =  element.getAttribute('auto-transition-trigger')
        const triggerElement = triggerElementSelector ? document.querySelector(triggerElementSelector) : element

        const transitionProp = transitionParts[0]
        const transitionFrom = transitionParts[1]
        const transitionTo = transitionParts[2]

        const elementSize = {
            height: element.scrollHeight,
            width: element.scrollWidth
        }

        let timeoutMs
        let timeoutId
        

        if (transitionFrom == 'auto') {
            // transition FROM auto
            
            triggerElement.addEventListener('mouseenter', function(){
                clearTimeout(timeoutId);

                elementComputedStyles = window.getComputedStyle(element, null);
                timeoutMs = elementComputedStyles.transitionDuration.slice(0, -1) * 1000 + elementComputedStyles.transitionDelay.slice(0, -1) * 1000

                element.style[transitionProp] = elementSize[transitionProp] + 'px'
                element.offsetWidth
                element.style[transitionProp] = transitionTo
                
            })
            triggerElement.addEventListener('mouseleave', function(){
                
                element.style[transitionProp] = elementSize[transitionProp] + 'px'
                timeoutId = setTimeout(function() {
                    element.style.removeProperty(transitionProp)
                }, timeoutMs);

            })


        }else if(transitionTo == 'auto'){
            // transition TO auto

            element.style[transitionProp] = transitionFrom

            triggerElement.addEventListener('mouseenter', function(){
                element.style[transitionProp] = elementSize[transitionProp] + 'px'
            })
            triggerElement.addEventListener('mouseleave', function(){
                element.style[transitionProp] = transitionFrom
            })
            
        }

    }

}