export default {
  async fetch(request) {
    const url = new URL(request.url)
    const fbclid = url.searchParams.get('fbclid')
    const destino = fbclid
      ? `https://pay.kiwify.com.br/yg2U81S?fbclid=${fbclid}`
      : `https://pay.kiwify.com.br/yg2U81S`
    return Response.redirect(destino, 302)
  }
}
