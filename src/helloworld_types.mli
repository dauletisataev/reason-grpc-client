(** helloworld.proto Types *)



(** {2 Types} *)

type hello_request = {
  name : string;
}

type hello_reply = {
  message : string;
}


(** {2 Default values} *)

val default_hello_request : 
  ?name:string ->
  unit ->
  hello_request
(** [default_hello_request ()] is the default value for type [hello_request] *)

val default_hello_reply : 
  ?message:string ->
  unit ->
  hello_reply
(** [default_hello_reply ()] is the default value for type [hello_reply] *)
