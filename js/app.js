// Données factices pour tester l'interface avant la connexion à Supabase
const MOCK_OFFERS = [
  {
    id: '1',
    title: 'Stage d\'observation - Immersion Développement Web',
    company_name: 'TechLab Studio',
    sector: 'Informatique / Numérique',
    target_grade: '3ème',
    city: 'Lyon (69)',
    duration: '1 semaine',
    is_rewarded: false,
    description: 'Découvrez le métier de développeur web, la gestion de projet agile et l\'ergonomie d\'une application.'
  },
  {
    id: '2',
    title: 'Assistant Communication & Réseaux Sociaux',
    company_name: 'EcoImpact',
    sector: 'Marketing / Communication',
    target_grade: 'Lycée',
    city: 'Paris (75)',
    duration: '2 semaines',
    is_rewarded: false,
    description: 'Création de contenus visuels, rédaction d\'articles de blog et animation de notre communauté Instagram.'
  },
  {
    id: '3',
    title: 'Stage Assistant Designer UX/UI',
    company_name: 'CréaStudio',
    sector: 'Design / Art',
    target_grade: 'BTS / Université',
    city: 'Bordeaux (33)',
    duration: '2 mois',
    is_rewarded: true,
    description: 'Conception de maquettes Figma, recherches utilisateurs et prototypage pour nos clients grands comptes.'
  }
];

// Gestionnaire d'affichage de la barre de navigation selon le statut de connexion
async function updateNavbar() {
  const user = await getCurrentUser();
  const navAuthContainer = document.getElementById('nav-auth-buttons');
  
  if (!navAuthContainer) return;

  if (user) {
    navAuthContainer.innerHTML = `
      <a href="dashboard-eleve.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600">Mon Espace</a>
      <button onclick="signOutUser()" class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition">Déconnexion</button>
    `;
  } else {
    navAuthContainer.innerHTML = `
      <a href="connexion.html" class="text-sm font-semibold text-gray-700 hover:text-blue-600">Se connecter</a>
      <a href="connexion.html?tab=signup" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition">S'inscrire</a>
    `;
  }
}

// Fonction utilitaire de rendu des cartes d'offres
function renderOfferCard(offer) {
  return `
    <div class="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2,5 py-1 bg-blue-50 text-blue-700 font-medium text-xs rounded-full">
            ${offer.target_grade}
          </span>
          <span class="text-xs text-gray-500 font-medium">${offer.duration}</span>
        </div>
        <h3 class="text-lg font-bold text-gray-900 mb-1">${offer.title}</h3>
        <p class="text-sm font-medium text-gray-600 mb-3">${offer.company_name} • ${offer.city}</p>
        <p class="text-sm text-gray-500 line-clamp-2 mb-4">${offer.description}</p>
      </div>
      <div class="pt-4 border-t border-gray-50 flex items-center justify-between">
        <span class="text-xs font-semibold ${offer.is_rewarded ? 'text-emerald-600 bg-emerald-50' : 'text-gray-500 bg-gray-100'} px-2 py-1 rounded">
          ${offer.is_rewarded ? 'Gratifié' : 'Non gratifié'}
        </span>
        <a href="offre-detail.html?id=${offer.id}" class="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
          Voir l'offre &rarr;
        </a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();
});
