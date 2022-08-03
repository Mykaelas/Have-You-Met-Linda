
// This is the manager card and it takes the input for the manager inquirer prompts
const managerCard = (input) => {
  return `<h2 class= "card bg-primary text-white shadow-lg border border-secondary" style="width: 20rem;"> 
${input.name} 
<br>
<p> <i class="bi bi-cup-hot"></i> Manager</p>
</br>
<div class="card-body bg-white">
    <ul class="card-text list-group list-group-flush border border-warning text">
        <li class="list-group-item">
          ID: ${input.id}
        </li>
        <li class="list-group-item">
        Email: 
          <a href = "${input.email}">${input.email}</a>
        </li>
        <li class="list-group-item">
          Office Number:
          <a href = "${input.number}">${input.number}</a>
        </li>
    </ul>
</div>
</h2>`;
};
// This is the engineer card and it takes the input for the engineer inquirer prompts
const engineerCard = (input) => {
  return `<h2 class= "card bg-primary text-white shadow-lg border border-secondary" style="width: 20rem;"> 
${input.name} 
<br>
  <p><i class="bi bi-sunglasses"></i> Engineer</p>
</br>
<div class="card-body  bg-white">
    <ul class="card-text list-group list-group-flush border border-warning text">
        <li class="list-group-item">
          ID: ${input.id}
        </li>
        <li class="list-group-item">
         Email: 
          <a href = "${input.email}">${input.email}</a>
        </li>
        <li class="list-group-item">
          Github:
          <a href="https://github.com/${input.github}" target="_blank">https://github.com/${input.github}</a>
        </li>
    </ul>
</div>
</h2>`;
};
// This is the intern card and it takes teh input for the intern inquirer
const internCard = (input) => {
  return `<h2 class= "card bg-primary text-white shadow-lg border border-secondary" style="width: 20rem;"> 
${input.name} 
<br>
<p><i class="bi bi-mortarboard"></i> Intern</p>
</br>
<div class="card-body bg-white">
    <ul class="card-text list-group list-group-flush border border-warning text">
        <li class="list-group-item">
          ID: ${input.id}
        </li>
        <li class="list-group-item">
          Email: 
            <a href = "${input.email}">${input.email}</a>
        </li>
        <li class="list-group-item">
          School: ${input.school}
        </li>
    </ul>
</div>
</h2>`;
};
module.exports = [managerCard, engineerCard, internCard];