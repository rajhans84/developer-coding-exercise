function getData(data) {
  const regex = new RegExp(/(^=+.*?=$)\n(.*)/gms);

  const result = regex.exec(data);
  const meta = result[1];
  const content = result[2];
  const Title = meta.match(/Title:\s*(.*?)\s*(.*)/)[2];
  const Author = meta.match(/Author:\s*(.*?)\s*(.*)/)[2];
  const Slug = meta.match(/Slug:\s*(.*?)\s*(.*)/)[2];

  return {
    title: Title,
    author: Author,
    slug: Slug,
    content: content,
  };
}

module.exports = { getData };
