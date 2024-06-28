const dot = document.getElementById("dot");

const dotStartSize = { height: "80px", width: "80px" };
const dotFinishSize = { height: "400px", width: "400px" };

let domDot = document.querySelector("#dot");
domDot.style.width = dotStartSize.width;
domDot.style.height = dotStartSize.height;

let ringDot = document.querySelector("#ring");
ringDot.style.width = dotFinishSize.width;
ringDot.style.height = dotFinishSize.height;

let domQuote = document.querySelector("#quote");
const quotes = [ "You are here.", "You are safe.", "Breath in.", "Breath out."];
let quoteIndex = 0;
domQuote.innerHTML = "Hi. " + quotes[quoteIndex];

const quoteFrame = new KeyframeEffect(
    domQuote,
    [ { opacity: 0 }, { opacity: 1 }, { opacity: 0 } ],
    {
        duration: 6000,
        iterations: 1,
        easing: "linear(0, 1)"
    }
);

const quoteAnimation = new Animation(
    quoteFrame,
    document.timeline,
);


const dotFrameForward = new KeyframeEffect(
    dot,
    [ dotStartSize, dotFinishSize ],
    {
        duration: 4500,
        iterations: 1,
        easing: "cubic-bezier(.23,.05,.8,.99)"
    }
);

const dotFrameBackward = new KeyframeEffect(
    dot,
    [ dotFinishSize , dotStartSize ],
    {
        duration: 8000,
        iterations: 1,
        easing: "cubic-bezier(.23,.05,.8,.99)"
    }
);

const dotAnimationForward = new Animation(
    dotFrameForward,
    document.timeline,
);

const dotAnimationBackward = new Animation(
    dotFrameBackward,
    document.timeline,
);

dotAnimationForward.onfinish = (event) => {
    dotAnimationBackward.play();
};

dotAnimationBackward.onfinish = (event) => {
    dotAnimationForward.play();
};

document.querySelector("#startbtn").addEventListener("click", (element, evt) => {
    dotAnimationForward.cancel();
    dotAnimationBackward.cancel();

    dotAnimationForward.play();
});

document.querySelector("#stopbtn").addEventListener("click", (element, evt) => {
    dotAnimationForward.cancel();
    dotAnimationBackward.cancel();
});

quoteAnimation.onfinish = (event) => {
    if(++quoteIndex >= 2) 
        quoteIndex = 0;
    domQuote.innerHTML = quotes[quoteIndex];
    quoteAnimation.play();
}

quoteAnimation.play();

