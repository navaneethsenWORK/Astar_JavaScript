/**
 * Created by Navaneeth Sen on 2015/08/23.
 */

var arr1 = ["@^.^~****^*~~.~^~..~~~^~.^~.*~**.^^*^*^~..*^^..~^.",
    "*.*~*.~^^^~~.*~*.**.~~^*^**.^~*^^.*^...^..^.**.~^*",
    "^^***~.*^*^..^**.~~~.~*.~^^~^~^.^~^*~**.~*^.^**.*.",
    "*~~.~^.~*~^~^^*^**.~.*^^*~~^^*~.^.*^^*^.^.~~^^^*~.",
    "*.^~^^.~^.^.^^*~^~~*^..^~^~~^.*^^..**.**~.~~^~*~**",
    "^.^^~^.*~**.*~*^*~^*~~^.^.~.~^**~.^^^^*.~.~~~^^.^.",
    "*~~.*.^~~~^*.^*~~~*^.^**^*^.^.^~~***^^*^.~^^.^^.~.",
    ".~.*~~^*.**.~^^~**^.^.^~~~^.~.^~~^^.~^^.^^~.~.~.*^",
    ".^^^~~*~.^.~.*~.~~..~*~^.~**~..^****~.*~^~~*~**^~^",
    "^^^*^^**...*.^^*^^^.*~*~^^~*~~.~****~~~~***.^^~~^~",
    "..*^^^^^.^~.^~.^.^^~*~^*~**^*^.~~~*^.^^~**~*~.....",
    "**.^~~~^~*~****.**^~.^.*^^^~.^...~.**^^^^~^.~^~.~*",
    "^*~.*.~*^.~.^^^^^*~.**~^.*^*.~~..^~~~*~*^.~~^*^*^^",
    "~*^.^..**~**^*^~***^~~*^*.*~..~^^***^.*~.^*^^^^.~.",
    "*~^~^**^^*^^~^*~^^*~~~*^*~~~~*~^^^*~..~~~~~.*~^~*.",
    "^.*.^*^**^^^~**.*.~^~~~^..~~~*~~^*~..^^.^~*.^~^~**",
    ".***^..*^~~~~^~.*^~~.*.~^.^^*.***^~^.*....~.^.*~^^",
    "^^~~~~.**.*.^^*.^~~^....*~*^~*^^.^~~~^*.~^^^~**^~~",
    "^~~*^*.~.*^^^*^.*..~*...~**^.^^~.^^.^..^.^**.^^..*",
    "~^***~^.~.~^^^*~~~.*..^~^^.~^.~.**...~^~**~^~~**^~",
    "~~~^~.^*.^*.~*.*~~^..~*^^~~**.*.*.~^^^..^.~^.*.^~~",
    "^^~...^.*~.^^**~^~*..^~^~*....^.^^**~.*.^^*..~*~.*",
    "^..^...~.~.*.~***~*~~*..~*~^^~~^~**^~~^*^^~*.~*^*^",
    "*^.**^~*****.~~~..~^~.*.^*~^.^^*^..*~^.^.^*.^.~^^*",
    "~...~*^....*^.*^^*...^.~~..^.*~.*~.*^.^*^*^.****^~",
    "^..~***^.*^~~.****.~*^.~.^~*.~^*^~^.****~..~*..*^~",
    ".~^~**~^^..~~~^..*~*.^**~..^^*.~.*..*~~*~.^~.~*~~.",
    ".***~..~**^.~.~.~*.~~**..^.^~..~*~~~~*.**~~^..^.^^",
    "~.*.~^*^*~^.~*..*~^~~.*.*..*.*..^~.*~^^*.~^.^~^**^",
    ".*^~^^*.^*.~*...*~~~*.**.~...*.*^.^*.^*~*.^~^**^*.",
    ".~..*....~..~.***~..~^..~~^*^*^~^^~~**^.*~**^**^^*",
    "^.*.~.^.**^*^.~^^*.~..*^~*^***.~**..^.~~*..^*^~*.~",
    "^~~^~~*.~^^~~^**.^.^^^*^.*^^~~.^.*~^*^^..**..**..^",
    "^.^*.*^..*.~~.^^***^.*~..~.**^*.~^...^^~*.~^~^..~~",
    "~^^.^..*^^.**.~~^*~*^~*~^~~.~*.^~.~*^~*.*..^.^^*^*",
    "^^.~*^~~*.~~*~.^..~*.^.~**.^*^.^~.**.~*.~...~~..*.",
    ".~..^.~.~.^*.~^*~.~.*^*~~*.^.******~*~~*^~~~^.~~*~",
    "~.*..^^*^~*.~~.~.^~..~.~^^^.*~*.**~^*~*^*^^~..^~^^",
    "*.^*^**^*.^^*....**..~^^~.^*^.*~*^**^^..*.^^*^^^.~",
    "^*^~^^*.~*~^*~^~~.*.^*^~*^^~.*~.*~.**.*~^~~.~*^~~*",
    "~~**~*.^.*~..~~^^^~^^^.~***^*.^*~^*~^~*~**...~..~.",
    "*~**^~~.^.*.~^**~*^^.*^*.^~~*~~~*^.*..~~^*^.*^.^.*",
    ".*^~..*~.*^^^^^~~^^*.~*.~~~.***~^.*..~~******~~^*.",
    ".^^..^.^*^~^.~*...**~~~.**^*~~~*^***~^*^~^~~^^^*.*",
    "**.**~.**~.*.*^~~.~^.*^.~~*.^*.~.***~*^^..~*.~*^*^",
    "~..^.****^.****~^~***..^^^^*^.~*^^*.~~.^**^*~^*.~~",
    "^*~^.~*...^^.^~.^^..~^...**...^****^*~*~*^..~^*~.~",
    "...^~^.~^^~~~~.*^~.^~***~~^^^.*^^.~.^*~*~**^***^~^",
    ".~~~~~^^.~~*^.~^^^**~^~.^~^~*..^*~^^*..*~^~**.*.^.",
    "~^**.~**..*^~^^^.^*^~^~*^.~*~.^.**.^.^^.~**^~~^~^X"];

//Test array 2
var arr2 = ["@*^^^",
    "~~*~.",
    "**...",
    "^..*~",
    "~~*~X"];

//Test aarray 3
var arr3 = ["@.^^**^^.*",
    ".*^*^**.~~",
    "..*^^*^~**",
    "^^^^^.^^*~",
    ".~.^^.....",
    "~^.~*^.*.*",
    ".^^...*^.~",
    "***~*^*~**",
    ".....*~^~^",
    ".*.*.*^^X~"];

// Map Class
var startNode;
var endNode;

var colLength;
var rowLength;

var NodeType = {DEFAULT: 0, LAND: 1, FOREST: 2, MOUNTAIN: 3, WATER: 4};

var nodes = [];
function Map(map) {

    var node;
    colLength = map.length;
    rowLength = map[0].length;

    for (var x = 0; x < colLength; x++) {
        var row = map[x];
        nodes[x] = new Array(rowLength);
        for (var y = 0; y < rowLength; ++y) {
            switch (row[y]) {
                case '@':
                    node = new Node(x, y, NodeType.DEFAULT, 1, row[y], "Start");
                    startNode = node;
                    break;
                case 'X':
                    node = new Node(x, y, NodeType.DEFAULT, 1, row[y], "End");
                    endNode = node;
                    break;
                case '.':
                    node = new Node(x, y, NodeType.LAND, 1, row[y], "Flatland");
                    break;
                case '*':
                    node = new Node(x, y, NodeType.FOREST, 2, row[y], "Forest");
                    break;
                case '^':
                    node = new Node(x, y, NodeType.MOUNTAIN, 3, row[y], "Mountain");
                    break;
                case '~':
                    node = new Node(x, y, NodeType.WATER, 999, row[y], "Water");
                    break;
                default:
                    console.log("Don't know what this symbol is - " + row[y]);
                    node = null;
                    break;
            }
            nodes[x][y] = node;
        }
        //Assign the Nodes to the class variable
        this.nodes = nodes;
    }
}

// Some getters
Map.prototype.getStartNode = function () {
    return startNode;
};

Map.prototype.getEndNode = function () {
    return endNode;
};

Map.prototype.getMapWidth = function () {
    return rowLength;
};

Map.prototype.getMapHeight = function () {
    return colLength;
};

Map.prototype.toString = function () {

    var rows = this.getMapWidth();
    var cols =  this.getMapHeight();
    var nodes = this.nodes;

    var line = "";
    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            line += nodes[r][c].data;
        }
        line += "\n";
    }
    return line;
};

//Node Class
function Node(x, y, type, weight, data, name) {
    this.data = data;
    this.x = x;
    this.y = y;
    this.type = type;
    this.weight = weight;
    this.name = name;
}

Node.prototype.isWalkable = function () {
    return this.type != NodeType.WATER;
};

Node.prototype.toString = function () {
    return "{" + this.name + "} " + this.movementCostFromStart + "\n";
};

// A* Algorithm
var a_star = {
    clear: function (nodeMap) {
        for (var x = 0; x < nodeMap.length; x++) {
            for (var y = 0; y < nodeMap[x].length; y++) {
                nodeMap[x][y].movementCostFromStart = 0;
                nodeMap[x][y].heuristicCost = 0;
                nodeMap[x][y].parent = null;
            }
        }
    },
    find: function (map, heuristic, allowDiagonalMovement) {

        //Get the nodes in the map fo further processing
        var grid = map.nodes;

        // reset the lists for starting a new search
        a_star.clear(grid);

        // setting the default to manhattan
        heuristic = heuristic || a_star.manhattan;

        // allow diagonal movement in the cells, default to true
        this.allowDiagonalMovement = allowDiagonalMovement || true;

        // List to store the nodes for calculation
        var openList = [];

        // List to store the nodes which were checked for goodness
        var closedList = [];

        // Add the startNode to the openList
        openList.push(map.getStartNode());

        // while we haven't reached the end node
        while (openList.length > 0) {

            // Get the first node from the not-searched list(It will be sorted based on the lowest cost)
            var currentNode = openList[0];

            // Is our current node the end node? then DONE!
            if (currentNode == map.getEndNode()) {
                var curr = currentNode;
                var ret = [];
                while (curr.parent) {
                    ret.push(curr);
                    curr = curr.parent;
                }
                //Adding the Start Point
                ret.push(curr);
                return ret.reverse();
            }

            // Remove the searched node from the openList
            openList.splice(0, 1);
            // move current Node to the already searched list
            closedList.push(currentNode);

            // get all the valid neighbours to the current node
            var neighbours = a_star.getNeighbours(grid, currentNode);

            // See if we can get the best neighbour to jump to
            for (var i = 0; i < neighbours.length; i++) {
                var neighbour = neighbours[i];

                // The node is in closed List, means we have seen this node before
                if (closedList.indexOf(neighbour) != -1) {
                    continue;
                }

                // continue if the neighbour is not walkable
                if (neighbour.isWalkable()) {

                    // how far is this neighbour from the current node - theoretical g-score
                    // current Nodes MovementCostFromStart + distance between the nodes + weight of the neighbour node
                    // The g-score is the shortest distance from startNode to currentNode.
                    var neighbourMovementCostFromStart = currentNode.movementCostFromStart + neighbour.weight + this.distanceBetweenNodes(currentNode, neighbour);
                    var isGoodNeighbour = false;

                    // neighbour with the lower movement cost from start than cif we move from current to that node
                    if (openList.indexOf(neighbour) != -1)
                    {
                        isGoodNeighbour = neighbourMovementCostFromStart < neighbour.movementCostFromStart;
                    }
                    else{
                        openList.push(neighbour);

                        // most of the walkable neighbours, closer to teh startNode is good for a jump
                        isGoodNeighbour = true;
                    }

                    // set neighbors parameters if it a good neighbour
                    if (isGoodNeighbour) {
                        neighbour.parent = currentNode;
                        neighbour.movementCostFromStart = neighbourMovementCostFromStart;
                        neighbour.heuristicCost = heuristic(neighbour, map.getEndNode());
                    }
                }
            }
            openList.sort(sortFunction);
        }

        // No path could be calculated
        return [];
    },
    manhattan: function (node1, node2) {
        var d1 = Math.abs(node2.x - node1.x);
        var d2 = Math.abs(node2.y - node1.y);

        return d1 + d2;
    },
    diagonal: function (node1, node2) {

        var D = 1;
        var D2 = Math.sqrt(2);

        var d1 = Math.abs(node1.x - node2.x);
        var d2 = Math.abs(node1.y - node2.y);

        return ((D * (d1 + d2)) + ((D2 - (2 * D)) * Math.min(d1, d2)));
    },
    /**
     * Returns the list of Neighbour nodes of this node
     *
     * Node Neighbours
     * ________________
     * |    |    |    |
     * | NW | N  | NE |
     * ----------------
     * |    |    |    |
     * | W  | *  | E  |
     * ----------------
     * |    |    |    |
     * | SW | S  | SE |
     * ----------------
     * @param gridMap
     * @param node
     * @returns {Array}
     */
    getNeighbours: function (gridMap, node) {
        var ret = [];
        var x = node.x;
        var y = node.y;

        // West
        if (gridMap[x - 1] && gridMap[x - 1][y]) {
            ret.push(gridMap[x - 1][y]);
        }

        // East
        if (gridMap[x + 1] && gridMap[x + 1][y]) {
            ret.push(gridMap[x + 1][y]);
        }

        // South
        if (gridMap[x] && gridMap[x][y - 1]) {
            ret.push(gridMap[x][y - 1]);
        }

        // North
        if (gridMap[x] && gridMap[x][y + 1]) {
            ret.push(gridMap[x][y + 1]);
        }

        if (this.allowDiagonalMovement) {
            // Southwest
            if (gridMap[x - 1] && gridMap[x - 1][y - 1]) {
                ret.push(gridMap[x - 1][y - 1]);
            }

            // Southeast
            if (gridMap[x + 1] && gridMap[x + 1][y - 1]) {
                ret.push(gridMap[x + 1][y - 1]);
            }

            // Northwest
            if (gridMap[x - 1] && gridMap[x - 1][y + 1]) {
                ret.push(gridMap[x - 1][y + 1]);
            }

            // Northeast
            if (gridMap[x + 1] && gridMap[x + 1][y + 1]) {
                ret.push(gridMap[x + 1][y + 1]);
            }
        }
        return ret;
    },
    /**
     * The distance between two nodes
     * @param node1
     * @param node2
     * @returns {number}
     */
    distanceBetweenNodes: function (node1, node2) {
        // if the nodes are located towards the vertical or horizontal to each other, return 0
        // this is returning zero, as the weight of the node will be used for calculating the cost
        if ((node1.x == node2.x) || (node1.y == node2.y)) {
            return 0;
        }
        // if they are diagonal to each other return diagonal distance: sqrt(1^2+1^2) - Pythagoras Theorem
        // why this is returning 0.4 is this is the difference in moving diagonally, the other cost will be calculated from the weights
        else {
            return 0.4;
        }
    }
};

/**
 * Compares the object based on the fCost.
 * Helps in keeping the List sorted
 * @param node1
 * @param node2
 * @returns {number}
 */
function sortFunction(node1, node2) {
    var node1fCost = node1.movementCostFromStart + node1.heuristicCost;
    var node2fCost = node2.movementCostFromStart + node2.heuristicCost;

    if (node1fCost < node2fCost) {
        return -1;
    }
    else if (node1fCost > node2fCost) {
        return 1;
    }
    else {
        return 0;
    }
}

/**
 * The main method that runs the algorithm
 * @param rawMap
 */
function runAStarSearch(rawMap) {
    var map = new Map(rawMap);

    //Prints the rawMap
    console.log(map.toString());

    //Get the searched Path
    var result = a_star.find(map, a_star.manhattan, true);

    console.log(result.toString());
}

runAStarSearch(arr1);

// Need to re-plot the graph with the path
