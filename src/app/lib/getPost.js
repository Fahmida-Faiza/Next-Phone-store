export default async function getPost(id) {
  // const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await fetch(
    
    `http://localhost:5000/posts/${id}`
  
  );

  return result.json();
}
