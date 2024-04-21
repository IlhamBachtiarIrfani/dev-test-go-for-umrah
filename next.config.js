const path = require('path')
 
module.exports = {
  images: {
    // deviceSizes: [320, 420, 768, 1024, 1200, 1440],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}