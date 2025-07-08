# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl) Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./preview.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for mobile menu

### What I learned

This project helped me improve my CSS Grid skills for creating complex layouts. I learned how to effectively combine Grid and Flexbox to create a responsive design that works well on both mobile and desktop screens.

I also improved my JavaScript skills by implementing a mobile menu that toggles visibility and includes an overlay.

Some code snippets I'm proud of:

```html
<picture>
  <source media="(min-width: 768px)" srcset="./assets/images/image-web-3-desktop.jpg">
  <img src="./assets/images/image-web-3-mobile.jpg" alt="Web 3.0 illustration">
</picture>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.featured-article {
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}
```

```js
menuToggle.addEventListener('click', () => {
  navList.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});
```

### Continued development

In future projects, I want to focus more on:

- Improving accessibility features
- Implementing more complex animations
- Optimizing performance for faster loading times
- Using CSS variables more effectively for theming

## Author

- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
