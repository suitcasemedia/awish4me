// were in post-deploy : yarn run installAll && yarn start &&
module.exports = {


    apps: [{
        "name": "awish4me",
        "script": "yarn",
        "args" : "start"
    }],
    deploy: {
      production: {
        user: 'jimmy',
        host: 'awish4.me',
        key: '~/.ssh/known_hosts',
        ref: 'origin/master',
        repo: 'git@github.com:suitcasemedia/awish4me.git',
        path: '/home/jimmy/awish4me',
        'post-deploy': 'yarn installAll && yarn reactProdBuild && pm2  startOrRestart ecosystem.config.js'
      }
    }
  }
 