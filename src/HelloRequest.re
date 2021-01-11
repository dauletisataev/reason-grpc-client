type t;

[@bs.new] [@bs.module "./proto/helloworld_pb.js"] external make: unit => t = "HelloRequest";
[@bs.send] external setName: t => string => unit = "setName";
