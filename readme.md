# Chat over another blockchain via IBC
**chat** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).


## Project explaain 
Create 2 difference blockchain (not node) by using cosmos SDK and sending message to another chain via ***IBC***


## Get started
Start chat-chain 1 and chat-chain 2 with
```sh
// blockchain 1
ignite c serve -c config-1.yml -f --home ~/.chat-1 --force-reset

// blockchain 2
ignite c serve -c config-2.yml -f --home ~/.chat-2 --force-reset
```

Setup IBC connecttion
```sh
ibc-setup connect -v
```
Setup Channel 
```sh
ibc-setup channel -v \
--src-connection connection-0 \
--dest-connection connection-0 \
--src-port chat \
--dest-port chat \
--version chat-1
```
Start Relayer
```sh
ibc-relayer start -v
```
Sending Transaction
```sh
chatd tx chat send-message-packet chat channel-0 "this message come from chain 2" cosmos1dwtwpvw764z33jtamaxdajq96l4teet3fjqdrs  --from bob --yes --chain-id chat-2 --home ~/.chat-2 --node tcp://0.0.0.0:36657
```
Query Message
```sh
// query from chain1
chatd q chat list-messages --chain-id chat-1

// query from chain2
chatd q chat list-messages --chain-id chat-2
```

## Example

After run start chain command 
***Chain1 and Chain2***
<td><img width="500" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/a5581fb3-6100-4f13-ae3c-7984b5629327">
<td><img width="470" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/3fc133e6-8176-43ca-8d43-e2f29eb796a2">

After run setup connection script and setup chanel
***RUN setup connection first and then follow with setup chanel***
<td><img width="490" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/c3725557-01c5-497f-9147-2fc4756d56c8">
<td><img width="500" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/392b0678-c3f3-4fe4-ae61-b422e52c753c">

- Start Relayer 
  <img width="706" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/0cf83899-1637-4413-8ed6-665880fd54c4">

- Sending Transaction
  <img width="1076" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/17721288-222c-4854-8778-5b840c9090ef">

- Relayer Display
  <img width="708" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/354ca15a-1bad-4257-9692-adb0bf9f8273">

- Qurey message from chain2 and chain1
  <td><img width="600" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/26662d94-f12a-414b-9fee-b8d56d244d0f">
  <td><img width="600" alt="image" src="https://github.com/supamongkonR/cosmos-chat-chain/assets/73258014/82f87d35-7d0e-4e6b-a277-4cfd981fc3ac">

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite-hq/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/chat@latest! | sudo bash
```
`username/chat` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
