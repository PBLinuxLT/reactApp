export async function onRequest(context){
    const {
        request,
        env,
        params,
    } = context;
    
    const msg = "** Hello, World **";

    return new Response(msg);
}