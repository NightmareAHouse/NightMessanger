let API_URL = "http://localhost:5000";

if (process.env.NODE_ENV === "production") {
    API_URL = `${window.location.origin}`
}

export { API_URL };
