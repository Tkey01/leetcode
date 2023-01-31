/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let stack = []
  let visited = {}
  stack.push(edges[source])

  while (stack.length) {
    console.log(stack)
    const [node1, node2] = stack.pop()

    if (node1 === destination || node2 === destination) {
      return true
    }

    if (!(node1 in visited) || node1 < edges.length) {
      stack.push(edges[node1])
      visited[node1] = true
    }
    if (!(node2 in visited) || node2 < edges.length) {
      stack.push(edges[node2])
      visited[node2] = true
    }
  }

  return false
}

console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5,
  ),
)
