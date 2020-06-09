// var node = {
//     'id'            : '',
//     'previous_node' : '',
//     'g_value'       : previousNode.g_value + 1,
//     'h_value'       : calcularCusto(this.id, dest_node),
// }

class Node{
    constructor(id, previousNode = null, hValue = 0){
        this.id = id;
        this.previousNode = previousNode;
        this.gValue = this.previousNode ? this.previousNode.gValue + 1 : 0;
        this.hValue = hValue;
        this.totalValue = this.gValue + this.hValue;
    }
}

function findPath(origin_node, end_node){
    var originNode = origin_node.data.node
    var endNode = end_node.data.node    

    function calcularCusto(origin_node, dest_node = endNode){
        let custo_x = Math.pow(dest_node.x - origin_node.x, 2)
        let custo_y = Math.pow(dest_node.y - origin_node.y, 2)
        return Math.sqrt(custo_x + custo_y)
    }

    var firstNode = new Node(originNode.id, null, calcularCusto(originNode));

    var openList = [];    
    openList.push(firstNode);

    var closedList = [];
    while(openList.length > 0){
        var shortestPathIndex = 0
        var shortestPath = openList[shortestPathIndex].totalValue;
        var currentNode = openList[shortestPathIndex];
        
        openList.forEach((node, index) => {
            if(node.totalValue < shortestPath){
                shortestPath = node.totalValue;
                currentNode = node;
                shortestPathIndex = index;
            }
            
        })
        
        closedList.push(currentNode);
        openList.splice(openList.indexOf(currentNode), 1);
        if(currentNode.id == endNode.id){
            break;
        }

        var vizinhos = s.graph.neighbors(currentNode.id)

        for(vizinho in vizinhos){
            let vizinhoAtual = vizinhos[vizinho];
            let hValue = calcularCusto(vizinhoAtual);
            let vizinhoAlreadyAdd = false;
            closedList.forEach((closedNode) => {
                if(vizinhoAtual.id == closedNode.id){
                    if(hValue < closedNode.totalValue){
                        vizinhoAlreadyAdd = true;
                    }                    
                }
            });            
            openList.forEach((openedNode) => {
                if(vizinhoAtual.id == openedNode.id){
                    if(hValue < openedNode.totalValue){
                        vizinhoAlreadyAdd = true;
                    }                    
                }
            });
            if(!vizinhoAlreadyAdd){
                openList.push(new Node(vizinhoAtual.id, currentNode, hValue));
            }
        }   
    }

    var lastPoint = closedList[closedList.length - 1]
    var previousPoint  = lastPoint.previousNode;
    var path = []
    var finalValue = lastPoint.totalValue;
    path.unshift(lastPoint.id)
    while(previousPoint != null){
        lastPoint = previousPoint;
        path.unshift(lastPoint.id);
        previousPoint = lastPoint.previousNode;
    }
    return {
        'path'      : path,
        'openList'  : openList,
        'closedList': closedList,
        'totalValue': finalValue
    }
}