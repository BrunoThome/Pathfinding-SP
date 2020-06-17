/** Classe de MapNode, objetos para controle dentro do algoritmo A*
 * 
 *  @member {String}    id           Identificador do MapNode, o mesmo do node da instância
 *  @member {String}    name         Nome do MapNode, mais amigável para apresentavel
 *  @member {MapNode}   previousNode Objeto MapNode anterior ao que está sendo criado
 *  @member {Float}     x            Coordenada X do MapNode
 *  @member {Float}     y            Coordenada Y do MapNode
 *  @member {Float}     gValue       Valor G do MapNode, é a soma do gValue do previousNode 
 *                                   + a distância do previousNode até o nó que está sendo criado
 *  @member {Float}     hValue       Valor da Heuristica do MapNode que está sendo criado, é a 
 *                                   distância euclidiana entre o nó que está sendo criado e o 
 *                                   endNode
 *  @member {Float}     totalValue   Soma do gValue + hValue
 */
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


/** Função para busca de um caminho através do algoritmo A* 
 *  recebe como parametro a estação de inicio e a estação de fim
 *  
 * @param {sigma.graph.node}    startNode   Estação inicial para busca do caminho
 * @param {sigma.graph.node}    endNode     Estação final para busca do caminho
*/
function findPath(startNode, endNode){

    const receivedStartNode = startNode;
    const receivedEndNode = endNode;

    const domElementOpenList = document.querySelector("#openList");
    const domElementClosedList = document.querySelector("#closedList");

    var caminhoEncontrado = false;

    /** Função para calcular o valor heuristico do nó que está sendo
     *  criado, o endNode por padrão vai ser sempre o nó final
     * 
     *  @param {sigma.graph.node}   startNode   Nó inicial, é o nó que está sendo criado 
     *  @param {sigma.graph.node}   endNode     Nó objetivo
     *  @return {Float}                         Valor heuristico do nó que está sendo criado
     */
    function calcularCusto(startNode, endNode = receivedEndNode){
        let custo_x = Math.pow(startNode.x - endNode.x, 2)
        let custo_y = Math.pow(startNode.y - endNode.y, 2)
        return +(Math.sqrt(custo_x + custo_y)).toFixed(2)
    }

    /** Primeiro MapNode criado, é o nó inicial.
     *  Possui custo G = 0.
     */
    var firstNode = new MapNode(id = startNode.id, 
                                name = startNode.label, 
                                previousNode = null,
                                hValue = calcularCusto(startNode),
                                coordinates = {x : startNode.x , y: startNode.y},
                                distanceFromPreviouPoint = 0);
    
    /** Declaração da lista de nós abertos, inicialmente vazia mas o primeiro
     *  nó a ser adicionado é o nó inicial, criado anteriormente
     */
    var openList = [];    
    openList.push(firstNode);
    
    /** Declaração da lista de nós fechados, inicialmente vazia */
    var closedList = [];

    var stateList = [];
    
    /** Loop para percorrer a lista de nós abertos enquanto existirem nós ou até
     *  que o nó objetivo seja o nó atual
     */
    while(openList.length > 0){
        
        /** Lógica para definir o nó com menor totalValue dentre as opções da lista de abertos.
         *  Por padrão sempre pega o primeiro elemento da lista de abertos e percorre o restante
         *  da lista de abertos verificando se algum totalValue é menor. Se for menor, o shortestPath
         *  passa a ser o totalValue desse node e o currentNode passa ser ele também
         */
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
        
        /** Adiciona o nó atual, aquele com o menor total value da lista de nós abertos, à lista
         *  de nós fechados e o remove da lista de nós abertos
         */
        closedList.push(currentNode);
        openList.splice(openList.indexOf(currentNode), 1);

        stateList.push(currentNode);
        /** Verifica se o nó atual é o nó objetivo, se for interrompe o loop e indica que o
         *  caminho foi encontrado
         */
        if(currentNode.id == endNode.id){
            caminhoEncontrado = true;
            break;
        }

        /** Chama a função neighbors passando o id do nó atual como parametro e atribui a lista
         *  de vizinhos à variavel "vizinhos"
         */
        var vizinhos = s.graph.neighbors(currentNode.id)


        /** Percorre a lista de vizinhos e um por vez calcula o hValue, o gValue - tendo o
         *  nó atual como nó inicial e o vizinho atual como nó final - e o totalValue.
         *  Em seguida percorre a lista de nós abertos e a lista de nós fechadas e verifica se o 
         *  vizinho atual ja existe em alguma lista e se possui um totalValue melhor, se existir 
         *  e for uma configuração melhor, anota o index do nó na lista em que atendeu os requisitos,
         *  remove o nó do index anotado e adiciona o novo nó a lista de abertos
         */
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

    }

    /** Se o caminho foi encontrado, seleciona o ultimo nó adicionado a lista de fechados
     *  e o nó antecessor como sendo o previousNode desse nó. Enquanto existir o previousNode
     *  ele adiciona ao vetor do path. O final value é o totalValue do ultimo ponto, que é a soma
     *  de todos os custos G do inicio até o objetivo + o valor da Heuristica - que nesse caso é
     *  0
     */
    if(caminhoEncontrado){
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
            'stateList'  : stateList,
            'totalValue' : finalValue
        }
    }else{
        return {
            'finalPath' : null
        }
    }
}
    