export function Fish(fishObject){
    return `<section class="fish-card">
    <img
      class="fish-card__image"
      src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg"
      alt="Fish"
    />
    <div class="fish-card__text">
      <p>${fishObject.species}</p>
      <p>${fishObject.name}</p>
      <p>${fishObject.Size}</p>
      <p>${fishObject.Native}</p>
      <p>${fishObject.food}</p>
    </div>
  </section>`
}