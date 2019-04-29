import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 226d1a0f52747c27f3ab487088379053e2fa3d2478ca7d619683a1e13a0d809f"
  }
});
