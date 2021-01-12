type t;

[@bs.new][@bs.module "../proto/echo_grpc_web_pb.js"] external make: string => t = "EchoServiceClient";

[@bs.send] external echo: t => 'a => 'b => 'c => 'd = "echo";