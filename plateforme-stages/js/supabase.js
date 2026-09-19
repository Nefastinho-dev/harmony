// Remplacez ces variables par vos clés Supabase du projet Vercel / Supabase Dashboard
const SUPABASE_URL = window.ENV_SUPABASE_URL || 'https://votre-projet.supabase.co';
const SUPABASE_ANON_KEY = window.ENV_SUPABASE_ANON_KEY || 'votre-cle-anon-ici';

// Initialisation du client Supabase global
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Verification de la session utilisateur active
async function getCurrentUser() {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  if (error || !session) return null;
  return session.user;
}

// Déconnexion rapide
async function signOutUser() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}
