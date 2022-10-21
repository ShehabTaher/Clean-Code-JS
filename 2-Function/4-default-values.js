/*  Default within parameters */
// Not Good
function sleep(durationInMilliseconds) {
    durationInMilliseconds = durationInMilliseconds ?? 1000
    return new  Promise(resolve => setTimeout(resolve, durationInMilliseconds))
}
await sleep()

// Good 
function sleep(durationInMilliseconds = 1000) {
    return new  Promise(resolve => setTimeout(resolve, durationInMilliseconds))
}
await sleep()


/*  Object.assign() for default objects*/
// Not Good
function createTask(config){
    // setting default values if neccessary
    config.title = config.title ?? 'untitle task'
    config.category = config.body ?? 'main'
    config.isActive = config.isActive ?? true

    //....
}
createTask({
    title : 'Recording',
    category: 'DevTheory'
})



// Good 
const defaultConfig = {
    title : 'untitle task',
    category: 'main',
    isActive: true
}
function createTask(rowconfig){
    // setting default values if neccessary
 const config = Object.assign(defaultConfig, rowconfig)
    //....
}
createTask({
    title : 'Recording',
    category: 'DevTheory'
})

