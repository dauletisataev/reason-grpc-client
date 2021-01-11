// open Helloworld_types;

let client = GreaterService.createClient("http://localhost:8080");

let request = HelloRequest.make();
HelloRequest.setName(request, "asdf");
GreaterService.sayHello(client, request, () => ());