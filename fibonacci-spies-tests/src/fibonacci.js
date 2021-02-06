class Fibonacci {

    *execute(input, current = 0, next = 1){

        console.count('execute');

        if(input === 0){

            return 0;

        }

        //return value
        yield current;

        //delegate the function, but doesnt return anything
        yield* this.execute(input - 1, next, current + next);

    }


}

module.exports = Fibonacci;

