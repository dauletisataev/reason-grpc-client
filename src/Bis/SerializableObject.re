open Echo.Buhta;

[@bs.deriving abstract]
type payload = {
  serializeBinary: unit => string,
};
let make: EchoRequest.t => payload = request => payload(~serializeBinary=() => request |> EchoRequest.to_proto |> Ocamlprotocplugin.Writer.contents);