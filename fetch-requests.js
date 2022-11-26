/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here

function phaseOne () {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    }

    return fetch("/products", options)
}



/* ============================== Phase 2 ============================== */

// Your code here

function phaseTwo() {

    const options = {
        method: "Post",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
    }

    return fetch("/products", options)
        .then(response => {
        console.log(response.status)
        console.log(response.headers.get("Content-Type"))
        console.log(response.body)
        console.log(response.url)
        console.log(response.redirected)
        console.log(response.url)
        return response.text()

        })
        .then(result => console.log(result))
        .catch(error => console.log('There was an error..' + error))
}



/* ============================== Phase 3 ============================== */

// Your code here

function phaseThree() {

    const body = new URLSearchParams({
        name: "Caribbean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
      });
    
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: body
    }

    fetch("/products", options)
        .then(response => {
        console.log(response.status)
        console.log(response.headers.get("Content-Type"))
        console.log(response.url)
        console.log(response.body)
        return response.text()
        })
        .then(pageText => console.log(pageText))
        .catch(error => console.log('An Error Occurred...', error))
}