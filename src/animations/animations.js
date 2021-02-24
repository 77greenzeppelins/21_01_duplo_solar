import gsap from 'gsap';
import { itemsToBuy } from '../assets/dataForArticles/dataForArticles';

const initialAnimation = () => {
  //for tests
  console.log(`%cJust for testing the animation...`, 'color:red');
  console.log(itemsToBuy);
  //main timeline initialization + predefinitions of ease = it mens we want this ease in each tween
  const mainTimeline = gsap.timeline({ defaults: { ease: 'Power2.easeOut' } });
  //=============================================================================
  /**
   * Part of animation that displayes individual items from an array...
   */
  const textAnimationTimeline = gsap.timeline({ repeat: 1 });

  const textAnimation = () => {
    const textLayers = document.querySelectorAll(
      '.b-screen__animated-items div'
    );
    textLayers.forEach(item => {
      textAnimationTimeline.fromTo(
        item,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 1.1,
          duration: 1,
          repeat: 1,
          yoyo: true,
          yoyoEase: true,
          repeatDelay: 1,
        }
      );
    });
    gsap.set('.b-screen__animated-items', { visibility: 'visible' });
  };
  //=========================================================================
  //Let's run the main timeline !!!
  mainTimeline
    .add('startFromHere')
    .fromTo(
      '.overlay-initial .logo',
      {
        scale: 2.2,
      },
      {
        scale: 1.7,
        duration: 1.5,
      }
    )
    .to('.overlay-initial', {
      duration: 1.8,
      x: '-100%',
      transformOrigin: '100% 0%',
    })
    .call(removeElement('.overlay-initial'))
    //==================================================  animation  of  the  screen A Top
    .fromTo(
      '.a-top__overlay',
      { scaleX: 1, transformOrigin: '0% 100%' },
      {
        duration: 2,
        scaleX: 0,
      },
      '-=1.5'
    )
    .from(
      '.a-top__text li',
      {
        scale: 1.5,
        duration: 1.5,
        opacity: 0,
        stagger: 0.4,
        transformOrigin: '0% 100%',
      },
      '-=1.5'
    )
    //====================================================animation  of  the  screen A Bottom
    .fromTo(
      '.a-bottom__text li',
      {
        opacity: 0,
      },
      {
        duration: 1.5,

        opacity: 1,
        stagger: 0.5,
      }
    )
    .fromTo(
      '.a-bottom__overlay',
      { scaleY: 1, transformOrigin: '0% 100%' },
      {
        duration: 1.5,
        scaleY: 0,
      },
      '-=1'
    )

    .fromTo(
      '.icon',
      {
        opacity: 0,
      },
      { duration: 2, opacity: 1, stagger: 0.4 },
      '-=1'
    )
    //================================================animations  of  the  screen B
    // .add('startFromScreenB')
    // .add('stopBeforeScreenB')
    .to('.b-screen', { duration: 1, opacity: 1 })
    .to('.a-bottom', { backgroundColor: '#000000' }, '>')
    .fromTo(
      '.b-screen__text li',
      { opacity: 0, scale: 1.1 },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
      }
    )
    .fromTo(
      '.b-screen__text-down li',
      { opacity: 0, scale: 1.1 },
      {
        duration: 2,
        opacity: 1,
        scale: 1,
      }
    )
    .fromTo(
      '.b-screen__animated-items',
      { opacity: 0 },
      {
        duration: 2,
        opacity: 1,
      }
    )
    .call(textAnimation());

  // mainTimeline.play('startFromScreenB');
  // mainTimeline.play('startFromHere');
  // mainTimeline.pause('stopBeforeScreenB');

  //=============================================================================
  //   .call(removeElement('.sentence2__icons'))
  //   .to('.sentence3 .sentence3__top p', { duration: 1.5, opacity: 1 })
  //   .to(
  //     '.sentence3 .sentence3__bottom p',
  //     {
  //       duration: 1.5,
  //       opacity: 1,
  //       stagger: 0.1,
  //       onComplete: () => tlForItemsToBuy.play(),
  //     },
  //     '+=1'
  //   )
  //   //animation of
  // .to('.b-screen', { onComplete: () => tlForItemsToBuy.play() });

  // itemsToBuy.forEach(word => {
  //   let tlForWord = gsap.timeline({
  //     repeat: 1,
  //     yoyo: true,
  //     repeatDelay: 1,
  //   });
  //   tlForWord.fromTo(
  //     '.item-to-buy',
  //     { opacity: 0 },
  //     { duration: 1.5, opacity: 1, text: { value: word, delimiter: '' } }
  //   );
  //   tlForItemsToBuy.add(tlForWord);
  // });
};

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

/**
 * removed section for TextPlugin
 * import { TextPlugin } from 'gsap/TextPlugin';
 * // registration of TextPlugin that is used in sentence3
 * gsap.registerPlugin(TextPlugin);
 * // timeLine for TextPlugin effect that allowes to display different words from imported array...
 * // use it to make the animation infinite: { repeat: -1 }
 * const tlForItemsToBuy = gsap.timeline().pause(); //{ repeat: -1 }
 * ============================================================================
 * removed section of definition for individual tweens
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
 */
