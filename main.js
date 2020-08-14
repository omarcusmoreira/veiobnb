async function getRentals(){
    const rentalFetch = await fetch(
        "https://veiobnb.prestoapi.com/api/rentals?limit=10",
    );

    const rentalJson = await rentalFetch.json();
    //console.log("rentalJson:", rentalJson);

    const rentals = document.querySelector('.rentals');
    let html = '';

    rentalJson.forEach(rental => {
        const image = rental.images.picture_url;
        const roomType = rental.room_type;
        const name = rental.name;
        const guest = rental.guest;
        const bedrooms = rental.bedrooms;
        const beds = rental.beds;
        const baths = rental.bath;
        const amenities = rental.amenities.slice(0,3).join('.');
        const stars = rental.review_scores.review_scores_value
         ? parseInt(rental.review_scores.review_scores_value) / 2 : 0;
        const reviewers = rental.reviewers;
        const price = rental.price;

        html += `

        <div class="card">
            <img src=${image} alt="Imagem" class="card_image">
            <div class="card_details">
                <div class="card_subtitle">${roomType}</div>
                <div class="card_title">${name}</div>
                <small class="card_rooms">${guest} | ${bedrooms} | ${beds} | ${baths}</small>
                <small class="card_amenities">${amenities}</small>
                <div class="card_bottom">
                    <div class="card_stars">$star; ${stars} (${reviewers})</div>
                    <div class="card_price">$${price}</div>
                </div>
            </div>
        </div>

        `;
    });

    rentals.innerHTML = html;
}

getRentals();