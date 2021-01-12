open Echo.Buhta;

// *** Don't pay attention: just testing
let onRequest = (request) => {
    let (encode, decode) = Ocamlprotocplugin.Service.make_client_functions(EchoService.echo)

    let proto_request = request |> encode |> Ocamlprotocplugin.Writer.contents;

    let proto_reply = {
        let (decode, encode) = Ocamlprotocplugin.Service.make_service_functions(EchoService.echo);
        let request =
            Ocamlprotocplugin.Reader.create(proto_request)
            |> decode;
        let _ = switch request { | Ok(v) => v | Error(e) => failwith (Printf.sprintf("Could not decode request: %s", (Ocamlprotocplugin.Result.show_error(e))))}
        
        let reply = "reply";
        encode(reply)
        |> Ocamlprotocplugin.Writer.contents
    };

    Ocamlprotocplugin.Reader.create(proto_reply) |> decode |> fun
        | Ok(v) => v
        | Error(e) => failwith(Printf.sprintf("Could not reply request: %s", (Ocamlprotocplugin.Result.show_error(e))));
}

let echoRequest = EchoRequest.make(~message="hii", ~name="dake", ());

//let reply = onRequest(echoRequest);0
let callback = [%bs.raw {|
    (err, response) => {
    if (err) {
        console.log(err);
    }
    else
        console.log(response.getMessage());
}
|}];

let echoServiceClient = EchoServiceClient.make("http://localhost:8080");
EchoServiceClient.echo(echoServiceClient, SerializableObject.make(echoRequest |> EchoRequest.to_proto), Js.Nullable.null, callback);
