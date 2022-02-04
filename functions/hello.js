exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SPU',
      age: 26,
      email: 'sweet-pumpkin22@naver.com'

    })
  }
}