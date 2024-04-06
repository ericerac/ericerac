export  const displayCard = ((card)=>{
    var observer = new IntersectionObserver(app_scroll, options);
    // console.log("CARD ELEMENT",card);
card.forEach((el)=>{
            observer.observe(el);
                // console.log("element",el);
        })
})

const ratio = .3;

const options = {
    root: null,
  rootMargin: '0px',
  threshold: ratio,
} 

const app_scroll = (entries,observer) => {
    entries.forEach ( (entry ) => {
        // console.log("APP_SCROLL");
        if(entry.intersectionRatio >= ratio){
            entry.target.classList.add("card_on")
            if(entry.target.el ){
            //   console.log(" IF TARGET DIV SCREEN-IN",entry.target.el)
            }
            //  console.log(" SCREEN-IN",entry.target)
        }else{
            // console.log(" SCREEN-OFF")
        }     
    });
    }



