import axios from 'axios'

const apiKey = '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'

const callOpenAI = async (prompt: string) => {

  const client = axios.create({
    headers: {
      Authorization: "Bearer" + apiKey,
    },
    params: {
         "model": "text-davinci-003",
         "prompt": prompt,
         "max_tokens": 7,
         "temperature": 0,
         "top_p": 1,
         "n": 1,
         "stream": false,
         "logprobs": null,
         "stop": "\n"
       }
  })
  

  const response = await client.post('https://api.openai.com/v1/completions')
  return response
};

export default callOpenAI;
  

