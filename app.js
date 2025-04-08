


function validPos(x, y){
    return x >= 0 && x < 8 && y >= 0 && y < 8
}

function isEnd(currPos, end){
    return currPos[0] == end[0] && currPos[1] == end[1] 
}

function moveKnight(startPos, endPos){
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],[1, -2], [1, 2], [2, -1], [2, 1]]
    
    let queue = [[startPos]]
    let visited = new Set()

    visited.add(startPos.toString())

    while(queue.length > 0){
        let path = queue.shift()
        let currPos = path[path.length - 1]

        if(isEnd(currPos, endPos)){
            return path
        }

        for(const [X, Y] of moves){
            let newX = currPos[0] + X
            let newY = currPos[1] + Y
            const newPos = [newX, newY]

            if(validPos(newX,newY) && !visited.has(newPos.toString())){
                visited.add(newPos.toString())
                const newPath = [...path, newPos]
                queue.push(newPath)
            }
        }
    }
    return null
}

// Knights travails
function main(){
    let board = []
    for(let x = 0; x < 8; x++){
        let row = []
        for(let y = 0; y < 8; y++){
            row.push(0)
        }
        board.push(row)
    }

    let start = [0,0]
    let end = [7,7]
    
    let path = moveKnight(start, end)

    console.log(`The knight made ${path.length - 1} moves`)
    console.log("Path")
    for(let i = 0; i < path.length; i++){
        console.log(`    Step ${i}: ${path[i]}`)
    }

}

main()