// Remplacez ces variables par vos clés Supabase du projet Vercel / Supabase Dashboard
const SUPABASE_URL = window.ENV_SUPABASE_URL || 'sb_publishable_DYVi-DAgwAIXL3j5Z4CwyQ_vSs0scia';
const SUPABASE_ANON_KEY = window.ENV_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeGJwYnZ2YnJ6aXBwd3h5d3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4MDU2MDIsImV4cCI6MjEwNTM4MTYwMn0.-QbY-WQYbEQrbCTdapNo4wkLINCipokg0SV3ZOvSe10';

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
