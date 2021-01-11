[@@@ocaml.warning "-27-30-39"]


type hello_request = {
  name : string;
}

type hello_reply = {
  message : string;
}

let rec default_hello_request 
  ?name:((name:string) = "")
  () : hello_request  = {
  name;
}

let rec default_hello_reply 
  ?message:((message:string) = "")
  () : hello_reply  = {
  message;
}
