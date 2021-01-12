open Echo.Buhta;
open Ocamlprotocplugin.Runtime.Runtime';
[@bs.deriving abstract]
type t = {
  serializeBinary: unit => string,
};

// module EchoRequest: Runtime'.Service.Message with type t = string = {
//     type t = string;
// };

let make = (
      proto: Writer.t
    ) => t(~serializeBinary=() => proto |> Ocamlprotocplugin.Writer.contents);
      