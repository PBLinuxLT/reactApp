export async function onRequest(context){
    const {
        request,
        env,
        params,
    } = context;
    console.log({"req": request, "env": env, "params": params})

    return new Response("Hello World!");
}