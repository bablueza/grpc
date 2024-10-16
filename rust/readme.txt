#https://freetale.medium.com/unity-grpc-in-2023-98b739cb115
#sudo xcodebuild -license accept
brew reinstall rustup-init
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sudo sh


cargo run --bin helloworld-server

cargo run  --bin helloworld-web-client