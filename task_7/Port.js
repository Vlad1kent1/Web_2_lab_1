function Port(name) {
    this.name = name;
    this.docks = [];
  }
  
  Port.prototype.addDock = function(dock) {
    this.docks.push(dock);
  }
  
  Port.prototype.editName = function(newName) {
    this.name = newName;
  }
  
  Port.prototype.removeDock = function(dock) {
    const index = this.docks.indexOf(dock);
    if (index !== -1) {
      this.docks.splice(index, 1);
    }
  }
  
  Port.prototype.searchDock = function(name) {
    return this.docks.find(dock => dock.name === name);
  }