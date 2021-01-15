  
export function locationCard (locationObject) {
    return `
        <section class="#location-list">
            <img src="${locationObject.img}" alt="${locationObject.name}">
            <p>${locationObject.name}</p>
        </section>
    `
}