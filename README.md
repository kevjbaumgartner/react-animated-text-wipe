# react-animated-text-wipe
Small React component package that aids in the creation of an animated "background text wipe" effect.

<h1>Preview:</h1>

![demo](https://user-images.githubusercontent.com/43413002/178121640-8a993048-b89a-46a7-a8fd-c7a0589d6cab.gif)
<h1>Usage:</h1>

```
<AnimatedTextWipe
  firstColor='FFFFFF'
  secondColor='000000'
  textColor='FFFFFF'
  direction='right'
  difference='true'
  antialiasing='true'
  speed='1'
>
  Child content goes here!
<AnimatedTextWipe/>
```
<h1>Props:</h1>

* firstColor - 6-digit hex colour code. It's the first (and last) background colour to appear on the generated gradient; it will transition from firstColor -> secondColor -> firstColor and then repeat.
* secondColor - 6-digit hex colour code. It's the second (middle) background colour to appear on the generated gradient.
* textColor - 6-digit hex colour code. Self-explanatory, it's the colour of the text overlaying the background.
* direction - string (left | right). The direction in which the animation will render: left meaning right-to-left, and right meaning left-to-right.
* difference - string (true | false). Enable the mix-blend-mode CSS property to create the "text vs. background" contrasting effect.
* antialiasing - string (true | false). Helps to smoothen the font/child text when using the difference option. Sometimes the font may appear heavier (font-weight); this helps to mitigate that but YMMV.
* speed - int. Speed of the animation in seconds, the lower the value, the faster.
