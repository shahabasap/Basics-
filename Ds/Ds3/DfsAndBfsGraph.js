class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex]=[]
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    dfs(startVertex) {
        let visited={}
        let stack=[startVertex]
        visited[startVertex]=true
        let result=[]
        while (stack.length)
        {
            let temp=stack.pop()
            result.push(temp)
            for(let val of this.adjacencyList[temp] )
            {
                if(!visited[val])
                {
                    visited[temp]=true
                    stack.push(val)
                }
            }
        }
        return result
    }

    bfs(startVertex) {
        let queue=[startVertex]
        let visited={}
        visited[startVertex]=true
        let result=[]
        while(queue.length)
        {
            let temp=queue.shift()
            result.push(temp)
            for(let val of this.adjacencyList[temp])
            {
                if(!visited[val])
                {
                    visited[val]=true
                    queue.push(val)
                }
            }
            
        }
        return result
    }

    print()
    {
        console.log(this.adjacencyList)
    }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

// console.log('DFS:', graph.dfs('A')); // Output: [ 'A', 'C', 'E', 'B', 'D' ]
// console.log('BFS:', graph.bfs('A')); // Output: [ 'A', 'B', 'C', 'D', 'E' ]
graph.print()

