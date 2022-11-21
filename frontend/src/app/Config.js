let API_URL = "http://185.229.224.9:5000/";

if (process.env.NODE_ENV === "production") {
    API_URL = `http://${window.location.origin}:5000`
}

export { API_URL };
