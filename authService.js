const DEV_MODE = true; // flip to false in production

export async function requestPasswordReset(supabase, email) {
  if (DEV_MODE) {
    console.log("DEV MODE: skipping email reset");
    return { error: null };
  }

  return await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://ash2686.github.io/MoodParse/"
  });
}

export async function updatePassword(supabase, newPassword) {
  return await supabase.auth.updateUser({
    password: newPassword
  });
}