
export default {
  async fetch(request, env, ctx) {
    await env.KV_APP.put("hello", "world");
    const v = await env.KV_APP.get("hello");
    return new Response(v);
  }
};