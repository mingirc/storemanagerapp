// Defines the upper directory with given step.
// Example: if step is 0, upper directory equals the existing diretory.
// Example: if step is 2, upper directory equals two up directory.
const upperDirectory = step => {

    const currentLocation = window.location.pathname
    const currentLocationArray = currentLocation.split('/')

    if(step){
        for(let i = 0; i < step; i++){
            currentLocationArray.pop()    
        }
    }

    let upperLocation;
    if(currentLocationArray.length > 1){
        upperLocation = currentLocationArray.join('/')
    }
    else{
        upperLocation = '/'
    }
    
    return upperLocation
}

export default upperDirectory;