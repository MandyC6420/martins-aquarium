export function Fish(fishObject){
    return `<section class="fish-card">
    <img
      class="fish-card__image"
      src="https://static.hollywoodreporter.com/sites/default/files/2014/12/dory_a_l.jpg"
      alt="Fish"
    />
    <div class="fish-card__text">
      <p class = "fish-info">${fishObject.species}</p>
      <p class = "fish-info">${fishObject.name}</p>
      <p class = "fish-info">${fishObject.Size}</p>
      <p class = "fish-info">${fishObject.Native}</p>
      <p class = "fish-info">${fishObject.food}</p>
      

      
    </div>
  </section>`
}