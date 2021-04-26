let api_base = ''
const api_base_object = {
  'develop': 'https://www.betterleo.com:3000',
  'trial': 'https://www.betterleo.com:3000',
  'release':'https://www.betterleo.com:3000'
}

if (typeof __wxConfig == "object") {
  const envVersion = __wxConfig.envVersion
  api_base = api_base_object[envVersion]
}

export default api_base