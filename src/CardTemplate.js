
const card = (input) => {
  return
`<h2 class= "card-header bg-primary  text-white"> 
${input.name} 
<br>
    ${input.symbol} ${input.position}
</br>
<div class="card-body p-4 bg-white">
    <ul class="card-text list-group list-group-flush border border-warning text">
        <li class="list-group-item">
          ID: ${input.id}
        </li>
        <li class="list-group-item">
          Email: ${input.email}<!-- This is a link><-->
        </li>
        <li class="list-group-item">
          Github: ${input.github}<!-- This is a link><-->
        </li>
        <li class="list-group-item">
          Office Number: ${input.number}
        </li>
        <li class="list-group-item">
          School: ${input.school}
        </li>
    </ul>
</div>
</h2>`
};
module.exports = card;