export const createPosts = posts => {
  return posts.map(({title, body, id}) => {
    return `  <li class="post-item">
    <p class="post-title">${title}</p>
    <p class="post-body">${body}</p>
    <p class="post-id">ID: ${id}</p>
  </li>`;
  }).join("");
};
