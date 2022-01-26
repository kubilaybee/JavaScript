async function fetchPosts() {
  const tempData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await tempData.json();
  console.log(tempData);
  tempData.forEach((i) => {
    console.log("i", i);
  });
}
fetchPosts();
