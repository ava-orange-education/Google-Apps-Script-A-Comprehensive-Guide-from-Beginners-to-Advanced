const htmlResponse = /* html */ `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Apps Script Web App</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    <main>
        <h1>Welcome to my Apps Script Web App!</h1>  
        <p>Hello world!</p>
    </main>
    <script src="index.js"></script>
  </body>
</html>`;

function doGet() {
  // Reserved function name
  return HtmlService.createHtmlOutput(htmlResponse);
}
