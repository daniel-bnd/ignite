import axios from "axios";

export const GITHUB_USER = "daniel-bnd";
export const GITHUB_REPO = "ignite";

export const api = axios.create({
  baseURL: `https://api.github.com`,
});
