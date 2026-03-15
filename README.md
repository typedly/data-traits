<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@typedly/data-traits - A TypeScript type definitions package for configurable data traits, providing various kinds of configurable data interfaces."
  />
</a>

## @typedly/data-traits

<!-- npm badge -->
[![npm version][package-npm-badge-svg]][package-npm-badge]
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub license][package-badge-license]][package-license]

<!-- GitHub badges -->
[![GitHub issues][package-badge-issues]][package-issues]
[![GitHub forks][package-badge-forks]][package-forks]
[![GitHub stars][package-badge-stars]][package-stars]
[![GitHub license][package-badge-license]][package-license]

<!-- Sponsors -->
[![GitHub Sponsors][github-badge-sponsor]][github-sponsor-link]
[![Patreon Sponsors][patreon-badge]][patreon-link]

A **TypeScript** type definitions package for configurable data traits, providing various kinds of configurable data interfaces.

## Features

- **Adaptable**: Use custom adapters to define how data is stored and retrieved (localStorage, API, memory, etc.)
- **Cacheable**: Built-in caching support with configurable expiration and refresh capabilities
- **Cleanable**: Clear data, and cleanup resources
- **Cloneable**: Create deep, or shallow copies of data instances
- **Collection**: Base collection shape
- **Comparable**: Compare data instances for equality and ordering
- **Compressible**: Compress and decompress data
- **Configurable**: Flexible configuration system for customizing data behavior and constraints
- **Encryptable**: Encrypt and decrypt sensitive data with built-in security support
- **Exportable**: Export data to multiple formats (JSON, XML, CSV, etc.)
- **Freezable**: Control immutability by freezing and unfreezing data instances
- **Identifiable**: Identify data object by tag or `ID`
- **Indexable**: Access and manage data elements by numeric or key-based indices
- **Measurable**: Track data size, memory usage, and performance metrics
- **Mergeable**: Merge data from multiple sources with customizable merge strategies
- **Observable**: Subscribe to data changes with reactive programming support
- **Paginated**: Navigate large datasets with page-based chunking and iteration
- **Persistable**: Persist data to storage automatically with **save**/**load** capabilities
- **Printable**: Format and output data in human-readable formats for display or debugging
- **Queryable**: Query and filter complex data structures with predicate functions
- **Resettable**: Reset data to initial state and track modifications
- **Revertible**: Undo changes and revert to previous states with rollback support
- **Serializable**: Serialize and deserialize data values with async support
- **Timestamped**: Automatic tracking of creation, modification, and access times
- **Transformable**: Transform values with `map` and `flatMap` operations
- **Traversable**: Adds required iterable iterator, and optional async iterable iterator
- **Validatable**: Comprehensive validation system with custom validators and error reporting
- **Versionable**: Version control with history tracking, snapshots, and rollback support

## Table of contents

- [Related packages](#related-packages)
- [Installation](#installation)
- [Api](#api)
  - Interface
    - [`Adaptable`](#adaptable)
    - [`Cacheable`](#cacheable)
    - [`Cleanable`](#cleanable)
    - [`Cloneable`](#cloneable)
    - [`Collection`](#collection)
    - [`Comparable`](#comparable)
    - [`Compressible`](#compressible)
    - [`Configurable`](#configurable)
    - [`Encryptable`](#encryptable)
    - [`Exportable`](#exportable)
    - [`Freezable`](#freezable)
    - [`Identifiable`](#identifiable)
    - [`Indexable`](#indexable)
    - [`Measurable`](#measurable)
    - [`Mergeable`](#mergeable)
    - [`Observable`](#observable)
    - [`Paginated`](#paginated)
    - [`Persistable`](#persistable)
    - [`Printable`](#printable)
    - [`Queryable`](#queryable)
    - [`Resettable`](#resettable)
    - [`Revertible`](#revertible)
    - [`Serializable`](#serializable)
    - [`Timestamped`](#timestamped)
    - [`Transformable`](#transformable)
    - [`Traversable`](#traversable)
    - [`Validatable`](#validatable)
    - [`Versionable`](#versionable)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)
- [Packages](#packages)

## Related packages

- **[@typedly/adaptable-data](https://github.com/typedly/adaptable-data)**: A **TypeScript** type definitions for data adapter.
- **[@typedly/collection](https://github.com/typedly/collection)**: A **TypeScript** type definitions package for data collections with customizable storage.
- **[@typedly/configurable-data](https://github.com/typedly/configurable-data)**: A **TypeScript** type definitions for configurable data.
- **[@typedly/data-adapter](https://github.com/typedly/data-adapter)**: A **TypeScript** type definitions for data adapter.
- **[@typedly/data](https://github.com/typedly/data)**: A **TypeScript** type definitions for [`@typescript-package/data`](https://github.com/typedly/data).
- **[@typescript-package/data](https://github.com/typescript-package/data)**: A lightweight **TypeScript** library for basic data management.
- **[@typescript-package/collection](https://github.com/typescript-package/collection)**: A lightweight **TypeScript** library for data collection.

## Installation

```bash
npm install @typedly/data-traits --save-peer
```

## Api

```typescript
import {
  // Interface.
  Adaptable,
  Cacheable,
  Collection,
  Comparable,
  Compressible,
  Configurable,
  Encryptable,
  Exportable,
  Freezable,
  Identifiable,
  Indexable,
  Measurable,
  Mergeable,
  Observable,
  Paginated,
  Persistable,
  Printable,
  Queryable,
  Resettable,
  Revertible,
  Serializable,
  Timestamped,
  Transformable,
  Traversable,
  Validatable,
  Versionable,
} from '@typedly/data-traits';
```

### Interface

### `Adaptable`

The interface for adaptable data types, which can optionally use a data adapter to manage their value and behavior.

```typescript
import { Adaptable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/adaptable.trait.ts)

### `Cacheable`

The interface for cacheable data types, which can be cached with an optional expiration time and invalidated or refreshed as needed.

```typescript
import { Cacheable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/cacheable.trait.ts)

### `Cleanable`

Capability for objects that can be cleaned or cleared.

```typescript
import { Cleanable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/cleanable.trait.ts)

### `Cloneable`

Capability for objects that can be cloned.

```typescript
import { Cloneable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/cloneable.trait.ts)

### `Collection`

Comparable interface for data types that can be compared.

```typescript
import { Collection } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/collection.trait.ts)

### `Comparable`

Comparable interface for data types that can be compared.

```typescript
import { Comparable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/comparable.trait.ts)

### `Compressible`

Interface for data types that can be compressed and decompressed, allowing for efficient storage and transmission of data.

```typescript
import { Compressible } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/compressible.trait.ts)

### `Configurable`

The interface for configurable data types, which can optionally have a configuration object.

```typescript
import { Configurable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/configurable.trait.ts)

### `Encryptable`

Interface for data types that can be encrypted and decrypted.

```typescript
import { Encryptable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/encryptable.trait.ts)

### `Exportable`

The interface for exportable data types, which can be exported to various formats.

```typescript
import { Exportable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/exportable.trait.ts)

### `Freezable`

The interface for freezable data types, which can be frozen to prevent modifications and optionally unfrozen.

```typescript
import { Freezable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/freezable.trait.ts)

### `Identifiable`

Trait for objects that have an ID or unique identifier.x

```typescript
import { Identifiable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/identifiable.trait.ts)

### `Indexable`

Trait for objects that support indexing or retrieving by `numeric` or `string` index.

```typescript
import { Indexable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/indexable.trait.ts)

### `Measurable`

Interface for data types that can be measured in terms of size and memory usage, allowing for efficient management of resources and optimization of performance.

```typescript
import { Measurable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/measurable.trait.ts)

### `Mergeable`

The interface for mergeable data types, which can be combined with other instances of the same type using a defined strategy.

```typescript
import { Mergeable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/mergeable.trait.ts)

### `Observable`

The interface for observable data types, which allow subscribers to be notified of changes to their value.

```typescript
import { Observable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/observable.trait.ts)

### `Paginated`

Trait for objects that support pagination.

```typescript
import { Paginated } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/paginated.trait.ts)

### `Persistable`

Trait for objects that can be persisted and restored.

```typescript
import { Persistable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/persistable.trait.ts)

### `Printable`

Trait for objects that can be printed as a `string` or in a formatted way.

```typescript
import { Printable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/printable.trait.ts)

### `Queryable`

Interfaces for data types that can be queried using a defined query format, allowing for flexible and efficient retrieval of information based on specific criteria.

```typescript
import { Queryable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/queryable.trait.ts)

### `Resettable`

Interface for data types that can be reset to an initial value and track if they have been modified (dirty state).

```typescript
import { Resettable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/resettable.trait.ts)

### `Revertible`

Trait for objects that can revert or undo changes.

```typescript
import { Revertible } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/revertible.trait.ts)

### `Serializable`

Serializable interface for data types that can be serialized and deserialized.

```typescript
import { Serializable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/serializable.trait.ts)

### `Timestamped`

Interface representing timestamped data.

```typescript
import { Timestamped } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/timestamped.trait.ts)

### `Transformable`

Transformable interface for data types that can be transformed.

```typescript
import { Transformable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/transformable.trait.ts)

### `Traversable`

Capability for objects that can be traversed/iterated.

```typescript
import { Traversable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/traversable.trait.ts)

### `Validatable`

Interface for data types that can be validated with custom rules and track validation errors.

```typescript
import { Validatable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/validatable.trait.ts)

### `Versionable`

The interface for versionable data types, which maintain a history of changes and can revert to previous versions.

```typescript
import { Versionable } from '@typedly/data-traits';
```

[Source](https://github.com/typedly/data-traits/blob/main/src/lib/versionable.trait.ts)

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [4Fund](https://4fund.com/bruubs)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [Ko-fi](https://ko-fi.com/sterblack)
- [OpenCollective](https://opencollective.com/sterblack)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)
- [PayPal](https://paypal.me/sterblack)
- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- ~~[Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)~~

or via Trust Wallet

- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][package-license])

## Packages

- **[@typedly/array](https://github.com/typedly/array)**: A **TypeScript** type definitions package to handle array-related operations.
- **[@typedly/callback](https://github.com/typedly/callback)**: A **TypeScript** type definitions package for asynchronous and synchronous callback functions of various types.
- **[@typedly/character](https://github.com/typedly/character)**: A **TypeScript** type definitions package for various character types.
- **[@typedly/context](https://github.com/typedly/context)**: A **TypeScript** type definitions package for context data structures.
- **[@typedly/descriptor](https://github.com/typedly/descriptor)**: A **TypeScript** type definitions package for property descriptor.
- **[@typedly/digit](https://github.com/typedly/digit)**: A **TypeScript** type definitions package for digit types.
- **[@typedly/letter](https://github.com/typedly/letter)**: A **TypeScript** type definitions package for handling letter types.
- **[@typedly/object](https://github.com/typedly/object)**: A **TypeScript** type definitions package to handle object-related operations.
- **[@typedly/payload](https://github.com/typedly/payload)**: A **TypeScript** type definitions package for payload data structures.
- **[@typedly/property](https://github.com/typedly/property)**: A **TypeScript** type definitions package to handle object property-related operations.
- **[@typedly/regexp](https://github.com/typedly/regexp)**: A **TypeScript** type definitions package for `RegExp`.
- **[@typedly/symbol](https://github.com/typedly/symbol)**: A **TypeScript** type definitions package for various symbols.

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dangularpackage%26type%3Dpatrons&style=flat
[patreon-link]: https://www.patreon.com/join/angularpackage/checkout?fan_landing=true&rid=0

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [package-badge-issues]: https://img.shields.io/github/issues/typedly/data-traits
  [package-badge-forks]: https://img.shields.io/github/forks/typedly/data-traits
  [package-badge-stars]: https://img.shields.io/github/stars/typedly/data-traits
  [package-badge-license]: https://img.shields.io/github/license/typedly/data-traits
  <!-- GitHub: badges links -->
  [package-issues]: https://github.com/typedly/data-traits/issues
  [package-forks]: https://github.com/typedly/data-traits/network
  [package-license]: https://github.com/typedly/data-traits/blob/master/LICENSE
  [package-stars]: https://github.com/typedly/data-traits/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [package-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fdata-traits.svg
  [package-npm-badge]: https://badge.fury.io/js/@typedly%2Fdata-traits

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
