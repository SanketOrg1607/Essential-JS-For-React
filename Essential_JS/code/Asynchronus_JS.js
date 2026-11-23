// In order to fectch a data from api in the browser we have so called Fetch API

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then(data => console.log(data))

// console.log("Sanket");


// Fetch function is asychronus
// returns promise
// one step futher above code is correct but its complex in bigger project


async function getPosts()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log(data)

    return data;
}

const posts = getPosts();

console.log(posts);
console.log("Sanket")

// In react what we want as a we got the data we have to set the States so we can write th code the async function