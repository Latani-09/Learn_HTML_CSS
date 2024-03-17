var fs = require('fs');
var files = fs.readdirSync('/Copy right free images/');
console.log(files)
files.forEach(file => {
    const code=( ` <div class="gallery">     <img src="Copy right free images/${file}" alt="Beach image"> </div>`);
    console.log(code);

})