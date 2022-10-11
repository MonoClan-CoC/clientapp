export async function getClanDetails() {
    const response = await fetch('http://localhost:7071/api/Function1', {
        method: 'GET',
    })
    return response.json;
}
