var css = document.documentElement;

window.addEventListener('change',function(event) {
    if (event.target.matches('#blur')) {
        // console.log(event.target.value)
        css.style.setProperty('--imgWidth',event.target.value)
        var filter = event.target.value / 1200
        // console.log(filter) 
        css.style.setProperty('--imgFilter',filter)
    }

    if (event.target.matches('#colorpicker')) {
        //console.log(event.target.value)
        css.style.setProperty('--colorVar',event.target.value)
    }
})