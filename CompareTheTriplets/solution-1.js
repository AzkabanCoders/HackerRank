process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);

    // Solution
    var alice = 0, bob = 0;

    if (a0 > b0) { alice++; } else if(a0 === b0) {/* Do stuff nothing */} else { bob++ };
    if (a1 > b1) { alice++; } else if(a1 === b1) {/* Do stuff nothing */} else { bob++ };
    if (a2 > b2) { alice++; } else if(a2 === b2) {/* Do stuff nothing */} else { bob++ };

    console.log(alice, bob);

}
