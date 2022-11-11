const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    });




    function displayProphets(prophet) {
        // Create elements to add to the document
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const birthdate = document.createElement('p');
        const birthplace = document.createElement('p');
        const portrait = document.createElement('img');
      
        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Birth date text content
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Birth place text content
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
      
        // Computing order string with proper suffex
        let nth = ""
        if (prophet.order == 1) {
            nth = '1st';
        } else if (prophet.order == 2) {
            nth = '2nd';
        } else if (prophet.order == 3) {
            nth = '3rd'
        } else {
            nth = `${prophet.order}th`
        }

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${h2.textContent} - ${nth} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);
      }
    

