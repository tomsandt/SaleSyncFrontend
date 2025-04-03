export async function fetchData(endpoint) {
    const response = await fetch("/customers.json"/*`/api/${endpoint}`*/)
    if (!response.ok) throw new Error("Error while fetching data.");
    return await response.json();
}

export async function updateData(endpoint, id, updatedObject) {
    const response = await fetch(`/api/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedObject),
    });
    console.log(`PUT request to: /api/${endpoint}/${id}`, updatedObject);
    return await response.json();
}

export async function deleteData(endpoint, id) {
    await fetch(`/api/${endpoint}/${id}`, { method: "DELETE" });
    console.log(`DELETE request to: /api/${endpoint}/${id}`);
}

export async function addData(endpoint, newObject) {
    const response = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
    });
    console.log(`POST request to: /api/${endpoint}`, newObject);
    return await response.json();
}