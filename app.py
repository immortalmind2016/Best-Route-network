from flask import Flask,request,render_template
app = Flask(__name__, static_url_path='',static_folder="./")
from flask import jsonify


import sys 
sys.maxint=99999999
class Graph(): 
  
    def __init__(self, vertices): 
        self.V = vertices 
        self.graph = [[0 for column in range(vertices)]  
                    for row in range(vertices)] 
  
    '''def printSolution(self, dist): 
        print "Vertex \tDistance from Source"
        for node in range(self.V): 
            print node, "\t", dist[node] 
            '''
  
    # A utility function to find the vertex with  
    # minimum distance value, from the set of vertices  
    # not yet included in shortest path tree 
    def minDistance(self, dist, sptSet): 
  
        # Initilaize minimum distance for next node 
        min = sys.maxint 
  
        # Search not nearest vertex not in the  
        # shortest path tree 
        min_index=dist[0]
        for v in range(self.V): 
            if dist[v] < min and sptSet[v] == False: 
                min = dist[v] 
                min_index = v 
  
        return min_index 
  
    # Funtion that implements Dijkstra's single source  
    # shortest path algorithm for a graph represented  
    # using adjacency matrix representation 
    def dijkstra(self, src): 
  
        dist = [sys.maxint] * self.V 
        dist[src] = 0
        sptSet = [False] * self.V 
  
        for cout in range(self.V): 
  
            # Pick the minimum distance vertex from  
            # the set of vertices not yet processed.  
            # u is always equal to src in first iteration 
            u = self.minDistance(dist, sptSet) 
  
            # Put the minimum distance vertex in the  
            # shotest path tree 
            sptSet[u] = True
  
            # Update dist value of the adjacent vertices  
            # of the picked vertex only if the current  
            # distance is greater than new distance and 
            # the vertex in not in the shotest path tree 
            for v in range(self.V): 
                if self.graph[u][v] > 0 and sptSet[v] == False and dist[v] > dist[u] + self.graph[u][v]: 
                        dist[v] = dist[u] + self.graph[u][v] 
        return dist
    
        def BellmanFord(self, src): 

        # Step 1: Initialize distances from src to all other vertices 
        # as INFINITE 
            dist = [float("Inf")] * self.V 
            dist[src] = 0 


            # Step 2: Relax all edges |V| - 1 times. A simple shortest  
            # path from src to any other vertex can have at-most |V| - 1  
            # edges 
            for i in range(self.V - 1): 
                # Update dist value and parent index of the adjacent vertices of 
                # the picked vertex. Consider only those vertices which are still in 
                # queue 
                for u, v, w in self.graph: 
                    if dist[u] != float("Inf") and dist[u] + w < dist[v]: 
                            dist[v] = dist[u] + w 

            # Step 3: check for negative-weight cycles.  The above step  
            # guarantees shortest distances if graph doesn't contain  
            # negative weight cycle.  If we get a shorter path, then there 
            # is a cycle. 

            for u, v, w in self.graph: 
                    if dist[u] != float("Inf") and dist[u] + w < dist[v]: 
                           
                            return
            return dist
        
        #self.printSolution(dist) 
  
# Driver program 

  
from flask_cors import CORS
CORS(app)

@app.route('/')
def hello():
    return app.send_static_file('index.html')

@app.route('/start-dij',methods=["POST"])
def dij():

    data=request.json
    g = Graph(data["size"]) 
    g.graph =data["finalGraph"]
    x=[]
    for i in range(data["size"]):
        x.append(g.dijkstra(i))
    print(x)
    return jsonify(x)
@app.route('/start-bel',methods=["POST"])
def bel():
    data=request.json
    g = Graph(data["size"]) 
    g.graph =data["finalGraph"]
    x=[]
    for i in range(data["size"]):
        x.append(g.BellmanFord(i))
    print(x)
    return jsonify(x)
if __name__ == '__main__':
    app.run()