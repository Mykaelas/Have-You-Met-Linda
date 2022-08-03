// template helper code
// export function to generate entire page
const templateTop = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Have You Met Linda?</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.0/font/bootstrap-icons.css">
  </head>
  
  <body>
    <h1 class="text-white bg-danger py-5 col-xs-1 text-center">
      Check Out Our Team 
    </h1>
    <div class="p-5">
      <main class ="d-flex flex-wrap d-flex justify-content-around">`;
}

const templateBottom = () => {
  return `</main>
  </div>
</body>
</html>`;
}
module.exports = [templateTop, templateBottom]; 