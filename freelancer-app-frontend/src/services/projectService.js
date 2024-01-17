import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectsApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}
