Vue.component('section-title', {
  template: `
    <h1 class="display-4"><slot></slot></h1>
  `,
});

let avatars = {
  clippy: "https://media.giphy.com/media/w3AmrG1E1vr56/giphy.gif",
  baby_yoda: "https://media.giphy.com/media/gdwSHcFbK0YG82LAAS/source.gif",
}

Vue.component('clippy', {
  props: ['title'],
  template: `
    <div class="clippy">
      <div class="clippy-text">
        <h2>{{ title }}</h2>
        <slot></slot>
      </div>
      <img class="clippy-image" src="${avatars.baby_yoda}">
    </div>
  `,
});

Vue.component('reference', {
  props: ['icon', 'link'],
  template: `
    <h2><i :class="icon"></i> <a href="{{ link }}"><slot></slot></a></h2>
  `,
});