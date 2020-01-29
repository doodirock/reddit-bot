// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
  // Load the guild's settings
  const settings = client.getSettings(member.guild);

  // If welcome is off, don't proceed (don't welcome the user)
  if (settings.welcomeEnabled !== "true") return;

  // Replace the placeholders in the welcome message with actual data
  const welcomeMessage = settings.welcomeMessage.replace(
    "{{user}}",
    member.user.tag
  );

  // Send the welcome message to the welcome channel
  // There's a place for more configs here.
  member.guild.channels
    .find(c => c.name === settings.welcomeChannel)
    .send(welcomeMessage)
    .catch(console.error);
  //This should go into config as well instead of being hard coded.
  member.addRole("605472925000269846").catch(console.error);
};
