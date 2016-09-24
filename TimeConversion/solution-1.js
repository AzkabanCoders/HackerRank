// Check Fiddle
// https://jsfiddle.net/EmilioAiolfi/rvyxrc3z/

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
    // Solution
    var time = readLine();
    let timePieces = time.split(':');
    let hours = Number(timePieces[0]);
    let minutes = timePieces[1];
    let seconds = timePieces[2].substr(0, 2);
    let periodAMPM = timePieces[2].slice(2).toLowerCase();

    if (periodAMPM === "am" && hours === 12) hours = 0;
    if (periodAMPM === "pm" && hours < 12) {hours = hours + 12};
    if (hours < 10) hours = "0" + hours;

    console.log([hours, minutes, seconds].join(":"));
}
