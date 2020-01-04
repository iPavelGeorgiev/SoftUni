function solve(obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const uriRegex = /^([A-Za-z0-9.]+)$/gm;                    //проверка на uri...
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const messageRegex = /^[\w+\d+]([^\<\>\\\&\'\"]+)$/gm;

    let validMethod = obj.method && validMethods.includes(obj.method);
    let validUri = obj.uri && (obj.uri.match(uriRegex) || obj.uri === '*');
    let validVersion = obj.version && (validVersions.includes(obj.version));
    let validMessage = obj.message !== undefined ? (obj.message === "" || (obj.message.match(messageRegex))) : false;

    if (!validMethod) {     // проверка дали съществуват пропъртита...
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!validUri) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersion) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!validMessage) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}

console.log(
    solve(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }
    )
);