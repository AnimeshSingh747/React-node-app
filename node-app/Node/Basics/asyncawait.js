async function fetchData() {
    try {
        let data = await getData();
    } catch (error) {
        console.error(error);
    }
}