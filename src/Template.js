// template helper code
// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Have You Met Linda?</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    
    <body>
      <h1 class="text-white bg-danger py-5 col-xs-1 text-center">
        Check Out Our Team 
      </h1>
      <div class="p-5">
        <main class="card container flex-row justify-space-between align-center shadow-lg"
            style="width: 30rem;">
          <h2 class= "card-header bg-primary  text-white"> 
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
          </h2>
        </main>
      </div>
    </body>
    </html>
    `;
  };
  