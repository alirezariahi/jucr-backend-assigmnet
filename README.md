<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## The Case

- Each service is deployed to a Kubernetes cluster (so we need a docker image)
- As JUCR aims to have the highest possible uptime, each service needs to be
  scalable by design (so think about timeouts and other stuff which could go wrong)
- To serve data to several clients, we use a federated GraphQL gateway (so each
  service needs to provide its /graphql endpoint which serves a sub-graph)
- We use MongoDB as our persistence layer
  - It’s required to use UUIDs (v4) instead of the default ObjectIds internally

## Task

- Create a service which pulls current charging station data from Open Charge Map
  - The service pulls the data and update the own database (when there
- arechanges!)
  API-Key: ff82541f-c8d1-4507-be67-bd07e3259c4e
- This service needs to provide a /graphql endpoint which can be queried to list
  allimported charging stations
- It should be possible to paginate through the list in GraphQL using relay-
  stylepagination
- We need separate docker images for pulling the data and the service itself
- We need the following fields (from Open Charge Map) to be imported:
  - operatorInfo
  - statusType
  - addressInfo
  - connections
- It should be possible to run the whole service and the import locally using a singlecommand (so please provide instructions and a docker-compose file for the additional local infrastructure)
- Bonus: Minimum 50% unit test coverage and minimum one E2E test

## Information

- Document and show your solution well, don’t show only the result, show the way
  you’ve taken to implement your solution
- Create a private repository on GitHub and commit as often as you think it
  makessense
- If you’re unsure about what we really need, make an assumption and
  documentthat assumption
- Try to follow all best practices you know to provide a clean solution

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Alireza Riahi](https://www.linkedin.com/in/alireza-arshia/)
- Twitter - [@alirezariahi](https://twitter.com/arezariahi)
- Medium - [@ali.r.riahi](https://medium.com/@ali.r.riahi)
