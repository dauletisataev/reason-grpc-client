(** helloworld.proto BuckleScript Encoding *)


(** {2 Protobuf JSON Encoding} *)

val encode_hello_request : Helloworld_types.hello_request -> Js.Json.t Js.Dict.t
(** [encode_hello_request v dict] encodes [v] int the given JSON [dict] *)

val encode_hello_reply : Helloworld_types.hello_reply -> Js.Json.t Js.Dict.t
(** [encode_hello_reply v dict] encodes [v] int the given JSON [dict] *)


(** {2 BS Decoding} *)

val decode_hello_request : Js.Json.t Js.Dict.t -> Helloworld_types.hello_request
(** [decode_hello_request decoder] decodes a [hello_request] value from [decoder] *)

val decode_hello_reply : Js.Json.t Js.Dict.t -> Helloworld_types.hello_reply
(** [decode_hello_reply decoder] decodes a [hello_reply] value from [decoder] *)
