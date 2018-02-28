// were in post-deploy : npm run installAll && npm start &&
module.exports = {


    apps: [{
        "name": "awish4me",
        "script": "npm",
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
        'post-deploy': 'cd ./backend && npm install && cd ../frontend && npm install && pm2  startOrRestart ecosystem.config.js'
      }
    }
  }
 