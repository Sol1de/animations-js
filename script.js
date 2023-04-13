$(document).ready(function() {
  // Masquer le contenu de la page d'accueil
  $('#landing-page').hide();

  // Afficher le contenu de la page d'accueil avec un effet de fondu enchaîné
  $('#landing-page').fadeIn(2000);

  // Appliquer un flou à l'arrière-plan lorsque l'utilisateur clique sur le lien "En savoir plus"
  $('#en-savoir-plus').click(function(e) {
    e.preventDefault();
    $('body').css('filter', 'blur(5px)');

    // Masquer la page d'accueil avec un effet de fondu sortant
    $('#landing-page').fadeOut(1000, function() {
      // Afficher le contenu des projets avec un effet de fondu entrant
      $('#projets').fadeIn(1000, function() {
        // Retirer l'effet de flou de l'arrière-plan avec un effet de fondu sortant
        $('body').css('filter', 'none');
        $('body').animate({opacity: 1}, 1000);
      });
    });
  });
});

// Sélectionner un élément
const enSavoirPlus = $('#en-savoir-plus');
const listeProjets = $('.element-liste');

// Sélectionner plusieurs éléments puis faire une boucle pour modifier chaque élément
listeProjets.each(function() {
  $(this).addClass('projet');
});

// Ecouter un évènement
enSavoirPlus.on('click', function(event) {
  event.preventDefault();
  $('#projets').addClass('blur');
  setTimeout(() => {
    $('#projets').addClass('hidden');
    $('#projets').removeClass('blur');
    $('#projets-details').removeClass('hidden');
  }, 1000);
});

// Sélectionner un élément
let element1 = document.querySelector('.element-liste');

// Sélectionner plusieurs éléments puis faire une boucle pour modifier chaque élément.
let elements = document.querySelectorAll('.element-liste');
elements.forEach(element => {
  // Ajouter un évènement de survol pour chaque élément
  element.addEventListener('mouseover', () => {
    // Modifier le style de l'élément en JS
    element.style.color = 'grey';
    element.style.fontWeight = 'bold';
  });

  // Réagir à un évènement de fin de survol pour chaque élément
  element.addEventListener('mouseout', () => {
    // Modifier le style de l'élément en JS
    element.style.color = '';
    element.style.fontWeight = '';
  });
});

// Ajouter une classe à chaque élément de la liste
elements.forEach(element => {
  element.classList.add('animation-liste');
});

// Modifier le contenu d'un élément
// Récupère tous les éléments de la liste
const elementsListe = document.querySelectorAll('.element-liste');

// Parcours chaque élément de la liste et ajoute un évènement de survol
elementsListe.forEach(element => {
  element.addEventListener('mouseover', () => {
    // Crée un élément de description et ajoute du texte
    const description = document.createElement('p');
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum at mi luctus sagittis. Aenean at ornare est. Maecenas malesuada ex quis risus volutpat, id pulvinar mi mattis. Nullam id lorem eget lorem accumsan placerat. Morbi vulputate non eros quis consectetur. Nulla sodales facilisis lectus ut eleifend. Curabitur quis metus neque. Vestibulum vulputate maximus ante, vel facilisis nunc iaculis a. Praesent efficitur sit amet ligula consequat egestas. Vestibulum sollicitudin mauris a finibus maximus. Donec viverra, nulla vel blandit ullamcorper, libero ligula viverra mi, nec sollicitudin neque augue sit amet risus. Quisque metus massa, fermentum eu vestibulum sed, scelerisque id augue. Nulla iaculis gravida lorem vel pharetra. Aliquam sagittis turpis vitae scelerisque finibus. Donec at eros vestibulum, aliquet nisi quis, dapibus nulla. " + element.textContent;
    
    // Ajoute la description après l'élément survolé
    element.after(description);
  });
  
  element.addEventListener('mouseout', () => {
    // Récupère l'élément de description
    const description = element.nextElementSibling;
    
    // Supprime l'élément de description
    if (description && description.tagName === 'P') {
      description.remove();
    }
  });
});
