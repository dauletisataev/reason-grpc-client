type t;

[@bs.new] [@bs.module "./proto/helloworld_grpc_web_pb.js"] external createClient: string => t = "GreeterClient";

[@bs.send] external sayHello: t => HelloRequest.t => ( unit => unit) => unit = "sayHello"