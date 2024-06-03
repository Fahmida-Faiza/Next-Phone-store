

export default async function getAllPosts(){
    // const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await fetch("http://localhost:5000/posts");
    
    return result.json();
}

