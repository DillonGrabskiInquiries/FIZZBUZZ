function fizzerino() {
    for (var i = 1; i <= 100; i++) {
        var skip = 0;
        if (i % 3 == 0) {
            console.log('fizz');
            skip = 1;
        }
        if (i % 5 == 0) {
            console.log('buzz');
            skip = 1;
        }
        if (!skip) {
            console.log(i);
        }
    }
}

fizzerino()