export default async function handle (req, res) {
  const url = decodeURIComponent(req.url).replace('/api/openweathermap?url=', '')
  const resposta = await fetch(
    `https://api.openweathermap.org/${url}&appid=${process.env.OWM_KEY}`
  ); 
  const json = await resposta.json()
  res.status(resposta.status).json(json)
}