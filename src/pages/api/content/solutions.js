export default async function getContent(req, res) {
  const output = {
    content: [],
  };
  return res.status(200).json(output);
}
