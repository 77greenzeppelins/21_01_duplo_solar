import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
//
import { itemsToBuy } from '../assets/dataForArticles/dataForArticles';

//definition of function that returns main animation = main timeline;
//parameters are names of targets for individual tweens;
const initialAnimation = (
  overlayInitial,
  initialLogo,
  overlayTop,
  overlayBottom,
  sentence1,
  sentence2,
  iconsOfDevices,
  sentence3,
  sentence3__top,
  sentence3__bottom,
  itemToBuy
) => {
  //registration of TextPlugin
  gsap.registerPlugin(TextPlugin);
  //main timeline initialization
  const tl = gsap.timeline({ defaults: { ease: 'Power2.easeOut' } });
  //timeLine for changing words///// { repeat: -1 }
  const tlForItemsToBuy = gsap.timeline().pause();
  //main timeline specification
  tl.fromTo(
    initialLogo,
    {
      scale: 2.2,
    },
    {
      scale: 1.7,
      duration: 1.5,
    }
  )
    .to(overlayInitial, {
      duration: 1.8,
      x: '-100%',
      transformOrigin: '100% 0%',
      // display: 'none',
    })
    .call(removeElement, ['.overlay-initial .logo'])
    .call(overlayAnimationHorizontal, [overlayTop], '-=1.5')
    .call(textAnimationHorizontal, [sentence1], '-=1.5')
    .call(overlayAnimationVertical, [overlayBottom], '+=1.5')
    .call(textAnimationVertical, [sentence2], '-=0.7')
    .fromTo(
      iconsOfDevices,
      {
        opacity: 0,
        // scale: 0.8,
        stagger: 0.1,
      },
      { duration: 2, opacity: 1, stagger: 0.1 },
      '+=3'
    )
    .fromTo(
      sentence3,
      { opacity: 0, display: 'none' },
      {
        duration: 2,
        opacity: 1,
        display: 'block',
      }
    )
    .to(sentence3__top, { duration: 1.5, opacity: 1 })
    .to(
      sentence3__bottom,
      {
        duration: 1.5,
        opacity: 1,
        stagger: 0.1,
        onComplete: () => tlForItemsToBuy.play(),
      },
      '+=1'
    );

  //animation of
  // .to(sentence3, { onComplete: () => tlForItemsToBuy.play() });

  itemsToBuy.forEach(word => {
    let tlForWord = gsap.timeline({
      repeat: 1,
      yoyo: true,
      repeatDelay: 1,
    });
    tlForWord.fromTo(
      itemToBuy,
      { opacity: 0 },
      { duration: 1.5, opacity: 1, text: { value: word, delimiter: '' } }
    );
    tlForItemsToBuy.add(tlForWord);
  });
};

const overlayAnimationHorizontal = target => {
  gsap.fromTo(
    target,
    { scaleX: 1, transformOrigin: '0% 100%' },
    {
      duration: 2,
      scaleX: 0,
    }
  );
};
const overlayAnimationVertical = target => {
  gsap.fromTo(
    target,
    { scaleY: 1, transformOrigin: '0% 100%' },
    {
      duration: 2,
      scaleY: 0,
    }
  );
};

const textAnimationHorizontal = target => {
  gsap.from(target, {
    scale: 3,
    duration: 1.5,
    opacity: 0,
    stagger: 1,
    transformOrigin: '0% 100%',
  });
};

const textAnimationVertical = target => {
  gsap.fromTo(
    target,
    {
      scale: 3,
      opacity: 0,
    },
    {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      stagger: 1,
      transformOrigin: '50% -100px',
    }
  );
};

// const iconsAnimation = target => {
//   gsap.fromTo(
//     target,
//     {
//       opacity: 0,
//       scale: 0.8,
//       stagger: 0.7,
//     },
//     { duration: 2, opacity: 1, scale: 1, stagger: 0.7 }
//   );
// };

// function that let us remove element after animation
function removeElement(element) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }
  return function () {
    element.parentNode.removeChild(element);
  };
}

export { initialAnimation };
