export const fetchInitialMenu = async () => {
    const response = await fetch('/mock/menu.json');
    if (!response.ok) {
        throw new Error('Failed to fetch initial menu data');
    }
    return response.json();
};

export const fetchInitialReservations = async () => {
    const response = await fetch('/mock/reservations.json');
    if (!response.ok) {
        throw new Error('Failed to fetch initial reservations data');
    }
    return response.json();
};

export const fetchInitialTables = async () => {
    const response = await fetch('/mock/tables.json');
    if (!response.ok) {
        throw new Error('Failed to fetch initial tables data');
    }
    return response.json();
};