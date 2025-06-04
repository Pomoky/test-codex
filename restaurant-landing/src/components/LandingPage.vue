<template>
  <div class="font-sans bg-cream text-gray-800">
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto flex items-center justify-between p-4">
        <img src="https://placehold.co/200x50" alt="Mon Menu Photo" class="h-12" />
        <nav class="hidden md:flex gap-6">
          <a href="#how" class="hover:text-primary">Comment ça marche ?</a>
          <a href="#pricing" class="hover:text-primary">Tarifs</a>
          <a href="#faq" class="hover:text-primary">FAQ</a>
        </nav>
        <a href="#lead" class="bg-primary text-white px-4 py-2 rounded-md md:ml-8">Demander une démo</a>
      </div>
    </header>

    <section class="text-center py-12 px-4 bg-white">
      <h1 class="text-3xl sm:text-5xl font-bold mb-4 text-primary">Créez votre site en un clin d'\u0153il</h1>
      <p class="mb-6 max-w-2xl mx-auto">Téléversez simplement une photo de votre menu papier et obtenez instantanément un site web professionnel pour votre restaurant.</p>
      <img src="https://placehold.co/1200x500" alt="aperçu" class="mx-auto rounded shadow-md" />
    </section>

    <section id="how" class="py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-8">Comment ça marche ?</h2>
      <div class="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <img src="https://placehold.co/200x200" class="mx-auto mb-4" alt="" />
          <h3 class="font-semibold mb-2">1. Prenez une photo</h3>
          <p>Photographiez votre menu papier.</p>
        </div>
        <div class="text-center">
          <img src="https://placehold.co/200x200" class="mx-auto mb-4" alt="" />
          <h3 class="font-semibold mb-2">2. Téléversez</h3>
          <p>Envoyez l'image sur notre plateforme.</p>
        </div>
        <div class="text-center">
          <img src="https://placehold.co/200x200" class="mx-auto mb-4" alt="" />
          <h3 class="font-semibold mb-2">3. Nous générons votre site</h3>
          <p>Un joli site adapté à tous les écrans est créé.</p>
        </div>
        <div class="text-center">
          <img src="https://placehold.co/200x200" class="mx-auto mb-4" alt="" />
          <h3 class="font-semibold mb-2">4. Partagez</h3>
          <p>Diffusez votre nouveau site à vos clients.</p>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-8">Aperçu de votre futur site</h2>
      <img src="https://placehold.co/900x600" alt="demo" class="mx-auto rounded shadow-md" />
    </section>

    <section class="py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-8">Témoignages</h2>
      <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded shadow text-center">
          <img src="https://placehold.co/100x100" alt="avatar" class="mx-auto rounded-full mb-4" />
          <p class="italic mb-2">"Un service incroyable !"</p>
          <p class="font-semibold">Le Bistrot</p>
        </div>
        <div class="bg-white p-6 rounded shadow text-center">
          <img src="https://placehold.co/100x100" alt="avatar" class="mx-auto rounded-full mb-4" />
          <p class="italic mb-2">"Notre site a été prêt en quelques minutes."</p>
          <p class="font-semibold">Chez Mario</p>
        </div>
        <div class="bg-white p-6 rounded shadow text-center">
          <img src="https://placehold.co/100x100" alt="avatar" class="mx-auto rounded-full mb-4" />
          <p class="italic mb-2">"Simple et efficace, je recommande."</p>
          <p class="font-semibold">La Table Verte</p>
        </div>
      </div>
    </section>

    <section id="pricing" class="bg-white py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-8">Tarifs</h2>
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div class="border rounded-lg p-6 text-center">
          <h3 class="text-xl font-semibold mb-4">Starter</h3>
          <p class="text-3xl font-bold mb-4">0€</p>
          <p class="mb-4">Site basique généré à partir de votre menu.</p>
          <button class="bg-secondary text-white px-4 py-2 rounded">Commencer</button>
        </div>
        <div class="border rounded-lg p-6 text-center shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Pro</h3>
          <p class="text-3xl font-bold mb-4">29€</p>
          <p class="mb-4">Personnalisation avancée et support.</p>
          <button class="bg-primary text-white px-4 py-2 rounded">Choisir</button>
        </div>
        <div class="border rounded-lg p-6 text-center">
          <h3 class="text-xl font-semibold mb-4">Entreprise</h3>
          <p class="text-3xl font-bold mb-4">Sur devis</p>
          <p class="mb-4">Solutions sur mesure pour groupes.</p>
          <button class="bg-secondary text-white px-4 py-2 rounded">Contactez-nous</button>
        </div>
      </div>
    </section>

    <section id="faq" class="py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-8">FAQ</h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <details class="bg-white p-4 rounded shadow">
          <summary class="font-semibold cursor-pointer">Comment envoyer ma photo de menu&nbsp;?</summary>
          <p class="mt-2">Depuis votre espace, téléversez simplement l'image au format JPG ou PNG.</p>
        </details>
        <details class="bg-white p-4 rounded shadow">
          <summary class="font-semibold cursor-pointer">Puis-je modifier mon site&nbsp;?</summary>
          <p class="mt-2">Oui, vous pourrez ajouter des informations et personnaliser les couleurs.</p>
        </details>
        <details class="bg-white p-4 rounded shadow">
          <summary class="font-semibold cursor-pointer">Est-ce compatible mobile&nbsp;?</summary>
          <p class="mt-2">Votre site est responsive et s'adapte à tous les écrans.</p>
        </details>
        <details class="bg-white p-4 rounded shadow">
          <summary class="font-semibold cursor-pointer">Comment fonctionne la facturation&nbsp;?</summary>
          <p class="mt-2">La formule Pro est facturée mensuellement, résiliable à tout moment.</p>
        </details>
        <details class="bg-white p-4 rounded shadow">
          <summary class="font-semibold cursor-pointer">Proposez-vous une assistance&nbsp;?</summary>
          <p class="mt-2">Notre équipe vous accompagne par email pour toute question.</p>
        </details>
      </div>
    </section>

    <section id="lead" class="bg-white py-12 px-4">
      <h2 class="text-2xl font-bold text-center mb-4">Recevez une notification au lancement</h2>
      <form @submit.prevent="submitForm" class="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
        <input type="email" v-model="email" required placeholder="Votre e-mail" class="flex-1 border p-3 rounded" />
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded">Je m'inscris</button>
      </form>
      <p v-if="submitted" class="text-center text-green-600 mt-4">Merci pour votre inscription !</p>
    </section>

    <footer class="py-8 text-center text-sm">
      <img src="https://placehold.co/200x50" alt="logo" class="mx-auto mb-4" />
      <p>© {{ currentYear }} Mon Menu Photo</p>
    </footer>
  </div>
</template>

<script setup>

.hero img {
  max-width: 100%;
  text-align: center;
  padding: 1rem;
}

@media (min-width: 640px) {
  .hero {
    min-height: 60vh;
  }
  .hero-title {
    font-size: 2.5rem;
  }
}
</style>
