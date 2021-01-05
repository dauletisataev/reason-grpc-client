#!/bin/sh -e
rm -rf proto
mkdir proto
protoc --ocaml_out=./proto  echo.proto