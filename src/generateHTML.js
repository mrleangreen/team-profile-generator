function generateHTML(team) {
  const cards = team.map(member => {
    let extra = '';
    if (member.getRole() === 'Manager') {
      extra = `Office #: ${member.officeNumber}`;
    } else if (member.getRole() === 'Engineer') {
      extra = `GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>`;
    } else if (member.getRole() === 'Intern') {
      extra = `School: ${member.school}`;
    }

    return `
      <div class="card">
        <h2>${member.getName()}</h2>
        <h3>${member.getRole()}</h3>
        <p>ID: ${member.getId()}</p>
        <p>Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></p>
        <p>${extra}</p>
      </div>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Team Profile</title>
      <style>
        body { font-family: Arial; }
        .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 8px; }
      </style>
    </head>
    <body>
      <h1>My Team</h1>
      <div>${cards}</div>
    </body>
    </html>
  `;
}

module.exports = generateHTML;
