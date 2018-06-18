module.exports=probotPlugin

const prefixCheck=require('./lib/prefix-check')

function probotPlugin(robot){
	robot.on(['pull_request.opened','pull_request.edited'],prefixCheck)
}