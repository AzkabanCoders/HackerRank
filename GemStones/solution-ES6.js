// Check Fiddle
// https://jsfiddle.net/EmilioAiolfi/4L5kzooa/

// Solution
function processData(input) {
    console.log( new Set(input.toLowerCase()
        .split('\n')
        .slice(1)
        .map(rock => rock.split(''))
        .reduce((prev, curr) => curr.filter(element => prev.includes(element)))
    ).size );
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
