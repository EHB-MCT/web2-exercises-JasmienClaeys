window.onload = () => {
    let promise = new Promise((resolve, reject) => {
        console.log('Start of promise');

        setTimeout(() => resolve("I AM DONE!"), 2000);
        console.log('End of promise');
        // reject('ITS BROKEN');

    });

    promise.then(
        result => console.log(result),
        error => console.log(error)
    );

    promise.catch( //to catch errors
        error => console.log('test')
    );

}