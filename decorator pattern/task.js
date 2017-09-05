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

var legacyTask = new task('Legacy Task');
legacyTask.complete();
legacyTask.save();

var urgentTask = new task('Urgent Task');
// decorating urgentTask with priority and function notify, also overriding the save function
urgentTask.priority = 2;
urgentTask.notify = function() {
    console.log('notifying important people')
}
urgentTask.save = function() {
    this.notify();
    this.__proto__.save.call(this);
}

urgentTask.complete();
urgentTask.save();