var task = function(name) {
    this.name = name;
    this.completed = false;
}

task.prototype.complete = function() {
    console.log('completing task for ' + this.name);
    this.completed = true;
}

task.prototype.save = function() {
    console.log('saving task for ' + this.name);
}

var urgentTask = function(name, priority) {
    task.call(this, name);
    this.priority = priority;
}
urgentTask.prototype = Object.create(task.prototype);

var myUrgentTask = new urgentTask('legacy', 1);
myUrgentTask.complete();
myUrgentTask.save();