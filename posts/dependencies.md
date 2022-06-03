---
title: "Let's Talk Dependencies"
date: ""
---

My current role is focused on improving the (web) performance of [Confluence at Atlassian](https://www.atlassian.com/software/confluence). 
One of the most obvious ways to improve performance is to reduce the amount of JavaScript code we're sending down to the client;
and, one of the largest offenders of excess JavaScript is 3rd party dependencies.
Let's talk about how we can tackle optimizing our dependencies.

---

Familiar with dependencies? Feel free to skip to the practical sections, starting with [Auditing project dependencies](#user-content-auditing-dependencies)

---

# What is a dependency?

Starting with the basics, a dependency is a reusable bundle of code that does something. 
This means dependents don't have to write the code themselves to do that aforementioned something.
For a myriad of reasons (development speed, domain knowledge, robustness, or just plain laziness), we as developers end up pulling in lots of dependencies.
Complexity with your dependency tree creeps in when your dependencies have dependencies. These nested dependencies are called transitive dependencies.

# Declarations and versioning

Dependencies are declared in the `package.json` file. 
This is also where we define what range of versions are acceptable.

## Version declarations

Setting a static version (also called "pinning"), say `1.0.0`, mean's we only allow exactly that version (e.g. `1.0.0`).
In most cases, however, that is unnecessarily strict. Instead, we have three other options. 
We can allow a range of patch / bug fix versions via `1.0`, `1.0.x`, or `~1.0.4`; a range of minor releases via `1`, `1.x`, `^1.0`, or `^1.0.0`; or, any version (major version qualifier) via `*` or `x`.
Check out [About semantic versioning](https://docs.npmjs.com/about-semantic-versioning) for a more in-depth description. It even includes a handy "calculator" to test your qualifiers.

# Lockfiles

We have our dependency that we need, and we defined an acceptable version range; now, we need to resolve the actual version our project will use. 
This is where a [package manager](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#what_exactly_is_a_package_manager) comes in. 
Your favorite package manager (npm, yarn, etc.) will handle resolving the final versions, doing its best to have everyone play nicely in the sandbox, among other things.
Once it resolves everything to the best of its ability, a file is generated with this information. This file is known as a lockfile. 

# Auditing the dependency tree {#auditing-dependencies}

From a performance perspective, we want to reduce the total weight of the dependency tree. 
Strategies to reduce bundle size include removing duplicates, swapping heavy libraries with lighter-weight equivalents, optimizations with compile-time transformers, and taking advantage of browser native functionality.

## Duplicate dependencies

Due to the nature of version range declarations, we can run into conflicts with our transitive dependencies. 

Consider this trivial example:
```
- project
  |
  |--dependencyA@~1.5.0
  |
  |--dependencyB@...
     |
     |--dependencyA@1.4.0
```
This will introduce a duplicate of `dependencyA` at version `1.5.x` and `1.4.0`

Yarn, specifically, has some nifty tools to allow us to check for and address these conflicts. 
In Yarn v1, you can use [Atlassian's yarn-deduplicate](https://github.com/atlassian/yarn-deduplicate). `yarn-deduplicate --list yarn.lock` will show all duplicates, and `yarn-deduplicate yarn.lock` will attempt to fix them.
Yarn v2 [supports deduplication natively](https://yarnpkg.com/cli/dedupe). `yarn dedupe --check` will show all duplicates, and `yarn dedupe` will attempt to fix them.

If you're using NPM, you might consider trying something like the [find-duplicate-dependencies](https://github.com/vovacodes/find-duplicate-dependencies) package to find duplicates, and [https://docs.npmjs.com/cli/v8/commands/npm-dedupe](to de-dupe) them.

All that said, you can, of course, inspect your lockfile manually and look for duplicate entries. 

## Addressing bloat

- Upgrade dependencies to align versions
- Add `resolutions` to force dependency resolution
- Swap heavy libraries for lighter-weight libraries
- Check the size via [bundlephobia](https://bundlephobia.com/)
- Webpack bundle analyzer

# Best practices when creating a library 

Do you currently maintain a library, or are you thinking of creating one? Here are some things to consider in order to help your fellow developers:

- Use || in versions to allow better auto-resolutions in host projects (where possible)
- Architect your code to be tree-shakable (allow cherry-picking imports // it is much easier to use a transformer plugin to fix imports with cherry-pick syntax)