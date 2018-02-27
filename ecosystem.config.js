// were in post-deploy : yarn run installAll && yarn start &&
module.exports = {


    apps: [{
        "script": "awish4me",
        "args" : "./server.js"
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-34-210-87-178.us-west-2.compute.amazonaws.com',
        key: '~/.ssh/awish4me.pem',
        ref: 'origin/master',
        repo: 'git@github.com:suitcasemedia/awish4me.git',
        path: '/home/ubuntu/awish4me',
        'post-deploy': 'yarn installAll && yarn start && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }
 