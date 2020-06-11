// var node = {
//     'id'            : '',
//     'previous_node' : '',
//     'g_value'       : previousNode.g_value + 1,
//     'h_value'       : calcularCusto(this.id, dest_node),
// }

class MapNode{
    constructor(id="", 
                name="", 
                previousNode = null, 
                hValue = 0, 
                coordinates = {x: 0, y: 0}, 
                distanceFromPreviouPoint = 0){
        this.id = id;
        this.name = name;
        this.previousNode = previousNode;
        this.x = coordinates.x
        this.y = coordinates.y
        this.gValue = this.previousNode ? this.previousNode.gValue + distanceFromPreviouPoint : 0;
        this.hValue = hValue;
        this.totalValue = this.gValue + this.hValue;
    }
}

function findPath(startNode, endNode){
    const receivedStartNode = startNode;
    const receivedEndNode = endNode;

    const domElementOpenList = document.querySelector("#openList");
    const domElementClosedList = document.querySelector("#closedList");

    function calcularCusto(startNode, endNode = receivedEndNode){
        let custo_x = Math.pow(startNode.x - endNode.x, 2)
        let custo_y = Math.pow(startNode.y - endNode.y, 2)
        return +(Math.sqrt(custo_x + custo_y)).toFixed(2)
    }

    var firstNode = new MapNode(id = startNode.id, 
                                name = startNode.label, 
                                previousNode = null,
                                hValue = calcularCusto(startNode),
                                coordinates = {x : startNode.x , y: startNode.y},
                                distanceFromPreviouPoint = 0);

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
            let gValue = currentNode.gValue + calcularCusto(currentNode, vizinhoAtual)
            let totalValue = gValue + hValue;
            let vizinhoAlreadyAdd = false;
            let openListIndex, closedListIndex;
            closedList.forEach((closedNode, index) => {
                if(vizinhoAtual.id == closedNode.id){
                    if(totalValue > closedNode.totalValue){
                        vizinhoAlreadyAdd = true;
                    }else{
                        closedListIndex = index;
                    }                    
                }
            });            
            openList.forEach((openedNode, index) => {
                if(vizinhoAtual.id == openedNode.id){
                    if(totalValue > openedNode.totalValue){
                        vizinhoAlreadyAdd = true;
                    }else{
                        openListIndex = index;
                    }                    
                }
            });     
            
            if(openListIndex){
                openList.splice(openListIndex, 1);
            }

            if(closedListIndex){
                closedList.splice(closedListIndex, 1);
            }

            if(!vizinhoAlreadyAdd){
                openList.push(new MapNode(id                        = vizinhoAtual.id, 
                                          name                      = vizinhoAtual.label, 
                                          previousNode              = currentNode, 
                                          hvalue                    = hValue, 
                                          coordinates               = {x : vizinhoAtual.x, y : vizinhoAtual.y},
                                          distanceFromPreviouPoint  = calcularCusto(currentNode, vizinhoAtual)
                                        )
                            );
            }
        }   

        // domElementClosedList.innerHTML = "";
        // domElementOpenList.innerHTML = "";
        // closedList.forEach((node) => {
        //     domElementClosedList.innerHTML += `<li>${node.name}</li>`
        // })

        // openList.forEach((node) => {
        //     domElementOpenList.innerHTML += `<li>${node.name}</li>`
        // })
    }

    var lastPoint = closedList[closedList.length - 1]
    var previousPoint  = lastPoint.previousNode;
    var path = []
    var finalValue = lastPoint.totalValue.toFixed(2);
    path.unshift(lastPoint.id)
    while(previousPoint != null){
        lastPoint = previousPoint;
        path.unshift(lastPoint.id);
        previousPoint = lastPoint.previousNode;
    }
    return {
        'finalPath'  : path,
        'openList'   : openList,
        'closedList' : closedList,
        'totalValue' : finalValue
    }
}