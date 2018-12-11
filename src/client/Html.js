
const Html = ({ body,styles,title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
      <link rel="stylesheet" href="css/style.css" />
    </head>
    <body style="margin:0"> 
      <div id="app">${body}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
`;

export default Html;