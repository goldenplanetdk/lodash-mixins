## OBB lodash mixins

Collection of general-purpose in-house [lodash](http://lodash.com) mixins for OpenBizBox apps.

The modules use **ES6** and must be required with **webpack**. 
Components are included with a glob pattern by using `require.context` that is available in webpack only.

### Usage

To include all mixins use:
```
require('lodash-obb');
```

### Style guides

- [Lodash coding guideline](https://github.com/lodash/lodash/blob/master/CONTRIBUTING.md#coding-guidelines)

### TODO

- Code coverage with [`istanbul`](https://gotwarlost.github.io/istanbul/)
