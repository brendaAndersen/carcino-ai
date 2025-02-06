import axios from 'axios';

export async function handler(req, res) {
  try {
    const response = await axios.post(
      'https://api.dify.ai/v1/chat',
      req.body,
      {
        headers: {
          Authorization: `Bearer `, // adicionar key
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(response.data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
}