module.exports = prefixCheck

async function prefixCheck (context) {
  const {pull_request: pr} = context.payload
  const actions = getPrefixNames()
  const match = title => {
    var valid = false
    for (var i = 0; i < actions.length; i++) {
      if (title.indexOf(actions[i]) === 0) {
        valid = true
      }
    }
    return valid
  }
  if (!match(pr.title)) {
    try {
      await context.github.repos.createStatus(context.repo({
        sha: pr.head.sha,
        state: 'error',
        target_url: 'https://github.com/apps/wip',
        description: 'Invalid Title',
        context: 'Title Format Error'
      }))
      console.log(`correct format`)
    } catch (error) {
      console.log(`error `)
    }
  }
}

function getPrefixNames () {
  const path = require('../package.json')
  const names = Object.assign({
    'prefix': {
      'types': []
    }
  }, path.config)
  return names['prefix'].types
}
