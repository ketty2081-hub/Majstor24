const API_URL = "https://front3.edukacija.online/backend/wp-json/wp/v2";

// Dohvati sve majstore
export async function getWorkers() {
  const response = await fetch(`${API_URL}/workers`);

  if (!response.ok) {
    throw new Error("Greška kod dohvaćanja majstora.");
  }

  return await response.json();
}

// Dohvati jednog majstora
export async function getWorker(id) {
  const response = await fetch(`${API_URL}/workers/${id}`);

  if (!response.ok) {
    throw new Error("Majstor nije pronađen.");
  }

  return await response.json();
}

// Dohvati sve rezervacije
export async function getBookings() {
  const response = await fetch(`${API_URL}/bookings`);

  if (!response.ok) {
    throw new Error("Greška kod dohvaćanja rezervacija.");
  }

  return await response.json();
}

// Dodaj novu rezervaciju
export async function createBooking(data) {
  const response = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Greška kod spremanja rezervacije.");
  }

  return await response.json();
}

export async function deleteWorker(id) {
  const response = await fetch(`${API_URL}/workers/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Greška kod brisanja majstora.");
  }

  return await response.json();
}
