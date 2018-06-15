module.exports = robot => {
  // Your code here
  robot.on('issues.opened',async context=>{

  	const params= context.issues({body:'hello owrld!'})
 return context.github.issues.createComment(params)
})
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
