export function orderPostArrayByDate(posts: any[]) {
  return posts.sort((post1: any, post2: any) => {
    const post1Date = new Date(post1.frontmatter.date);
    const post2Date = new Date(post2.frontmatter.date);
    return post1Date < post2Date ? 1 : -1;
  });
}