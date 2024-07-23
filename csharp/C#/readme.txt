
apt-get update &&  apt-get install -y dotnet-sdk-8.0
apt-get install -y dotnet-runtime-8.0
apt-get install -y aspnetcore-runtime-8.0

apt-get install -y dotnet-sdk-8.0
apt-get install -y dotnet-runtime-8.0

wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
apt-get update && apt-get install -y dotnet-sdk-8.0

apt install protobuf-compiler

protoc --proto_path=../protos --csharp_out=src --csharp_opt=base_namespace=helloworld helloworld.proto
protoc --proto_path=../protos --csharp_out=./ helloworld.proto
=============================================
# https://grpc.io/blog/grpc-dotnet-build/
dotnet new console -o Server
dotnet new console -o GreeterClient
dotnet new console -o Shared

dotnet new sln --name Greeter
dotnet sln add Server
dotnet sln add Client

cd Server

dotnet add package Grpc
dotnet add package Grpc.Tools
dotnet add package Google.Protobuf


  <ItemGroup>
    <ProjectReference Include="..\Shared\Shared.csproj" />
  </ItemGroup>

dotnet build -v:n

find obj -name '*.cs'