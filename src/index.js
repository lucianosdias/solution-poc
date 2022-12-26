const argv = require("minimist")(process.argv.slice(2));

function boostrap() {
  console.log(argv);
}

boostrap();
