function binSearch ( arr, data ) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while ( lowerBound<=upperBound ) {
        var middle = Math.floor( ( lowerBound + upperBound ) / 2 );
        if ( arr[ middle ] < data ) {
            lowerBound = middle + 1;
        }
        else if ( arr[ middle ] > data ) {
            upperBound = middle - 1;
        }
        else
            return middle;
    }
    return -1;
}
var arr = [ 1, 2, 3, 4, 5, 6 ];
console.log( binSearch( arr, 5 ) );
