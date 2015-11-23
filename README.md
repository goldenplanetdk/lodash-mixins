## OBB AngularJS modules

Collection of general-purpose in-house [lodash](http://lodash.com) mixins for OpenBizBox apps.

The modules use **ES6** and must be required with **webpack**. 
Components are included with a glob pattern by using `require.context` that is available in webpack only.

### Usage

To include all mixins use:
```
require('lodash-obb');
```
