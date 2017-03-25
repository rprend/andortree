console.log(' dfgbhnj');
function DataNode(val,name='NODE'){
  this.val = val;
  this.children = [];
  this.name = name;
  this.eval = function() {
    return val;
  }
}

function OperatorNode(func, name='UNTITLED') {
  this.children = []
  this.name = name;
  this.eval = function() {
    console.log('you are in here');
    if(func === 'OR') {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].eval()) {
          return true;
        }
      }
      return false;
    } else if (func === "AND") {
      for (var i = 0; i < this.children.length; i++) {
        if (!this.children[i].eval()) {
          return false;
        }
    }
    return true;
    }
    return null;
  };
  this.addChild = function(node) {
    this.children.push(node);
  }
}

function Tree(data,name="Tree") {
  var node = new OperatorNode(data);
  this._head = node;
}
Tree.prototype.traverseDF = function(callback) {
     (function recurse(currentNode) {
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
          console.log(currentNode.eval());
          recurse(currentNode.children[i]);
        }
        callback(currentNode);
      })(this._root);
};

var tree = new Tree("AND", "you have the cancer");

tree.traverseDF(function(node){
  console.log(node.eval());
});

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
