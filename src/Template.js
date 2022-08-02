// template helper code
// export function to generate entire page
    const templateData = () => {
  
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
        <main id = "cardContainer" class="card container flex-row justify-space-between align-center shadow-lg"
            style="width: 30rem;">
          
        </main>
      </div>
    </body>
    </html>
    `;
  };
  module.exports = templateData; 