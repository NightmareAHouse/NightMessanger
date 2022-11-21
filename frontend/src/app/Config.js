let API_URL = "http://113.30.189.131:5000/";

if (process.env.NODE_ENV === "production") {
    API_URL = `http://${window.location.origin}:5000`
}

export { API_URL };
