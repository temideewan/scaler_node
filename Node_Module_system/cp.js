const cp = require('child_process')
const path = require('path')

// cp.execSync("code ~/Sites/staff-strength-core");
// cp.execSync("open chrome")

cp.execSync(`ls -l ${path.join(__dirname)}`)
