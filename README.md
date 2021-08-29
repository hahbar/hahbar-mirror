# Hahbar Mirrorball

A web app for finding information on the Hedera Hashgraph network using the [public mirror node](https://docs.hedera.com/guides/docs/mirror-node-api/cryptocurrency-api).

Have an idea for a function? Add it for [discussion](https://github.com/hahbar/mirrorball/discussions) and we'll see if it's possible.

## Available functions

| Function | Purpose |
|----------|---------|
| Rank     | (W.I.P) Calculate the current rank of an account balance |

## Limitations

The public mirror node is currently throttled so it may take time to calculate a function.

No data is stored outside of the browser, although browser local storage is used.

## Building

Latest version is available at [hahbar.github.io/mirrorball](https://hahbar.github.io/mirrorball/) 
or you can build and run locally yourself using git, node and yarn.

``` 
> git clone https://github.com/hahbar/mirrorball.git
Cloning into 'mirrorball'...
...

> cd .\mirrorball
> yarn install
yarn install v1.22.4
...

> yarn build
yarn run v1.22.4
$ react-scripts build
...

> yarn test
yarn run v1.22.4
$ react-scripts test
...

> yarn start
yarn run v1.22.4
$ react-scripts start
...
```
