export function executeQuery(subgraphUrl,queryString) {
  
  return new Promise(async (resolve, reject) => {
    const queryResult = await fetch(subgraphUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: queryString }),
    });
    const jsonGraph = await queryResult.json();
    resolve(jsonGraph);
  });
}