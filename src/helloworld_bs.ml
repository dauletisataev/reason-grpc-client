[@@@ocaml.warning "-27-30-39"]

type hello_request_mutable = {
  mutable name : string;
}

let default_hello_request_mutable () : hello_request_mutable = {
  name = "";
}

type hello_reply_mutable = {
  mutable message : string;
}

let default_hello_reply_mutable () : hello_reply_mutable = {
  message = "";
}


let rec decode_hello_request json =
  let v = default_hello_request_mutable () in
  let keys = Js.Dict.keys json in
  let last_key_index = Array.length keys - 1 in
  for i = 0 to last_key_index do
    match Array.unsafe_get keys i with
    | "name" -> 
      let json = Js.Dict.unsafeGet json "name" in
      v.name <- Pbrt_bs.string json "hello_request" "name"
    
    | _ -> () (*Unknown fields are ignored*)
  done;
  ({
    Helloworld_types.name = v.name;
  } : Helloworld_types.hello_request)

let rec decode_hello_reply json =
  let v = default_hello_reply_mutable () in
  let keys = Js.Dict.keys json in
  let last_key_index = Array.length keys - 1 in
  for i = 0 to last_key_index do
    match Array.unsafe_get keys i with
    | "message" -> 
      let json = Js.Dict.unsafeGet json "message" in
      v.message <- Pbrt_bs.string json "hello_reply" "message"
    
    | _ -> () (*Unknown fields are ignored*)
  done;
  ({
    Helloworld_types.message = v.message;
  } : Helloworld_types.hello_reply)

let rec encode_hello_request (v:Helloworld_types.hello_request) = 
  let json = Js.Dict.empty () in
  Js.Dict.set json "name" (Js.Json.string v.Helloworld_types.name);
  json

let rec encode_hello_reply (v:Helloworld_types.hello_reply) = 
  let json = Js.Dict.empty () in
  Js.Dict.set json "message" (Js.Json.string v.Helloworld_types.message);
  json
