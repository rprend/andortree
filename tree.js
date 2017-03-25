function DataNode(val,name='NODE'){
  this.val = val;
  this.name = name;
  this.eval = function() {
    return val;
  }
}

function OperatorNode(func, name='UNTITLED') {
  this.children = []
  this.name = name;
  this.eval = function() {
    if(func === 'OR') {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].eval()) {
          return true;
        }
      }
      return false;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (!this.children[i].eval()) {
          return false;
        }
      }
      return true;
    }
  };
  this.addChild = function(node) {
    this.children.push(node);
  }
}

var strep = new OperatorNode('AND', "Strep");
var flu = new OperatorNode('OR', "Flu");

var lymphNode = new DataNode(false, "LymphNodesSwollen?");
var soreThroat = new DataNode(false, "SoreThroat");
var headAche = new DataNode(false, "Headache")
var tempAbove100 = new DataNode(false, "TempAbove100");


strep.addChild(lymphNode);
strep.addChild(soreThroat);

flu.addChild(tempAbove100);
flu.addChild(soreThroat);
flu.addChild(headAche);

console.log("Strep? " + strep.eval());
console.log("Flu? " + flu.eval());
