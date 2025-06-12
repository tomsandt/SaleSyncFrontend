const BASE_URL = 'http://localhost:8080/frontend/v1';

export async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    if (!response.ok) throw new Error("Error while fetching data.");
    return await response.json();
}

export async function addData(endpoint, newObject) {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newObject),
    });
    console.log(`POST request to: ${BASE_URL}/${endpoint}`, newObject);
    return await response.json();
}

export async function updateData(endpoint, id, updatedObject) {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedObject),
    });
    console.log(`PUT request to: ${BASE_URL}/${endpoint}`, updatedObject);
    return await response.json();
}

export async function deleteData(endpoint, id) {
    await fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" });
    console.log(`DELETE request to: ${BASE_URL}/${endpoint}`);
}