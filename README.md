# react-animated-text-wipe
Small React component package that aids in the creation of an animated "background text wipe" effect.

<h1>Preview:</h1>

![demo_colour](https://user-images.githubusercontent.com/43413002/178775775-7f7b1da1-fb55-4d1f-be69-1e31633d2af7.gif)

![demo_direction](https://user-images.githubusercontent.com/43413002/178775786-1fac45ff-403c-4d8d-b132-f712f327a175.gif)

![demo_other](https://user-images.githubusercontent.com/43413002/178775791-27b046d8-4999-44b3-8578-5e1b56587ea9.gif)
<h1>Usage:</h1>

```
<AnimatedTextWipe
  firstColor='transparent'
  secondColor='black'
  textColor='#FFFFFF'
  direction='right'
  difference='true'
  antialiasing='true'
  speed='1'
>
  Child content goes here!
<AnimatedTextWipe/>
```
<h1>Props:</h1>

* firstColor - #6-digit hex colour code or colour keyword. It's the first (and last) background colour to appear on the generated gradient; it will transition from firstColor -> secondColor -> firstColor and then repeat.
* secondColor - #6-digit hex colour code or colour keyword. It's the second (middle) background colour to appear on the generated gradient.
* textColor - #6-digit hex colour code or colour keyword. Self-explanatory, it's the colour of the text overlaying the background.
* direction - string (left | right | up | down). The direction in which the animation will render.
* difference - string (true | false). Enable the mix-blend-mode CSS property to create the "text vs. background" contrasting effect.
* antialiasing - string (true | false). Helps to smoothen the font/child text when using the difference option. Sometimes the font may appear heavier (font-weight); this helps to mitigate that but YMMV.
* speed - int. Speed of the animation in seconds, the lower the value, the faster.