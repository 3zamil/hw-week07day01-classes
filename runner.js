class RunTracker {
    
    constructor(name, email) {

        this.name = name
        this.email = email
        this.date = []
        this.destance = []
        this.time = []

    }

    addRun(dateIn, timeIn, destanceIn){
        this.date.push(dateIn)
        this.time.push(timeIn)
        this.destance.push(destanceIn)
}
    totalDistance(){
        
        return this.destance.reduce((prev, curr) => prev + curr)
    }
    longestDistance(){
        return this.destance.reduce((prev, curr) => prev > curr ? prev : curr)
    }
    averageSpeed(){
        //avgtime = this.time.reduce((prev, curr) => prev + curr)
        return this.totalDistance() / this.time.reduce((prev, curr) => prev + curr)
    }
}



const runner = new RunTracker("Salman", "Salman@salman.com");

runner.addRun("2017-01-01", 10, 30)
runner.addRun("2017-01-02", 5, 20)

console.log(runner.totalDistance()) // 50 meters

console.log(runner.longestDistance()) // 30 meters

console.log(runner.averageSpeed()) // 0.3 meters per second