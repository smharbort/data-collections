const CSVString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//                                                              Part One: Refactoring CSV Parsing Code
const splitByLines = CSVString.split('\n')

const columnHeaders = splitByLines[0]                   // split the string into individual lines and store in separate variables
const row1 = splitByLines[1]
const row2 = splitByLines[2]
const row3 = splitByLines[3]
const row4 = splitByLines[4]

const columnHeadersParsed = columnHeaders.split(',')    // parse each line by commas, creating array with arr.length equalling the number of data cells in that row
const row1Parsed = row1.split(',')
const row2Parsed = row2.split(',')
const row3Parsed = row3.split(',')
const row4Parsed = row4.split(',')

//              test that each row is an array
/* console.log(row1Parsed + '\n')
console.log(row2Parsed + '\n')
console.log(row3Parsed + '\n')
console.log(row4Parsed) */

const halfTable = row1Parsed.concat(row2Parsed)         // concatenate it all into one array
const otherHalf = row3Parsed.concat(row4Parsed)
const fullTable = halfTable.concat(otherHalf)

/* console.log(fullTable)
console.log(typeof fullTable)                           // prints 'object', but it is an array-- I guess because array is also a type of object.
console.log(fullTable.length) */

for (let i = 0; i < columnHeadersParsed.length; i++) {
    
    console.log(columnHeadersParsed[i])                 // forgot about printing column headers first so I'm doing that separately, inefficiently here to turn in assignment
}

for (let i = 0; i < fullTable.length; i++) {
    
    console.log(fullTable[i])                           // simple loop thru array to print each cell to console after printing all column headers
}

//                                                              PART TWO: Expanding Functionality
function parseCSVData (string) {

    const CSVLines = string.split('\n')
    const parsedByCells = []

    for (let i = 0; i < CSVLines.length; i++) {

        parsedByCells.push(CSVLines[i].split(','))

    }

    return parsedByCells
}

const parsedCSVString = parseCSVData(CSVString)
// console.log(parsedCSVString)

/* const CSVString2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`
const parsedCSVString2 = parseCSVData(CSVString2)
console.log(parsedCSVString2)
console.log(typeof parsedCSVString2) */

//                                                              PART THREE: Transforming Data-- NOT FINISHED YET

/* function arrToObj (array3D) {

    newParsedByCells = []

    for (let i = 0; i < array3D[0].length; i++) {

        console.log(array3D[0][i])
    }

    array3D.forEach((object_ify) => {
        // console.log('does work or?')

        
        newParsedByCells.push({})
    })

}

const tryThis = arrToObj(parsedCSVString) */