export async function onRequest(context){
    const {
        request,
        env,
        params,
    } = context;
    
    const msg = {"req": request, "env": env, "params": params, "test": true}

    return new Response(JSON.stringify(msg));
}