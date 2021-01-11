/*let greaterClient = GreaterService.make("http://localhost:8080");

let helloRequest = HelloRequest.make();
HelloRequest.setName(helloRequest, "asdf");
GreaterService.sayHello(greaterClient, helloRequest, () => ());

let echoServiceClient = EchoService.make("http://localhost:8080");

let echoRequest = EchoRequest.make();
EchoRequest.setMessage(echoRequest, "asdf");
EchoService.echo(echoServiceClient, echoRequest);

*/
open Echo.Buhta;

let onRequest = (request) => {
    let (encode, decode) = Ocamlprotocplugin.Service.make_client_functions(EchoService.echo)

    let proto_request = encode(request) |> Ocamlprotocplugin.Writer.contents;

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

let echoRequest = EchoRequest.make(~message="asdfsad", ());

let reply = onRequest(echoRequest);
Js.log2("reply: ", reply);

